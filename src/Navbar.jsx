import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector(".active").classList.remove("active");
    document
      .querySelector(`a[href="${location.pathname}"]`)
      .classList.add("active");
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          BadBank
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" title="Click here to create an account">
              <Link className="nav-link active" to="/create-account">
                Create Account
              </Link>
            </li>
            <li
              className="nav-item"
              title="Click here to deposit any amount on your account"
            >
              <Link className="nav-link" to="/deposit/">
                Deposit
              </Link>
            </li>
            <li
              className="nav-item"
              title="Click here to withdraw from your account"
            >
              <Link className="nav-link" to="/withdraw/">
                Withdraw
              </Link>
            </li>
            <li
              className="nav-item"
              title="Here you can find the history of all your actions"
            >
              <Link className="nav-link" to="/alldata/">
                AllData
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
