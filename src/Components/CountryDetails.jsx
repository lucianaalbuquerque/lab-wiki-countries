import React from 'react';
import { useParams } from 'react-router-dom';

function CountryDetails(props) {
  const { id } = useParams();
  const { countries } = props;

  const countryFound = countries.find((oneCountry) => {
    return oneCountry.alpha3Code === id;
  });

  return (
    <div className="col-7">
    <img src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLowerCase()}.png`} alt='' />
            <h1>{countryFound.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width:'30%'}}>Capital</td>
                  <td>{countryFound.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {countryFound.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {countryFound.borders.map((borderId) => {
                      const countryFound = countries.find((oneCountry) => {
                      return oneCountry.alpha3Code === borderId;
                       });
                      return (<li key={borderId}><a href={borderId}>{countryFound.name.official}</a></li>)
                    })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
  )
}

export default CountryDetails