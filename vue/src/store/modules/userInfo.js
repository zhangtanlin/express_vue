const userInfo = {
	state: {
		userInfoSta: false
	},
	getters: {
		userInfoGet: (state) => {
			console.log(state.userInfoSta)
			return state.userInfoSta;
		}
	},
	mutations: {
		userInfoMut: (state) => {
			console.log(state.userInfoSta);
			state.userInfoSta = !state.userInfoSta;
			console.log(state.userInfoSta);
		}
	},
	actions: {
		userInfoAct: (context) => {
			context.commit('userInfoMut');
		}
	}
};
export default userInfo;
