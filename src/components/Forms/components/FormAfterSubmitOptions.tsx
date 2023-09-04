import * as React from 'react';
import { memo, useCallback, useMemo, useState } from 'react';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import translate from '../../../lang';
import styled from 'styled-components';
import FlexBox from '../../atoms/FlexBox';
import { UseAppFormSubmitOptions } from '../../../hooks/useAppForm.hook';

export interface FormAfterOptionsProps extends UseAppFormSubmitOptions {
  close?: boolean;
  clear?: boolean;
  onOptionsChange?: (options: FormAfterOptionsProps) => void;
  toggleOption?: (option: keyof UseAppFormSubmitOptions) => void;
}

const FormAfterSubmitOptions: React.FC<FormAfterOptionsProps> = ({ toggleOption, onOptionsChange, ...props }) => {
  const [{ closeAfterSave, clearAfterSave }, setAfterSubmitOptions] = useState<FormAfterOptionsProps>({
    closeAfterSave: props?.close || props?.closeAfterSave,
    clearAfterSave: props?.clear || props?.clearAfterSave,
  });
  const toggleStateOption = useCallback(
    (option: keyof UseAppFormSubmitOptions) =>
      setAfterSubmitOptions(prev => {
        const newOptions = {
          ...prev,
          [option]: !prev[option],
        };
        onOptionsChange && onOptionsChange(newOptions);
        toggleOption && toggleOption(option);
        return newOptions;
      }),
    [onOptionsChange, toggleOption]
  );

  return useMemo(() => {
    return (
      <Container fillWidth gap={4} padding={'4px 8px'} alignItems={'flex-start'}>
        <Label
          gap={8}
          fxDirection={'row'}
          onClick={() => {
            toggleStateOption('clearAfterSave');
          }}
        >
          <ButtonIcon
            variant={'onlyIconNoEffects'}
            size={'14px'}
            iconSize={'90%'}
            icon={clearAfterSave ? 'checkBoxOn' : 'checkBoxOff'}
          />
          <div>{translate('clearAfterSave')}</div>
        </Label>
        <Label
          gap={8}
          fxDirection={'row'}
          onClick={() => {
            toggleStateOption('closeAfterSave');
          }}
        >
          <ButtonIcon
            variant={'onlyIconNoEffects'}
            size={'14px'}
            iconSize={'90%'}
            icon={closeAfterSave ? 'checkBoxOn' : 'checkBoxOff'}
          />
          <div>{translate('closeAfterSave')}</div>
        </Label>
      </Container>
    );
  }, [clearAfterSave, closeAfterSave, toggleStateOption]);
};

const Container = styled(FlexBox)`
  min-height: 40px;
`;

const Label = styled(FlexBox)`
  cursor: pointer;
  user-select: none;
`;
export default memo(FormAfterSubmitOptions);
