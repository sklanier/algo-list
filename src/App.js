import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddAlgo } from './components/AddAlgo';
import { EditAlgo } from './components/EditAlgo.js';
import { Home } from './components/Home';
import './stylesheet/styles.css';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddAlgo} exact />
          <Route path="/edit/:id" component={EditAlgo} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;