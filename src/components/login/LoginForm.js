import React from 'react';
import {
    withStyles,
    Typography,
    Button,
    CardContent,
    Card,
    TextField
} from '@material-ui/core';
import { white } from '../../theme/colors';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
    
    render() { 
        const { classes, onSubmit } = this.props;

        return ( 
            <Card className={classes.card}>
                <CardContent>
                    <form onSubmit={onSubmit}>
                        <Typography align="center" className={classes.header}>
                            Realizar <br /> Login
                        </Typography>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Usuario"
                            type="text"
                            fullWidth
                            variant="outlined"
                            />
                        <TextField
                            margin="dense"
                            id="name"
                            label="Senha"
                            type="text"
                            fullWidth
                            variant="outlined"
                            />
                        <Button type="submit" variant="contained" size="large" color="primary" fullWidth className={classes.button}>
                            Entrar
                        </Button>
                    </form>
                </CardContent>
            </Card>
         );
    }
}

const styles = theme => ({
    card: {
        maxWidth: '350px',
        width: '50%',
        height: '60vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        paddingTop: '30px'
    },
    button: {
        marginTop: '50px'
    },
    header: {
        color: white,
        marginBottom: '30px',
        fontSize: '3rem'
    }

});
 
LoginForm.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginForm);