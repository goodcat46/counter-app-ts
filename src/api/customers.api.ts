import APP_CONFIGS from '../redux/APP_CONFIGS';
import { AppQueryParams } from './index';
import { AppResponse, OnlyUUID } from '../redux/global.types';
import baseApi from './baseApi';
import { ICustomer, ICustomerReqDta } from '../redux/customers/customers.types';

export default class CustomersApi {
  private static api = baseApi;
  private static endpoints = APP_CONFIGS.endpoints.customers;

  public static create(info?: ICustomerReqDta): Promise<AppResponse<ICustomer>> {
    return this.api.post(this.endpoints.create(), info?.data);
  }
  public static getAllByQueries(params?: AppQueryParams): Promise<AppResponse<ICustomer[]>> {
    return this.api.get(this.endpoints.getAll(), { params });
  }
  public static getById(customer?: OnlyUUID, params?: AppQueryParams): Promise<AppResponse<ICustomer>> {
    return this.api.get(this.endpoints.getById(customer?._id), { params });
  }
}
