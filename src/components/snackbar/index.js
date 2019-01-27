import React from 'react';
import PropTypes from 'prop-types';
import {
    Snackbar as Snack,
    withStyles,
    SnackbarContent
} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import styles from '../../styles/components/snackbars';

const icons = {
    success: CheckCircleIcon,
    error: ErrorIcon,
    warning: WarningIcon,
    info: InfoIcon,
}

class Snackbar extends React.Component {

    state = { open: true };

    render() {
        const { classes, type, messageText } = this.props;
        const Icon = icons[type];

        return(
            <Snack 
                anchorOrigin={ { vertical: 'bottom', horizontal: 'center' } }
                open={this.state.open}
                autoHideDuration={3000}
                className={classes.margin}>
                <SnackbarContent
                    message={
                        <span className={classes.message}>
                            <Icon className={classes.icon} />
                            {messageText}
                        </span>
                    }
                    className={classes[type]}
                />
            </Snack>
        );
    };
}

Snackbar.propTypes = {
    messageText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Snackbar);