import styled from 'styled-components';

export const Section = styled.section`
  width: 300px;
  border: 1px solid black;
`;

export const TitleSt = styled.h2`
  font-weight: 800;
  font-size: 26px;
  text-transform: uppercase;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-around;
  background-color: pink;
`;
export const ListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const SpanLable = styled.span`
  color: white;
`;
export const SpanNumber = styled.span`
  font-weight: 400;
  font-size: 26px;
  color: white;
`;
