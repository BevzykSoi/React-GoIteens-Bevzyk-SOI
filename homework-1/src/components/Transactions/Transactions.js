const Transactions = props => {
    return (
        <table className="transaction-history">
            <thead>
                <tr key="head">
                    <th key="type">Type</th>
                    <th key="amount">Amount</th>
                    <th key="currency">Currency</th>
                </tr>
            </thead>

            <tbody>
                {props.items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.type.toUpperCase()}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Transactions;