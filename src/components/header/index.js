import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, InputBase } from '@material-ui/core';
import styles from '../../styles/components/header';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

import { connect } from 'react-redux';
import { signOut } from '../../actions/user';

class Header extends React.Component {

    state = { anchorEl: null };

    signOut = () => {
        this.props.signOut();
        this.props.history.replace('/login');
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    render() { 

        const { classes, titleText } = this.props;
        const open = Boolean(this.state.anchorEl);

        return ( 
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        {titleText}
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Pesquise uma música..."
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        />
                    </div>
                    <div>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                        <MenuItem onClick={this.signOut}>Sair</MenuItem>
                        </Menu>
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
         );
    }
}

Header.propTypes = {
    titleText: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
}
 
export default connect(null, { signOut })(withStyles(styles)(Header));