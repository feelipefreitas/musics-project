import React from 'react';

import BackgroundVideo from '../backgroundVideo';
import LoginForm from './LoginForm';


class Login extends React.Component {
    
    render() {
        
        return ( 
            <div>
                <BackgroundVideo />
                <LoginForm />
            </div>
         );
    }
}
 
export default Login;