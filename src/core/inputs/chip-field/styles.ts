import ChipInput from 'material-ui-chip-input'
import { default as styled } from 'styled-components'

export const StyledChipInput = styled(ChipInput)`
    & > div > div {
        padding: 0px !important;
    }
    & > div > div > div {
        margin: 2px;
    }
    & > label {
        top: -6px !important;
        font-size: 14px !important;
    }
    & > label.MuiInputLabel-shrink {
        top: 0px !important;
    }
    & > div > div > input {
        padding: 10px !important;
        font-size: 14px !important;
    }
`
