import "./Expensefilter.css"

const Expensefilter=(props)=>{

    const filteryear=(e)=>{
        props.filterchange(e.target.value)
    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <div><h4>filter by year</h4></div>
            <div>
                <select value={props.selected} onChange={filteryear}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  
                </select>
            </div>
        </div>
        </div>
    )
}
export default Expensefilter