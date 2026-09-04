import React from 'react'
import { useTheme } from '@mui/material/styles'
import MuiTypography from '@mui/material/Typography'
import type { DefaultProps } from '../../types'
import type { TypographyProps } from '@mui/material/Typography'
import { typographyVariants, variantMapping } from '@/theme/typography'

export type ITypographyProps = TypographyProps & DefaultProps

const isTokenVariant = (
    variant: string
): variant is keyof typeof typographyVariants => variant in typographyVariants

const Typography = ({
    children,
    margin,
    padding,
    style = {},
    sx,
    variant = 'body2',
    ...otherProps
}: ITypographyProps) => {
    const { typography } = useTheme()

    // NG tokens come from the theme; keep them working when the app renders
    // outside `ThemeProviderFlipper` or replaces the theme options
    const fallback =
        isTokenVariant(variant) && !(variant in typography)
            ? typographyVariants[variant]
            : undefined

    return (
        <MuiTypography
            {...(fallback ? { variantMapping } : {})}
            {...otherProps}
            variant={variant}
            sx={fallback ? [fallback, ...(Array.isArray(sx) ? sx : [sx])] : sx}
            style={{ margin, padding, ...style }}>
            {children}
        </MuiTypography>
    )
}

export default Typography
