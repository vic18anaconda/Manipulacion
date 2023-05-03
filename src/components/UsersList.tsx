import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom"
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";

const App = () => {
  const users = [
    { id: 1, name: "John Smith", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UsersList users={users} />
        </Route>
        <Route path="/edit-user">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;