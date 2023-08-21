import { styled } from 'styled-components';

export const List = styled.section`
  display: flex;
  gap: 50px;
  margin-bottom: 30px;
  padding-left: 20px;
`;

export const ListItem = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 24px;
  font-weight: 500;
  margin-top: 8px;
  color: #47363e;
`;

export const Span = styled.section`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.color};
`;
