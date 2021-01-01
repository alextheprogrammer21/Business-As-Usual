import React from "react";
import { setState } from "react";
import { Route, Switch } from "react-router-dom";
import Taskbar from "./Taskbar/Taskbar";
import Header from "./Taskbar/Header";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: "1",
      task: "Test task",
      person: "Alex",
      status: "Working",
      dueDate: "Dec 1",
      estimatedTime: "5 hours",
      timeTracking: "4:59",
    },
    {
      id: "2",
      task: "Update stuff",
      person: "Alex",
      status: "Paused",
      dueDate: "Dec 2",
      estimatedTime: "2 hours",
      timeTracking: "0:00",
    },
  ]);

  const updateTask = (param, id) => {
    const found = tasks.find((x) => x.id === id);
    found.task = param;
    setTasks([...tasks]);
  };

  const taskList = tasks.map((task) => {
    return (
      <Taskbar id={task.id} key={task.id} task={task} updateTask={updateTask} />
    );
  });

  return (
    <div>
      <Header />
      {taskList}
    </div>
  );
}

export default App;
