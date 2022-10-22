import React from "react";
import "../style.css";
import Navigation from "../components/navigation";

function Home() {
  return (
    <div className="main">
      <h1>Home</h1>
      <Navigation />
      <section>
        <img src="https://placedog.net/340/380?id=12" alt="random dog" />
        <img src="https://placedog.net/340/380?id=15" alt="random dog" />
        <img src="https://placedog.net/340/380?id=22" alt="random dog" />
      </section>
    </div>
  );
}

export default Home;
