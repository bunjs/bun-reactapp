/**
 * @name Services_DataStation
 * @desc 获取前端路由对应的model层类名
 */

class Services_DataStation extends bun.class.$_appname{
    constructor() {
        super();
        this.interfaceMapping = {
            '/': 'Services_Page_ExampleHomeShow',
            '/one': 'Services_Page_ExampleOneShow'
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
module.exports = Services_DataStation;