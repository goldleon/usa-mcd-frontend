import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

import McDonaldsMaps from "./components/maps/mcdonaldsMaps.component";
import ListMcs from "./components/list-mcs/listMcs.component";

function App() {
  const [mcStores, setMcStores] = useState([]);
  const [searchedStore, setSearchedStore] = useState('');
  const [filteredStoresList, setFilteredStoresList] = useState([]);
  const [error, setError] = useState(undefined);

  const getAllMcs = async () => {
    try {
      const response = await axios.get(
        'https://mcs-backend.herokuapp.com/api/v1/mcdonalds'
      );
      setMcStores(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const getFilteredMcs = async (searchedWorld) => {
    try {
      const response = await axios.get(
        `https://mcs-backend.herokuapp.com/api/v1/mcdonalds/${searchedWorld.toUpperCase()}`
      );
      setFilteredStoresList(response.data);
    } catch (error) {
      setError(error);
    }
  }

  const handleSearchMcStores = (event) => {
    setSearchedStore(event.target.value)
  }

  useEffect(() => {
    if (mcStores.length === 0) getAllMcs()
  }, [mcStores]);

  useEffect(() => {
    if (searchedStore.length >= 2) {
      getFilteredMcs(searchedStore)
    } else {
      getAllMcs();
      setFilteredStoresList([]);
    }
  }, [searchedStore])

  return (
    <div className="App">
      <div className="left-component">
        <div className="search-component">
          <label htmlFor="search">Search for your McDonald</label>
          <input type="text" name="search" id="search" value={ searchedStore } onChange={ handleSearchMcStores } />
        </div>
        <ListMcs error={ error } mcStores={ filteredStoresList.length > 0 ? filteredStoresList : mcStores } />
      </div>
      <div className="right-component">
        <McDonaldsMaps filteredStoresList={ filteredStoresList } />
      </div>
    </div>
  );
}

export default App;
