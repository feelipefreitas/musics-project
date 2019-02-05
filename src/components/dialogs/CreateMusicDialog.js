import React, { Component } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { ADD_MUSIC_SUCCESS_MESSAGE } from '../../constants/messages';
import MusicCreateForm from '../musics/MusicCreateForm';
import Snackbar from '../snackbar';
import { connect } from 'react-redux';
import { createMusic } from '../../actions/musics';

class CreateMusicDialog extends Component {
    
    state = { showSnackbarSuccess: false }; 

    transition = (props) => {
        return <Slide direction="up" {...props} />;
    }

    createMusic = async formValues => {
        if(await this.props.createMusic(formValues))
            this.setState({ showSnackbarSuccess: true });
    };

    renderSnackbar = () => {
        
        const { showSnackbarSuccess } = this.state;

        if(showSnackbarSuccess)
            return <Snackbar type="success" messageText={ADD_MUSIC_SUCCESS_MESSAGE} />;
    };

    render() {
        return (
            <React.Fragment>
                <Dialog
                    open={this.props.open}
                    TransitionComponent={this.transition}
                    keepMounted
                    onClose={this.props.close}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        Adicionar Música
                    </DialogTitle>
                    <DialogContent>
                        <MusicCreateForm onSubmit={this.createMusic} />
                    </DialogContent>
                </Dialog>
                { this.renderSnackbar() }
            </React.Fragment>
            
        );
    }
}

export default connect(null, { createMusic })(CreateMusicDialog);