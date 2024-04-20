import React,{useState} from "react"
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css"
import Card from "../UI/Card"
import Expensefilter from "./Expensefilter"
const Expenses=(props)=>{
    const[filteryear,setfilteryear]=useState('')

    const filterchangehandler=(year)=>{
        setfilteryear(year)
    }

    const filteredexpenses=props.expanses.filter((expense)=>{
        return expense.date.getFullYear().toString()===filteryear
    })
    return(
        <Card className="expenses">
           
            <Expensefilter selected={filteryear} filterchange={filterchangehandler}/>

            {filteredexpenses.length===0 && <h2>No expenses please add</h2>}
            {filteredexpenses.map((expense)=>{
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