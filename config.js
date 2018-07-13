module.exports = {
	dirname: __dirname,
	appname: '$_appname',
	localStaticDomain: '//localhost:8000',
	publicStaticDomain: '//gh.bdstatic.com',
	libs: ['react', 'react-dom', 'history', 'react-router-dom','react-redux', 'redux', 'antd'],// 需要额外打包的公共库
	supportFileType: ['jsx','less']// 需要支持的文件格式
}