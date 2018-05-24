//生产环境判定
const env = process.env.NODE_ENV == 'development' ?
    'http://localhost:3000' :
    'http://localhost:3000';
export default env;