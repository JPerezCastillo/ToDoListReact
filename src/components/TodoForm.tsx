import Todo from "../models/Todo";
import { useState } from "react";

type TodoFormProps = {
  onAdd: Function;
};

const TodoForm = (props: TodoFormProps) => {
  const [formTodo, setFormTodo] = useState<Todo>(new Todo(""));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement 
    const key = target.id;
    const value = target.type === "checkbox" ? target.checked:target.value;
    
    setFormTodo({ ...formTodo, [key]: value } as Todo);  
  };

  return (
    <form id="todoForm" className="d-flex gap-2">
      <label htmlFor="title"> Title: 
      </label> 
      <input
        type="text"
        id="title"
        name="title"
       className="form-control mb-2"
       placeholder="text eingeben"
        value={formTodo.title}
        onChange={handleInputChange}
      ></input>

      <label htmlFor="description"> Description: </label>
      <input
        type="description"
        id="description"
        name="description"
        placeholder="description eingeben"
       className="form-control mb-2"
        value={formTodo.description}
        onChange={handleInputChange}
      ></input>

      <label htmlFor="amount"> Amount:  </label>
      <input
        type="number"
        id="amount"
        name="amount"
        placeholder="Amount eingeben"
        className="form-control mb-2"
        value={formTodo.amount}
        onChange={handleInputChange}
      ></input>

      <label htmlFor="unit"> Unit: </label>
      <select
      id="unit"
      name="unit"
      value={formTodo.unit}
      onChange={handleInputChange}>
        <option value="gr">gr</option>
        <option value="Kg"> Kg </option>
        <option value="Lt"> Lt </option>
        <option value="Stk"> Stk </option>
      </select>
     
      <button id= "add" type="submit" className="btn btn-primary" onClick={(e)=>{e.preventDefault(); props.onAdd(formTodo)}}>
       Add List ✔️   </button>
    </form>
  );
};
export default TodoForm;
