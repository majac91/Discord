import React from "react";
import Sidebar from "./features/Sidebar/Sidebar";
import Chat from "./features/Chat/Chat";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
