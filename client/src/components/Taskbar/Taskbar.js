import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DueDate from "./Tasks/DueDate.js";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Taskbar(props) {
  const items = props.items;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <DueDate />
        <Tab label={items.task} />
        <Tab label={items.person} />
        <Tab label={items.status} />
        <Tab label={items.dueDate} />
        <Tab label={items.estimatedTime} />
        <Tab label={items.timeTracking} />
      </Tabs>
    </Paper>
  );
}
