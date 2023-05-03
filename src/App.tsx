import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import EditUser from "./components/EditUser";
import { User } from "./types";
import { users } from "./users";

function App() {
  const handleUpdateUser = (updatedUser: User) => {
    // En este caso, simplemente imprimimos la información del usuario actualizado en la consola
    console.log(updatedUser);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <UsersList users={users} />
        </Route>
        <Route exact path="/edit-user">
          <EditUser handleUpdateUser={handleUpdateUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;