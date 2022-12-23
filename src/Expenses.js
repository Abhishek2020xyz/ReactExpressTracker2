import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import './Expenses.css'

const Expenses=(props) =>{
    return(

    <Card className="expenses">
      {props.item.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
{/* <ExpenseItem
      title={props.item[0].title}
      amount={props.item[0].amount}
      date={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[1].title}
      amount={props.item[1].amount}
      date={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[2].title}
      amount={props.item[2].amount}
      date={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[3].title}
      amount={props.item[3].amount}
      date={props.item[3].date}
      ></ExpenseItem>
      <ExpenseItem
      title={props.item[4].title}
      amount={props.item[4].amount}
      date={props.item[4].date}
      /> */}
      </Card>
    );
}
 export default Expenses;