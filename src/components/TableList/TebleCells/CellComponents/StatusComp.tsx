import React, { CSSProperties, memo, useMemo } from 'react';

import styled, { css } from 'styled-components';
import { getStatusData, StatusData, StatusNames } from 'data/statuses.data';

export type StatusCompVariants = 'outlined' | 'filled' | 'text';

export interface StatusCompProps {
  status?: StatusNames;
  variant?: StatusCompVariants;
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: 300 | 400 | 500 | 600 | 700 | 800 | 900;
  fillWidth?: boolean;
}

const StatusComp: React.FC<StatusCompProps> = ({
  status = 'noStatus',
  variant = 'text',
  fontSize,
  fontWeight,
  fillWidth = false,
}) => {
  const statusData = useMemo((): StatusData | undefined => getStatusData(status), [status]);

  return (
    <StStatusComp
      variant={variant}
      title={statusData?.description}
      color={statusData?.color}
      backgroundColor={statusData?.colorSecondary}
      fillWidth={fillWidth}
    >
      {/*{statusData?.iconId && <SvgIcon icon={statusData?.iconId} size="20px" />}*/}

      <Label className={'inner'} fontSize={fontSize} fontWeight={statusData?.label || fontWeight ? fontWeight : 400}>
        {statusData?.label || status}
      </Label>
    </StStatusComp>
  );
};
type VariansMapType = {
  [variant in StatusCompVariants]?: any;
};
type VariantProps = {
  color?: string;
  backgroundColor?: string;
  fill?: string;
  borderColor?: string;
  fontSize?: string;
};
const variantsMap: VariansMapType = {
  outlined: css<VariantProps>`
    //padding: 4px 4px;
    border-radius: 2px;
    color: ${({ color }) => (color ? color : '')};
    fill: ${({ color }) => (color ? color : '')};
    border: 2px solid ${({ color, theme }) => (color ? color : theme.borderColor)};
  `,
  filled: css<VariantProps>`
    //padding: 4px 4px;
    height: 100%;
    padding: 0 8px;
    border-radius: 4px;
    //color: ${({ color }) => (color ? color : '')};
    color: #fff;
    fill: #fff;
    background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : '')};
  `,
  text: css<VariantProps>`
    color: ${({ color }) => (color ? color : '')};
  `,
};

const StStatusComp = styled.div<
  {
    color?: string;
    fill?: string;
    borderColor?: string;
    backgroundColor?: string;
  } & Omit<StatusCompProps, 'status'>
>`
  display: flex;
  align-items: center;

  gap: 8px;

  width: ${({ fillWidth = false }) => (fillWidth ? '100%' : '')};
  max-width: 100%;
  height: 100%;

  overflow: hidden;

  cursor: default;
  color: ${({ color, theme }) => (color ? color : '')};
  fill: ${({ fill, theme }) => (fill ? fill : '')};
  border-radius: 2px;

  ${({ variant }) => (variant ? variantsMap[variant] : variantsMap['text'])};
`;
const Label = styled.span<StatusCompProps>`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: ${({ fontSize = '14px' }) => fontSize};
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
`;
export default memo(StatusComp);
