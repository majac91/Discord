import React from "react";
import Sidebar from "./features/Sidebar/Sidebar";
import Chat from "./features/Chat/Chat";
import Login from "./features/Login/Login";
import "./App.scss";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
