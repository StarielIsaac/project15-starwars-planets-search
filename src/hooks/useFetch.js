import { useEffect, useState } from 'react';

function useFetch() {
  const [dataPlanets, setDataPlanets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const makeFetch = async () => {
    setLoading(true);
    try {
      const data = await fetch('https://swapi.dev/api/planets');
      const json = await data.json();
      const newData = json.results.map((element) => {
        if (element.residents) {
          delete element.residents;
        }
        return element;
      });
      // console.log(newData);
      setDataPlanets(newData);
    } catch (error) {
      setErrors(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    makeFetch();
  }, []);

  return {
    loading, errors, dataPlanets,
  };
}

export default useFetch;
