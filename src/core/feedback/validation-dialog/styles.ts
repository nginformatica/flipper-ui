import { default as styled } from 'styled-components'
import Dialog from '../dialog'

export const MuiDialog = styled(Dialog)`
    div > div > h2 {
        margin-top: 20px;
    }
`

export const ValidationWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    gap: 15px;
`
