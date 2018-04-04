import React, {Component} from 'react';
import Aux from '../Aux/Aux'
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    
    toggleSideDrawerClosedHandler = () => {
        const newState = !this.state.showSideDrawer;
        this.setState({showSideDrawer: newState});
    }
    
    render (){
        return (
            <Aux>
                <Toolbar 
                    open = {this.state.showSideDrawer}
                    menuClicked = {this.toggleSideDrawerClosedHandler}/>
                <SideDrawer
                    open = {this.state.showSideDrawer}
                    closed = {this.SideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;