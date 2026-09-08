import type { CSSProperties } from 'react'

export const fontFamily = '"Roboto", "Helvetica", "Arial", sans-serif'

export const fontSize = {
    micro: '0.625rem',
    footnote: '0.6875rem',
    dense: '0.8125rem',
    display: '1.75rem'
} as const

/**
 * NG size tokens. They live in the MUI theme, so they only reach the DOM when
 * the theme is built with `muiThemeOptions` — either through
 * `<ThemeProviderFlipper options={muiThemeOptions}>` or by merging the options
 * into the consumer own `ThemeProvider`. The `Typography` component falls back
 * to these values when the theme does not carry them, so the size is never
 * lost — but a consumer theme can only override a token that it declares.
 */
export const typographyVariants = {
    micro: {
        fontFamily,
        fontSize: fontSize.micro,
        lineHeight: 1.6,
        letterSpacing: '0.04em'
    },
    footnote: {
        fontFamily,
        fontSize: fontSize.footnote,
        lineHeight: 1.55,
        letterSpacing: '0.03em'
    },
    dense: {
        fontFamily,
        fontSize: fontSize.dense,
        lineHeight: 1.45,
        letterSpacing: '0.01em'
    },
    display: {
        fontFamily,
        fontSize: fontSize.display,
        lineHeight: 1.2,
        letterSpacing: 'normal',
        fontWeight: 500
    }
}

export const variantMapping = { display: 'p' } as const

export const typographyOptions = {
    fontFamily,
    ...typographyVariants
}

declare module '@mui/material/styles' {
    interface TypographyVariants {
        micro: CSSProperties
        footnote: CSSProperties
        dense: CSSProperties
        display: CSSProperties
    }

    interface TypographyVariantsOptions {
        micro?: CSSProperties
        footnote?: CSSProperties
        dense?: CSSProperties
        display?: CSSProperties
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        micro: true
        footnote: true
        dense: true
        display: true
    }
}
