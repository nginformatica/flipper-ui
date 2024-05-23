import { Link as LinkRouter } from 'react-router-dom'
import { default as styled } from 'styled-components'
import { default as Typography } from '@/core/data-display/typography'
import { theme } from '@/theme'

const { primary } = theme.colors

export const BreadcrumbLink = styled(LinkRouter)`
    text-decoration: none;
    color: ${primary.main};

    &:hover {
        text-decoration: underline;
    }
`

export const BreadcrumbStoryLink = styled.a`
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
