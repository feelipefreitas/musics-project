import { tertiaryBlueLessOpacity } from '../../../theme/colors';

export default theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: tertiaryBlueLessOpacity,
        padding: '50px'
    },
    gridList: {
        display: 'flex',
        overflow: 'hidden',
        textAlign: 'center',
        // backgroundColor: 'white'
    },
});