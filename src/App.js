import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormControl, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import TodoList from './component/TodoList'
import { addTodo, changeTodo } from './Redux/Actions/todoActions'

function App() {
  const [newTodo, setNewTodo] = useState("")
  const [enabledButton, setEnabledButton] = useState(false)
  const todos = useSelector(state => state.todos)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTodo(e.target.value)
    setEnabledButton(e.target.value ? true : false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodo && dispatch(addTodo(newTodo))
    setNewTodo("")
  }


  return (
    <div className="App">
      <h1 style={{ color: '#ffffffa6', margin: 50 }}>TODO List</h1>
      <Form className="input" onSubmit={handleSubmit}>
        <FormControl
          type="text"
          name="todo"
          value={newTodo}
          placeholder="Enter your todo..."
          onChange={handleChange}
        >
        </FormControl>
        <Button variant="primary" disabled={!enabledButton} style={{ height: 40, width: 100 }} type="submit" onClick={addTodo}>
          +
        </Button>
      </Form>
      <TodoList todos={filter === "All" ? todos : todos.filter(todo => todo.isDone === filter)} ></TodoList>

      <ButtonGroup style={{ margin: 20, alignItems: 'center' }} aria-label="Basic example">
        <Button style={{ width: 100, margin: 10, borderRadius: "12px" }} variant="light" onClick={() => dispatch(changeTodo("All"))}>All</Button>
        <Button style={{ width: 100, margin: 10, borderRadius: "12px" }} variant="success" onClick={() => dispatch(changeTodo(true))}>Done</Button>
        <Button style={{ width: 100, margin: 10, borderRadius: "12px" }} variant="secondary" onClick={() => dispatch(changeTodo(false))}>Undone</Button>
      </ButtonGroup>

    </div>
  );
}

export default App;