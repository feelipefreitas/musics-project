import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, AppBar, Toolbar, InputBase } from '@material-ui/core';
import styles from '../../styles/components/header';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';

class Header extends React.Component {
    
    render() { 

        const { classes, titleText } = this.props;

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
 
export default withStyles(styles)(Header);