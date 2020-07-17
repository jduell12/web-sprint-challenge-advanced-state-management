import React, {useState, useEffect} from "react";
import axios from 'axios';

//context
import {SmurfContext} from '../contexts/SmurfContext'

//components 
import SmurfList from './SmurfList';


const App = () => {
  const [smurfList, addSmurf] = useState([]);
  const [error, setError] = useState("");
 
  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        addSmurf(res.data);
      })
      .catch(err => {
        setError(err.message);
      })
  }, [])

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfContext.Provider value={{smurfList}}>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
