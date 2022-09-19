import styled from 'styled-components';

type ContainerPropsType = {
  margin?: string;
};

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 35px 0;
`;

export const Container = styled.div<ContainerPropsType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => (props.margin ? props.margin : 0)};
`;

export const ContainerSpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;
