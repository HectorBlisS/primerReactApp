import React from 'react';
import {Route} from 'react-router-dom';
import HomeContainer from './components/home/HomeContainer'
import ProfileContainer from './components/profile/ProfileContainer';


export const Routes = () => (
		<div>
		    <Route exact path="/" component={HomeContainer} />
       		<Route path="/perfil" component={ProfileContainer} />
		</div>
	);