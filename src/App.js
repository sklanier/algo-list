import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './stylesheet/styles.css';
import { Home } from './components/Home';
import { AddAlgo } from './components/AddAlgo';
import { EditAlgo } from './components/EditAlgo.js';


import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/add" component={AddAlgo} exact />
        <Route path="/edit/:id" component={EditAlgo} exact />
      </Switch>
    </GlobalProvider>
  );
}

export default App;