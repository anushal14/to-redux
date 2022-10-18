import { CREATE_TODO, REMOVE_TODO,MARK_TODO_AS_COMPLETED,LOAD_TODOS_FAILURE,LOAD_TODOS_IN_PROGRESS,LOAD_TODOS_SUCCESS } from "./actions"
export const todos = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO: {
            const { todo } = action.payload;
            return state.concat(todo)
        }
        case REMOVE_TODO: {
            const { todo:todoRemove } = action.payload;
            return state.filter(todo => todo.id !== todoRemove.id)
        }
        case MARK_TODO_AS_COMPLETED:{
            const {todo:updatedTodo} = action.payload
            return state.map(todo=>{
                if(todo.id===updatedTodo.id){
                    return updatedTodo
                }
                return todo;
            })
        }
        case LOAD_TODOS_SUCCESS: {
            const {todos} = action.payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS: 
        case LOAD_TODOS_FAILURE:
        default: return state
    }
}

export const isLoading = (state=false,action) =>{
    switch(action.type){
        case LOAD_TODOS_IN_PROGRESS: return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:return false;
        default:return state
    }
}