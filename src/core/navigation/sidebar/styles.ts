import styled from '@emotion/styled'
import Button from '@/core/inputs/button'
import { theme } from '@/theme'

const { gray } = theme.colors

interface IAction {
    anchor?: 'top' | 'left' | 'bottom' | 'right'
    minWidth?: number | string
}

export const Action = styled.div<IAction>`
    flex-direction: ${props =>
        props.anchor === 'left' ? 'row-reverse' : 'row'};
    display: flex;
    padding: 4px;
`

export const AnchorButton = styled(Button)<{ minwidth: string | number }>`
    && {
        max-width: ${props => props.minwidth}px;
        border-radius: 4px;
        box-shadow: none;
        min-width: auto;
        width: 100%;
        background-color: transparent;
    }

    &:active {
        box-shadow: none;
    }

    &:hover {
        background-color: ${gray[300]} !important;
    }
`

export const SidebarStorie = styled.div`
    height: 500px;
`
