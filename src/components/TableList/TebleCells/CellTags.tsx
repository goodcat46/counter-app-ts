import React from 'react';
import styled from 'styled-components';
import getNestedData from 'utils/getNestedData';
import { useRow } from '../TableRows/TableRow';
import { CellTitleContent, CellTittleProps } from './CellTitle';

export interface CellTagsProps {
  titleInfo: CellTittleProps;
  idx?: number;
}

const CellTags: React.FC<CellTagsProps & React.HTMLAttributes<HTMLDivElement>> = ({
                                                                                    titleInfo,
                                                                                    idx,
                                                                                    ...props
                                                                                  }) => {
  const { rowData } = useRow();
  const { top, width = '100px' } = titleInfo;

  const contentTop: string[] = getNestedData({
    data: rowData,
    ...top,
  });


  return (
    <CellBase style={{ width }} {...props}>
      <Content title={`Tags: ${contentTop.join(', ')}`} className='cellTagsContent'>

        {contentTop.map(teg => <Tag key={teg}>{teg}</Tag>)}

      </Content>
    </CellBase>
  );
};

const CellBase = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  height: 100%;
  max-height: 100%;

  padding: 2px 10px;

  overflow: hidden;
`;

const Content = styled.div<Omit<CellTitleContent, 'name'>>`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2px;

  width: 100%;
  max-height: 100%;
  overflow: hidden;

  font-size: 10px;
  font-weight: 500;

`;
const Tag = styled.div`
  padding: 0 4px;

  line-height: 1.6;

  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.accentColor.base};
`;


export default CellTags;
