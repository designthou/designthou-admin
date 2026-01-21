const route = {
	serviceUrl: 'https://designthou.com',
	AUTH: {
		ROOT: '/auth',
		LOGIN: '/auth/login',
		SIGNUP: '/auth/signup',
		FORGOT_PASSWORD: '/auth/forgot-password',
		RESET_PASSWORD: '/auth/reset-password',
		SIGNUP_CONFIRM: '/auth/signup/confirm',
	},
	SERVICE: {
		ROOT: 'https://designthou.com',
		TERMS: 'https://designthou.com/terms',
		PRIVACY: 'https://designthou.com/privacy',
	},
	ADMIN: {
		ROOT: '/home',
		DASHBOARD: '/dashboard',
		MYPAGE: '/mypage',
		NEWS: '/news',
		FREE_SOURCE: '/open-source',
		COMPETITION: '/competition',
		TIPS: '/tips',
		REVIEWS: '/reviews',
		ONLINE_COURSE: '/online-course',
		USERS: '/user-list',
	},
	OUTER: {
		GITHUB: 'https://github.com/designthou/designthou.com',
	},
};

export default route;
