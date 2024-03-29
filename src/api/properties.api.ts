import APP_CONFIGS from '../redux/APP_CONFIGS';
import { AppResponse } from '../redux/global.types';
import { IProperty, IPropertyReqData } from 'types/properties.types';
import { ClientApi } from './client.api';

export default class PropertiesApi {
  private static api = ClientApi.clientRef;
  private static endpoints = APP_CONFIGS.endpoints.propertiesApiEndpoints;

  public static async getAll({ data }: { data?: IPropertyReqData }): Promise<AppResponse<IProperty[]>> {
    return this.api.get(this.endpoints.getAll(), { params: data?.params });
  }

  public static async create(data?: IPropertyReqData): Promise<AppResponse<IProperty[]>> {
    return this.api.post(this.endpoints.create(), data?.data, { params: data?.params });
  }

  public static async updateById(data?: IPropertyReqData): Promise<AppResponse<IProperty[]>> {
    return this.api.patch(this.endpoints.updateById(data?._id), data?.data, { params: data?.params });
  }

  public static async getById(data?: IPropertyReqData): Promise<AppResponse<IProperty>> {
    return this.api.get(this.endpoints.getById(data?._id), { params: data?.params });
  }

  public static async deleteById(data?: IPropertyReqData): Promise<AppResponse<IProperty[]>> {
    return this.api.delete(this.endpoints.deleteById(data?._id), { params: data?.params });
  }
}
