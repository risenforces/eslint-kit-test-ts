import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Something } from "@app/components/something";
import { SomethingElse } from "@app/components/something-else";

console.log(Something, SomethingElse);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
