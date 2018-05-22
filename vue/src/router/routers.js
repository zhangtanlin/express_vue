//app路由
export const appRouter = [{
		path: '/',
		redirect: "/login",
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import ('@/pages/Login')
	},
	{
		path: '/home',
		// name: 'Home',
		meta: {
			requireAuth: true,
		},
		component: () =>
			import ('@/pages/Home'),
		children: [{
				path: '/',
				name: 'Home',
				meta: {
					requireAuth: true,
				},
				component: () =>
					import ('@/pages/subPages/Welcome')
			}
		]
	},
	{
		path: '/test',
		name: 'Test',
		meta: {
			requireAuth: true,
		},
		component: () =>
			import ('@/pages/Test')
	}
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
	appRouter
];
