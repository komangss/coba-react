import React from "react";

// we cant use lifecycle in stateless functional components
const NavBar = ({totalCounters}) => {
  console.log("NavBar Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="localhost:3000">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
