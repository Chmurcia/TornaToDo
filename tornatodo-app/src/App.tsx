import styles from "./App.module.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";
import Statistics from "./pages/Statistics";
import Account from "./pages/Account";
import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const [position, setPosition] = useState("");
  console.log(position);
  return (
    <ThemeProvider>
      <div className={styles.app}>
        <BrowserRouter>
          <div className={styles.layout}>
            <Sidebar position={position} />
            <Routes>
              <Route
                path="/"
                element={<Dashboard setPosition={setPosition} />}
              />
              <Route
                path="/stats"
                element={<Statistics setPosition={setPosition} />}
              />
              <Route
                path="/account"
                element={<Account setPosition={setPosition} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
