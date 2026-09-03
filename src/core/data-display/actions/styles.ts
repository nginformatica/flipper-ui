import styled from '@emotion/styled'

interface IWrapper {
    margin?: number | string
    padding?: number | string
    align?: 'flex-end' | 'flex-start' | 'center'
}

export const Wrapper = styled.div<IWrapper>`
    grid-area: actions;
    display: flex;
    flex: 1;
    gap: 8px;
    align-items: center;
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    justify-content: ${props => props.align};
`
