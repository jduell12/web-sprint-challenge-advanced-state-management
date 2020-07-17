import React, {useContext} from 'react';

//context 
import {FormContext} from '../contexts/FormContext'

//styles
import {StyledForm} from '../styles/StyledComponents'

const SmurfForm = () => {

    const {formValues, handleChange, onSubmit} = useContext(FormContext);

    return (
        <>
            <h2>Add A Smurf To The Village...</h2>
                <StyledForm onSubmit={onSubmit}>
                <label htmlFor="name"> 
                    Name: &nbsp;
                    <input id="name" name="name" type="text" placeholder="Enter the smurf name..." value={formValues.name} onChange={handleChange}/>
                </label>
                <br />
                <label htmlFor="age">
                    Age: &nbsp;
                    <input id="age" name="age" type="number" step="1" min="0" placeholder="Enter the smurf age..." value={formValues.age} onChange={handleChange}/>
                </label>
                <br />
                <label htmlFor="height">
                    Height: &nbsp;
                    <input id="height" name="height" type="text" placeholder="Enter in the smurf height" value={formValues.height} onChange={handleChange} />
                </label>
                <br />
                <button>Submit</button>
            </StyledForm>
                      {/* <form onSubmit={onSubmit}>
            <label htmlFor="name"> 
                    Name: &nbsp;
                    <input id="name" name="name" type="text" placeholder="Enter the smurf name..." value={formValues.name} onChange={handleChange}/>
                </label>
                <br />
                <label htmlFor="age">
                    Age: &nbsp;
                    <input id="age" name="age" type="number" step="1" min="0" placeholder="Enter the smurf age..." value={formValues.age} onChange={handleChange}/>
                </label>
                <br />
                <label htmlFor="height">
                    Height: &nbsp;
                    <input id="height" name="height" type="text" placeholder="Enter in the smurf height" value={formValues.height} onChange={handleChange} />
                </label>
                <br />
                <button>Submit</button>
            </form> */}
        </>
    )
}

export default SmurfForm;