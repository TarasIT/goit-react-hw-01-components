import user from '../user.json';
import { User } from './User/User';

export const App = () => {
  return (
    <>
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
