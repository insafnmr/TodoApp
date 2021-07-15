import React from 'react'
import { ListGroup } from 'react-bootstrap'
import Todo from './Todo'
import './Todo.css'
function TodoList({ todos }) {
    return (
        <>
            <ListGroup>
                {todos.length>0 ? todos.map((todo, index) => <Todo key={index} todo={todo}></Todo>): <h4 className="todo" style={{ color:'#000000a6'}} > Your Todo List is empty ! </h4>}
            </ListGroup>
        </>
    )
}

export default TodoList
