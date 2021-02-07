import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './componentStyle.css';

function Search(props){
  const [searchTerm,setSearchTerm]=useState('');
  const changeHandler=(evt)=>{
    const value = evt.target.value;
    setSearchTerm(value);
  }
  console.log(searchTerm);
    return(
        <div className="search-wrapper">
        <div className="search-content">
        <input onChange={changeHandler} value={props.searchValue} className="input-search" type="text" placeholder="Search Jobs, Internships, Companies, Locations..."/>
        <Link className="btn-search" to={{
          pathname: `/searchJob${searchTerm}`
        }}><div className="search icon"></div></Link>
      </div>
      </div>
    );
}

export default Search;