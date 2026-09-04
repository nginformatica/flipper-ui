import colors from './colors'
import { fontSize, typographyOptions, variantMapping } from './typography'

export const theme = { colors, fontSize }

export const muiThemeOptions = {
    palette: {
        primary: {
            main: colors.darkBlue[600]
        },
        secondary: {
            main: colors.green[600]
        },
        error: {
            main: colors.deepOrange[600]
        },
        background: {
            default: colors.neutral[100]
        },
        text: {
            primary: colors.gray[900]
        }
    },
    typography: typographyOptions,
    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping
            }
        }
    }
}
