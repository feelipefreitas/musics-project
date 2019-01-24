import { secondaryBlue } from '../../../theme/colors';

export default theme => ({
    card: {
        width: '100%',
        maxWidth: '450px',
        height: '65vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        padding: '30px'
    },
    button: {
        background: secondaryBlue,
        color: 'white',
        marginTop: '50px'
    },
    title: {
        marginTop: '30px',
        marginBottom: '70px',
        color: 'white',
        fontSize: '4rem'
    },
    textField: {
        marginBottom: '30px'
    }
});