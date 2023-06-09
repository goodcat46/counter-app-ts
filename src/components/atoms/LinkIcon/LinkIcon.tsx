import React from 'react';
import sprite from 'img/sprite';
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

type TextTransform = 'uppercase' | 'lowercase' | 'capitalize' | 'none';

interface Props {
  size?: string;
  variant: LinkIconVariant;
  iconId?: string;
  iconSize?: string;
  isActive?: boolean;
  iconStyles?: {};
  endIconId?: string;
  endIconSize?: string;
  endIconStyles?: {};
  texttransform?: TextTransform;
  fontWeight?: 400 | 500 | 600 | 700 | 900;
}

export type LinkIconProps = Props & LinkProps;

const LinkIcon: React.FC<LinkIconProps> = ({
  children,
  isActive,
  size = '',
  variant = 'def',
  iconId,
  iconSize = '18px',
  iconStyles = {},
  endIconId = '',
  endIconSize = '18px',
  endIconStyles = {},
  onClick = () => {
    console.log('LinkIcon click');
  },
  ...props
}) => {
  let styles = {
    width: size,
    height: size,
    minWidth: size,
    miHeight: size,
  };
  let iconStyle = {
    width: iconSize,
    height: iconSize,
    minWidth: iconSize,
    minHeight: iconSize,
    ...iconStyles,
  };
  let endIconStyle = {
    width: endIconSize,
    height: endIconSize,
    minWidth: endIconSize,
    minHeight: endIconSize,
    ...endIconStyles,
  };

  return (
    <StyledLinkIcon
      {...{
        style: styles,
        variant,
        onClick,
        className: 'linkIcon',
        ...props,
      }}
    >
      {iconId && (
        <SvgIcon className="icon" style={iconStyle}>
          <use href={`${sprite}#icon-${String(iconId)}`} />
        </SvgIcon>
      )}

      {children}

      {endIconId && (
        <SvgIcon className="endIcon" style={endIconStyle}>
          <use href={`${sprite}#icon-${endIconId}`}></use>
        </SvgIcon>
      )}
    </StyledLinkIcon>
  );
};

const StyledLinkIcon = styled(Link)<LinkIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  text-align: center;

  font-family: inherit;
  letter-spacing: 0.05em;
  color: inherit;
  fill: currentColor;

  text-transform: ${({ texttransform = 'none' }) => texttransform};
  font-size: ${({ fontWeight }) => fontWeight || 400};
  padding: 0;

  overflow: hidden;

  border-radius: 2px;
  border: 1px solid transparent;
  background-color: transparent;

  ${({ variant }) => (variant ? getVariant(variant) : getVariant())}
  &:disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;

const SvgIcon = styled.svg`
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

const def = css`
  background-color: ${({ theme }) => theme.globals.defaultBtnBckgrndColor.def};
  /* transition: all var(--timing-function__main); */

  &:hover {
    background-color: ${({ theme }) =>
      theme.globals.defaultBtnBckgrndColor.hover};
  }

  &:active {
    background-color: ${({ theme }) =>
      theme.globals.defaultBtnBckgrndColor.pressed};
  }
`;
const defNoEffects = css`
  background-color: ${({ theme }) => theme.globals.defaultBtnBckgrndColor.def};
`;
// const pointer = css`
//   background-color: ${({ theme }) => theme.defaultBtnBckgrndColor.def};

//   position: relative;
//   fill: ${({ theme }) => theme.colorLight};

//   border-radius: 0;
//   border-width: 0;
//   transition: all ${({ theme }) => theme.globals.timingFunctionMain};
//   &::before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 0;

//     transform: translateY(-50%);

//     width: 3px;
//     height: 50%;

//     background-color: transparent;
//     transition: height ${({ theme }) => theme.globals.timingFunctionLong};
//   }
//   ${def}
//   &:hover {
//     &::before {
//       height: 100%;
//       background-color: ${({ theme }) => theme.accentColor.base};
//     }
//   }
//   &:active {
//   }
// `;
const pointerLeft = css`
  background-color: ${({ theme }) => theme.defaultBtnBckgrndColor.def};

  border: 0;
  transition: all ${({ theme }) => theme.globals.timingFunctionMain};
  position: relative;
  fill: ${({ theme }) => theme.colorLight};
  border-radius: 0;

  border-width: 0;
  transition: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    transform: translateY(-50%);

    width: 3px;
    height: 50%;

    background-color: transparent;
    transition: height ${({ theme }) => theme.globals.timingFunctionLong};
  }

  ${def}
  &:hover {
    &::before {
      height: 100%;
      background-color: ${({ theme }) => theme.accentColor.base};
    }
  }

  &:active {
  }
`;
const pointerBottom = css`
  background-color: ${({ theme }) => theme.globals.defaultBtnBckgrndColor.def};

  border: 0;
  transition: all ${({ theme }) => theme.globals.timingFunctionMain};
  position: relative;
  fill: ${({ theme }) => theme.colorLight};
  border-radius: 0;

  border-width: 0;
  transition: none;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;

    transform: translateY(-50%);

    width: 3px;
    height: 50%;

    background-color: transparent;
    transition: height ${({ theme }) => theme.globals.timingFunctionLong};
  }

  ${def}
  &:hover {
    &::before {
      height: 100%;
      background-color: ${({ theme }) => theme.accentColor.base};
    }
  }

  &:active {
  }
`;
const small = css`
  padding: 0 22px;

  min-width: 115px;
  min-height: 28px;
`;
const large = css`
  padding: 0 22px;

  min-width: 150px;
  min-height: 36px;
`;
const icon = css`
  min-width: 26px;
  height: 26px;
`;
const outlined = css`
  color: ${({ theme }) => theme.accentColor.base};
  fill: ${({ theme }) => theme.accentColor.base};
  border: 1px solid ${({ theme }) => theme.accentColor.base};
  /* background-color: transparent; */

  &:hover {
    border: 1px solid ${({ theme }) => theme.accentColor.hover};
    color: ${({ theme }) => theme.accentColor.hover};
    fill: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    color: ${({ theme }) => theme.accentColor.pressed};
    fill: ${({ theme }) => theme.accentColor.pressed};
    border: 1px solid ${({ theme }) => theme.accentColor.pressed};
    background-color: var(--ligthOrange);
    box-shadow: var(--btnShadow_active);
  }
`;
const outlinedSmall = css`
  ${small}
  ${outlined}
`;
const outlinedLarge = css`
  ${outlined}
  ${large}
`;
const filled = css`
  color: ${({ theme }) => theme.colorLight};
  fill: ${({ theme }) => theme.colorLight};
  background-color: ${({ theme }) => theme.accentColor.base};

  &:hover {
    color: ${({ theme }) => theme.colorLight};
    fill: ${({ theme }) => theme.colorLight};
    background-color: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.accentColor.pressed};
  }
`;
const filledSmall = css`
  ${small}
  ${filled}
`;
const filledLarge = css`
  ${large}
  ${filled}
`;
const onlyIconFilled = css`
  ${filled}
  ${icon}
`;
const onlyIcon = css`
  ${def}
  ${icon}
  fill: ${({ theme }) => theme.accentColor.base};

  &:hover {
    fill: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    fill: ${({ theme }) => theme.accentColor.pressed};
  }
`;
const onlyIconNoEffects = css`
  ${defNoEffects}
  ${icon}
  fill: ${({ theme }) => theme.accentColor.base};

  &:hover {
    fill: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    fill: ${({ theme }) => theme.accentColor.pressed};
  }
`;
const underlinedText = css`
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.accentColor.base};

  &:hover {
    color: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    color: ${({ theme }) => theme.accentColor.pressed};
  }
`;
const text = css`
  ${def};
  color: ${({ theme }) => theme.accentColor.base};

  &:hover {
    color: ${({ theme }) => theme.accentColor.hover};
  }

  &:active {
    color: ${({ theme }) => theme.accentColor.pressed};
  }
`;
const textSmall = css`
  ${text};
  ${small};
`;
const textLarge = css`
  ${text};
  ${large};
`;
const defOutlined = css`
  ${def};
  color: ${({ theme }) => theme.fontColor};
  fill: ${({ theme }) => theme.fillColor};
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    border: 1px solid ${({ theme }) => theme.trBorderClr};
  }

  &:active {
    background-color: var(--ligthOrange);
    box-shadow: var(--btnShadow_active);
  }
`;
const defOutlinedSmall = css`
  ${defOutlined}
  ${small}
`;
const defOutlinedLarge = css`
  ${defOutlined}
  ${large}
`;

const variants = {
  def,
  defNoEffects,
  pointerLeft,
  outlinedLarge,
  filledLarge,
  outlinedSmall,
  filledSmall,
  underlinedText,
  textSmall,
  textLarge,
  onlyIcon,
  onlyIconNoEffects,
  onlyIconFilled,
  defOutlinedSmall,
  defOutlinedLarge,
  pointerBottom,
};

export type LinkIconVariant = keyof typeof variants;

function getVariant(
  variant?: LinkIconVariant
): FlattenInterpolation<ThemeProps<DefaultTheme>> {
  return variant ? variants[variant] : variants.def;
}

export default LinkIcon;
