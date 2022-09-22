import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
`;

export const SpaceXLogoImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const CompanyCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 80px;
`;

export const IconsContainer = styled.div`
  display: flex;
  margin-top: 15px;
`;

export const Text = styled.div`
  margin: 3px 0;
  color: var(--text);
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
