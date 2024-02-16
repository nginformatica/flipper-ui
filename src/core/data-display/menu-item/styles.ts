import { MenuItem as MuiMenuItem } from '@mui/material'
import { default as styled } from 'styled-components'

export const MenuItems = styled(MuiMenuItem)`
    && {
        outline: none;
        cursor: pointer;
        font-family: Roboto, Helvetica, Arial, sans-serif;

        &:hover {
            background-color: #e0e0e0;
        }
    }
`
