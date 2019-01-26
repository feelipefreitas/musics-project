import React from 'react';

import BackgroundVideo from '../backgroundVideo';
import LoginForm from './LoginForm';
import { userRequests } from '../../agent';


class Login extends React.Component {

    onLogin = async formValues => {
        if(await userRequests.login(formValues)) {
            console.log("Login realizado com sucesso.");
            this.props.history.replace('/music/list');
        }
        else console.log("Usuário ou senha inválidos.");
        
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