import { ADD_TODO, CHANGE_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../Constants/actions-types";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todos: [],
    filter: "All"

}
const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? {...todo, isDone:!todo.isDone} : todo )
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload.id ? payload : todo)
            }
        case CHANGE_TODO:
            return {
                ...state,
                filter: payload
            }
        default:
            return state
    }
}

export default todoReducer