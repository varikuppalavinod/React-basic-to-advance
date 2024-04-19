import "./ExpenseItem.css"
import ExpensesDate from"./ExpensesDate"
import Card from "../UI/Card"

const ExpenseItem=(props)=>{

    return(
        <Card className="expense-item">
            <div>
                <ExpensesDate date={props.date}/>
            </div>
            <div className="expense-item__location">{props.title}</div>
            <div className="expense-item__description"><h2>{props.location}</h2></div>
            <div className="expense-item__price">{props.price}</div>
        </Card>
    )
}
export default ExpenseItem