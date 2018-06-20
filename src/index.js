import React from "react";
import ReactDOM from "react-dom";
import "./main.sass";

const Index = () => {
  return (
    <div>
      <blockquote>Webpack react setup</blockquote>
      <div className="rotate" />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
