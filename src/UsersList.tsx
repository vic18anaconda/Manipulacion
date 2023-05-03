import React, { useEffect, useState } from "react";

import { User } from "./types";
import { getUsers } from "./users";

type Props = {
  users: User[];
  onEditUser: (user: User) => void; 
};

const UsersList = ({ users, onEditUser }: Props) => {
 
  const [userList, setUserList ] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUserList(users);
    };
    fetchUsers();
  }, []);

  

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
                <button onClick={() => onEditUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default UsersList;