import PropTypes from 'prop-types';
import {
  Pasport,
  Description,
  Img,
  UserName,
  UserText,
  SpanText,
  List,
  UserItem,
} from './Profile.styled';

export const Profile = ({ location, tag, username, avatar, stats }) => {
  return (
    <Pasport>
      <Description>
        <Img src={avatar} alt={username} width="48" />
        <UserName>{username}</UserName>
        <UserText>@{tag}</UserText>
        <UserText>{location}</UserText>
      </Description>

      <List>
        <UserItem>
          <SpanText>Followers</SpanText>
          <span>{stats.followers}</span>
        </UserItem>
        <UserItem>
          <SpanText>Views</SpanText>
          <span>{stats.views}</span>
        </UserItem>
        <UserItem>
          <SpanText>Likes</SpanText>
          <span>{stats.likes}</span>
        </UserItem>
      </List>
    </Pasport>
  );
};

Profile.propTypes = {
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
