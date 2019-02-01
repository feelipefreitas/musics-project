import React, { Component } from 'react';
import { withStyles, GridList } from '@material-ui/core';
import MusicCard from '../cards/MusicCard';
import styles from '../../styles/components/gridList/MusicGridList';

import { connect } from 'react-redux';
import { fetchMusicList } from '../../actions/musics';

class MusicGridList extends Component {
    
    componentDidMount() {
        this.props.fetchMusicList();
    };

    renderMusicCardList ()  {
        if(this.props.musicList !== undefined) {
            
            const list = this.props.musicList.map(music => (
                <MusicCard 
                    key={music.id} 
                    id={music.id} 
                    musicName={music.musicName} 
                    musicAuthor={music.musicAuthor} 
                    likes={music.likes} 
                    likersList={music.likers}/>
            ));
    
            return (
                <React.Fragment>
                    {list}
                </React.Fragment>
            )
        }

        return <div></div>
    };


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <GridList className={classes.gridList}>
                    {this.renderMusicCardList()}
                </GridList>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { musicList: state.musicList };
};

export default connect(mapStateToProps, { fetchMusicList })(withStyles(styles)(MusicGridList));