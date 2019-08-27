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

class Action_Show_Example extends bun.class['$_appname'] {
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
        let dataClass = new Model_Services_DataStation().getClassName(ctx.path);
        let objServicePageData = new dataClass().execute(bsCommon);
        
        bsCommon['type'] = ctx.request.query.type || 'a';
        state = Object.assign(state, objServicePageData);

        const initialState = state;

        await ctx.render('example',{
            message: 'Bunjs is ready!',
            state: JSON.stringify(state)
        });
    }
}

module.exports = Action_Show_Example;