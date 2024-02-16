import { default as styled } from 'styled-components'

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
