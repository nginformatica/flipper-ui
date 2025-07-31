import styled from '@emotion/styled'
import ButtonGroup from '@mui/material/ButtonGroup'

export const ButtonFilterGroup = styled(ButtonGroup)`
    && {
        display: flex;
        gap: 2px;
    }
`

export const WrapperEnd = styled.div`
    display: flex;
    justify-content: end;
    margin: 0 0 24px 0;
`

export const Cards = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
`
