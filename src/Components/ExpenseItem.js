import "./ExpenseItem.css"

const ExpenseItem=()=>{
    return(
        <div className="expense-item">
            <div> 15-august-2023</div>
            <div className="expense-item__location">delhi</div>
            <div className="expense-item__description"><h2>book</h2></div>
            <div className="expense-item__price">$10</div>
        </div>
    )
}
export default ExpenseItem