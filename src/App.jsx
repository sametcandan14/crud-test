import UserForm from "./components/form/UserForm";
import UserList from "./components/list/UserList";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <UserForm users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
