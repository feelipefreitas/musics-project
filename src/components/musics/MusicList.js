import React from 'react';
import Header from '../header';
import MusicGridList from '../gridList/MusicGridList';
import MusicCreate from './MusicCreate';
import { withStyles } from '@material-ui/core';

import styles from '../../styles/components/wrappers/musicList';

class MusicList extends React.Component {
    
    render() { 

        const { classes } = this.props;

        return ( 
            <div className={classes.root}>
                <Header titleText="Lista de Músicas" {...this.props} />
                <MusicGridList />
                <MusicCreate />
            </div>
         );
    }
}
 
export default withStyles(styles)(MusicList);