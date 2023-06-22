import styled from 'styled-components';

export const TransactionTable = styled.table`
  margin: 0 auto;
  width: 700px;
  text-align: center;
  margin-top: 40px;
  border-collapse: collapse;

  td,
  th {
    border: 1px solid #c5c6d0;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #77c4ff45;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    color: white;
  }
  td:nth-child(1) {
    text-transform: capitalize;
  }
`;

export const TableHead = styled.thead`
  background-color: #3b7db0c7;
`;
