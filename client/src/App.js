import React from "react";
import { Route } from 'react-router-dom';
import Projects from './components/Projects'
import Action from './components/Action'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Projects} />
        <Route
          path="/actions/:id"
          render={routeProps => <Action {...routeProps} />}
        />
      </header>
    </div>
  );
}

export default App;
