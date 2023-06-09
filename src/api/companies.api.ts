import baseApi from './baseApi';
import { FilterReturnDataType } from '../components/Filter/AppFilter';
import {
  ICompanyCreatingRes,
  ICompanyDeletingRes,
  ICompanyReqData,
  ICompanyUpdatingRes,
  IGetAllCompaniesRes,
} from '../redux/companies/companies.types';
import APP_CONFIGS from 'redux/APP_CONFIGS';

export default class CompaniesApi {
  private static api = baseApi;
  private static endpoints = APP_CONFIGS.endpoints.companies;

  public static async getAllByOwnerId(
    id: string,
    filterData?: FilterReturnDataType,
    sortOrder?: 'DESC' | 'ASC'
  ): Promise<IGetAllCompaniesRes> {
    return this.api.get(this.endpoints.getAllByOwnerId(id), {
      params: filterData,
    });
  }

  public static async create(data?: ICompanyReqData['data']): Promise<ICompanyCreatingRes> {
    return this.api.post(this.endpoints.create(), data);
  }

  public static async updateById(data?: Required<ICompanyReqData>): Promise<ICompanyUpdatingRes> {
    return this.api.post(this.endpoints.updateById(data?._id), data?.data);
  }

  public static async deleteById(id?: string): Promise<ICompanyDeletingRes> {
    return this.api.post(this.endpoints.deleteById(id));
  }
}
