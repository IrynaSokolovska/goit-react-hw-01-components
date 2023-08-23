// import PropTypes from 'prop-types';
// import { List, ListItem } from './FriendList.styled';

// export const FriendCard = ({ friends }) => {
//   return (
//     <List>
//       {friends.map(friend => {
//         return (
//           <ListItem key={friend.id}>
//             <FriendList card={friend} />
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// };

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(PropTypes.object),
// };
import PropTypes from 'prop-types';
import { Span } from '../FriendListContainer/FriendCard.styled';

export const FriendCard = ({ card: { name, avatar, isOnline } }) => {
  return (
    <div>
      <Span>{isOnline && 'online'}</Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </div>
  );
};
FriendCard.propTypes = {
  card: PropTypes.arrayOf(PropTypes.object),
};
