import { default as styled } from 'styled-components'
import Typography from '@/core/data-display/typography'
import ExpansionPanel from '../expansion-panel'

export const Paper = styled(ExpansionPanel)`
    && {
        border-radius: 4px;
        ::before {
            height: 0px;
            background-color: transparent;
        }
    }
`

export const Summary = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
`

export const Title = styled(Typography)`
    && {
        flex: 1;
    }
`
