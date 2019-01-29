import { white, red } from "material-ui/styles/colors";

export default theme => ({
    card: {
        flexGrow: 1,
        padding: '30px',
        margin: '20px',
        background: white,
        position: 'relative'
    },
    title: {
        marginBottom: '30px'
    },
    subtitle: {
        marginBottom: '30px'
    },
    button: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: white,
        border: 'none',
        padding: '10px'
    },
    likesWrapper: {
        position: 'absolute',
        top: '-15px',
        left: '93%',
    },
    heartIcon: {
        fontSize: '40px',
        color: '#e53935',
        '&:hover': {
            color: '#ef5350'
        }
    },
    likesCounter: {
        color: white,
        position: 'relative',
        top: '-36px'
    }
});