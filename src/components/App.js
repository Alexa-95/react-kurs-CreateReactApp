import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać wreszcie w wiedźmina 3",
        date: "2020-09-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "kupić babeczki",
        date: "2020-08-19",
        important: true,
        active: false,
        finishDate: null,
      },
      {
        id: 2,
        text: "iść do fryzjera",
        date: "2020-09-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "zrobić kursik z reacta",
        date: "2020-08-19",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // ******  SPOSÓB 1 - FIND INDEX ******

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });

    // ******  SPOSÓB 2 - ARRAY FILTER ******

    let tasks = [...this.state.tasks]; //Wydajniejsze niż Array.from
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };
  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({ tasks });
  };
  render() {
    return (
      <div className="App">
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
