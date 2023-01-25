import React, { useState, useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { numbersFilter, optionsFilter, buttonsFiltered,
    buttonsClick, deteleAllFilters, // addListFilters
  } = useContext(PlanetsContext);
  const [valuesSelect, setValuesSelect] = useState({
    column: 'population',
    comparison: 'maior que',
    inputFilter: 0,
  });

  const handleClick = () => {
    numbersFilter(valuesSelect);
    // addListFilters(valuesSelect);
  };

  useEffect(() => {
    setValuesSelect({ ...valuesSelect, column: optionsFilter[0] });
  }, [optionsFilter]);

  const handleChange = ({ target }) => {
    setValuesSelect({
      ...valuesSelect,
      [target.name]: target.value,
    });
    // console.log(inputFilter);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ valuesSelect.column }
        onChange={ handleChange }
        name="column"
      >

        {
          optionsFilter.map((option, index) => (
            <option key={ index } value={ option }>{option}</option>
          ))
        }

        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>

      <select
        data-testid="comparison-filter"
        value={ valuesSelect.comparison }
        onChange={ handleChange }
        name="comparison"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <label htmlFor="isNumber">
        <input
          type="number"
          id="isNumber"
          data-testid="value-filter"
          value={ valuesSelect.inputFilter }
          onChange={ handleChange }
          name="inputFilter"
        />
      </label>
      <button
        id="filter"
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>

      <button
        onClick={ () => deteleAllFilters() }
        type="button"
        data-testid="button-remove-filters"
      >
        Apagar Filtros
      </button>
      <div>
        {
          buttonsFiltered.map((element, index) => (
            <div
              key={ index }
              data-testid="filter"
            >
              {element}
              <button
                data-testid={ `remove-${index}` }
                type="button"
                onClick={ () => buttonsClick(element) }
              >
                Apagar
              </button>
            </div>
          ))
        }
      </div>

    </div>

  );
}

export default Filter;
