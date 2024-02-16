import { default as styled } from 'styled-components'

export const ExpansionPanelHeaderWrapper = styled.div`
    display: flex;
    flex-direction: rows;
    align-items: center;
    button {
        display: none;
    }
    :hover button {
        display: flex;
    }
`
