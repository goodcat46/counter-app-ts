import { ServiceDispatcherAsync } from '../redux/global.types';
import { ICustomer, ICustomerReqDta } from '../redux/customers/customers.types';
import { useMemo } from 'react';
import { useAppDispatch } from '../redux/store.store';
import { createCustomerThunk, getAllCustomersThunk, updateCustomerThunk } from '../redux/customers/customers.thunks';
import { defaultThunkPayload } from '../utils/fabrics';
import { AppQueryParams } from '../api';

export interface CustomersService {
  create: ServiceDispatcherAsync<ICustomerReqDta, ICustomer>;
  getAll: ServiceDispatcherAsync<{ refresh?: boolean; params: AppQueryParams }, ICustomer[]>;
  update: ServiceDispatcherAsync<{ refresh?: boolean; data: ICustomerReqDta; params?: AppQueryParams }, ICustomer>;
}
const useCustomersService = () => {
  const dispatch = useAppDispatch();
  return useMemo((): CustomersService => {
    return {
      create: args => dispatch(createCustomerThunk(defaultThunkPayload(args))),
      getAll: args => dispatch(getAllCustomersThunk(defaultThunkPayload(args))),
      update: args => dispatch(updateCustomerThunk(defaultThunkPayload(args))),
    };
  }, [dispatch]);
};
export default useCustomersService;
