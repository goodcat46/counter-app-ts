import ModalForm from 'components/ModalForm';
import TableList, { ITableListProps } from 'components/TableList/TableList';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { ActionsCreatorOptions, DirBaseProps } from './dir.types';
import { ApiDirType } from '../../redux/APP_CONFIGS';
import { useModalProvider } from '../ModalProvider/ModalProvider';
import { useDirectoriesSelector } from '../../redux/directories/useDirectoriesService.hook';
import { ISortParams } from '../../api';
import { FilterReturnDataType } from '../Filter/AppFilter';
import { useDirService } from '../../hooks';

export interface DirTableCompProps<
  DirType extends ApiDirType = any,
  ItemType = any,
  CreateDTO = any,
  UpdateDTO = any,
  ItemDataType = any
> extends DirBaseProps {
  dirType: ApiDirType;
  type?: ItemType;

  getTableSettings: (
    options: ActionsCreatorOptions<DirType, ItemType, CreateDTO, UpdateDTO, ItemDataType> & {
      sortParams?: ISortParams;
      setSortParams?: (params?: ISortParams) => void;
      filterParams?: FilterReturnDataType;
      setFilterParams?: (filterData?: FilterReturnDataType) => void;
    }
  ) => ITableListProps<ItemType>;
}

const DirTableComp: React.FC<DirTableCompProps> = ({ type, dirType, getTableSettings, ...props }) => {
  const modalService = useModalProvider();
  const dirService = useDirService();
  const tableData = useDirectoriesSelector(dirType).directory;
  const [isLoading, _setIsLoading] = useState(false);
  const [sortParams, setSortParams] = useState<ISortParams>();
  const [filterParams, setFilterParams] = useState<FilterReturnDataType>();

  const tableSettingsMemo = useMemo(
    (): ITableListProps => ({
      ...getTableSettings({
        dirService,
        modalService,
        type,
        sortParams,
        setSortParams,
        filterParams,
        setFilterParams,
        dirType,
      }),
    }),

    [dirService, dirType, filterParams, getTableSettings, modalService, sortParams, type]
  );
  // useEffect(() => {
  //   getAllByDirType({
  //     data: { dirType, refresh: true, params: { isArchived: false, createTreeData: false, sortParams, filterParams } },
  //     onLoading: setIsLoading,
  //     onSuccess: () => {
  //       toast.success(`Updated data for directory: ${dirType}`);
  //     },
  //     onError: () => {
  //       toast.error(`Error when updating data for directory: ${dirType}`);
  //     },
  //   });
  // }, [dirType, filterParams, getAllByDirType, sortParams]);
  return (
    <StModalForm {...props}>
      <TableList {...tableSettingsMemo} isLoading={isLoading} tableData={tableData} />
    </StModalForm>
  );
};
const StModalForm = styled(ModalForm)`
  background-color: ${({ theme }) => theme.modalBackgroundColor};
`;
export default DirTableComp;
