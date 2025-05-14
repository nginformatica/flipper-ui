import styled from '@emotion/styled'
import { theme } from '@/theme'

const { primary } = theme.colors

export const BreadcrumbLink = styled.a`
    text-decoration: none;
    color: ${primary.main};

    &:hover {
        text-decoration: underline;
    }
`
