import React from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"


const NewExpense=(props)=>{

    const addexpensedata=(entereddata)=>{
        const expensedata={
            ...entereddata,
            id:Math.random(),
        }
        props.onaddexpense(expensedata)
    }
    return(
        <div className="new-expense">
        <ExpenseForm onSaveexpensedata={addexpensedata}/>
        </div>
    )
}
export default NewExpense