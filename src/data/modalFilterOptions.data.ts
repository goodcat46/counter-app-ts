import { enumToFilterOptions } from '../utils/fabrics';
import { CategoryTrTypeEnum } from '../redux/directories/directories.types';
import { CountsTypesEnum } from '../redux/directories/counts.types';
import { ProductTypeEnum } from '../redux/products/products.types';
import { ContractorsTypesEnum } from '../redux/directories/contractors.types';

export const categoriesFilterOptions = enumToFilterOptions(CategoryTrTypeEnum);
export const countsFilterOptions = enumToFilterOptions(CountsTypesEnum);
export const productsFilterOptions = enumToFilterOptions(ProductTypeEnum);
export const tagsFilterOptions = enumToFilterOptions(ContractorsTypesEnum);
export const counterpartyFilterOptions = enumToFilterOptions(ContractorsTypesEnum);