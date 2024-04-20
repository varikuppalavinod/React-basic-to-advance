import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"
import Expensefilter from "./Expensefilter"
const Expenses=(props)=>{
    return(
        <Card className="expenses">
            <Expensefilter/>
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
        </Card>
    ) 
}
export default Expenses