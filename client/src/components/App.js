import React from "react";
import { Route, Switch } from "react-router-dom";
import Taskbar from "./Taskbar/Taskbar";
import Header from "./Taskbar/Header";
const tasks = [
  {
    task: "Test task",
    person: "Alex",
    status: "Working",
    dueDate: "Dec 1",
    estimatedTime: "5 hours",
    timeTracking: "4:59",
  },
  {
    task: "Update stuff",
    person: "Alex",
    status: "Paused",
    dueDate: "Dec 2",
    estimatedTime: "2 hours",
    timeTracking: "0:00",
  },
];

const taskList = tasks.map((task) => {
  return <Taskbar key={task.task} task={task} />;
});

const updateTaskbar = (param) => {
  console.log("is it working", param);
};

function App() {
  return (
    <div>
      <Header />
      {taskList}
    </div>
  );
}

export default App;
