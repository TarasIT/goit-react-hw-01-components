import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { ThemeProvider } from 'styled-components';
import { TransactionHistory } from './Transactions/TransactionsHistory';

const theme = {
  onlineColor: 'green',
  offlineColor: 'red',
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </ThemeProvider>
  );
};
