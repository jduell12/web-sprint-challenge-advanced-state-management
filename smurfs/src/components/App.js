import React, {useState, useEffect} from "react";
import axios from 'axios';

//context
import {SmurfContext} from '../contexts/SmurfContext.js';
import {FormContext} from '../contexts/FormContext.js';

//components 
import SmurfList from './SmurfList.js';
import SmurfForm from './SmurfForm.js';



const App = () => {

  const initialFormValues = {
    name: "",
    age: 0,
    height: ""
    
  }

  const [formValues, setValues] = useState(initialFormValues);

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
      .finally(
        setValues(initialFormValues)
      )
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
    <div >
      <SmurfContext.Provider value={{smurfList}}>
      <FormContext.Provider value={{formValues, handleChange, onSubmit}}>
          <SmurfForm />
      </FormContext.Provider>
        <SmurfList />
      </SmurfContext.Provider>
    </div>
  );

}

export default App;
