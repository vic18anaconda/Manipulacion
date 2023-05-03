import React from 'react';
import { User } from './types';

type EditUserProps = {
  user: User | null;
  onSave: (user: User) => void;
};

const EditUser = ({ user, onSave }: EditUserProps) => {
  const [name, setName] = React.useState<string>(user?.name || '');
  const [email, setEmail] = React.useState<string>(user?.email || '');
  const [age, setAge] = React.useState<number | undefined>(user?.age);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedUser: User = { ...user, name, email, age : age ?? 0 };
    onSave(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="age">Age: </label>
        <input
          id="age"
          type="number"
          value={age || ''}
          onChange={(event) => setAge(parseInt(event.target.value))}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;