import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { SelectItem } from 'components/TableList/TableList';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { checks } from 'utils';

export interface ISearchParamInputProps {
  data?: SelectItem[];
  defaultValue?: SelectItem;
  selectedItem?: SelectItem;
  onSelect?: (item: SelectItem) => void;
}

const SearchParamInput: React.FC<ISearchParamInputProps> = ({ data, defaultValue, selectedItem, onSelect }) => {
  const [current, setCurrent] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleList() {
    setIsOpen(prev => {
      return !prev;
    });
  }

  const handleSelect = useCallback(
    (item: SelectItem, index: number) => {
      setCurrent(index);

      checks.isFun(onSelect) && onSelect(item);

      handleToggleList();
    },
    [onSelect, setCurrent]
  );
  const renderFilteredList = useMemo(() => {
    return data ? (
      data.map((item, index) => (
        <ListItem
          key={item.dataKey || item.dataPath}
          title={item.label}
          isSelected={index === current}
          onClick={() => handleSelect(item, index)}
        >
          <span>{item.label}</span>
        </ListItem>
      ))
    ) : (
      <ListItem listEmpty>
        <span>Нічого не знайдено</span>
      </ListItem>
    );
  }, [current, data, handleSelect]);

  useEffect(() => {
    if (!isOpen) return;

    function onMenuClose(ev: MouseEvent | KeyboardEvent) {
      const { target } = ev;
      const allowClose =
        (target instanceof HTMLElement && !target.closest('[data-select]')) ||
        (ev instanceof KeyboardEvent && ev?.code === 'Escape');
      allowClose && setIsOpen(false);
    }

    document.addEventListener('click', onMenuClose);
    document.addEventListener('keydown', onMenuClose);

    return () => {
      document.removeEventListener('click', onMenuClose);
      document.removeEventListener('keydown', onMenuClose);
    };
  }, [isOpen]);

  return (
    <>
      <ButtonIcon
        icon={'tune'}
        size="28px"
        iconSize={'90%'}
        variant="onlyIconNoEffects"
        onClick={() => handleToggleList()}
        data-select
      />

      <InputBox className={isOpen ? 'isOpen' : ''} isOpen={isOpen} data-select>
        <ParamsList isOpen={isOpen}>{renderFilteredList}</ParamsList>
      </InputBox>
    </>
  );
};

const InputBox = styled.label<{ isOpen?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  position: absolute;
  top: 110%;
  right: 0;
  z-index: 2;

  width: 100%;

  fill: ${({ theme }) => theme.accentColor.base};

  max-height: ${({ isOpen }) => (isOpen ? '40vh' : '0')};
  overflow: hidden;

  background-color: ${({ theme }) => theme.modalBackgroundColor};
  border-radius: 2px;
  border: ${({ isOpen }) => (isOpen ? '1px' : '0')} solid ${({ theme }) => theme.trBorderClr};

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
`;
// const StyledLabel = styled.label`
//   display: flex;
//
//   position: relative;
//
//   border-style: none;
//   border-image: none;
//   border-width: 5px;
//
//   height: 100%;
//   //background-color: inherit;
//
//   background-color: ${({ theme }) => theme.backgroundColorLight};
//
//   border-bottom: 1px solid ${({ theme }) => theme.trBorderClr};
//
//   &::before {
//     display: block;
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     height: calc(100% + 4px);
//     width: 0;
//
//     pointer-events: none;
//
//     border-radius: 4px;
//     transition: all ${({ theme }) => theme.globals.timingFnMui};
//     transform: translate(-50%, -50%);
//     background-color: ${({ theme }) => theme.accentColor.base};
//   }
//
//   &.isOpen {
//     &::before {
//       //width: calc(100% + 4px);
//     }
//
//     /* background: linear-gradient(#fff, #fff) padding-box,
//       linear-gradient(90deg, rgba(255, 175, 61, 0) 50%, rgba(255, 175, 61, 1) 50%, rgba(255, 175, 61, 0) 50%) border-box; */
//   }
//
//   &:focus-within {
//   }
//
//   &:focus {
//     outline-style: none;
//   }
// `;

// const StyledInput = styled.input`
//   display: block;
//
//   height: 100%;
//   width: 100%;
//
//   padding: 4px 32px 4px 8px;
//
//   font-size: 14px;
//   font-family: inherit;
//   color: inherit;
//   background-color: inherit;
//
//   //background-color: ${({ theme }) => theme.backgroundColorLight};
//   border-radius: 2px;
//   border-style: none;
//   transition: border ${({ theme }) => theme.globals.timingFnMui};
//
//   &:focus {
//     outline-style: none;
//   }
//
//   &.isOpen {
//     border-color: transparent;
//   }
//
//   &::placeholder {
//     color: ${({ theme }) => theme.globals.inputPlaceholderColor};
//   }
// `;
//
// const ClearButton = styled(ButtonIcon)`
//   position: absolute;
//   right: 0;
//   top: 50%;
//   z-index: 10;
//   width: 28px;
//   height: 28px;
//
//   fill: ${({ theme }) => theme.accentColor.base};
//   transform: translateY(-50%);
// `;

const ParamsList = styled.ul<{ isOpen: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 32px;

  color: ${({ theme }) => theme.fillColorHeader};

  width: 100%;
  height: 100%;
  max-width: calc(100% + 40px);
  max-height: 100%;

  overflow: auto;
`;

const ListItem = styled.li<{ listEmpty?: boolean; isSelected?: boolean }>`
  display: flex;
  align-items: center;

  padding: 8px;

  font-size: 12px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  background-color: ${({ isSelected, theme }) => (!isSelected ? '' : theme.fieldBackgroundColor)};

  &:hover {
    cursor: default;
    background-color: ${({ listEmpty, theme }) => (listEmpty ? '' : theme.fieldBackgroundColor)};
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export default SearchParamInput;
/* background: linear-gradient(#fff, #fff) padding-box,
    linear-gradient(90deg, rgba(255, 175, 61, 0) 50%, rgba(255, 175, 61, 1) 50%, rgba(255, 175, 61, 0) 50%) border-box; */
/* background: linear-gradient(90deg, rgba(255, 175, 61, 0) 50%, rgba(255, 175, 61, 1) 50%, rgba(255, 175, 61, 0) 50%); */
/* background: linear-gradient(#fff, #fff) padding-box,
      linear-gradient(90deg, rgba(255, 175, 61, 1) 0%, rgba(255, 175, 61, 1) 50%, rgba(255, 175, 61, 1) 100%) border-box; */
