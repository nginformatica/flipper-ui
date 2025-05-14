import styled from '@emotion/styled'
import type { LineProps } from '.'
import { theme } from '@/theme'

const { gray } = theme.colors

export const Line = styled.div<LineProps>`
    height: 1px;
    flex: 1;
    min-height: 0.75px;
    max-height: 3px;
    align-self: center;
    background-color: ${props => (props.primary ? gray[500] : gray[300])};
`

export const Container = styled.div`
    display: flex;
`
