
import React,{useState} from "react"
import "./ExpenseForm.css"

const Expenses=(props)=>{
    const[enteredtitle,setenteredtitle]=useState('')
    const[enteredamount,setenteredamount]=useState('')
    const[entereddate,setentereddate]=useState('')

    const titlechangehandler=(event)=>{
        setenteredtitle(event.target.value)
    }
    const amountchangehandler=(e)=>{
        setenteredamount(e.target.value)
    }
    const datechangehandler=(e)=>{
        setentereddate(e.target.value)
    }

    const submithandler=(event)=>{
        event.preventDefault()
    const expensesdata={
        title:enteredtitle,
        price:enteredamount,
        date:new Date(entereddate),
    }
    setenteredtitle('')
    setenteredamount('')
    setentereddate('')
    props.onSaveexpensedata(expensesdata)
    }
  
    return(
        <form onSubmit={submithandler}>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={enteredtitle} onChange={titlechangehandler}/>
            </div>
            <div  className="new-expense__controls">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount"value={enteredamount}  onChange={amountchangehandler}/>
            </div>
           
            <div  className="new-expense__controls">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={entereddate} onChange={datechangehandler}/>
            </div>
            <div className="new-expense__actions">
                <button onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add expense</button>
            </div>
            </div>
        </form>
    )
}

export default Expenses