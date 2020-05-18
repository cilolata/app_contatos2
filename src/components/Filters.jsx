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
				onClick={props.handleClickInput}
				>
				  <i className="fa fa-search"/>
				</button>
			  </div>
  
			  <button 
			  className="filters__item is-selected"
			  onClick={props.handleClick}
			  >
				Nome <i className="fas fa-sort-down" />
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={props.handleClickCountry}
			  >
				País <i className="fas fa-sort-down"/> 
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={props.handleClickCompany}
			  >
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={props.handleClickDepartment}
			  >
				Departamento
			  </button>
  
			  <button 
			  className="filters__item"
			  onClick={props.handleClickDate} 
			  >
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
		);
	}

export default Filters;
