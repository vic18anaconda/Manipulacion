import React from 'react';
import { User } from './types';

type Props = {
  users: User[];
  onDelete: (user: User) => void;
  onEdit: (user: User) => void;
};

const UsersTable = ({ users, onDelete, onEdit} : Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => onDelete(user)}>Delete</button>
              <button onClick={() => onEdit(user)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;