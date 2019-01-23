import { createMuiTheme } from '@material-ui/core/styles';

import { palette } from './palette';
import { typography } from './typography';
import { primaryBlue } from './colors';

export default createMuiTheme({
    palette,
    typography,
    overrides: {
        MuiButton: {
            root: {
                display: 'block',
                margin: '20px auto',
            }
        },
        MuiInput: {
            underline: {
                '&:hover': {
                    borderColor: primaryBlue
                }
            }
        }
    }
});