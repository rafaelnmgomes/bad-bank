import React from "react";
import Logo from "../src/images/bank.png";

function Home() {
  return (
    <div class="card home-container" style={{ width: "25rem" }}>
      <img class="card-img-top" src={Logo} alt="Logo" />
      <div class="card-body">
        <h2 class="card-title">Welcome to the bank</h2>
        <p class="card-text">For all your banking needs</p>
      </div>
    </div>
  );
}

export default Home;
