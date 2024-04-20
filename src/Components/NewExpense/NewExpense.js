import React,{useState} from "react"
import ExpenseForm from "./ExpenseForm"
import "./NewExpense.css"


const NewExpense=(props)=>{
    const[isediting,setisediting]=useState(false)

    const addexpensedata=(entereddata)=>{
        const expensedata={
            ...entereddata,
            id:Math.random(),
        }
        props.onaddexpense(expensedata)
        setisediting(true)
    }
    const startedithandler=()=>{
        setisediting(true)
    }
    const stoptedithandler=()=>{
        setisediting(false)
    }
    return(
        <div className="new-expense">
        {!isediting && (<button onClick={startedithandler}>Add new expense</button>)}
        {isediting &&(<ExpenseForm onSaveexpensedata={addexpensedata} onCancel={stoptedithandler}/>)}
        </div>
    )
}
export default NewExpense