import {
    green,
    darkGreen
} from '../../../theme/colors';


export default theme => ({
    circle: {
        backgroundColor: green,
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        position: 'relative',
        left: '100%',
        top: '100%',
        transform: 'translateX(-110%)',
        '&:hover': {
            backgroundColor: darkGreen,
        },
        cursor: 'pointer'
    },
    icon: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
});