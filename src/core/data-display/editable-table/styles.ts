import { MTableEditRow, MTableBodyRow } from 'material-table'
import { default as styled } from 'styled-components'
import { Typography } from '@/core/data-display/typography'
import { Button } from '@/core/inputs/button'

export const DARK = 'rgba(189,189,189,0)'
export const GREY = 'rgba(189,189,189,1)'

export const Container = styled.div`
    width: 100%;
`

export const AddRowButton = styled.div`
    display: flex;
    align-items: center;
`

export const AddRowText = styled(Typography)`
    margin-left: 4px;
    font-weight: 500 !important;
`

export const FullWidthButton = styled(Button)`
    width: calc(100% - 24px);
    margin: 12px !important;
`

export const CustomRemove = styled(MTableEditRow)({
    '& h6': {
        fontSize: '0.85em'
    }
})

export const CustomRows = styled(MTableBodyRow)`
    transition: opacity 200ms ease;
    button {
        display: none;
    }
    &:hover {
        background: -moz-linear-gradient(left, ${DARK} 0%, ${GREY} 100%);
        background: -webkit-linear-gradient(left, ${DARK} 0%, ${GREY} 100%);
        background: linear-gradient(to right, ${DARK} 0%, ${GREY} 100%);
    }
    &:hover button {
        display: inline-block !important;
    }
    td {
        min-width: 64px;
    }
`

export const RightPagination = styled.div`
    & > div {
        display: block;
        float: right;
    }
`

export const Wrapper = styled.div`
    & > div {
        justify-content: flex-end;
    }
`
