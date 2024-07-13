import styles from "./App.module.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import { Sidebar } from "./components/Sidebar";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import { useState } from "react";

import { useTheme } from "./hooks/useTheme";
import Tasks from "./pages/Tasks";

function App() {
  const { theme } = useTheme();
  const [position, setPosition] = useState("");
  console.log(position);
  console.log(theme);
  return (
    <div
      className={`${styles.app} ${
        theme === "light" ? styles.light : styles.dark
      } `}
    >
      <BrowserRouter>
        <div className={styles.layout}>
          <Sidebar position={position} />

          <Routes>
            <Route
              path="/auth"
              element={<Account setPosition={setPosition} />}
            />
            <Route path="/" element={<Homepage setPosition={setPosition} />} />
            <Route
              path="/stats"
              element={<Statistics setPosition={setPosition} />}
            />
            <Route
              path="/account"
              element={<Tasks setPosition={setPosition} />}
            />
            <Route
              path="/tasks"
              element={<Account setPosition={setPosition} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
