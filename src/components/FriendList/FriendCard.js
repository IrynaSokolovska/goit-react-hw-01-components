import { Span } from './FriendCard.styled';

export const FriendCard = ({ card: { name, avatar, isOnline } }) => {
  return (
    <div>
      <Span>{isOnline && 'online'}</Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </div>
  );
};
{
  /* <Span color={friend}>{isOnline && 'online'}</Span>; */
}
