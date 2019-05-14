import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

const SideDrawer = (props) => {
    return (
        <SwipeableDrawer
            anchor = "right"
            //define if open or closed based on parent component (header)
            open={props.open}
            // pass false value to parent onClose
            onClose={ () => props.onClose(false)}
        >
            <List component ="nav">
                <ListItem button onClick = {() => console.log("Test 1")}> About Iceland </ListItem>
                <ListItem button onClick = {() => console.log("Test 2")}> Our Tours </ListItem>
                <ListItem button onClick = {() => console.log("Test 3")}> About Us </ListItem>
                <ListItem button onClick = {() => console.log("Test 3")}> Contact </ListItem>
                <ListItem button onClick = {() => console.log("Test 3")}>  Blog </ListItem>
            </List>

        </SwipeableDrawer>
    );
};

export default SideDrawer;