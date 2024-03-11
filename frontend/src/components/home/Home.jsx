import React from "react";
import "./home.css";
const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Empower Your Productivity <br /> One Task at a Time.
        </h1>
        <p className="text-center">
          Unlock your productivity potential with our intuitive todo app.
          Seamlessly organize tasks, set priorities, <br />
          and stay on top of your goals effortlessly.
        </p>
        <button class="home-btn p-2">Make Todo List</button>
      </div>
    </div>
  );
};

export default Home;
