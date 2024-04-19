import "./ExpenseItem.css"

const ExpenseItem=(props)=>{

  
    return(
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__location">{props.title}</div>
            <div className="expense-item__description"><h2>{props.location}</h2></div>
            <div className="expense-item__price">{props.price}</div>
        </div>
    )
}
export default ExpenseItem