import React,{useRef} from "react"
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input"
const MealtemForm = () => {
    const addValue = useRef(0);
    const addChangeHandler = () => {
        addValue.current = addValue.current + 1
        console.log(addValue.current)
    }
    return(
        <form className={classes.form}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button onClick = { addChangeHandler }>+Add</button>
        </form>
    )
}
export default MealtemForm