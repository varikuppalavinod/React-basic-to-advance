import "./ExpenseItem.css"

const monthes=[
    "january","february","march","april","may","june","july","august",
    "september","octomber","november","december"
]

const ExpenseItem=(props)=>{
    const month=monthes[props.date.getMonth()];
    const year=props.date.getFullYear();
    const day=props.date.getDate();

    return(
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__location">{props.title}</div>
            <div className="expense-item__description"><h2>{props.location}</h2></div>
            <div className="expense-item__price">{props.price}</div>
        </div>
    )
}
export default ExpenseItem