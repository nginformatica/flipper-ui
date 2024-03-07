import { default as styled } from 'styled-components'
import { default as Typography } from '@/core/data-display/typography'
import { theme } from '@/theme'

export const LinkStyled = styled.a({
    textDecoration: 'none',
    color: theme.colors.primary.main,
    ':hover': {
        textDecoration: 'underline'
    }
})

export const TextTypography = styled(Typography)`
    && {
        display: flex;
    }
`
