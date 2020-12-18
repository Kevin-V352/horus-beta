import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Dashboard from './components/body/dashboard/dashboard';

//----Components----//

function App() {
  return (
    <div>
      <Route path='/' component={Header}/>
      <Route exact path='/Dashboard' component={Dashboard}/>
    </div>
  );
}

export default App;
