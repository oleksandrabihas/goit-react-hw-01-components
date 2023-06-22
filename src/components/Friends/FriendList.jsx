import PropTypes from 'prop-types';
import { FriendsList, FriendListItem, FriendAvatar } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <FriendAvatar src={friend.avatar} alt={friend.name} />
          <span> {friend.name}</span>
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