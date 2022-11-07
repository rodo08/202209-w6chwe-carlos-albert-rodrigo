import React, { useEffect } from "react";
import "./App.css";
import useAPI from "./hooks/useApi";

function App() {
  const { getAllRobots } = useAPI();
  useEffect(() => {
    getAllRobots();
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robots</h1>
      </header>
    </div>
  );
}

export default App;
