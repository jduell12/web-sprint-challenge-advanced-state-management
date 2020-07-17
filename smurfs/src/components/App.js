import React, {useState, useEffect} from "react";
import axios from 'axios';

//context
import {SmurfContext} from '../contexts/SmurfContext';
import {FormContext} from '../contexts/FormContext';

//components 
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';


const App = () => {

  const initialFormValues = {
    name: "",
    age: 0,
    height: ""
    
  }

  const [formValues, setValues] = useState(initialFormValues);
  // const [formErrors, setErrors] = useState("");

  const handleChange = e => {
    setValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:3333/smurfs/`, formValues)
      .then(res => {
        addSmurf(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const [smurfList, addSmurf] = useState([]);
  
  useEffect(() => { 
    axios
          .get('http://localhost:3333/smurfs')
          .then(res => {
            addSmurf(res.data);
          })
          .catch(err => {
            console.log(err.message);
          })

  }, [])


  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <SmurfContext.Provider value={{smurfList}}>
        <SmurfList />
        <FormContext.Provider value={{formValues, handleChange, onSubmit}}>
          <SmurfForm />
        </FormContext.Provider>
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
