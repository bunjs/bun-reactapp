import React from 'react';
import fetch from 'isomorphic-fetch';
import { actionHome } from './action.js';
import { connect } from 'react-redux';
import { Button, Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Link } from 'react-router-dom';
import './style.less';
const styles = {
    
};
function mapStateToProps(state) {
    return {
        value: state.home
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actionHome: (data) => dispatch(actionHome(data))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: 'home',
            isok: false,
            message: '',
            value: 'home',
            current: 'mail'
        };
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
    }
    linkClick(e) {
        this.props.history.push('/$_appname/one')
    }
    render() {
        return (
            (<div>
                <h1>这里是home{this.props.value.a}</h1>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                      <MenuItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                      </MenuItemGroup>
                      <MenuItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                      </MenuItemGroup>
                    </SubMenu>
                </Menu>
                <Button onClick={this.linkClick.bind(this)} type="primary">去one</Button>
            </div>) 
        );
    }
};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home);