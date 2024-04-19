import "./ExpenseItem.css"

const ExpenseItem=()=>{

    const expansedate=new Date(2023,7,15).toISOString();
    const expansetitle="insurance"
    const expanseamount="$100"
    const expanselocation="hyderabad"
    return(
        <div className="expense-item">
            <div>{expansedate}</div>
            <div className="expense-item__location">{expanselocation}</div>
            <div className="expense-item__description"><h2>{expansetitle}</h2></div>
            <div className="expense-item__price">{expanseamount}</div>
        </div>
    )
}
export default ExpenseItem