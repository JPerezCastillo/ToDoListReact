import Todo from "../models/Todo";

type TodoItemProps = {
  todo: Todo;
  onDone: Function;
  onRemove: Function;

};

const TodoItem = (props: TodoItemProps) => {
  const getButton = () => {
    return props.todo.done === true ? "Done" : "Not Done";
  };

  return (
    <div className="d-flex gap-2">
      <table className="table" id ="todolist">
        <thead className="table-responsive">
          <tr>
            <th scope="col"> # </th>
            <th scope="col"> Title</th>
            <th scope="col"> Description</th>
            <th scope="col"> Amount</th>
            <th scope="col"> Unit </th>
            <th scope="col"> Done </th>
            <th scope="col"> Action </th>
          </tr>
        </thead>

        <tbody className="table-responsive">
          <tr className="">
            <th>{props.todo.id} </th>
            <td>{props.todo.title}</td>
            <td> {props.todo.description}</td>
            <td> {props.todo.amount}</td>
            <td> {props.todo.unit}</td>
            <td> {props.todo.done ? "➕": "✖️" }</td>
            <td className="d-flex gap-2">
              <button className="btn btn-sm" onClick={()=>props.onDone(props.todo)}>{getButton()}</button>
              <button className="btn btn-sm" onClick={() => props.onRemove(props.todo.id)}>
                Delete ❌
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TodoItem;
