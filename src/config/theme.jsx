import { createMuiTheme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: grey[900]
        },
    },
})

export default theme