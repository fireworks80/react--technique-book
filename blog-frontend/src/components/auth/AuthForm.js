import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
// 회원가입 또는 로그인 폼을 보여준다

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
  }
`;

const StyledInput = styled.input``;

const AuthForm = () => {
  return <AuthFormBlock>Authform</AuthFormBlock>;
};

export default AuthForm;
