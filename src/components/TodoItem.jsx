import React, { useState } from 'react'
import { useTodo } from '../contexts/Todo';
function TodoItem({ todo }) {
    const {updateTodo, toggleComplete, deleteTodo} = useTodo()
    const [istodoEditeAble, setTodoEditable] = useState(false)
    const [task, setTask] = useState(todo.task)
    const edit = ()=>{
     updateTodo(todo.id, {...todo, task: task})
     setTodoEditable(false)
    }
    const toggleCompleted = ()=>{
        console.log(todo.id)
        toggleComplete(todo.id)
    }
    


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
                
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    istodoEditeAble ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                readOnly={!istodoEditeAble}
            />
           
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (istodoEditeAble) {
                        edit();
                    } else setTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {istodoEditeAble ? "📁" : "✏️"}
                
            </button>
           
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
