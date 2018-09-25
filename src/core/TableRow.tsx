import MuiTableRow from '@material-ui/core/TableRow'
import React from 'react'
import styled from 'styled-components'
import { background } from '../colors'
import { IDefault } from './Advertise'

interface IProps extends IDefault {
    children: React.ReactNode
    selected?: boolean
    hover?: boolean
    border?: boolean
    onClick?: () => void
}

interface IRow {
    border?: boolean
}

const StyledRow = styled(MuiTableRow)<IRow>`
    border-color: ${props => props.border ? background.light : 'transparent' } !important;
`

const TableRow: React.SFC<IProps> = ({
    style,
    margin,
    padding,
    children,
    border = false,
    ...otherProps
}) =>
    <StyledRow
        { ...otherProps }
        border={ border }
        style={ { padding, margin, ...style } }>
        { children }
    </StyledRow>

export default TableRow
