import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Search() {
  const { setValueInput, valueInput } = useContext(PlanetsContext);

  const handleChange = ({ target: { value } }) => {
    setValueInput(value);
  };

  return (
    <div>
      <label htmlFor="input-search">
        <input
          value={ valueInput }
          type="text"
          id="input-search"
          onChange={ handleChange }
          data-testid="name-filter"
        />
      </label>
    </div>
  );
}

export default Search;
