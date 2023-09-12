import { useEffect, useState } from 'react';
import '../app.css';
import Country from './country';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (countries) => {
    const newVisited = [...visitedCountries, countries];
    setVisitedCountries(newVisited);
  };
  useEffect(() => {
    
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <section>
      <h2>There are {countries.length} countries available</h2>
      <div>
        <h4>Visited Countries {visitedCountries.length}</h4>
        <ol>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ol>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca2} handleVisitedCountries={handleVisitedCountries} country={country} />
        ))}
      </div>
    </section>
  );
};

export default Countries;
