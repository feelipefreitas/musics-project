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
import boxError from '../../styles/components/errorBox';
import { Field, reduxForm } from 'redux-form';

import PropTypes from 'prop-types';

class LoginForm extends React.Component {

    renderError = ({ touched, error }) => {
        if(touched && error)
            return <div style={boxError}>{error}</div>
    };

    renderInputs = ({input, label, meta}) => {
        const error = this.renderError(meta);
        return(
            <div>
                <TextField
                    autoFocus={input.name === 'userName' ? true : false}
                    error={error ? true : false}
                    margin="dense"
                    id={input.name}
                    name={input.name}
                    label={label}
                    type="text"
                    fullWidth
                    variant="outlined"
                    {...input}
                    // onChange={(e) => this.setState({user: e.target.value})}
                />
                {error}
            </div>
        );
    };

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    };
    
    render() { 
        const { classes, handleSubmit } = this.props;

        return ( 
            <Card className={classes.card}>
                <CardContent>
                    <Typography align="center" className={classes.title}>
                        Realizar Login
                    </Typography>
                    <form onSubmit={handleSubmit(this.onSubmit)}>
                        <Field component={this.renderInputs} name="userName" label="Usuário" autoComplete="off" />
                        <Field component={this.renderInputs} name="password" label="Senha" autoComplete="off" />
                        
                        <Button type="submit" size="large" fullWidth variant="contained" color="primary" className={classes.button}>
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
         );
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.userName) errors.userName = "O usuário é obrigatório!";

    if(!formValues.password) errors.password = "A senha é obrigatória!";

    return errors;
};
 
LoginForm.propTypes = {
    classes: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default reduxForm({
    form: 'loginForm',
    validate
})(withStyles(styles)(LoginForm))