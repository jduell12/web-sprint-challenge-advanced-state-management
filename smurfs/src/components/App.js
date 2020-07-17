import React from "react";

//context
import SmurfContext from '../contexts/SmurfContext'

//components 
import SmurfList from './SmurfList';


const App = () => {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfContext.Provider>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
