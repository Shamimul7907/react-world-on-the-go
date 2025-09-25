import React, { useState } from 'react';
import './country.css'

const Country = ({country,handleVisitedCountries}) => {
    const [visited,setVisited] = useState(false);
    

   

const handleVisited =() => {
    if (visited){
        setVisited(false)
    }
    else{
        setVisited(true)
    }
    handleVisitedCountries(country)
    }
    // console.log(country.currencies)
    return (
        <div className={`country ${visited ? 'country-visited' : 'country-not-visited'}`}>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h2>Name:{country.name.common}</h2>
            
             <h3>population:{country.population.population}</h3>       
           <button onClick={handleVisited}>{visited ? 'visited' : 'Not visited'}</button>
        </div>
    );
};

export default Country;