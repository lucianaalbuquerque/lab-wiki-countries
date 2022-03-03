import React from 'react';
import { Link } from 'react-router-dom'
 
function CountriesList(props) {
  const {countries} = props;
  
  return (
      <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            
            {countries.map((country) => {
              return (
                <div className="list-group">
                  <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt='' />
                  <Link className="list-group-item list-group-item-action" key={country.alpha3Code} to={`/${country.alpha3Code}`}>
                  {country.name.official} </Link>    
                </div>      
              )})}
              
      </div>
  )
}

export default CountriesList
