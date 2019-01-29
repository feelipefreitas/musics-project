import React, { Component } from 'react';
import { withStyles, GridList } from '@material-ui/core';
import MusicCard from '../cards/MusicCard';
import styles from '../../styles/components/gridList/MusicGridList';

class MusicGridList extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridList className={classes.gridList}>
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />

                    <MusicCard />
                    <MusicCard />
                    <MusicCard />
                    <MusicCard />

                </GridList>
            </div>
        );
    }
}

export default withStyles(styles)(MusicGridList);