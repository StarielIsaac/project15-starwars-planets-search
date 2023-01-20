import { useMemo } from 'react';
import PlanetsContext from './PlanetsContext';
import useFetch from '../hooks/useFetch';

function PlanetsProvider({ children }) {
  // vai usar um hook para fzr uma fetch e capturar as informações
  const { dataPlanets, errors, loading } = useFetch();

  // vou prover/injetar esses estados para meus componentes
  const values = useMemo(() => ({
    dataPlanets, errors, loading,
  }), [dataPlanets, errors, loading]);

  return (
    <PlanetsContext.Provider value={ values }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {}.isRequired;

export default PlanetsProvider;
