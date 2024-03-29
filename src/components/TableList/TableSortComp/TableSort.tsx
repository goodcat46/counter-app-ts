import React, { useState } from 'react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import TableSortParamsList from './TableSortParamsList';
import styled from 'styled-components';
import { ITableListProps, SelectItem } from 'components/TableList/TableList';
import { useModalProvider } from '../../ModalProvider/ModalProvider';
import ModalForm from '../../ModalForm';
import { RenderModalComponentChildrenProps } from '../../ModalProvider/ModalComponent';

export interface TableSortProps {
  tableSortParams: SelectItem[];
  onSelect?: ITableListProps['handleTableSort'];
}

const TableSort: React.FC<TableSortProps> = ({ tableSortParams, onSelect }) => {
  const modals = useModalProvider();
  const [current, setCurrent] = useState<SelectItem>();

  function onOpenClick() {
    modals.handleOpenModal({
      ModalChildren: ModalSort,
    });
  }

  function handleSelect(param: SelectItem, sortOrder: SelectItem['sortOrder']) {
    setCurrent({ ...param, sortOrder });
    sortOrder && onSelect && onSelect(param, sortOrder);
  }

  const ModalSort: React.FC<RenderModalComponentChildrenProps> = ({ ...props }) => {
    return (
      <ModalForm fitContentH fitContentV footer={false} title={'Сортування'} {...props}>
        <TableSortParamsList {...{ tableSortParams, onSelect: handleSelect, current, isOpen: true }} />
      </ModalForm>
    );
  };
  return (
    <Box>
      <StButton
        sortOrder={current?.sortOrder}
        variant="def"
        endIconSize="26px"
        endIconId="SmallArrowDown"
        onClick={onOpenClick}
        data-table-sort-open
      >
        <span title={current?.name || current?.label || ''} style={{ textAlign: 'start' }}>
          {current?.name || current?.label || 'Оберіть параметр'}
        </span>
      </StButton>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  //max-width: 150px;
  //min-width: 250px;
  width: 200px;
`;

const StButton = styled(ButtonIcon)<{ sortOrder?: SelectItem['sortOrder'] }>`
  display: grid;
  grid-template-columns: 1fr 26px;
  height: 100%;
  max-width: 100%;
  width: 100%;

  padding: 0 8px;

  fill: ${({ theme }) => theme.accentColor.base};
  color: ${({ theme }) => theme.fontColorHeader};
  background-color: ${({ theme }) => theme.fieldColor};

  & span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.fieldColor};
  }

  & .endIcon {
    transform: ${({ sortOrder }) => `rotate(${sortOrder && !['DESC', 'desc'].includes(sortOrder) ? 180 : 0}deg)`};
  }
`;

export default TableSort;
