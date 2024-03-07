import type { CSSProperties } from 'react'
import { default as styled } from 'styled-components'
import { Typography, IconButton } from '@/index'

export const NESTED_ELEVATION = 0

export const PAPER_PROPS: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
}

export const Header = styled.div`
    display: flex;
`

export const Title = styled(Typography)`
    flex: 1;
`

export const EditButton = styled(IconButton)`
    && {
        width: 36px;
        height: 36px;
    }
`
