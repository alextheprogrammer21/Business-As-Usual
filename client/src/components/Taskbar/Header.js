import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "./Header.css";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Tabs indicatorColor="secondary" textColor="secondary" centered>
          <Tab label="" />
          <Tab id="headerTitles" label="Assigned-To" />
          <Tab id="headerTitles" label="Status" />
          <Tab id="headerTitles" label="Due Date" />
          <Tab id="headerTitles" label="Time Estimate" />
          <Tab id="headerTitles" label="Time Tracking" />
        </Tabs>
      </Paper>
    </div>
  );
}
