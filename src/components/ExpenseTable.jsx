const ExpenseTable = ({ expenses, deleteExpense, requestSort }) => {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort('description')}>Description</th>
            <th onClick={() => requestSort('amount')}>Amount</th>
            <th onClick={() => requestSort('category')}>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(expense => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button 
                  onClick={() => deleteExpense(expense.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default ExpenseTable;