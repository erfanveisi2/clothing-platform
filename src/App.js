import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSinUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";




function App() {
  return (
    <div >
        <Header/>
        <Switch>
            <Route exact path='/'  component={HomePage}/>
            <Route path='/shop' component={ShopPage}/>
            <Route path='/signin' component={SignInAndSinUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
