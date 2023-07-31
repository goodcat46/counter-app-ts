import { RootState } from './store.store';
import { useSelector } from 'react-redux';
import { IAuthState } from './auth/auth.types';
import { ITransactionsState } from './transactions/transactions.slice';
import { ICustomRolesState } from './customRoles/customRoles.slice';
import { IUsersState } from './users/users.types';
import { IAppSettings } from './appSettings/appSettings.slice';
import { IProductsState } from './products/products.slice';
import { IPriceListsState } from './priceManagement/priceManagement.slice';
import { ApiDirType } from './APP_CONFIGS';
import { IBaseDirItem } from '../components/Directories/dir.types';
import { IDirectoriesState } from './directories/directories.slice';
import { IOrdersState } from './orders/orders.slice';
import { useMemo } from 'react';

export const useAuthSelector = () => useSelector<RootState, IAuthState>((state: RootState) => state.auth);
export const useUsersSelector = () => useSelector<RootState, IUsersState>((state: RootState) => state.users);
export const useAppSettingsSelector = () =>
  useSelector<RootState, IAppSettings>((state: RootState) => state.appSettings);
export const useAppPageSettingsSelector = () => useSelector((state: RootState) => state.appPage);
export const useTransactionsSelector = (): ITransactionsState =>
  useSelector<RootState, ITransactionsState>((state: RootState): ITransactionsState => state.transactions);

export const useProductsSelector = () =>
  useSelector<RootState, IProductsState>((state: RootState): IProductsState => state.products);
export const useOrdersSelector = () =>
  useSelector<RootState, IOrdersState>((state: RootState): IOrdersState => state.orders);
export const usePriceListsSelector = () =>
  useSelector<RootState, IPriceListsState>((state: RootState): IPriceListsState => state.priceLists);
export const useCustomRolesSelector = () =>
  useSelector<RootState, ICustomRolesState>((state: RootState) => state.customRoles);
export const useDirectoriesSelector = <T = any, DT extends ApiDirType = any>(dirType: DT) => {
  const state = useSelector((state: RootState) => state.directories);

  return { directory: state.directories[dirType] } as {
    directory: IBaseDirItem<T, typeof dirType>[];
    error: IDirectoriesState['error'];
    isLoading: IDirectoriesState['isLoading'];
  };
};
export const useFindPriceListById = (_id?: string) => {
  const { lists } = usePriceListsSelector();
  return useMemo(() => {
    return lists.find(list => list._id === _id);
  }, [_id, lists]);
};
