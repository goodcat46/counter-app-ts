import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { MaxToTablet } from 'components/atoms/DeviceTypeInformer/DeviceTypeController';
import { iconId } from 'data';
import styled from 'styled-components';
import { FilterSelectorDataType } from './Filter';

export interface IFilterSelectorAddsProps {
  ListComp?: React.FC<any>;
}

export interface FilterSelectorProps {
  label: string;
  selectorName?: string;
  data: FilterSelectorDataType;
  idx: number;
  currentIdx: number | null;
  CurrentData: any;
  onSelectorClick: (idx?: number) => void;
}

const Selector: React.FC<FilterSelectorProps & React.HTMLAttributes<Element>> = ({
  label = 'Selector label',
  selectorName = 'selector',
  onSelectorClick,
  currentIdx,
  data,
  idx,
  children,
}) => {
  return (
    <SelectorContainer>
      <StOpenButton
        variant="def"
        isCurrent={currentIdx === idx}
        endIconId={iconId.SmallArrowDown}
        endIconSize="22px"
        onClick={() => onSelectorClick && onSelectorClick()}
      >
        <Label>{label}</Label>
      </StOpenButton>

      <MaxToTablet>{currentIdx === idx ? <SelectorList>{children}</SelectorList> : null}</MaxToTablet>
    </SelectorContainer>
  );
};
const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.div`
  flex-grow: 1;

  display: flex;
  align-items: center;

  padding: 5px 8px;
`;
const StOpenButton = styled(ButtonIcon)<{ isCurrent: boolean }>`
  width: 100%;
  font-size: 12px;
  fill: ${({ theme }) => theme.accentColor.base};

  justify-content: space-between;

  background-color: ${({ theme }) => theme.backgroundColorLight};

  border-color: ${({ isCurrent, theme }) => (isCurrent ? theme.accentColor.base : '')};
  & .endIcon {
    transform: ${({ isCurrent }) => `rotate(${isCurrent ? 180 : 0}deg)`};
  }

  @media screen and (min-width: 768px) {
    & .endIcon {
      transform: ${({ isCurrent }) => `rotate(${isCurrent ? -90 : 90}deg)`};
    }
  }
`;
const SelectorList = styled.div`
  overflow: hidden;
`;

export default Selector;