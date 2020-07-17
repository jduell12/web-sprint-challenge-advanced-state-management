import React from 'react';


const SmurfCard = props => {
    const {smurf} = props;
    const {name, age, height} = smurf;

    return (
        <div>
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
        </div>
    )
}

export default SmurfCard;