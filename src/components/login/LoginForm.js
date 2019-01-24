import React from 'react';

import {
    withStyles,
    Typography,
    Button,
    CardContent,
    Card,
    TextField
} from '@material-ui/core';
import styles from '../../styles/components/login';

import PropTypes from 'prop-types';
// import { Field, reduxForm } from 'redux-form';

class LoginForm extends React.Component {

    submitForm = (e) => {
        const { onSubmit } = this.props;
        const { user, password } = this.state;

        onSubmit(e, {
            user,
            password
        });
        
    };
    
    render() { 
        const { classes } = this.props;

        return ( 
            <Card className={classes.card}>
                <CardContent>
                    <Typography align="center" className={classes.title}>
                        Realizar Login
                    </Typography>
                    <form onSubmit={this.submitForm}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="user"
                            name="user"
                            label="Usuario"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => this.setState({user: e.target.value})}
                            className={classes.textField}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            name="password"
                            label="Senha"
                            type="text"
                            fullWidth
                            variant="outlined"
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                        <Button type="submit" size="large" fullWidth variant="contained" color="primary" className={classes.button}>
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
         );
    }
}
 
LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default withStyles(styles)(LoginForm);