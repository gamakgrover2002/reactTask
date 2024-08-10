import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Link to="/hook">
        <button>useForm Form</button>
      </Link>
      <Link to="/customhook">
        <button>CustomHook Form</button>
      </Link>
    </div>
  );
}

export default Home;
