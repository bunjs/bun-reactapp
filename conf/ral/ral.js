module.exports={
    'nsclick': {           // 声明服务名为dsp_server
        // 请求协议与数据格式配置
        protocol: 'http',              // 使用http协议请求
        unpack: 'querystring',                // 约定服务端返回JSON数据
        pack: 'querystring',
        encoding: 'gbk',             // 服务器返回utf-8编码
        // 负载均衡与超时重试配置
        balance: 'roundrobin',         // 负载均衡策略
        timeout: 1000,                  // 请求最长超时时间500ms
        retry: 2,                      // 请求重试次数
        // path: '/RpService/search',      // API路径
        
        // 后端地址配置
        // server: [                      // 可以配置多个后端地址
        //     {
        //         bns: 'group.ess-nsclick.passport.cn'
        //     }
        // ],
        webfoot: "group.ess-nsclick.passport.cn"
    },
    'webfoot': {           // 声明服务名为dsp_server
        // 请求协议与数据格式配置
        protocol: 'http',              // 使用http协议请求
        unpack: 'querystring',                // 约定服务端返回JSON数据
        pack: 'querystring',
        encoding: 'gbk',             // 服务器返回utf-8编码
        // 负载均衡与超时重试配置
        balance: 'roundrobin',         // 负载均衡策略
        timeout: 1000,                  // 请求最长超时时间500ms
        retry: 2,                      // 请求重试次数
        path: '/RpService/search',      // API路径
        
        // 后端地址配置
        
        webfoot: "group.ess-nsclick.passport.cn"
    },
    'PASSPORT': {
        unpack: 'mcpack2',
        pack: 'mcpack2',
        encoding: 'gbk',
        balance: 'random',
        protocol: 'nshead',
        server: [{
            host: '127.0.0.1',
            port: 9080
        }]
    },
}
