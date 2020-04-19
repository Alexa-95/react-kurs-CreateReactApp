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
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "kupić babeczki",
        date: "2020-08-19",
        important: false,
        active: true,
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

  counter = this.state.tasks.length;

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

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, //text z inputa
      date, //data z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
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
