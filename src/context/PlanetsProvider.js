/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';

function PlanetsProvider({ children }) {
  // vai usar um hook para fzr uma fetch e capturar as informações
  const { dataPlanets, errors, loading } = useFetch();
  const [valueInput, setValueInput] = useState('');
  const [newPlanets, setNewPlanets] = useState([]);

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
    // console.log();
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
    errors, loading, valueInput, newPlanets, setValueInput, numbersFilter,
  }), [loading, errors, newPlanets, valueInput]);

  return (
    <PlanetsContext.Provider value={ values }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {}.isRequired;

export default PlanetsProvider;
