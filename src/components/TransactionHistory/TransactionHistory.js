import { Table, TableCell } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableCell>Type</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Currency</TableCell>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
