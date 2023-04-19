import { Router } from '@remix-run/router';
import { IRouteRaw } from '../routes';

export const useAuthenticate = (router: Router) => {
	const token = localStorage.getItem('token');
	if (!token && router.state.location.pathname !== '/auth') {
		router.navigate('/auth');
	} else if (token && router.routes.some((route: IRouteRaw) => route.meta!?.public)) {
		router.navigate('/');
	}
}