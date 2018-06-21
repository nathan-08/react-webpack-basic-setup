import React from "react";
import ReactDOM from "react-dom";
import "./main.sass";
import logo from "./img/logo.png";

const Index = () => {
  return (
    <div id="main-container">
      <section id="section">
        <div id="logo">
          <h1>React with Webpack</h1>
          <img src={logo} alt="logo" />
        </div>
        <div className="list">
          <span>Use:</span>
          <ul>
            <li>React components</li>
            <li>html</li>
            <li>css</li>
            <li>sass</li>
            <li>image files</li>
          </ul>
        </div>
        <p className="right-p">
          <p>
            <em>Images smaller than 8kb automatically converted to Base64 strings.</em>
          </p>

          <p>
            <em>Vendor-specific CSS prefixes automatically applied to stylesheets.</em>
          </p>
          <em>Hot module reloading with Webpack Dev Server.</em>
        </p>
        <span className="clear" />
      </section>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));
