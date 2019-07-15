import React from "react";
import { Route } from 'react-router-dom';
import Projects from './components/Projects'
import Project from './components/Project'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Projects} />
        <Route
          path="/project/:id"
          render={routeProps => <Project {...routeProps} />}
        />
      </header>
    </div>
  );
}

export default App;
