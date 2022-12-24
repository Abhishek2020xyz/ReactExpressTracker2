import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import Expensesfilter from "./ExpensesFilter";
import './Expenses.css'


const Expenses=(props) =>{
const [filteredYear,setFilteredYear]=useState('2020');
const filterChangeHandler = selectedYear =>{
  setFilteredYear(selectedYear);
}
const filteredExpenses = props.item.filter(expense =>{
  return expense.date.getFullYear().toString() === filteredYear;
})

    return(

    <Card className="expenses">
      <Expensesfilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}

      </Card>
    );
}
 export default Expenses;