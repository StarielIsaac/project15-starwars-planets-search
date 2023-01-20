import React from 'react';
import Table from '../components/Table';
import Search from '../components/Search';
import Header from '../components/Header';
import Filter from '../components/Filter';

function StarWars() {
  return (
    <div>
      <Header />
      <Search />
      <Filter />
      <Table />
    </div>
  );
}

export default StarWars;
