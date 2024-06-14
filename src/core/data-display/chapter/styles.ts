import { default as styled } from 'styled-components'
import type { LineProps } from '.'
import { theme } from '@/theme'

const { grays } = theme.colors

export const Line = styled.div<LineProps>`
    height: 1px;
    flex: 1;
    min-height: 0.75px;
    max-height: 3px;
    align-self: center;
    background-color: ${props => (props.primary ? grays.g4 : grays.g6)};
`

export const Container = styled.div`
    display: flex;
`
