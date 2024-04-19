import ExpenseItem from "./Components/ExpenseItem"

const App=()=>{
  return(
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
    </div>
  )
}

export default App