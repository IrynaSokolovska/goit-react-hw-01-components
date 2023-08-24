// import PropTypes from 'prop-types';
import { CardContainer, Span } from '../FriendListContainer/FriendCard.styled';

export const FriendCard = ({ card: { name, avatar, isOnline } }) => {
  return (
    <CardContainer>
      <Span>{isOnline && 'online'}</Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </CardContainer>
  );
};
// FriendCard.propTypes = {
//   card: PropTypes.array,
// };
