/**
 * @name Services_DataStation
 * @desc 获取前端路由对应的model层类名
 */

class Services_DataStation extends bun.class.$_appname{
    constructor() {
        super();
        this.interfaceMapping = {
            '/example': {
                '/': 'Services_Page_ExampleHomeShow',
                '/one': 'Services_Page_ExampleOneShow'
            }
        };
    }
    getClassName(path) {
        let pathArr = path.replace('/' + this.appName, '').split('/');
        pathArr.shift();
        if (pathArr.length <= 1) {
            
            pathArr.push('');
        }
        if (this.interfaceMapping['/' + pathArr[0]] && this.interfaceMapping['/' + pathArr[0]]['/' + pathArr[1]]) {
            return this.interfaceMapping['/' + pathArr[0]]['/' + pathArr[1]];
        }
    }
}
module.exports = Services_DataStation;