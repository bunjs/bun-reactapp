import React from 'react';
import fetch from 'isomorphic-fetch';
import { actionLogin } from './action.js';
import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// let history=createHistory();
import { Link } from 'react-router-dom';
import { Button } from 'antd';
// import { browserHistory } from 'react-router';
// import createHistory from 'history/createBrowserHistory';
// let history=createHistory();

const styles = {};

class PageOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'pageone',
            isok: false,
            message: '',
            value: 'pageone'
        };
    }
    linkClick(e) {
        this.props.history.push('/$_appname/example')
    }
    render() {
        return (
            <div>
                <h1>这里是pageone{this.props.value.a}</h1>
                <Button onClick={this.linkClick.bind(this)} type="primary">去home</Button>
            </div>
        );
    }
};
function mapStateToProps(state) {
  return {
    value: state.pageone
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actionHome: (data) => dispatch(actionHome(data))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageOne);
// module.exports = Login;