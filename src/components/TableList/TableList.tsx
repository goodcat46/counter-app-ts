import React, { createContext, memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import QuickActions from './QuickActions';
import TableOverHead from './TableOverHead/TableOverHead';
import TableFooter from './TableFooter/TableFooter';
import styled from 'styled-components';
import { MaxToTabletXl } from 'components/atoms/DeviceTypeInformer/DeviceTypeController';
import { CustomCheckboxEvent } from './TebleCells/CellComponents/CheckBox';
import {
  ITableListContext,
  ITableListProps,
  OnCheckBoxChangeHandlerEvent,
  SelectItem,
  UseTableHookType,
} from './tableTypes.types';
import { FilterReturnDataType } from '../Filter/AppFilter';
import { IBase } from '../../redux/global.types';
import TableLoader from './TableLoader';

export type { ITableListContext, ITableListProps, OnCheckBoxChangeHandlerEvent, UseTableHookType, SelectItem };
export const TableCTX = createContext({});
export const useTable: UseTableHookType = () => useContext(TableCTX);

const TableList: React.FC<ITableListProps & React.HTMLAttributes<HTMLDivElement>> = ({
  tableData,
  isLoading = false,
  RowActionsComp,
  TableActionsComp,
  tableTitles,
  tableSearchParams,
  actionsCreator,
  footer = false,
  onRowClick,
  onCheckboxChange,
  onFilterSubmit,
  filterTitle,
  filterDefaultValues,
  scrollBarWidth,
  onSubmitSearch,
  ...props
}) => {
  // const tBodyRef = useRef<HTMLElement>(null);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const rowRef = useRef<HTMLElement>();
  const [selectedRow, setSelectedRow] = useState<any | undefined>(props?.selectedRow);
  const setFilterData = useState<FilterReturnDataType>()[1];
  const [loading, setLoading] = useState(isLoading);

  const rowGrid = useMemo(
    () => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${tableTitles?.length}, min-content)`,
    }),
    [tableTitles?.length]
  );

  const onFilterSubmitWrapper = useCallback(
    (data: FilterReturnDataType) => {
      setFilterData(data);
      typeof onFilterSubmit === 'function' && onFilterSubmit(data);
    },
    [onFilterSubmit, setFilterData]
  );

  const onRowClickWrapper = useCallback(
    (rowData: any) => {
      setSelectedRow(rowData);
      typeof onRowClick === 'function' && onRowClick(rowData);
    },
    [onRowClick]
  );

  const onCheckboxChangeWrapper = useCallback(({ checked, _id }: OnCheckBoxChangeHandlerEvent) => {
    setSelectedRows(prev => {
      if (checked && _id) return [...prev, _id];
      if (!checked && _id) return prev.filter(el => el !== _id);
      return prev;
    });
  }, []);
  const onHeadCheckboxChange = useCallback(
    (e: CustomCheckboxEvent) => {
      const { checked } = e;
      if (checked) setSelectedRows(prev => tableData?.map(el => el._id) || prev);
      if (!checked) setSelectedRows([]);
    },
    [tableData]
  );

  const CTX = useMemo(
    (): ITableListContext<IBase> => ({
      RowActionsComp,
      TableActionsComp,
      actionsCreator,
      footer,
      tableSearchParams,
      tableTitles,
      filterTitle,
      filterDefaultValues,
      rowGrid,
      rowRef,
      selectedRows,
      selectedRow,
      tableData,
      onFilterSubmit: onFilterSubmitWrapper,
      onRowClick: onRowClickWrapper,
      onCheckboxChange: onCheckboxChangeWrapper,
      onHeadCheckboxChange: onHeadCheckboxChange,
      onSubmitSearch,
      onRefresh: setLoading,
      ...props,
    }),
    [
      RowActionsComp,
      TableActionsComp,
      actionsCreator,
      filterDefaultValues,
      filterTitle,
      footer,
      onCheckboxChangeWrapper,
      onFilterSubmitWrapper,
      onHeadCheckboxChange,
      onRowClickWrapper,
      onSubmitSearch,
      props,
      rowGrid,
      selectedRow,
      selectedRows,
      tableData,
      tableSearchParams,
      tableTitles,
    ]
  );

  useEffect(() => {
    if (props?.selectedRow) {
      setSelectedRow(props?.selectedRow);
    }
  }, [props?.selectedRow]);
  return (
    <Table {...props}>
      <TableCTX.Provider value={CTX}>
        <TableOverHead />

        <TableScroll className={'TableScroll'} scrollBarWidth={scrollBarWidth}>
          <TableHead />

          {tableData?.length !== 0 && <TableBody ref={rowRef} />}

          {actionsCreator && (
            <MaxToTabletXl>
              <QuickActions />
            </MaxToTabletXl>
          )}

          <TableLoader isLoading={isLoading || loading} />
        </TableScroll>

        {tableData?.length === 0 && <NoData>Дані відсутні</NoData>}

        {footer && <TableFooter />}
      </TableCTX.Provider>
    </Table>
  );
};

const NoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  padding: 12px;

  border-top: 1px solid ${p => p.theme.trBorderClr};
`;
const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;

  position: relative;

  height: 100%;
  width: 100%;
  overflow: hidden;

  //background-color: ${({ theme }) => theme.tableBackgroundColor};
`;
const TableScroll = styled.div<{ scrollBarWidth?: number }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40px 1fr min-content;

  height: 100%;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: ${({ scrollBarWidth = 6 }) => scrollBarWidth}px;
    height: ${({ scrollBarWidth = 6 }) => scrollBarWidth}px;
  }
`;

export default memo(TableList);
