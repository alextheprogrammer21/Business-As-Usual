import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product

//About Auth
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import Taskbar from "./Taskbar.js";

//About User
import NotFoundPage from "./views/NotFoundPage/NotFoundPage";

const TaskItems = {
  task: "Test task",
  person: "Alex",
  status: "Working",
  dueDate: "Dec 333",
  estimatedTime: "5 hours",
  timeTracking: "4:59",
};
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="wrapper">
        <div className="contentsWrapSpacer" />
        <Switch>
          <div className="contentsWrap">
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Taskbar items={TaskItems} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route
              exact
              path="/register"
              component={Auth(RegisterPage, false)}
            />
          </div>
          <Route component={Auth(NotFoundPage, null)} />
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
