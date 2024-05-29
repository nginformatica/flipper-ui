import { default as styled } from 'styled-components'

interface IWrapper {
    padding?: number | string
    margin?: number | string
    align?: 'flex-end' | 'flex-start' | 'center'
}

export const Wrapper = styled.div<IWrapper>`
    grid-area: actions;
    display: flex;
    flex: 1;
    justify-content: ${props => props.align};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
`
