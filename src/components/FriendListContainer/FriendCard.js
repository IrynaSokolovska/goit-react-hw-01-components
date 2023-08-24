import { CardContainer } from '../FriendListContainer/FriendCard.styled';

export const FriendCard = ({ card: { name, avatar, isOnline } }) => {
  return (
    <CardContainer>
      <div
        style={{
          height: '20px',
          width: '20px',
          borderRadius: '50%',
          background: isOnline ? 'green' : 'red',
        }}
      />
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </CardContainer>
  );
};

// export const FriendCard = ({ card: { name, avatar, isOnline } }) => {
//   return (
//     <CardContainer>
//       <Span background-color="red">{isOnline ? 'green' : 'red'}</Span>
//       <img src={avatar} alt={name} width="48" />
//       <p>{name}</p>
//     </CardContainer>
//   );
// };
