/**
 * @name Services_DataStation
 * @desc 获取前端路由对应的model层类名
 */

class Model_Services_DataStation extends bun.class.$_appname{
    constructor() {
        super();
        this.interfaceMapping = {
            '/': 'Model_Services_Page_ExampleHomeShow',
            '/one': 'Model_Services_Page_ExampleOneShow'
        };
    }
    getClassName(path) {
        let appPath = path.replace('/' + this.appName, '')
            .replace(/(\/[^?^\/]+).*/ig, '$1') || '/';

        if (this.interfaceMapping[appPath]) {
            return this.interfaceMapping[appPath];
        }
    }
}
module.exports = Model_Services_DataStation;