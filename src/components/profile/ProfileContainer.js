import React, {Component} from 'react';
import {ProfileDisplay} from './ProfileDisplay';


const usuarios = [
	{
		nombre:"Héctor BlisS",
		correo:"contacto@fixter.org",
		nombreInvocador:"bliss",
		foto:"http://ww3.hdnux.com/photos/10/42/70/2240054/7/920x920.jpg"
	},
	{
		nombre:"Lupe",
		correo:"lupilla@fixter.org",
		nombreInvocador:"lupis",
		foto:"https://www.afsc.org/sites/afsc.civicactions.net/files/styles/maxsize/public/images/Lupe%20Thumbnail_0.jpg?itok=wPT_OtQJ"
	},
	{
		nombre:"Nepomuseno",
		correo:"nepito@fixter.org",
		nombreInvocador:"nepoEsAmor",
		foto:"https://pbs.twimg.com/profile_images/539799535191478272/lY_RvgnC.jpeg"
	},
];

class ProfileContainer extends Component{
	render(){
		return(
				<div>
					{usuarios.map((usuario, index)=>{
						return(
							<ProfileDisplay key={index} {...usuario} />	
							);
					})}

				</div>
			);
	}
}

export default ProfileContainer;