import React,{useState} from "react"
import "./ExpenseItem.css"
import ExpensesDate from"./ExpensesDate"
import Card from "../UI/Card"

const ExpenseItem=(props)=>{
    const eventhandler=()=>{
        settitle("updated")
    }

    const[title,settitle]=useState(props.title)

    return(
        <Card className="expense-item">
            <div>
                <ExpensesDate date={props.date}/>
            </div>
            <div className="expense-item__location">{title}</div>
            <div className="expense-item__description"><h2>{props.location}</h2></div>
            <div className="expense-item__price">{props.price}</div>
            <button onClick={eventhandler}>change</button>
        </Card>
    )
}
export default ExpenseItem