import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, description: 'Electricity bill', amount: 80, category: 'Utilities' },
    { id: 3, description: 'Movie tickets', amount: 15, category: 'Entertainment' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ExpenseForm setExpenses={setExpenses} />
      <ExpenseTable 
        expenses={expenses.filter(expense => 
          expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          expense.category.toLowerCase().includes(searchTerm.toLowerCase())
        )} 
      />
    </div>
  );
}

export default App;