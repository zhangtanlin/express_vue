const modifyPwd = {
	state: {
		modifyPwdSta: false
	},
	getters: {
		modifyPwdGet: (state) => {
			return state.modifyPwdSta;
		}
	},
	mutations: {
		modifyPwdMut: (state) => {
			state.modifyPwdSta = !state.modifyPwdSta;
		}
	},
	actions: {
		modifyPwdAct: (context) => {
			context.commit('modifyPwdMut');
		}
	}
};
export default modifyPwd;
