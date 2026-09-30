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
        },
        // a sticky head cell needs an opaque background or the rows scroll
        // through it, and MUI paints it with background.default — the page
        // colour set above, not the surface the table sits on
        MuiTableCell: {
            styleOverrides: {
                stickyHeader: {
                    backgroundColor: colors.neutral[50]
                }
            }
        }
    }
}
