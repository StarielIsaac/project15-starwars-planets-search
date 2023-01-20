import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { dataPlanets } = useContext(PlanetsContext);
  // console.log(`loading:  ${loading}`);
  // console.log(dataPlanets);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gravity</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Terrain</th>
          <th>Diameter</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Climate</th>
          <th>URL</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {
          dataPlanets.map((element) => (
            <tr key={ element.name }>
              <td>{element.name}</td>
              <td>{element.rotation_period}</td>
              <td>{element.orbital_period}</td>
              <td>{element.diameter}</td>
              <td>{element.climate}</td>
              <td>{element.gravity}</td>
              <td>{element.terrain}</td>
              <td>{element.surface_water}</td>
              <td>{element.population}</td>
              <td>{element.films.map((filmes) => <p key={ filmes }>{filmes}</p>)}</td>
              <td>{element.created}</td>
              <td>{element.edited}</td>
              <td>{element.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
