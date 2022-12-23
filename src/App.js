import React, {useState}  from "react";
import NewExpense from "./NewExpense/NewExpense";
import Expenses from './Expenses';
   
   const DUMMY_EXPENSES = [
    
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2022, 2, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2022, 3, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 4, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2022, 5, 12),
    },
    {
      id: 'e5',
      title:'phone',
      amount:3000,
      date: new Date(2022,6,11)
    }
  ];
  const App = () =>{
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES);
 const addExpenseHandler = (expense)=>{
setExpenses((prevExpenses)=>{
  return [expense, ...prevExpenses];
})
 }
  

  
  return (
    <div>
       <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
      
      
     
    </div>
  );
    }

export default App;
