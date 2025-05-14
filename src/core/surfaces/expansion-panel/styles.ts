import styled from '@emotion/styled'

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
