import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement(
    "h1",
    {
      title: "heading",
      id: "main-heading",
      style: { color: "orange", fontSize: "40px" },
    },
    "Welcome to React Js from React !!!"
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);