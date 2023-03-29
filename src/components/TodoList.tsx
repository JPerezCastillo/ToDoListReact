import { useEffect, useState } from "react";
import TodoApiService from "../services/TodoApiService";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const apiService = new TodoApiService();

  useEffect(() => {
    fetchTodos();
  });

  const fetchTodos = async () => {
    const data = await apiService.getTodos();
    setTodos(data);
  };
  const handleDone = (todo: Todo) => {
    todo.done = !todo.done;
    setTodos(todos.map((element) => (element.id === todo.id ? todo : element)));
    apiService.updateTodo(todo);
  };
  const handleRemove = (id: number) => {
    setTodos(todos.filter((element) => element.id !== id));
    apiService.deleteTodo(id);
  };
  const handleAdd = async (todo: Todo) => {
    const createdTodo = await apiService.createTodo(todo);
    setTodos([...todos , createdTodo]);
  };

  return (
    <>
      <div className="d-flex gap-2">
          <TodoForm onAdd={handleAdd}></TodoForm>
        </div>
        <br></br>
        <br></br>
        <div className="d-flex gap2">
          {todos.map((element) => {
            return (
              <div key={element.id}>
                <TodoItem
                  todo={element}
                  onDone={handleDone}
                  onRemove={handleRemove}
                ></TodoItem>
              </div>
            );
          })}
        </div>
    </>
  );
};
export default TodoList;
