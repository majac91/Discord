import React from "react";
import Sidebar from "./features/sidebar/Sidebar";
import Chat from "./features/chat/Chat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
