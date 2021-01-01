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

const updateTaskbar = (param) => {
  console.log("is it working", param);
};

export default function Taskbar(props) {
  const task = props.task;
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="primary" centered>
          <Tab
            label={task.task}
            onClick={() => {
              updateTaskbar("test");
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
