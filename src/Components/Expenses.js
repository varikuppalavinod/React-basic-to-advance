import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
const Expenses=(props)=>{
    return(
        <div className="expenses">
            {props.expanses.map((expense)=>{
                return(
                    <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.price}
                    location={expense.location}/>
                )
            })}
        </div>
    ) 
}
export default Expenses