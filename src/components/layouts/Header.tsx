import React, {SyntheticEvent, useContext, useState} from 'react';
import {Btn} from "../common/Btn";

import './Header.css'
import {SearchContext} from "../../contexts/search.context";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal)
    }

    return <header>
        <h1>
            <a href="/"><strong>Mega</strong> ADS</a>
        </h1>
        <Btn to="/add" text="Add advertisement"/>
        <form className="search" onSubmit={setSearchFromLocalState}>
            <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
            <Btn text="Search"/>
        </form>
    </header>
}