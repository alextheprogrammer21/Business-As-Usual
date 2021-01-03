import React from "react";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Taskbar from "./Taskbar/Taskbar";
import Header from "./Taskbar/Header";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      task: "The first task",
      person: "Alex",
      status: "Working",
      dueDate: "Dec 1",
      estimatedTime: "5 hours",
      timeTracking: "4:59",
    },
    {
      id: "2",
      task: "Another task about updatnig stuff",
      person: "Joe",
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

  const updateTimeEstimate = (param, id) => {
    const found = tasks.find((x) => x.id === id);
    found.estimatedTime = param;
    setTasks([...tasks]);
  };

  const updatePerson = (param, id) => {
    const found = tasks.find((x) => x.id === id);
    found.person = param;
    setTasks([...tasks]);
  };

  const taskList = tasks.map((task) => {
    return (
      <Taskbar
        id={task.id}
        key={task.id}
        task={task}
        updateTask={updateTask}
        updateTimeEstimate={updateTimeEstimate}
        updatePerson={updatePerson}
      />
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
