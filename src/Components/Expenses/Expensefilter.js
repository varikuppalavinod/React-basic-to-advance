import "./Expensefilter.css"

const Expensefilter=()=>{
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <div><h4>filter by year</h4></div>
            <div>
                <select>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                  
                </select>
            </div>
        </div>
        </div>
    )
}
export default Expensefilter