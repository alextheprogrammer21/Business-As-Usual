import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import EditableLabel from "react-editable-label";
import Status from "./Task-Components/Status";
import AssignedTo from "./Task-Components/AssignedTo";
import DueDate from "./Task-Components/DueDate";
import Task from "./Task-Components/Task";
import TimeEstimate from "./Task-Components/TimeEstimate";
import TimeTracker from "./Task-Components/TimeTracker";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Taskbar(props) {
  const { task, updateTask, updateTimeEstimate, updatePerson, id } = props;
  const classes = useStyles();

  return (
    <div>
      <Task />
      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <AssignedTo />
          <Status status={task.status} />
          <DueDate />
          <TimeEstimate />
          <TimeTracker />
        </Tabs>
      </Paper>
    </div>
  );
}

//Convert the task items to state. This will use immutable data patterns
//Have a function in app.js that updates the state
//Pass the function to taskbar which will run onclick for each item
