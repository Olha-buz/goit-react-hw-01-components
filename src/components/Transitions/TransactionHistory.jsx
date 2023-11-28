import PropTypes from 'prop-types';
import css from './transitions.module.css';



export const TransactionHistory = ({ transaction }) => {
    return (
        <table className="transaction-history">
            <thead className={css.theadTransition}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transaction.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={css.tbodyTr}>
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