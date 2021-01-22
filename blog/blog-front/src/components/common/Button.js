import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: #fff;
  outline: none;
  cursor: pointer;
  background-color: #a5a5a5;
  &:hover {
    background-color: gray;
  }

  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background-color: #04b8b8;

      &:hover {
        background-color: #01cccc;
      }
    `};
`;

const Button = (props) => <StyledButton {...props} />;

export default Button;
