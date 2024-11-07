import React from 'react';
import './transactionHistory.css';


const TransactionHistory = ({items}) => {
    return(
        <table className="transaction-history">
  <thead>
    <tr>
      <th className="title">Type</th>
      <th className="title">Amount</th>
      <th className="title">Currency</th>
    </tr>
  </thead>

  <tbody>
     {items.map(item => ( 
    <tr key={item.id}>
      <td>{item.type}</td>
      <td >{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
)
}

export default TransactionHistory;