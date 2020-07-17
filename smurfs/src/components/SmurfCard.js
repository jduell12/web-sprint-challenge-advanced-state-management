import React from 'react';

//styles
// import {StyledCard} from '../styles/StyledComponents'


const SmurfCard = props => {
    const {smurf} = props;
    const {name, age, height} = smurf;

    return (
        // <StyledCard>
        //     <h3>Name: {name}</h3>
        //     <p>Age: {age}</p>
        //     <p>Height: {height}</p>
        // </StyledCard>
        <div>
             <h3>Name: {name}</h3>
             <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default SmurfCard;