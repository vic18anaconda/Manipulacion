
import { UsersList } from './components/UsersList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UsersList} />
        <Route path="/users/edit/:id" component={EditUser} />
      </Switch>
    </Router>
  );
}