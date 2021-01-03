import React, { Component } from "react";
import { Stopwatch } from "hooked-react-stopwatch";
import "hooked-react-stopwatch/css/style.css"; // optional

export default function TimeTracker() {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
}
