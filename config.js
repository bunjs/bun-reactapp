module.exports = {
	dirname: __dirname,
	appname: '$_appname',
	localStaticDomain: '//localhost:8000',
	publicStaticDomain: '//gh.bdstatic.com',
	libs: [],// 需要额外打包的公共库
	commons: false,// 是否需要提取公共文件（2次以上引入，仅限js）优先级低于libs
	vendors: true,// 是否需要提取node_modules中的模块（包含css） 优先级低于vendors
	uglifyJs: true, // 开发模式下无效
	optimizeCSS: true,// 开发模式下无效
	supportFileType: ['jsx','less']// 需要支持的文件格式
}
