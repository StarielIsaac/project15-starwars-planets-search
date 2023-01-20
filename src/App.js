import React from 'react';
import StarWars from './pages/StarWars';
import './App.css';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <StarWars />
    </PlanetsProvider>
  );
}

export default App;
