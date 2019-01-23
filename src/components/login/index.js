import React from 'react';

import BackgroundVideo from '../backgroundVideo';
import LoginForm from './LoginForm';


class Login extends React.Component {

    login = (e) => {
        e.preventDefault();
        console.log(e);
    };
    
    render() {
        
        return ( 
            <div>
                <BackgroundVideo />
                <LoginForm onSubmit={this.login}/>
            </div>
         );
    }
}
 
export default Login;