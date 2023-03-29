class Todo{

    id ?:number;
    title :string;
    description?:string;
    amount?:number;
    unit?:string;
    done:boolean;

    constructor(title:string){
        this.title = title;
        this.done=false;
    }

}
export default Todo