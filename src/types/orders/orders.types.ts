import { AppResponse } from '../../redux/global.types';
import { AmountAndPercentage } from '../price-management/price-management.types';
import { ICustomerBase } from '../customers.types';
import { AppQueryParams } from '../../api';
import { ICommunicationMethod } from '../integrations.types';
import {
  HasCurrencyCode,
  HasEmbeddedReference,
  HasEmbeddedReferences,
  HasExecuteDate,
  HasExpireDate,
  HasManager,
  HasOwnerAsCompany,
  HasStatus,
  HasSummary,
  IBase,
  MaybeNull,
} from '../utils.types';
import { IInvoice } from '../invoices.types';
import { IDelivery } from '../deliveries.types';
import { IPayment } from '../payments.types';
import { ICreateOrderInfoDto } from './createOrderInfo.dto';
import { ICreateOrderInfoFormState } from './createOrderInfoFormState.type';
import { PriceDiscountType } from 'types/price-management/discounts';
import { IOrderSlotDto, IOrderTempSlot, OrderSlotEntity } from './order-slot.types';

export * from './createOrderInfo.dto';
export * from './createOrderInfoFormState.type';

export enum OrderTypeEnum {
  Order = 'Order',
  Group = 'Group',
}

export interface HasOrdersGroup {
  group?: MaybeNull<IOrdersGroup>;
}

export interface HasOrder {
  order?: MaybeNull<OrderEntity>;
}

export enum OrderStatusEnum {
  new = 'order_new',
  inWork = 'order_inWork',
  rejectedByCustomer = 'order_rejectedByCustomer',
  rejectedByManager = 'order_rejectedByManager',
  active = 'order_active',
  fulfilled = 'order_fulfilled',
  fulfilledWithRefund = 'order_fulfilledWithRefund',
  archived = 'order_archived',
  expired = 'order_expired',
}

// export type OrderStatus = 'rejected' | 'approved' | 'pending' | 'error' | 'success' | 'warning' | 'info';

export interface IOrdersGroup extends Omit<OrderEntity, 'group'> {
  orders?: MaybeNull<OrderEntity[]>;
  strategy?: MaybeNull<string>;
}
export type OrderSummaryType = HasCurrencyCode & {
  brutto: number;
  netto: number;
  hold: number;
  received: number;
  slotsCount: number;
  [PriceDiscountType.bonus]?: string | number;
  [PriceDiscountType.discount]?: string | number;
  [PriceDiscountType.cashback]?: string | number;
};
export interface OrderEntity
  extends IBase,
    HasOwnerAsCompany,
    HasManager,
    HasExpireDate,
    HasEmbeddedReference,
    HasExecuteDate,
    HasStatus<OrderStatusEnum>,
    HasSummary<OrderSummaryType>,
    HasEmbeddedReferences<string, string> {
  group?: MaybeNull<IOrdersGroup>;

  number?: MaybeNull<number>;

  receiver?: MaybeNull<ICustomerBase>;
  customer?: MaybeNull<ICustomerBase>;

  barCode?: MaybeNull<string>;
  code?: MaybeNull<string>;

  communication?: {
    customer?: MaybeNull<ICommunicationMethod>;
    receiver?: MaybeNull<ICommunicationMethod>;
  };

  slots?: OrderSlotEntity[];
  invoices?: IInvoice[];
  payments?: IPayment[];
  deliveries?: IDelivery[];
}

export interface ICreateOrdersGroupFormState {
  slots: IOrderTempSlot[];
  info?: ICreateOrderInfoFormState;

  orders: OrderEntity[];
}

export interface IAllOrdersRes extends AppResponse<OrderEntity[]> {}

export interface IOrderRes extends AppResponse<OrderEntity> {}

export interface IOrderReqData {
  _id?: string;
  data: ICreateOrderInfoDto;
  params?: AppQueryParams;
}

export interface ICreateOrdersGroupDto {
  slots?: IOrderSlotDto[];
  info?: ICreateOrderInfoDto;
}

export interface ICreateOrdersWithSlotsAndGroupByWarehousesReqData {
  data: ICreateOrdersGroupDto;
  params?: AppQueryParams;
}

export interface OrderSummary extends HasCurrencyCode {
  discount?: AmountAndPercentage;

  cashback?: AmountAndPercentage;

  bonus?: AmountAndPercentage;

  ordersAmount?: string;

  ordersCount?: number;
  offersCount?: number;
  slotsCount?: number;

  forPay?: string;

  deliveriesCount?: number;
  deliveryPrice?: number | string;
}

export interface FormOrderSummaryData extends OrderSummary {}
