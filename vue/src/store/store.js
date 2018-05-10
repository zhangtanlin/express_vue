import Vue from 'vue';
import Vuex from 'vuex';

import admin from './modules/admin';
import modifyPwd from './modules/modifyPwd';
import userInfo from './modules/userInfo';

Vue.use(Vuex);

const store = new Vuex.Store({
	//strict: true,//是否用vuex的严格模式
	modules: {
		// namespaced: true,
		admin: admin,
		modifyPwd: modifyPwd,
		userInfo: userInfo
	}
});
export default store;
