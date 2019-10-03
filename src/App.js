import React, { useState } from "react";
import styles from "./App.module.css";
import { Button, Checkbox, Col, Input, Row } from "antd";

function App() {
  const [todos, setTodos] = useState([1, 2, 3]);
  const [input, setInput] = useState("");

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
          {todos.map(() => <ToDoItem/>)}
        </Col>
      </Row>
    </div>
  );
  function addTodo() {
    setTodos([...todos, input]);
  }
}

function ToDoItem() {
  return (
    <div className={styles.listItem}>
      <Checkbox className={styles.checkbox}/>
      <Button className={styles.closeButton} type="primary" shape="circle" icon="close" size="small"/>
    </div>
  );
}

export default App;
