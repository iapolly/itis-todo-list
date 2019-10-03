import React from 'react';
import styles from  './App.module.css';
import {Button, Col, Input, Row} from "antd";

function App() {
    const todos = [1, 2, 3];
  return (
      <div>
          <Row type="flex" justify="center" align="center">
              <Col span={8}>
                  <div className={styles.flex}>
                      <Input />
                      <Button type="primary" className={styles.actionButton}>:)</Button>
                  </div>
              </Col>
          </Row>
          <Row type="flex" justify="center" align="center">

              <Col span={8}>
                  {todos.map(() => <ToDoItem />)}
              </Col>
          </Row>
      </div>
  );
}

function ToDoItem() {
    return (
        <div className={styles.listItem}>
            <Button className={styles.closeButton} type="primary" shape="circle" icon="close" size="small" />
        </div>
    )
}
export default App;
