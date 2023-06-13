import React from "react";

import AddUser from "./components/User/AddUser";
import UserList from "./components/User/UserList";

function App() {
  return (
    <div>
      <AddUser />
      <UserList user={[]}/>
    </div>
  );
}

export default App;