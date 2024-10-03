import colors from './colors'

export const theme = { colors }

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
    }
}
