import { createBrowserRouter,  } from 'react-router-dom';
import { RouteObject } from 'react-router/dist/lib/context'
import { Home } from '../pages/Home';
import { MainLayout } from '../layouts/MainLayout';
import { useAuthenticate } from './../hooks/useAuthenticate';
import { AboutPage } from './../pages/AboutPage';
import { publicRoutes } from './public';

export type IRouteRaw = RouteObject & {
	meta?: Record<string, any>;
}

const mainRoute: IRouteRaw[] = [
	{
		element: <MainLayout />,
		meta: {
			public: false,
		},
		children: [
			{
				path: '/',
				element: <Home />,
				
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			
		]
	},
	...publicRoutes
];

const router = createBrowserRouter(mainRoute);

useAuthenticate(router);

export default router;
