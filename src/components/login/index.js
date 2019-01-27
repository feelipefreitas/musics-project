import React from 'react';

import BackgroundVideo from '../backgroundVideo';
import LoginForm from './LoginForm';
import { userRequests } from '../../agent';
import Snackbar from '../snackbar';
import { LOGIN_ERROR_MESSAGE } from '../../constants/messages';


class Login extends React.Component {

    state = { showSnackbarError: false }; 

    onLogin = async formValues => {
        if(await userRequests.login(formValues)) {
            this.props.history.replace('/music/list');
        }
        else this.setState({ showSnackbarError: true });
    };

    renderSnackbar = () => {
        
        const { showSnackbarError } = this.state;

        if(showSnackbarError)
            return <Snackbar type="error" messageText={LOGIN_ERROR_MESSAGE} />;
    };
    
    render() {
        return ( 
            <div>
                <BackgroundVideo />
                <LoginForm onSubmit={this.onLogin} />
                { this.renderSnackbar() }
            </div>
         );
    }
}
 
export default Login;