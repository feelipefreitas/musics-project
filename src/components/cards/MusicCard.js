import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import styles from '../../styles/components/cards/MusicCard';

class MusicCard extends Component {
    render() {

        const { classes } = this.props;

        return (
            <Paper  className={classes.card}>
                <div className={classes.likesWrapper}>
                    <Icon className={classes.heartIcon}>
                        favorite
                    </Icon>
                    <Typography variant="body2" className={classes.likesCounter}>
                        10
                    </Typography>
                </div>
                <Typography variant="h5" className={classes.title}>
                    Nome da Música
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                    Nome do Autor
                </Typography>
                <Button type="submit" size="small" variant="outlined" className={classes.button}>
                    Detalhes
                </Button>
            </Paper >
        );
    }
}

export default withStyles(styles)(MusicCard);