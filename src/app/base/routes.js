import App from './App.jsx';
import Home from '../page/home/home.jsx';
import PageOne from '../page/pageone/pageone.jsx';
import NotFound from '../page/notfound.jsx';
module.exports = (appPath) => {
	return [
		{
			component: App,
			routes: [
				{
					path: appPath + '/',
					exact: true,
					component: Home
				},
				{
					path: appPath + '/one',
					component: PageOne
				},
				{
					path: '*',
					component: NotFound
				}
			]
		}
	]
}