import { AddressDto, IBase, OnlyUUID } from '../global.types';
import { IOrder } from '../orders/orders.types';
import { IInvoice } from '../invoices/invoices.types';
import { AppQueryParams } from '../../api';
import { IProductDimensions } from '../products/products.types';
import { IDeliveryMethod } from '../integrations/integrations.types';
import { IShipment } from '../shipments/shipments.types';

export enum DeliveryProviderEnum {
  ukrposhta = 'ukrposhta',
  novaposhta = 'novaposhta',
}
enum DeliveryStatusTypeEnum {}

export interface IDelivery extends IBase {
  order?: IOrder;
  ttn?: string;
  shipment?: IShipment;

  declaredValue?: number;
  contentTotalValue?: number;
  destination?: AddressDto;
  dimensions?: IProductDimensions;
  cost?: number;
  method?: IDeliveryMethod;
  invoice?: IInvoice;
}

export interface IDeliveryBaseDto {
  order?: OnlyUUID;
  slots?: string[];
  invoice?: OnlyUUID;

  ttn?: string;

  declaredValue?: number;
  contentTotalValue?: number;
  cost?: number;

  provider?: OnlyUUID;
  method?: OnlyUUID;

  destination?: AddressDto;

  description?: string;
}

// * Method
export interface IDeliveryMethodReqData {
  _id?: string;
  data?: IDeliveryMethod;
  params?: Pick<AppQueryParams, 'disabled' | 'isDefault'>;
}