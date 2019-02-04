import { white } from "material-ui/styles/colors";

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
    buttonDetails: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: white,
        border: 'none',
        padding: '10px',
        marginRight: '20px'
    },
    buttonLike: {
        background: 'linear-gradient(45deg, #303f9f 30%, #2196f3 90%)',
        color: white,
        border: 'none',
        padding: '10px'
    },
    likesWrapper: {
        position: 'absolute',
        top: 'calc(0% - 15px)',
        left: 'calc(100% - 20px)',
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
    },
    deleteWrapper: {
        position: 'absolute',
        top: '0%',
        left: '0%',
    },
    deleteButton: {
        cursor: 'pointer',
        color: '#e53935',
        '&:hover': {
            color: '#ef5350'
        }
    }
});