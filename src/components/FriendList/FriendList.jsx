import PropTypes from 'prop-types';
import {
  FriendItem,
  Friends,
  Status,
  UserAvatar,
  UserName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <Status status={isOnline}></Status>
          <UserAvatar src={avatar} alt={name} width="48" />
          <UserName>{name}</UserName>
        </FriendItem>
      ))}
    </Friends>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
