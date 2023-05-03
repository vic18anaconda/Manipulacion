import React, { Component } from 'react';

interface Props {
  user: User;
  onSave: (user: User) => void;
  onCancel: () => void;
}

interface State {
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}


class EditUser extends Component<Props, State> {
    state = {
      user: this.props.user,
    };
  
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState(prevState => ({
        user: {
          ...prevState.user,
          [name]: value
        }
      }));
    };
  
    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      this.props.onSave(this.state.user);
    };
  
    render() {
      const { name, email } = this.state.user;
  
      return (
        <div>
          <h2>Edit User</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name} onChange={this.handleInputChange} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={email} onChange={this.handleInputChange} />
            </div>
            <button type="submit">Save</button>
            <button type="button" onClick={this.props.onCancel}>Cancel</button>
          </form>
        </div>
      );
    }
}

export default EditUser; 