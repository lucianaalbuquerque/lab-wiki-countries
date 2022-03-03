import './App.css';
import { Routes, Route } from 'react-router-dom';
import countriesData from './countries.json'
import axios from 'axios';
import React, {useState, useEffect} from 'react';

import Navbar from './Components/Navbar';
import CountryDetails from './Components/CountryDetails';
import CountriesList from './Components/CountriesList';
import ErrorPage from './Components/ErrorPage';


function App() {
  const [countries, setCountries] = useState(countriesData)

  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => setCountries(response.data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div >
      <Navbar />

      <div className="container">
        <div className="row">
              <CountriesList countries={countries} />
        </div>
      </div>
      <Routes>
        <Route path="/:id" element={<CountryDetails countries={countries}/>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
