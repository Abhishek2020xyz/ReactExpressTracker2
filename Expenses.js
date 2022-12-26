import React,{useState} from "react";

import Card from "./Card";
import Expensesfilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'



const Expenses=(props) =>{
const [filteredYear,setFilteredYear]=useState('2020');
const filterChangeHandler = selectedYear =>{
  setFilteredYear(selectedYear);
}
const filteredExpenses = props.item.filter(expense =>{
  return expense.date.getFullYear().toString() === filteredYear;
});

    return(

    <Card className="expenses">
      <Expensesfilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
     <ExpensesList items={filteredExpenses} />
    
      </Card>
    );
      }
 export default Expenses;