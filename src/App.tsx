import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import { User } from "./types";

const App = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);

  const handleUpdateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UsersList users={users} />
        </Route>
        <Route path="/edit-user">
          <EditUser users={users} onUpdateUser={handleUpdateUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;