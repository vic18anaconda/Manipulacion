import React from 'react';
import { BrowserRouter, Route, RouteComponentProps } from 'react-router-dom';
import { User } from './users-app/types.ts';
import UsersList from './users-app/UsersList.tsx';
import EditUserForm from './users-app/EditUserForm.tsx';

const App = () => {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch('/users');
    const data = await response.json();
    setUsers(data);
  };

  const handleUpdateUser = async (updatedUser: User) => {
    const response = await fetch(`/users/${updatedUser.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedUser)
    });
    const data = await response.json();
    setUsers(users.map(user => user.id === data.id ? data : user));
  };

  return (
    <BrowserRouter>
      <Route exact path="/">
        <UsersList users={users} />
      </Route>
      <Route
        exact
        path="/edit/:id"
        render={({ match }: RouteComponentProps<{ id: string }>) => (
          <EditUserForm
            user={users.find(user => user.id.toString() === match.params.id)}
            onUpdateUser={handleUpdateUser}
          />
        )}
      />
    </BrowserRouter>
  );
};

export default App;