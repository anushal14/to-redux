import { CREATE_TODO, REMOVE_TODO } from "./actions"
export const todos = (state = [], action) => {
    switch (action.type) {
        case CREATE_TODO: {
            const { text } = action.payload;
            const newTodo = { text, isCompleted: false }
            return state.concat(newTodo)
        }
        case REMOVE_TODO: {
            const { text } = action.payload;
            return state.filter(todo => todo.text !== text)
        }
        default: return state
    }
}