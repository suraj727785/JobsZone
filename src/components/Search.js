import React from 'react';
import './componentStyle.css';

function Search(props){
    return(
        <div className="search-wrapper">
        <div className="search-content">
        <input onChange={props.query} className="input-search"  onKeyUp={e => { props.onKeyUp(e)}} type="text" placeholder="Search Jobs, Internships, Companies, Locations..."/>
        <button data-query={props.data} onClick={e => {props.onClick()}} className="btn-search"><div className="search icon"></div></button>
      </div>
      </div>
    );
}

export default Search;