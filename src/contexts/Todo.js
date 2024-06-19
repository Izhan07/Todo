import { createContext, useContext } from "react";
const createTodo = createContext({
todos : [
    {
        id: 1,
        task: " Todo msg",
        completed: false,
    }

],
    addTodo : (task)=>{},
    updateTodo : (id, task)=>{},
    deleteTodo : (id)=>{},
    toggleComplete : (id)=>{}

})
export  function useTodo(){
    return useContext(createTodo)
}
export default createTodo;