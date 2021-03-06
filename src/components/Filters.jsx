import React from 'react';

import './Filters.scss';

function Filters(props) {	
	return (
		<div className="container" data-testid="filters">
			<section className="filters">
			  <div className="filters__search">
				<input 
				type="text" 
				className="filters__search__input" 
				placeholder="Pesquisar"
				onChange= {props.handleChange}
				/>
  
				<button 
				className="filters__search__icon"
				>
				  <i className="fa fa-search"/>
				</button>
			  </div>
  
			  <button 
			  className="filters__item is-selected name"
			  onClick={(event) => props.handleClick(event, 'name')}
			  >
				Nome <i className="fas fa-sort-down" />
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={(event) => props.handleClick(event, 'country')}
			  >
				País <i className="fas fa-sort-down"/> 
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={(event) => props.handleClick(event, 'company')}
			  >
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={(event) => props.handleClick(event, 'department')}
			  >
				Departamento
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={(event) => props.handleClick(event, 'admissionDate')}
			  >
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
	);
}

export default Filters;
