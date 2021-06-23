import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { DetailsPage } from '../ Components/DetailsPage';
import { ListingPage } from '../ Components/ListingPage';
import { OrderPage } from '../ Components/OrderPage';

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/list' component={ListingPage} />
					<Route path='/order' component={OrderPage} />
					<Route path='/product/:productId' component={DetailsPage} />
					<Redirect to='/list' />
				</Switch>
			</div>
		</Router>
	);
};
