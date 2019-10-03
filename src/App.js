import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Checkbox, Col, Input, Row } from "antd";

function App() {
  const [todos, setTodos] = useState([{id: 1, value: 'lala', isResolved: false}]);
  const [input, setInput] = useState('');

  return (
    <div>
      <Row type="flex" justify="center" align="center">
        <Col span={8}>
          <div className={styles.flex}>
            <Input value={input} onChange={(event) => {
              setInput(event.target.value);
            }}/>
            <Button type="primary" onClick={addTodo} className={styles.actionButton}>:)</Button>
          </div>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="center">
        <Col span={8}>
          {todos.map((todo, key) => <ToDoItem key={key} id={todo.id} value={todo.value} isResolved={todo.isResolved} toggle={toggle}/>)}
        </Col>
      </Row>
    </div>
  );

  function toggle(id) {
    const index = todos.findIndex(todo => todo.id === id);

    let todo = todos[index];
    todo = { ...todo, isResolved: !todo.isResolved };

    const newTodos = [...todos];
    newTodos[index] = todo;

    setTodos(newTodos);
  }

  function addTodo() {
    const newTodo = {
      value: input,
      isResolved: false,
      id: todos.length ? todos[todos.length - 1].id + 1 : 0
    };
    setTodos([...todos, newTodo]);
    setInput('');
  }
}

function ToDoItem(props) {
  const { id, value, toggle, isResolved } = props;

  return (
    <div className={styles.listItem} onClick={() => toggle(id)} >
      <Checkbox className={styles.checkbox} checked={isResolved} />
      <span>{value}</span>
      <Button className={styles.closeButton} type="primary" shape="circle" icon="close" size="small" />
      <hr/>
    </div>
  );
}

export default App;
