import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import styles from '../../styles/components/cards/MusicCard';

class MusicCard extends Component {

    seeDetails = () => {

    };

    like = () => {
        
    };


    render() {

        const { classes, musicName, musicAuthor, likes } = this.props;

        return (
            <Paper  className={classes.card}>
                <div className={classes.likesWrapper}>
                    <Icon className={classes.heartIcon}>
                        favorite
                    </Icon>
                    <Typography variant="body2" className={classes.likesCounter}>
                        {likes}
                    </Typography>
                </div>
                <Typography variant="h5" className={classes.title}>
                    {musicName}
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    {musicAuthor}
                </Typography>
                <Button onClick={this.seeDetails} size="small" variant="outlined" className={classes.buttonDetails}>
                    Detalhes
                </Button>
                <Button onClick={this.like} size="small" variant="outlined" className={classes.buttonLike}>
                    Curtir
                </Button>
            </Paper >
        );
    }
}

export default withStyles(styles)(MusicCard);