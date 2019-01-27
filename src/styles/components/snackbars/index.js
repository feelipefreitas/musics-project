import {
    red,
    green,
    orange
} from '../../../theme/colors';

export default theme => ({
    error: {
        backgroundColor: red,
    },
    success: {
        backgroundColor: green,
    },
    alert: {
        backgroundColor: orange,
    },
    icon: {
        fontSize: '20px',
        opacity: 0.9,
        marginRight: '20px',
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        marginBottom: '20px',
    }

})