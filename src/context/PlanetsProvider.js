/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';

function PlanetsProvider({ children }) {
  // vai usar um hook para fzr uma fetch e capturar as informações
  const { dataPlanets, errors, loading } = useFetch();
  const [valueInput, setValueInput] = useState('');
  const [newPlanets, setNewPlanets] = useState([]);
  const [optionsFilter, setOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [buttonsFiltered, setFiltered] = useState([]);
  // const [listFilters, setListFilters] = useState([]);

  // const addListFilters = ({ column, comparison, inputFilter }) => {
  //   if (optionsFilter.length > 0) {
  //     setListFilters([...listFilters, { column, comparison, inputFilter }]);
  //   }
  // };

  const buttonsClick = (text) => {
    // console.log(text);
    const newOptions = buttonsFiltered.filter((element) => !element.includes(text));
    setFiltered(newOptions);
    const name = text.split(':')[0];

    const dataUpdate = newOptions.reduce((acc, curr) => acc.filter((element) => {
      const textName = curr.split(':')[0];
      const condicion = (curr.split(': ')[1].split(',')[0]);
      const value = curr.split(' ')[3];
      if (condicion === 'maior que') {
        return Number(element[textName]) > Number(value);
      } if (condicion === 'menor que') {
        return Number(element[textName]) < Number(value);
      }
      return Number(element[textName]) === Number(value);
    }), dataPlanets);

    setNewPlanets(dataUpdate);
    setOptions([...optionsFilter, name]);
  };

  const deteleAllFilters = () => {
    setOptions(['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water']);
    setFiltered([]);
    setNewPlanets(dataPlanets);
  };

  const filteredPlanets = () => {
    // const input = valueInput.toLowerCase()
    // console.log(dataPlanets);
    // funcao para filtrar de acordo com o valor do input
    if (valueInput) {
      const data = dataPlanets
        .filter((element) => (element.name.toLowerCase().includes(valueInput)));
      setNewPlanets(data);
      // console.log(newPlanets);
    } else {
      setNewPlanets(dataPlanets);
    }
  };

  // filtro dos numeros
  const numbersFilter = ({ column, comparison, inputFilter }) => {
    setOptions(optionsFilter.filter((option) => option !== column));
    if (optionsFilter.length > 0) {
      setFiltered([...buttonsFiltered, `${column}: ${comparison}, ${inputFilter}`]);
    }

    const dataUpdate = newPlanets.filter((element) => {
      if (comparison === 'maior que') {
        return Number(element[column]) > Number(inputFilter);
      } if (comparison === 'menor que') {
        return Number(element[column]) < Number(inputFilter);
      }
      return Number(element[column]) === Number(inputFilter);
    });
    setNewPlanets(dataUpdate);
  };

  // adicionei loading
  useEffect(() => {
    filteredPlanets();
  }, [valueInput, dataPlanets]);

  // vou prover/injetar esses estados para meus componentes
  const values = useMemo(() => ({
    errors,
    loading,
    valueInput,
    newPlanets,
    setValueInput,
    numbersFilter,
    optionsFilter,
    buttonsFiltered,
    buttonsClick,
    deteleAllFilters,
  }), [loading, errors, newPlanets, valueInput, buttonsFiltered]);

  return (
    <PlanetsContext.Provider value={ values }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {}.isRequired;

export default PlanetsProvider;
