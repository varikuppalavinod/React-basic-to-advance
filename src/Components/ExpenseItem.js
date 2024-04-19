import "./ExpenseItem.css"
import ExpensesDate from"./ExpensesDate"

const ExpenseItem=(props)=>{

    return(
        <div className="expense-item">
            <div>
                <ExpensesDate date={props.date}/>
            </div>
            <div className="expense-item__location">{props.title}</div>
            <div className="expense-item__description"><h2>{props.location}</h2></div>
            <div className="expense-item__price">{props.price}</div>
        </div>
    )
}
export default ExpenseItem