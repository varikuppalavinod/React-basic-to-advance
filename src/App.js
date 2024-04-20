
import Expanses from "./Components/Expenses/Expenses"
import NewExpense from "./Components/NewExpense/NewExpense"

const App=()=>{

  const expanses=[
    {id:1,date:new Date(2020,7,15), title:"insurance" , price:"$100", location:"hyderabad"},
    {id:2,date:new Date(2021,8,16), title:"banking" , price:"$200", location:"bangalore"},
    {id:3,date:new Date(2022,9,17), title:"books" , price:"$300", location:"delhi"},
    {id:4,date:new Date(2023,10,19), title:"food" , price:"$400", location:"mumbai"},
  ]
  return(
    <div>
      <h2>lets get started</h2>
      <NewExpense/>
     <Expanses expanses={expanses}/>
     
    </div>
  )
}

export default App

/*

 <div>
      <h2>lets get started</h2>
      <ExpenseItem
      date={new Date(2023,7,15)}
      title="insurance"
      location="delhi"
      price="$100"/>

<ExpenseItem
      date={new Date(2023,7,16)}
      title="banking"
      location="hyd"
      price="$200"/>

<ExpenseItem
      date={new Date(2023,7,17)}
      title="business"
      location="nalgonda"
      price="$300"/>

<ExpenseItem
      date={new Date(2023,7,18)}
      title="market"
      location="mumbai"
      price="$500"/>

      */