import colors from './colors'

export const theme = { colors }

/**
 * Options to createMuiTheme
 * */
export const muiThemeOptions = {
    palette: {
        primary: {
            main: colors.primary.main
        },
        secondary: {
            main: colors.secondary.main
        },
        error: {
            main: colors.feedback.danger
        },
        background: {
            default: colors.app.background.main
        },
        text: {
            primary: colors.app.text.main
        }
    }
}

/**
 * Raw colors
 * */
export type Colors = typeof colors

export interface Theme {
    theme: {
        colors: Colors
    }
}

/**
 * Util interface to extend (Props + Theme)
 * */
export type WithTheme<Props extends object> = Props & Theme
