import React, { memo, useMemo } from 'react';
import { useRow } from '../TableRows/TableRow';
import { CellTittleProps } from './CellTitle';
import getValueByPath from '../../../utils/getValueByPath';
import Cell, { IDataCellProps } from './Cells';

export interface CellValueByPathProps {
  titleInfo: CellTittleProps;
  idx?: number;
}

const CellValueByPath: React.FC<CellValueByPathProps & React.HTMLAttributes<HTMLDivElement>> = ({
  titleInfo: { top, bottom, width = '100px' },
  idx,
  ...props
}) => {
  const { rowData } = useRow();

  const cellConfig = useMemo(
    (): IDataCellProps => ({
      content: {
        data: getValueByPath({
          data: rowData,
          ...top,
        }),
        align: top.align,
        uppercase: top.uppercase,
      },
      subContent: {
        data: getValueByPath({
          data: rowData,
          ...bottom,
        }),
        align: bottom?.align,
        uppercase: bottom?.uppercase,
      },
      width,
    }),
    [bottom, rowData, top, width]
  );

  return <Cell.Double {...cellConfig} {...props} />;
};

export default memo(CellValueByPath);
