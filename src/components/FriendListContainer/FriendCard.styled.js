import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;

// export const Span = styled.span`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${isOnline ? 'green' : 'red'};
// `;

// function getColor(card) {
//   const isOnlineC = card.isOnline;

//   if (isOnlineC) {
//     return 'green';
//   } else {
//     return 'red';
//   }
// }
