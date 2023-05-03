import React from "react";
import { useHistory } from "react-router-dom";
import { User } from "../types";
import { users } from "../users";

type Props = {
  users: User[];
};

const UsersList = ({ users }: Props) => {
  const history = useHistory();

  const handleEditUser = (user: User) => {
    history.push({
      pathname: "/edit-user",
      state: { user }
    });
  };

  return (
    <div>
      <h2>Users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

UsersList.defaultProps = {
  users
};

export default UsersList;