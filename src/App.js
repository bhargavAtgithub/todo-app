import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header.component";
import TodoList from "./components/TodoList/TodoList.component";
import SubmitForm from "./components/SubmitForm/SubmitForm.component";

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
          <Header numTodos={this.state.tasks.length} />
          <TodoList tasks={this.state.tasks} onDelete={this.handleDelete} />
          <SubmitForm onFormSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
