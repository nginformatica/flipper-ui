import styled from '@emotion/styled'
import ExpansionPanel from '../expansion-panel'

export const ExpansionPaperPanel = styled(ExpansionPanel)`
    && {
        border-radius: 4px;
    }

    &::before {
        height: 0px !important;
        top: 0px !important;
        background-color: transparent;
    }
`

export const Summary = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`
