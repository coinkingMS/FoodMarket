import classes from "./Input.module.css";
const Input = (props) => {
  return (
    <div className={classes.input}>
      <lable HtmlFor={props.input.id}>{props.label}</lable>
      <input {...props.input}/>
    </div>
  );
};
export default Input;
