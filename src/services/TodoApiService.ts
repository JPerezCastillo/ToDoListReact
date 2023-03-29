import Todo from "../models/Todo";

class TodoApiService
{
    apiUrl: string;

    constructor (){
        this.apiUrl = "http://localhost:3004/todos";
    }

    async getTodos(): Promise<Todo[]> 
    {
        const response = await fetch(`${this.apiUrl}`);
        const data = await response.json();
        return data;
    }
    //für id
    // async getTodo(id: number): Promise<Todo> {
    //     const response = await fetch(`${this.apiUrl}/${id}`);
    //     const data = await response.json();
    //     return data;
    // }

    async createTodo(todo:Todo):Promise<Todo>{
        const response = await fetch (`${this.apiUrl}`,{
            method: "Post",
            headers: {
                'Accept': 'application/json',
                'Content-type': "application/json"
            },
            body : JSON.stringify(todo)
        });
        const data = await response.json();
        return data;
    }
    async updateTodo(todo:Todo):Promise<Todo >
    {
        const response = await fetch(`${this.apiUrl}/${todo.id}`, {
            method: "Put",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify(todo)
        });
        const data = await response.json();
        return data;
    }
    async deleteTodo(id:number): Promise<void>
    {
        await fetch (`${this.apiUrl}/${id}`,{
            method: "Delete",
        });
    }
}
export default TodoApiService;