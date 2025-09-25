import React from 'react';
import './country.css'
const Country = ({country}) => {
    console.log(country.currencies)
    return (
        <div className='country'>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name:{country.name.common}</h2>
            
             <h3>population:{country.population.population}</h3>       
        </div>
    );
};

export default Country;