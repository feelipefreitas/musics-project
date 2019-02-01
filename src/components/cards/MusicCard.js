import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { connect } from 'react-redux';
import { likeMusic, dislikeMusic } from '../../actions/musics';
import styles from '../../styles/components/cards/MusicCard';

class MusicCard extends Component {

    seeDetails = () => {

    };

    like = () => {
        let { id, musicName, musicAuthor, likes, likersList, liker } = this.props;
        this.props.likeMusic({
            id,
            musicName,
            musicAuthor,
            likes: likes += 1,
            likers: [...likersList, liker]
        });
    };

    dislike = () => {
        let { id, musicName, musicAuthor, likes, likersList, liker } = this.props;
        this.props.dislikeMusic({
            id,
            musicName,
            musicAuthor,
            likes: likes -= 1, 
            likers: likersList.filter(likerActual => likerActual !== liker)
        });
    };


    render() {

        const { classes, musicName, musicAuthor, likes, likedMusic } = this.props;

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
                {
                    (likedMusic) 
                    ?
                        (
                            <Button onClick={this.dislike} size="small" variant="outlined" className={classes.buttonLike}>
                                Dislike
                            </Button>
                            
                        )
                    :
                        (
                            <Button onClick={this.like} size="small" variant="outlined" className={classes.buttonLike}>
                                Like
                            </Button>
                        )
                }
                
            </Paper >
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const liked = state.musicList.filter(music => music.id === ownProps.id)[0].likers.includes(state.user.userId);
    return {
        likedMusic: liked,
        liker: state.user.userId
    }
};

export default connect(mapStateToProps, {likeMusic, dislikeMusic})(withStyles(styles)(MusicCard));