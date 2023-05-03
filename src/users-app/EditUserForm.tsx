import React, { useState } from 'react';
import { User } from './types.ts';

interface Props {
    user?: User;
    onUpdateUser: (updatedUser: User) => void;
  }
  
  const EditUserForm: React.FC<Props> = ({ user, onUpdateUser }) => {
    const [name, setName] = React.useState(user?.name || '');
    const [email, setEmail] = React.useState(user?.email || '');
  
    if (!user) {
      return <div>User not found</div>;
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const updatedUser = { ...user, name, email };
      onUpdateUser(updatedUser);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    );
  };
  
  export default EditUserForm;