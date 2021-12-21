import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";


<<<<<<< HEAD
=======
const HatsPage=()=>(
    <div>
        <h1>hats page be mola</h1>
    </div>
)

>>>>>>> 9de7810d0b5f7fd056383e6a517cc84e290005e4


function App() {
  return (
    <div >
        <Route exact path='/'  component={HomePage}/>
<<<<<<< HEAD
=======
        <Route  path='/hats' component={HatsPage}/>
>>>>>>> 9de7810d0b5f7fd056383e6a517cc84e290005e4
    </div>
  );
}

export default App;
