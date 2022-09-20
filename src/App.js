import React from 'react'
import './App.css';
 import Navbar from './components/NavSection/Navbar.js';
import HomePage from './components/HomePage/HomePage';
import ForumPage from './components/ForumPage/ForumPage';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import RestPage from './components/RestPage/RestPage';
import Wallet from './components/Wallet/Wallet';


function App() {
  return (  
      <BrowserRouter>
      <Navbar></Navbar>

          <Switch>
            
              <div>
            <Route path="/home">
                 <HomePage></HomePage>
            </Route>
            <Route exact path="/">
            <HomePage></HomePage>

            </Route>
            <Route path="/forum">
              <ForumPage></ForumPage>
            </Route>
            <Route path="/wallet">
              <Wallet></Wallet>
            </Route>
            
           
            </div>
            
            
           </Switch>
          
          </BrowserRouter> 

  );
}

export default App;
