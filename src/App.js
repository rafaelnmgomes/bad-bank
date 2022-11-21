import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllData from "./AllData";
import "./App.css";
import CreateAccount from "./CreateAccount";
import Deposit from "./Deposit";
import Home from "./Home";
import Navbar from "./Navbar";
import { HistoryContext, UserContext } from "./Contexts";
import Withdraw from "./Withdraw";

function App() {
  const [user, setUser] = React.useState({
    name: null,
    password: null,
    balance: 0,
    email: null,
  });

  const [history, setHistory] = React.useState([]);

  return (
    <Router>
      <div>
        <Navbar />
        <HistoryContext.Provider value={{ history, setHistory }}>
          <UserContext.Provider value={{ user, setUser }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/create-account"
                  element={<CreateAccount />}
                />
                <Route exact path="/deposit" element={<Deposit />} />
                <Route exact path="/withdraw" element={<Withdraw />} />
                <Route exact path="/alldata" element={<AllData />} />
              </Routes>
            </div>
          </UserContext.Provider>
        </HistoryContext.Provider>
      </div>
    </Router>
  );
}

export default App;
