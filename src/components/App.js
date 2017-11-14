import React from 'react';
import FilteredEventList from '../containers/FilteredEventList';
import Filter from '../containers/Filter';
import './App.css';

const App = () => (
  <div className="app-container">
    <Filter />
    <FilteredEventList />
  </div>
);

export default App;
