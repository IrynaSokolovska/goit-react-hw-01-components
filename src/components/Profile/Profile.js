import PropTypes from 'prop-types';

export const Profile = ({ location, tag, username, avatar, stats }) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} width="48" />
        <p key={username}>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  location: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.object.isRequired,
};
