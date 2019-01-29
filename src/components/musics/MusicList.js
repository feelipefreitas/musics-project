import React from 'react';
import Header from '../header';
import MusicGridList from '../gridList/MusicGridList';

class MusicList extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Header titleText="Lista de Músicas" {...this.props} />
                <MusicGridList />
            </div>
         );
    }
}
 
export default MusicList;