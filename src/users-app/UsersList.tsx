import React from 'react';
import { Link } from 'react-router-dom';
import { User } from './types.ts';

type Props = {
  users: User[];
};

const UsersList = ({ users }: Props) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/edit/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;