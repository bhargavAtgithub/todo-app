import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header.component";
import TodoList from "./components/TodoList/TodoList.component";
import SubmitForm from "./components/SubmitForm/SubmitForm.component";
import Row from "./components/Row/Row.component";
import Col from "./components/Col/Col.component";
import Container from "./components/Container/Container.component";

class App extends React.Component {
  state = {
    tasks: [],
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({ tasks: newArr });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <Row>
            <Header numTodos={this.state.tasks.length} />
          </Row>
          <Row>
            <Col>
              <Container>
                <TodoList
                  tasks={this.state.tasks}
                  onDelete={this.handleDelete}
                />
              </Container>
              <SubmitForm onFormSubmit={this.handleSubmit} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
