import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuToggler from '../SideDrawer/MenuToggler/MenuToggler'

const toolbar = (props) => (
    <header className = {classes.Toolbar}>
        <MenuToggler
            menuClicked = {props.menuClicked}
            open = {props.open}
            />
        <div className = {classes.Logo}>
            <Logo />
        </div>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;