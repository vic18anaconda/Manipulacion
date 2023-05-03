import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Column } from 'react-table';
import { User } from './types';
import React from 'react';

interface Props {
  users: User[];
}

export const UsersTable = ({ users }: Props) => {
  const navigate = useNavigate();

  const columns: Column<User>[] = [
    { Header: 'ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Email', accessor: 'email' },
    {
      Header: '',
      Cell: ({ row }) => (
        <Button
          variant="primary"
          onClick={() => navigate(`/users/edit/${row.original.id}`)}
        >
          Edit
        </Button>
      ),
    },
  ];

  //...
}