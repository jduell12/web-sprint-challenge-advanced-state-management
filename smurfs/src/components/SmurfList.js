import React, { useContext } from 'react';

//context
import {SmurfContext} from '../contexts/SmurfContext';

//components
import SmurfCard from './SmurfCard';

const SmurfList = () => {
    const {smurfList} = useContext(SmurfContext);

    return (
        <div>
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