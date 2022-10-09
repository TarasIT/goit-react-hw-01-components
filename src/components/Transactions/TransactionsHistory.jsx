import PropTypes from 'prop-types';
import {
  TransactionsTable,
  Header,
  Row,
  ColumnTitle,
  Transactions,
  TransactionsResult,
} from './TransactionsHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionsTable>
      <Header>
        <Row>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </Row>
      </Header>
      {transactions.map(({ id, type, amount, currency }) => {
        return (
          <Transactions key={id}>
            <Row>
              <TransactionsResult>{type}</TransactionsResult>
              <TransactionsResult>{amount}</TransactionsResult>
              <TransactionsResult>{currency}</TransactionsResult>
            </Row>
          </Transactions>
        );
      })}
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
