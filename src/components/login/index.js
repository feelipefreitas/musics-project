import React from 'react';

import BackgroundVideo from '../backgroundVideo';
import LoginForm from './LoginForm';
import {requests} from '../../agent';


class Login extends React.Component {

    onLogin = async (e, fields) => {
        e.preventDefault();
        console.log("resp: ", await requests.get(`/musics/1`));
    };
    
    render() {
        return ( 
            <div>
                <BackgroundVideo />
                <LoginForm onSubmit={this.onLogin} />
            </div>
         );
    }
}
 
export default Login;