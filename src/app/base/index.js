import configureStore from './configureStore';
import App from './App.jsx';

const appPath = '/$_appname';// 重要！！！！！
const routesConfig = require('./routes')(appPath);


//暴露给后端渲染用
module.exports = {
  configureStore,
  App,
  routesConfig
}