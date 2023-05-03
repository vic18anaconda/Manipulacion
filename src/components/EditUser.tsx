import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { User } from "../types";

type Props = {
  user: User;
  onSave: (user: User) => void;
};

const EditUser = ({ user, onSave }: Props) => {
  const { register, handleSubmit } = useForm<User>({
    defaultValues: user,
  });

  const history = useHistory();

  const onSubmit = handleSubmit((data) => {
    onSave({ ...user, ...data });
    history.push("/");
  });

  const handleCancel = () => {
    history.push("/");
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Name:</label>
          <input {...register("name")} />
        </div>
        <div>
          <label>Email:</label>
          <input {...register("email")} />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditUser;