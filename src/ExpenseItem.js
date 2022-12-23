import React from 'react';
 import ExpenseData from './ExpenseData';
 import Card from './Card';
import './ExpenseItem.css'; 


 const ExpenseItem=(props)=>{

//   //function clickHandler
// const [amount,setAmount]= useState(props.title);
//   const clickHandler = ()=>{
//     setAmount('Why change')
//     console.log(amount);
//   };

    return(
    
        
       <Card className="expense-item">
       <ExpenseData date={props.date} />
       
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
                  
            </div>
        {/* <button onClick={clickHandler}>change Title</button> */}
       </Card>
        );
    }
        
        
export default ExpenseItem
