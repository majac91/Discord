import React, { useEffect } from "react";
import Sidebar from "./features/Sidebar/Sidebar";
import Chat from "./features/Chat/Chat";
import Login from "./features/Login/Login";
import "./App.scss";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";
function App() {
  //dispatch allows us to shoot values into the data layer
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    //every time the user logs in (auth state changes)
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("user is", authUser);
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout({}));
      }
    });
  }, [dispatch]);

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
