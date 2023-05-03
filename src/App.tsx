import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import UsersTable from './UsersTable';
import EditUser from './EditUser';
import { User } from './types';
import { getUsers, deleteUser, saveUser } from './users';

const App = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (user: User) => {
    if (user.id) {
      await deleteUser(user.id);
      await fetchUsers();
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
  };

  const handleSave = async (user: User) => {
    await saveUser(user);
    setSelectedUser(null);
    await fetchUsers();
  };

  return (
    <div>
      <h1>Users List</h1>
      <UsersTable users={users} onDelete={handleDelete} onEdit={handleEdit} />
      <EditUser user={selectedUser} onSave={handleSave} />
    </div>
  );
};

export default App;