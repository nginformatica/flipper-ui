import { default as styled } from 'styled-components'
import IconButton from '@/core/inputs/icon-button'

export const Header = styled.div`
    display: flex;
`

export const CardWrapper = styled.div`
    width: 100%;
`

export const CardButton = styled(IconButton)`
    && {
        width: 36px;
        height: 36px;
    }
`
