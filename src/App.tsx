import React, {useState} from 'react';
import {Header} from "./components/layouts/Header";
import {Map} from "./components/Map/Map"
import { SearchContext } from './contexts/search.context';
import {Route, Routes} from "react-router-dom";
import {AddForm} from "./components/AddForm/AddForm";
import {AcceptAd} from "./components/AcceptAd/AcceptAd";

export const App = () => {
    const [search, setSearch] = useState('');

    return (
      <SearchContext.Provider value={{search, setSearch}}>
        <Header/>
          <Routes>
              <Route path="/" element={<Map/>}/>
              <Route path="/add" element={<AddForm/>}/>
              <Route path="/accept/:id" element={<AcceptAd />}/>
          </Routes>

      </SearchContext.Provider>
  );
}
