import React from 'react';

import BackgroundVideo from '../backgroundVideo';
import LoginForm from './LoginForm';


class Login extends React.Component {

    onLogin = (e, fields) => {
        e.preventDefault();
        console.log(fields)
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