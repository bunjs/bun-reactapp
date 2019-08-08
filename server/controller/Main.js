class Controller_Main extends bun.class['$_appname'] {
    constructor() {
        super();
        global.navigator = global.navigator || {};
        global.navigator.userAgent = global.navigator.userAgent || 'all';  
    }

    execute() {
        this.Routes.post({
            '/api': '/action/api/Api.js'
        });
        this.Routes.get({
            '/api': '/action/api/Api.js',
            '/*': '/action/show/Example.js'
        });
    }   
}
module.exports = Controller_Main;