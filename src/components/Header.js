import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';

 class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }


    componentDidMount () {
        window.addEventListener('scroll',this.handleScroll);
    }



    handleScroll = () => {
        if(window.scrollY > 0) {
            this.setState ({
               headerShow: true
            })
        }
        else {
            this.setState ({
               headerShow: false
            })

        }
    }

    toggleDrawer = (value) => {
        this.setState ({
            drawerOpen: value
        })
    }


    render() {
        return (
            <div>
            <AppBar
                position ="fixed"
                style = {{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : ' transparent',
                    boxShaodw: 'none',
                    padding: '10px 0px'

                }}>
                <Toolbar>
                    <div className ="leader_logo">
                        <div className ='font_righteous header_logo_venue'> Ragnarok </div>
                        <div className = 'header_logo_title'> Icelandic Adventures </div>
                    </div>


                    <IconButton
                        aria-label="Menu"
                        color="inhert"
                        onClick = {() => this.toggleDrawer(true)}
                        >
                        <MenuIcon/>
                    </IconButton>


                    <SideDrawer
                        open = {this.state.drawerOpen}
                        // receives false as argument from SideDrawer
                        onClose = {(value) => this.toggleDrawer(value)}

                    />
                </Toolbar>

            </AppBar>

            </div>
        );
    }
}

export default Header;