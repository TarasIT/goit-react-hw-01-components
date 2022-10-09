import styled from 'styled-components';

export const TransactionsTable = styled.table`
  width: 400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 1px solid black;
  text-align: center;
`;

export const Header = styled.thead`
  border: 1px solid black;
  font-size: 20px;
`;

export const Row = styled.tr`
  th {
    :not(:last-child) {
      border-right: 1px solid black;
    }
  }

  td {
    :first-child {
      text-align: left;
      font-weight: 500;
    }

    :not(:last-child) {
      border-right: 1px solid black;
    }
  }
`;

export const ColumnTitle = styled.th`
  border-bottom: 1px solid black;
`;

export const Transactions = styled.tbody`
  :nth-child(2n) {
    background-color: #cac7c7;
  }

  font-size: 18px;
`;

export const TransactionsResult = styled.td`
  padding-left: 5px;
`;
