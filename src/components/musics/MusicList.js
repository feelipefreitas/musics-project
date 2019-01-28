import React from 'react';
import Header from '../header';

class MusicList extends React.Component {
    
    render() { 
        return ( 
            <div>
                <Header titleText="Lista de Músicas" {...this.props} />
                MusicList
            </div>
         );
    }
}
 
export default MusicList;