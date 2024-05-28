import { ClientApi } from './client.api';
import APP_CONFIGS from '../redux/APP_CONFIGS';
import { AppResponse, OnlyUUID } from '../redux/app-redux.types';
import {
  ICreatePriceReqData,
  IPriceListReqData,
  IUpdatePriceReqData,
  PriceEntity,
  PriceListEntity,
} from '../types/price-management/price-management.types';
import { AppQueryParams } from './index';
import { DiscountsApi } from './Discounts.api';

export type GetAllPricesQuery = Pick<
  AppQueryParams,
  'list' | 'listId' | 'offer' | 'offerId' | 'variation' | 'variationId'
>;

export class PriceListsApi {
  private static api = ClientApi.clientRef;
  private static endpoints = APP_CONFIGS.endpoints.priceManagementEndpoints;

  public static create = async (data?: IPriceListReqData): Promise<AppResponse<PriceListEntity>> => {
    return this.api.post(this.endpoints.createList(), data?.data);
  };

  public static update = async (data?: IPriceListReqData): Promise<AppResponse<PriceListEntity>> => {
    return this.api.patch(this.endpoints.updateList(data?._id || ''), data?.data);
  };

  public static getAll = async (query?: AppQueryParams): Promise<AppResponse<PriceListEntity[]>> => {
    return this.api.get(this.endpoints.getAll(), { params: query });
  };

  public static getById = async (list?: OnlyUUID, query?: AppQueryParams): Promise<AppResponse<PriceListEntity>> => {
    return this.api.get(this.endpoints.getById(list?._id || ''), { params: query });
  };
}

export interface GetOnePriceQuery {
  _id?: string;
}
export class PricesApi {
  private static api = ClientApi.clientRef;
  private static endpoints = APP_CONFIGS.endpoints.priceManagementEndpoints;

  public static getOne = async (_?: undefined, params?: GetOnePriceQuery): Promise<AppResponse<PriceEntity>> => {
    return this.api.get(this.endpoints.getOne(), { params });
  };

  public static getAll = async (params?: GetAllPricesQuery): Promise<AppResponse<PriceEntity[]>> => {
    return this.api.get(this.endpoints.getAllPrices(), { params });
  };

  public static create = async (input?: ICreatePriceReqData): Promise<AppResponse<PriceEntity>> => {
    return this.api.post(this.endpoints.createPrice(), input?.data);
  };
  public static updateById = async (input?: IUpdatePriceReqData): Promise<AppResponse<PriceEntity>> => {
    return this.api.patch(this.endpoints.updatePrice(input?._id), input?.data);
  };
}

export class PriceManagementApi {
  public static readonly prices = PricesApi;
  public static readonly priceLists = PriceListsApi;
  public static readonly discounts = DiscountsApi;
}

export default PriceManagementApi;
