import PropTypes from 'prop-types';
import { FriendCard } from '../FriendListContainer/FriendCard';
import { List, ListItem } from '../FriendListContainer/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => {
        return (
          <ListItem key={friend.id}>
            <FriendCard card={friend} />
          </ListItem>
        );
      })}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
