import { RootState } from './store.store';
import { useSelector } from 'react-redux';
import { IAuthState } from '../types/auth.types';
import { IFinTransactionsState } from './finances/finances.slice';
import { ICustomRolesState } from './customRoles/customRoles.slice';
import { IUsersState } from './users/users.types';
import { IAppSettings } from './appSettings/appSettings.slice';
import { OffersState } from './products/offers.slice';
import { PricesState } from './priceManagement/priceManagement.slice';
import { ApiDirType } from './APP_CONFIGS';
import { IDirItemBase } from '../types/dir.types';
import { IDirectoriesState } from './directories/directories.slice';
import { IOrdersState } from './orders/orders.slice';
import { IRefundsState } from './refunds/refunds.slice';
import { IWarehouseState } from './warehouses/warehouses.slice';
import { IPermissionsState } from '../types/permissions.types';
import { CustomersState } from './customers/customers.slice';
import { PaymentsState } from './payments/payments.slice';
import { InvoicesState } from './invoices/invoices.slice';
import { ShipmentsState } from './shipments/shipments.slice';
import { IntegrationsState } from './integrations/integrations.slice';
import { DeliveriesState } from './deliveries/deliveries.slice';
import { ICompaniesState } from '../types/companies.types';
import { DiscountsState } from './priceManagement/discounts/discounts.slice';
import { CartState } from './cart/cart.slice';
import { TagsState } from './tags/tags.slice';

export const useAuthSelector = () => useSelector<RootState, IAuthState>((state: RootState) => state.auth);
export const useUsersSelector = () => useSelector<RootState, IUsersState>((state: RootState) => state.users);
export const useAppSettingsSelector = () =>
  useSelector<RootState, IAppSettings>((state: RootState) => state.appSettings);
export const usePaymentsSelector = () => useSelector<RootState, PaymentsState>((state: RootState) => state.payments);
export const useInvoicesSelector = () =>
  useSelector<RootState, InvoicesState>((state: RootState) => state['invoicing']);

export const useIntegrationsSelector = () =>
  useSelector<RootState, IntegrationsState>((state: RootState) => state['integrations']);
export const useShipmentsSelector = () => useSelector<RootState, ShipmentsState>((state: RootState) => state.shipments);
export const useDeliveriesSelector = () =>
  useSelector<RootState, DeliveriesState>((state: RootState) => state.deliveries);
export const useCustomersSelector = () => useSelector<RootState, CustomersState>((state: RootState) => state.customers);
export const useCommunicationSelector = () =>
  useSelector<RootState, CustomersState>((state: RootState) => state['customers']);
export const useAppPageSettingsSelector = () => useSelector((state: RootState) => state.appPage);
export const useTransactionsSelector = (): IFinTransactionsState =>
  useSelector<RootState, IFinTransactionsState>((state: RootState): IFinTransactionsState => state.transactions);

export const useFinancesSelector = (): IFinTransactionsState =>
  useSelector<RootState, IFinTransactionsState>((state: RootState): IFinTransactionsState => state.transactions);

export const useOffersSelector = () =>
  useSelector<RootState, OffersState>((state: RootState): OffersState => state?.['products']);
export const usePropertiesSelector = () =>
  useSelector<RootState, OffersState['properties']>(
    (state: RootState): OffersState['properties'] => state?.['products']?.properties
  );
export const useOrdersSelector = () =>
  useSelector<RootState, IOrdersState>((state: RootState): IOrdersState => state.orders);

export const usePermissionsSelector = () =>
  useSelector<RootState, IPermissionsState>((state: RootState): IPermissionsState => state['permissions']);
export const useCompaniesSelector = () =>
  useSelector<RootState, ICompaniesState>((state: RootState): ICompaniesState => state['companies']);
export const useRefundsSelector = () =>
  useSelector<RootState, IRefundsState>((state: RootState): IRefundsState => state['refunds']);
export const usePriceManagementSelector = () =>
  useSelector<RootState, PricesState>((state: RootState): PricesState => state.priceLists);

export const usePriceDiscountsSelector = () =>
  useSelector<RootState, DiscountsState>((state: RootState): DiscountsState => state?.['discounts']);

export const useWarehousesSelector = () =>
  useSelector<RootState, IWarehouseState>((state: RootState): IWarehouseState => state.warehouses);
export const useCustomRolesSelector = () =>
  useSelector<RootState, ICustomRolesState>((state: RootState) => state.customRoles);

export const useCartSelector = (): CartState =>
  useSelector<RootState, CartState>((state: RootState) => state?.['cart']);

export const useTagsSelector = (): TagsState =>
  useSelector<RootState, TagsState>((state: RootState) => state?.['tags']);

export const useDirectorySelector = <DT extends ApiDirType = any>(
  dirType: DT
): {
  directory: IDirItemBase<DT>[];
  error?: IDirectoriesState['error'];
  isLoading?: IDirectoriesState['isLoading'];
} => {
  const state = useSelector((state: RootState) => state.directories);

  return { directory: state.directories[dirType] };
};
