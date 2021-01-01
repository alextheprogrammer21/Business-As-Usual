import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Taskbar(props) {
  const { task, updateTask, id } = props;
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <Tab
            label={task.task}
            onClick={() => {
              updateTask("testtt", id);
            }}
          />
          <Tab label={task.person} />
          <Tab label={task.status} />
          <Tab label={task.dueDate} />
          <Tab label={task.estimatedTime} />
          <Tab label={task.timeTracking} />
        </Tabs>
      </Paper>
    </div>
  );
}

//Convert the task items to state. This will use immutable data patterns
//Have a function in app.js that updates the state
//Pass the function to taskbar which will run onclick for each item
