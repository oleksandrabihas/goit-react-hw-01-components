import PropTypes from 'prop-types';
import {
  FriendsList,
  FriendListItem,
  Status,
  FriendAvatar,
  Name,
} from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(({id, isOnline, avatar, name}) => (
        <FriendListItem key={id}>
          <Status isOnline={isOnline} />
          <FriendAvatar src={avatar} alt={name} />
          <Name> {name}</Name>
        </FriendListItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
