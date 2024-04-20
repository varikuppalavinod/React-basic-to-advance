
import React from "react"
import "./ExpenseForm.css"

const Expenses=()=>{

    const titlechangehandler=(event)=>{
        console.log(event.target.value)
    }
    return(
        <form>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" onChange={titlechangehandler}/>
            </div>
            <div  className="new-expense__controls">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount"/>
            </div>
           
            <div  className="new-expense__controls">
                <label htmlFor="date">Date</label>
                <input type="date" id="date"/>
            </div>
            <div className="new-expense__actions">
                <button>Add expense</button>
            </div>
            </div>
        </form>
    )
}

export default Expenses