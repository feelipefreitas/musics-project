import React from 'react';
import {
    withStyles,
    Typography,
    Button,
    CardContent,
    Card,
    TextField
} from '@material-ui/core';
import gradientButton from '../../styles/components/buttons/gradientButton';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    
    render() { 
        const { classes } = this.props;

        return ( 
            <Card className={classes.card}>
                <CardContent>
                    <Typography component="h1">
                        Realizar Login
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Usuario"
                        type="text"
                        fullWidth
                        />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Senha"
                        type="text"
                        fullWidth
                        />
                    <Button size="large" className={classes.gradientButton}>
                        Entrar
                    </Button>
                </CardContent>
            </Card>
         );
    }
}

const styles = theme => ({
    card: {
        width: '50%',
        height: '200px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'orange'
    },
    gradientButton
});
 
LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);