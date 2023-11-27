import PropTypes from 'prop-types';

const createColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.2 +
    ')';

  return color;
};

export const TransactionHistory = ({ transaction }) => {
    return (
        <table className="transaction-history">
            <thead>
                <tr style={{ backgroundColor: createColor() }}>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transaction.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} style={{ backgroundColor: createColor() }}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape(
        {
            type: PropTypes.string,
            amount: PropTypes.number,
            currency: PropTypes.string
        }
    ))
};