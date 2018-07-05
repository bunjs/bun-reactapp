import configureStore from './base/configureStore';
import App from './base/App.jsx';

const appPath = '/$_appname/example';// 重要！！！！！
const routesConfig = require('./base/routes')(appPath);


//暴露给后端渲染用
module.exports = {
  configureStore,
  App,
  routesConfig
}