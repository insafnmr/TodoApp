import { ADD_TODO, CHANGE_TODO, DELETE_TODO, EDIT_TODO, TOGGLE_TODO } from "../Constants/actions-types"
import { v4 as uuidv4 } from 'uuid';

export const addTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: {newTodo, id: uuidv4(), isDone: false}
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const editTodo = (updatedTodo) => {
    return {
        type: EDIT_TODO,
        payload: updatedTodo
    }
}

export const changeTodo = (filter) => {
    return {
        type: CHANGE_TODO,
        payload: filter
    }
}