import React from 'react';
//import './profile.css';


export const ProfileDisplay = ({foto, nombre, correo, nombreInvocador}) => (
		<div className="container">
			<div className="img-profile">
				<img width="100%" src={foto} alt="profile pic" />
			</div>
			<div class="card text-center">
			  <div class="card-header">
			    Perfil
			  </div>
			  <div class="card-body">
			    <h4 class="card-title">{nombre}</h4>
			    <p class="card-text">{correo}</p>
			    <a href="" class="btn btn-primary">Editar</a>
			  </div>
			  <div class="card-footer text-muted">
			    Nombre de invocador: {nombreInvocador}
			  </div>
			</div>
		</div>
	);