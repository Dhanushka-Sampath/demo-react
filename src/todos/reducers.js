//this is our reducer
import { CREATE_TODO, REMOVE_TODO } from "./actions";

export const todos = (state =[], action)=>{//setting default value to a reducer by passing empty array
    const{type, payload} = action;

     //have a switch block and decide what to do based on that.
    switch(type){
        case CREATE_TODO:{
            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const { text } = payload;            
            return state.filter(todo => todo.text !== text);
        }
        default: 
            return state;//return the unchanged state if reducer doesnt make any change

    }   
}