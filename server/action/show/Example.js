/***************************************************************************
 *
 * Copyright (c) 2018 Baidu.com, Inc. All Rights Reserved
 * $Id$
 *
 **************************************************************************/

/**
 * @file Index.js
 * @extend bun.$_appname
 * react应用ssr demo
 */

class Action_Show_Example extends bun.class.$_appname {
    constructor() {
        super();
        this.a = 1;
        
    }
    async execute(ctx) {
        let bsCommon = {};
        let state = {
            home: '',
            pageone: ''
        };
        // 获取各前端路由对应的model层入口
        let dataClassName = new Model_Services_DataStation().getClassName(ctx.path);
        let objServicePageData = new this[dataClassName]().execute(bsCommon);
        
        
        bsCommon['type'] = ctx.request.query.type || 'a';
        state = Object.assign(state, objServicePageData);

        const initialState = state;
        // const store = this.Example_Index.configureStore(initialState);
        global.window.config.ismobile = true;

        bun.plugins.SSR({
            ctx, 
            routesconfig: this.Base_Index.routesConfig, 
            configureStore: this.Base_Index.configureStore, 
            initialState
        }, async (renderHtml) => {
            if (renderHtml) {
                await ctx.render('example',{
                    react: renderHtml,
                    state: JSON.stringify(state)
                });
            } else {
                ctx.status = 404;
                ctx.body = 'Not found';
            }
        });
        
    }
}

module.exports = Action_Show_Example;