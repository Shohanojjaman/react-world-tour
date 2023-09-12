import { useState } from 'react';

const Country = ({ country, handleVisitedCountries }) => {
  const { name, flags, independent, capital } = country;

  const [visited, setVisited] = useState(false);

  const handleMarkVisited = () => {
    setVisited(!visited);
  };

  const handleVisited = () => {
    handleMarkVisited();
    handleVisitedCountries(country)
  };
  return (
    <div className="country">
      <div>
        <img src={flags.png} alt="" />
        <h3>{name.common}</h3>
      </div>
      <div>
        <h4>Country Info</h4>
        <p>
          <b>Official Name:</b> {name.official} ({independent ? 'Independent' : 'Dependent'})
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
        <button className={`${visited && 'visited'}`} onClick={handleVisited}>
          {visited ? 'Mark as unvisited' : 'Mark as visited'}
        </button>
      </div>
    </div>
  );
};

export default Country;
