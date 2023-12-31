import {useContext,createContext} from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completd:false
        }
    ],
    addtodo:(todo)=>{},
    updatetodo:(todo,id)=>{},
    deletetodo:(id)=>{},
    toggletodo:(id)=>{}
});

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider