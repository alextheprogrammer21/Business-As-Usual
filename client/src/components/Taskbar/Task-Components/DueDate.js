import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function DueDate() {
  const [value, onChange] = useState();

  let newvalue = JSON.stringify(value);
  console.log(newvalue);
  return (
    <div>
      <Calendar onChange={onChange} value={value} />

      <h1>{newvalue}</h1>
    </div>
  );
}
