import {
    KeyboardArrowDown as IconArrowDown,
    KeyboardArrowUp as IconArrowUp
} from '@mui/icons-material'
import { default as styled } from 'styled-components'
import { theme } from '@/theme'

const { grays } = theme.colors

interface IListItem {
    inset: boolean
}

export const List = styled.ul`
    width: 350px;
`

export const ListItem = styled.li<IListItem>`
    font-size: 16px;
    margin: 12px;
    background: #ffffff00;
    padding: 12px;
    padding-left: ${props => (props.inset ? '12px' : '48px')};
    list-style: none;
    border-radius: 6px;
    border: 1px solid ${grays.g5};
    transition: all 500ms ease;
    cursor: pointer;
    align-items: center;
    display: flex;
    &:hover {
        background: ${grays.g7};
        border: 1px solid #009688;
    }
`

export const IconUp = styled(IconArrowUp)`
    && {
        font-size: 24px;
        margin-right: 12px;
    }
`

export const IconDown = styled(IconArrowDown)`
    && {
        font-size: 24px;
        margin-right: 12px;
    }
`
