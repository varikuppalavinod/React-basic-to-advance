import "./ExpensesDate.css"

const monthes=[
    "january","february","march","april","may","june","july",
    "august","september","octomber","november","december"

]

const ExpenseDate=(props)=>{
    const month=monthes[props.date.getMonth()]
    const year=props.date.getFullYear()
    const day=props.date.getDate()
    return(
     <div className="expense-date">
   <div>{month}</div>
   <div>{year}</div>
   <div>{day}</div>
     </div>
    )
}
export default ExpenseDate