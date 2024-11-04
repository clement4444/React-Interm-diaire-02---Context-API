import "./App.css";
import { useState } from "react";

import UserProfile from "./composent/UserProfile.tsx";
import UserContext from "./composent/UserContext.tsx";


function App() {
  //crée mon useState
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider value={{ isOnline: isOnline, setIsOnline: setIsOnline }}>
      <UserProfile />
    </UserContext.Provider >
  );
}

export default App;