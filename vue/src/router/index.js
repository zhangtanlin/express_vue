import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//导入路由集合
import {
	page404,
	appRouter
} from './routers';

// 配置路由
const routerConfig = {
	mode: 'history',
	routes: appRouter
};
const router = new Router(routerConfig);
export default router;

//导入全局进度条模块
import {
	LoadingBar
} from 'iview'

//跳转路由之前验证
router.beforeEach((to, from, next) => {
	LoadingBar.start();
	//登陆状态判定和权限【权限还没做】
	if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
		let userInfo = sessionStorage.getItem('userInfo');//获取当前登录状态
		if (userInfo) { // 如果已登录则正常跳转
			next();
		} else {
			next({
				path: '/login'
			})
		}
	} else {
		next();
	}
})


//路由调用之后
router.afterEach((to) => {
	LoadingBar.finish();
});
