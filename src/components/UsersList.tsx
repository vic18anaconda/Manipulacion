import { UsersTable } from './UsersTable';
import { users } from '../users';

export const UsersList = () => {
  return (
    <div>
      <h1>Users List</h1>
      <UsersTable users={users} />
    </div>
  );
};