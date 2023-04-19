import { IRouteRaw } from "..";
import { AuthLayout } from "../../layouts/AuthLayout";
import { AuthPage } from "../../pages/auth/AuthPage";

export const publicRoutes: IRouteRaw[] = [
	{
		element: <AuthLayout />,
		meta: {
			public: true,
		},
		children: [
			{
				path: 'auth',
				element: <AuthPage />,
			}
		]
	}
];
