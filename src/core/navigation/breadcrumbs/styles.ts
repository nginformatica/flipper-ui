import { default as styled } from 'styled-components'
import { default as Typography } from '@/core/data-display/typography'
import { theme } from '@/theme'

const { primary } = theme.colors

export const BreadcrumbLink = styled.a`
    text-decoration: none;
    color: ${primary.main};

    &:hover {
        text-decoration: underline;
    }
`

export const TextTypography = styled(Typography)`
    && {
        display: flex;
    }
`
