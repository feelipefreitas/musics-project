import React from 'react';
import { withStyles, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

import CreateMusicDialog from '../dialogs/CreateMusicDialog';

import styles from '../../styles/components/buttons/btnAddMusic';

class MusicCreate extends React.Component {

    state = {
        dialogOpen: false
    };

    openCreateMusicDialog = () => {
        this.setState({ dialogOpen: true })
    };

    closeCreateMusicDialog = () => {
        this.setState({ dialogOpen: false })
    };
    
    render() { 

        const { classes } = this.props;

        return ( 
            <React.Fragment>
                <Button className={classes.circle} onClick={this.openCreateMusicDialog}>
                    <Icon className={classes.icon}>
                        add
                    </Icon>
                </Button>
                <CreateMusicDialog open={this.state.dialogOpen} close={this.closeCreateMusicDialog} />
            </React.Fragment>
         );
    }
}
 
export default withStyles(styles)(MusicCreate);