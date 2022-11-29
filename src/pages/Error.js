import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        oops! page not found.
        <p>
          <Link to="/">
            <h1>Home page</h1> 
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Error;
