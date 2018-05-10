//生产环境判定
const env = process.env.NODE_ENV == 'development' ?
	'http://localhost:3000' :
	'http://127.0.0.1:3000';
export default env;
