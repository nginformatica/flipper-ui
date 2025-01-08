import MuiTableCell from '@mui/material/TableCell'
import MuiTableRow from '@mui/material/TableRow'
import { default as styled } from 'styled-components'

export const FieldWrapper = styled.span``

export const PaginationWrapper = styled.div`
    display: flex;
    margin-left: 12px;
`

export const TableCellRows = styled(MuiTableCell)`
    && {
        width: 400px;
        height: 60px;
        padding: 0 10px;
    }
`

export const RowTable = styled(MuiTableRow)`
    width: 100%;
    cursor: pointer;

    &:hover {
        background: -moz-linear-gradient(
            left,
            rgba(189, 189, 189, 0) 0%,
            rgba(189, 189, 189, 1) 100%
        );
        background: -webkit-linear-gradient(
            left,
            rgba(189, 189, 189, 0) 0%,
            rgba(189, 189, 189, 1) 100%
        );
        background: linear-gradient(
            to right,
            rgba(189, 189, 189, 0) 0%,
            rgba(189, 189, 189, 1) 100%
        );
    }

    &.no-hover {
        background: none;
    }
`
