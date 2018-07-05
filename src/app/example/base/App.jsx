import React from 'react';
// import {BrowserRouter, Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
// import  {ConnectedRouter}  from 'react-router-redux';
// const routes = require('./routes.js');
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Provider } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {route} = this.props;
        return (<div><h1>App</h1>{renderRoutes(route.routes)}</div>)
    }
}
// const App=({store, history})=>(
//  <Provider store={store}>
//      <MuiThemeProvider>
//          <ConnectedRouter history={history}>
//              <Switch>
//                  {renderRoutes(routes)}
//              </Switch>
//          </ConnectedRouter>
//         </MuiThemeProvider>
//     </Provider>
// )

export default App;