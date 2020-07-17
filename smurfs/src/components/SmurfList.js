import React, { useContext } from 'react';

//context
import {SmurfContext} from '../contexts/SmurfContext';

//components
import SmurfCard from './SmurfCard';

//styles
// import {StyledList} from '../styles/StyledComponents'

const SmurfList = () => {
    const {smurfList} = useContext(SmurfContext);

    return (
        <div>
            <h2>Villagers: </h2>
           {/* <StyledList>
                {smurfList.map(smurf => (
                        <SmurfCard 
                            key={smurf.id}
                            smurf = {smurf}
                        />
                ))}
           </StyledList> */}
           {smurfList.map(smurf => (
                        <SmurfCard 
                            key={smurf.id}
                            smurf = {smurf}
                        />
                ))}
        </div>
    )
}

export default SmurfList;