import React, { forwardRef } from 'react';
import styled from 'styled-components';

export interface InputPrimaryProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  direction?: 'column' | 'row';
  labelUppercase?: boolean;
  error?: boolean;
  success?: boolean;
  helperText?: string;
}

const InputTextPrimary: React.ForwardRefRenderFunction<
  any,
  InputPrimaryProps
> = (
  {
    label,
    className,
    disabled,
    direction = 'row',
    labelUppercase,
    helperText,
    error,
    success,
    ...props
  },
  ref: React.ForwardedRef<any>
) => {
  return (
    <Label className={className} disabled={disabled}>
      <Wrapper isLabel={!!label} direction={direction}>
        {label && (
          <LabelText uppercase={labelUppercase} className="label">
            {label}
          </LabelText>
        )}

        <InputText ref={ref} className="input" disabled={disabled} {...props} />
      </Wrapper>

      {helperText && (
        <HelperText error={error} success={success}>
          {helperText}
        </HelperText>
      )}
    </Label>
  );
};

const Label = styled.label<{
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
}>`
  display: flex;
  flex-direction: column;

  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;

  width: 100%;

  opacity: ${({ disabled }) => (disabled ? 0.5 : '')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;
const LabelText = styled.div<{ uppercase?: boolean }>`
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
`;
const Wrapper = styled.div<{ isLabel: boolean; direction?: 'column' | 'row' }>`
  display: grid;
  grid-template-columns: ${({ isLabel, direction }) =>
    direction === 'row' ? `${isLabel ? '100px' : ''}, 1fr` : '1fr'};
  align-items: center;
  gap: 4px;

  width: 100%;
`;
const InputText = styled.input<{ error?: boolean; success?: boolean }>`
  padding: 5px 8px;

  width: 100%;
  height: 26px;

  color: ${({ error, success, theme }) => (error ? 'tomato' : 'inherit')};

  background-color: transparent;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.globals.inputBorder};

  &::placeholder {
    font-family: inherit, sans-serif;
  }
`;

const HelperText = styled.div<{ error?: boolean; success?: boolean }>`
  min-height: 12px;

  font-size: 8px;
  line-height: 1.5;

  color: ${({ error, success, theme }) =>
    (error && 'tomato') || (success && 'lightgreen') || 'inherit'};

  cursor: default;
`;

export default forwardRef(InputTextPrimary);
