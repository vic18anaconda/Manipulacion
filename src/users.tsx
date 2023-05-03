import { User } from './types';


const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export const deleteUser = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete user');
  }
};

export const saveUser = async (user: User): Promise<void> => {
  const url = user.id ? `${BASE_URL}/${user.id}` : BASE_URL;
  const method = user.id ? 'PUT' : 'POST';
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error('Failed to save user');
  }
};