import type { CSSProperties } from 'react'
import { default as styled } from 'styled-components'
import Typography from '@/core/data-display/typography'
import IconButton from '@/core/inputs/icon-button'

export const NESTED_ELEVATION = 0

export const PAPER_PROPS: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
}

export const Header = styled.div`
    display: flex;
`

export const CardWrapper = styled.div`
    width: 100%;
`

export const Title = styled(Typography)`
    flex: 1;
`

export const CardButton = styled(IconButton)`
    && {
        width: 36px;
        height: 36px;
    }
`
