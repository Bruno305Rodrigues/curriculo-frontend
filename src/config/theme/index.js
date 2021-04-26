import { createMuiTheme } from '@material-ui/core/styles';
import { ptBR } from '@material-ui/core/locale' ;

import 'typeface-roboto';

export default createMuiTheme(
    {
        palette: {
            primary: {
                main: '#00BFFF',
                light: '#e99a72',
                dark: '#f15b0f'
            }
        }
    },
    ptBR
);
