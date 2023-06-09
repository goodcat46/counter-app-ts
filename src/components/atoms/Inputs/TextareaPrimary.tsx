import styled from 'styled-components';
import { InputStyles } from './InputText';

const TextareaPrimary = styled.textarea<{ error?: boolean }>`
  ${InputStyles};

  height: 96px;

  resize: none;

  @media screen and (max-width: 480px) {
    height: 96px;
    font-size: 14px;
  }
`;

export default TextareaPrimary;
