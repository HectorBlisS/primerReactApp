import React from 'react';

export const HomeDisplay = (props) => {
	return(
			<div className="container">
				<div className="jumbotron">
				  <h1 className="display-3">Bienvenido</h1>
				  <p className="lead">
				  	Esta pagina es una muestra de React js
				  </p>
				  <hr className="my-4" />
				  <p>
				  	Sientente libre de dar click
				  </p>
				  <p className="lead">
				    <a className="btn btn-primary btn-lg" href="!#" role="button">
				    	¡Empezar!
				    </a>
				  </p>
				</div>
			</div>
		);
}


