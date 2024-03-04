import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div className="p-3 d-flex flex-column  gap-5">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
