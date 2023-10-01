import { IBase, OnlyUUID } from '../global.types';
import { ICompany } from '../companies/companies.types';
import { IProductInventory } from '../warehouses/warehouses.types';
import { IPriceListItem } from '../priceManagement/priceManagement.types';
import { AppQueryParams } from '../../api';
import { IProduct } from './products.types';
import { IPropertyValue } from './properties.types';
import { IUser } from '../auth/auth.types';

export interface IVariation extends IBase {
  owner?: ICompany;
  author?: IUser;
  editor?: IUser;

  label?: string;
  sku?: string;
  barCode?: string;

  product?: IProduct;
  price?: IPriceListItem;
  inventories?: IProductInventory[];

  properties?: IPropertyValue[];

  timeFrom?: string | number | Date;
  timeTo?: string | number | Date;
}

export interface IVariationTableData extends IVariation {
  propertiesMap: VariationPropertiesMapInTableData;
}

export type VariationPropertiesMapInTableData = Record<string, IPropertyValue>;
export type VariationPropertiesMapInFormData = Record<string, string>;
export interface IVariationFormData {
  sku?: string;
  label?: string;
  barCode?: string;

  propertiesMap: VariationPropertiesMapInFormData;
  product?: OnlyUUID & { label?: string };

  timeFrom?: string | number | Date;
  timeTo?: string | number | Date;
}

export interface VariationDto {
  sku?: string;
  label?: string;
  barCode?: string;

  properties?: string[];
  product?: OnlyUUID;

  timeFrom?: string | number | Date;
  timeTo?: string | number | Date;
}

export interface IVariationReqData {
  _id?: string;
  data: VariationDto;
  params?: AppQueryParams;
}
