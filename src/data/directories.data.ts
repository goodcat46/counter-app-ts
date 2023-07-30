import { DirProjectsProps } from 'components/Directories/DirProjects';
import { iconId } from '../img/sprite';
import { contractorsColumns, contractorsSearchParams } from './contractors.data';
import {
  CategoryFilterOpt,
  CountFilterOpt,
  DirActivitiesProps,
  DirBaseProps,
  DirCategoriesProps,
  DirCountsProps,
  DirMarksProps,
  DirProductCategoriesProps,
} from '../components/Directories/dir.types';
import t from '../lang';
import DirTreeComp from '../components/Directories/DirTreeComp';
import { ApiDirType } from '../redux/APP_CONFIGS';
import FormCreateCount from '../components/Forms/FormCreateCount';
import { toast } from 'react-toastify';
import DirTableComp, { DirTableCompProps } from '../components/Directories/DirTableComp';
import FormCreateContractor from '../components/Forms/FormCreateContractor';
import { createDataForReq } from '../utils/dataTransform';
import { StorageItemFilterOption, StorageItemTypeEnum } from '../redux/products/products.types';
import FormCreateDirTreeComp from '../components/Forms/FormCreateDirTreeComp';
import { enumToArray } from '../utils';
import { ContractorsTypesEnum } from '../redux/contractors/contractors.types';
import { FilterOpt } from '../components/ModalForm/ModalFilter';
import { CategoryTrTypeEnum } from '../redux/directories/directories.types';
import { CountsTypesEnum } from '../redux/directories/counts.types';

export const tagsFilterOptions: FilterOpt<ContractorsTypesEnum>[] = enumToArray(ContractorsTypesEnum).map(type => ({
  label: type,
  value: type,
}));
export const categoriesFilterOptions: CategoryFilterOpt[] = enumToArray(CategoryTrTypeEnum).map(type => ({
  label: t(type),
  value: type,
}));

export const countsFilterOptions: CountFilterOpt[] = enumToArray(CountsTypesEnum).map(type => ({
  label: t(type),
  value: type,
}));
export const ProductTypeFilterOptions: StorageItemFilterOption[] = enumToArray(StorageItemTypeEnum).map(type => ({
  label: type,
  value: type,
}));

export interface IDirectory<P extends DirBaseProps = any> {
  title: string;
  iconId: string;
  ModalChildren: React.FC<P>;
  modalChildrenProps: P;
  disabled: boolean;
}

const CountsProps: DirCountsProps = {
  title: t('counts'),
  filterOptions: countsFilterOptions,
  fillHeight: true,
  createParentTitle: t('createParentCount'),
  dirType: ApiDirType.COUNTS,
  filterSearchPath: 'type',
  filterDefaultValue: 'ACTIVE',
  actionsCreator: ({ modalService, dirService, type, dirType, findById }) => {
    return {
      onCreateParent: () => {
        const modal = modalService.handleOpenModal({
          ModalChildren: FormCreateCount,
          modalChildrenProps: {
            title: t('createParentCount'),
            type,
            onSubmit: (data, o) => {
              console.log('afterSubmit options', o);
              dirService.create({
                data: { dirType, data },
                onSuccess: rd => {
                  o?.closeAfterSave && modal?.onClose();
                  toast.success(`Created item: ${data.label}`);
                },
              });
            },
          },
        });
      },
      onCreateChild: parentId => {
        const modal = modalService.handleOpenModal({
          ModalChildren: FormCreateCount,
          modalChildrenProps: {
            title: t('createParentCount'),
            type,
            parent: { _id: parentId },
            onSubmit: (data, o) => {
              dirService.create({
                data: { dirType, data },
                onSuccess: rd => {
                  o?.closeAfterSave && modal?.onClose();
                  toast.success(`Created item: ${data.label}`);
                },
              });
            },
          },
        });
      },
    };
  },
};

const countsDir: IDirectory<DirCountsProps> = {
  title: CountsProps.title,
  iconId: iconId.wallet,
  ModalChildren: DirTreeComp,
  modalChildrenProps: CountsProps,
  disabled: false,
};

const CategoriesProps: DirCategoriesProps = {
  title: 'Статті доходів/витрат',
  filterOptions: categoriesFilterOptions,
  fillHeight: true,
  createParentTitle: t('createParentCategory'),
  dirType: ApiDirType.CATEGORIES_TR,
  filterSearchPath: 'type',
  filterDefaultValue: 'INCOME',
  actionsCreator: ({ modalService, dirService, type, dirType, findById }) => {
    return {
      onCreateParent: async () => {
        const modal = modalService.handleOpenModal({
          ModalChildren: FormCreateDirTreeComp,
          modalChildrenProps: {
            title: t('createDirParentItem'),
            type,
            dirType,
            onSubmit: (data, o) => {
              console.log('createDirParentItem options', o);
              dirService.create({
                data: { dirType, data },
                onSuccess: rd => {
                  o?.closeAfterSave && modal?.onClose();
                  toast.success(`Created: ${data.label}`);
                },
              });
            },
          },
        });
      },
      onCreateChild: async (parentId, parent) => {
        const modal = modalService.handleOpenModal({
          ModalChildren: FormCreateDirTreeComp,
          modalChildrenProps: {
            title: t('createDirParentItem'),
            type,
            parent,
            dirType,
            onSubmit: (data, o) => {
              dirService.create({
                data: { dirType, data },
                onSuccess: rd => {
                  o?.closeAfterSave && modal?.onClose();
                  toast.success(`Created: ${data.label}`);
                },
              });
            },
          },
        });
      },
      onUpdateItem: async (_id, o) => {
        const dataForUpdate = findById ? findById(_id) : undefined;
        if (!dataForUpdate) return;
        const modal = modalService.handleOpenModal({
          ModalChildren: FormCreateDirTreeComp,
          modalChildrenProps: {
            title: t('createChildCategory'),
            type,
            dirType,
            data: dataForUpdate,
            onSubmit: (data, o) => {
              dirService?.update({
                data: { dirType, _id, data },
                onSuccess: rd => {
                  o?.closeAfterSave && modal?.onClose();
                  toast.success(`Created: ${data.label}`);
                },
              });
            },
          },
        });
      },

      onChangeArchiveStatus: dirService?.changeArchiveStatus
        ? async (id, status, o) => {
            const dataForUpdate = findById ? findById(id) : undefined;
            if (!dataForUpdate) return;
            dirService?.changeArchiveStatus({
              data: { dirType, data: { isArchived: status } },
              onSuccess: (rd: any) => {
                toast.success(`${dataForUpdate.label} => ${status ? 'archived' : 'unarchived'}`);
              },
            });
          }
        : undefined,
    };
  },
};
const trCategoriesDir: IDirectory<DirCategoriesProps> = {
  title: CategoriesProps.title,
  iconId: iconId.folder,
  ModalChildren: DirTreeComp,
  modalChildrenProps: CategoriesProps,
  disabled: false,
};
const ProductCategoriesProps: DirProductCategoriesProps = {
  title: t('productCategories'),
  fillHeight: true,
  createParentTitle: t('createParentCategory'),
  dirType: ApiDirType.CATEGORIES_PROD,
  actionsCreator: CategoriesProps.actionsCreator as any,
  filterOptions: ProductTypeFilterOptions,
  filterSearchPath: 'type',
  filterDefaultValue: 'GOODS',
  availableLevels: 2,
};
const prodCategoriesDir: IDirectory<DirProductCategoriesProps> = {
  title: ProductCategoriesProps.title,
  iconId: iconId.folder,
  ModalChildren: DirTreeComp,
  modalChildrenProps: ProductCategoriesProps,
  disabled: false,
};

const ContractorsProps: DirTableCompProps<ApiDirType.CONTRACTORS> = {
  title: t('contractors'),
  fillHeight: true,
  dirType: ApiDirType.CONTRACTORS,
  getTableSettings: ({ dirService, modalService, type, dirType }) => ({
    tableTitles: contractorsColumns,
    tableSearchParams: contractorsSearchParams,
    actionsCreator: p => [
      {
        icon: 'edit',
      },
      { icon: 'copy' },
      { icon: 'archive', iconSize: '100%' },
      { separator: true },
      {
        type: 'onlyIconFilled',
        icon: 'plus',
        onClick: async () => {
          const modal = modalService.handleOpenModal({
            ModalChildren: FormCreateContractor,
            modalChildrenProps: {
              title: t('createContractor'),
              fillHeight: true,
              onSubmit: async data => {
                dirService.create({
                  data: { dirType, data: createDataForReq(data) },
                  onSuccess: rd => {
                    console.log(t('createContractor'), rd);
                    toast.success(`Created: ${data.label || data.name}`);
                    modal?.onClose();
                  },
                  onError: e => {},
                });
              },
            },
          });
        },
      },
    ],
  }),
};
const contractorsDir: IDirectory<DirTableCompProps> = {
  title: ContractorsProps.title,
  iconId: iconId.partners,
  ModalChildren: DirTableComp,
  modalChildrenProps: ContractorsProps,
  disabled: false,
};
const ProjectsProps: DirProjectsProps = {
  title: t('projects'),
  dirType: ApiDirType.PROJECTS,
  fillWidth: true,
  fillHeight: true,
  getTableSettings: ContractorsProps.getTableSettings,
};
const projectsDir: IDirectory<DirProjectsProps> = {
  title: ProjectsProps.title,
  iconId: iconId.assignment,
  ModalChildren: DirTableComp,
  modalChildrenProps: ProjectsProps,
  disabled: false,
};
const MarksProps: DirMarksProps = {
  title: t('marks'),
  dirType: ApiDirType.MARKS,
  availableLevels: 1,
  createParentTitle: t('createDirParentItem'),
  actionsCreator: CategoriesProps.actionsCreator as any,
};
const marksDir: IDirectory<DirMarksProps> = {
  title: MarksProps.title,
  iconId: iconId.bookMarkAdd,
  ModalChildren: DirTreeComp,
  modalChildrenProps: MarksProps,
  disabled: false,
};
const activitiesProps: DirActivitiesProps = {
  title: t('activityTypes'),
  createParentTitle: t('createDirParentItem'),
  dirType: ApiDirType.ACTIVITIES,
  fillHeight: true,
  availableLevels: 2,
  actionsCreator: CategoriesProps.actionsCreator as any,
};
const activitiesDir: IDirectory<DirActivitiesProps> = {
  title: activitiesProps.title,
  iconId: iconId.folder,
  ModalChildren: DirTreeComp,
  modalChildrenProps: activitiesProps,
  disabled: false,
};
const brandsProps: DirActivitiesProps = {
  title: t(ApiDirType.BRANDS),
  createParentTitle: t('createDirParentItem'),
  dirType: ApiDirType.BRANDS as any,
  fillHeight: true,
  availableLevels: 1,
  actionsCreator: CategoriesProps.actionsCreator as any,
};
const brandsDir: IDirectory<DirActivitiesProps> = {
  title: brandsProps.title,
  iconId: iconId.folder,
  ModalChildren: DirTreeComp,
  modalChildrenProps: brandsProps,
  disabled: false,
};

const directories: Partial<IDirectory>[] = [
  {
    title: 'Банківські рахунки',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.BANK_ACCOUNTS,
    },
  },
  countsDir,
  trCategoriesDir,
  prodCategoriesDir,
  activitiesDir,
  contractorsDir,
  projectsDir,
  marksDir,
  brandsDir,
  {
    title: 'Способи оплати',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.METHODS_PAYMENT,
    },
  },
  {
    title: 'Способи відвантажень',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.METHODS_SHIPMENT,
    },
  },
  {
    title: 'Статуси для замовлень',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.STATUSES_ORDER,
    },
  },
  {
    title: 'Статуси для повернень',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.STATUSES_REFUND,
    },
  },
  {
    title: 'Статуси для відправлень',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.STATUSES_SHIPMENT,
    },
  },
  {
    title: 'Статуси для оплат',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.STATUSES_PAYMENT,
    },
  },
  {
    title: 'Статуси для клієнтів',
    disabled: true,
  },
  {
    title: 'Статуси для контрагентів',
    disabled: true,
  },
  {
    title: 'Контракти',
    disabled: true,
  },
  {
    title: 'Теги',
    disabled: false,
    ModalChildren: DirTreeComp,
    modalChildrenProps: {
      dirType: ApiDirType.TAGS,
      createParentTitle: t('createDirParentItem'),
      filterOptions: tagsFilterOptions,
      fillHeight: true,
      availableLevels: 1,
      actionsCreator: CategoriesProps.actionsCreator as any,
    },
  },
  {
    title: 'Кастомні поля',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.CUSTOM_FIELDS,
    },
  },
  {
    title: 'Джерело залучення',
    disabled: true,
  },
  {
    title: 'Каси',
    disabled: true,
  },
  {
    title: 'Склади',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.WAREHOUSES,
    },
  },
  {
    title: 'Працівники',
    disabled: true,
    modalChildrenProps: {
      dirType: ApiDirType.WORKERS,
    },
  },
  {
    title: 'Специфікації',
    disabled: true,
  },
  {
    title: 'Розмірні сітки',
    disabled: true,
  },
  {
    title: "Способи зв'язку",
    disabled: true,
  },
];

export default directories;
