import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 45px;
  background-color: var(--nav);
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitcherTitle = styled.span`
  margin-right: 15px;
  color: var(--text);
`;

export const AuthWrapper = styled.div`
  margin-left: 30px;
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthButton = styled.div`
  margin-left: 10px;
  color: var(--text);
  padding: 4px;
  border: 1px solid var(--text);
  border-radius: 4px;
  background-color: var(--cardLink);
  cursor: pointer;
`;

export const UserPhoto = styled.img`
  width: 40px;
  height: 40px;
  background-color: var(--text);
  border-radius: 50%;
`;
