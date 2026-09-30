import styled from '@emotion/styled'
import { toPx } from '../table/styles'
import TableCell from '../table/table-cell'
import { theme } from '@/theme'

const { gray } = theme.colors

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${gray[300]};
`

export const TableHeaderContent = styled.div<{
    margin?: number | string
}>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
    margin: ${props =>
        props.margin === undefined ? '0 0 8px 0' : toPx(props.margin)};

    & > div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 6px;
    }
`

export const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const TableCellInteractive = styled(TableCell)<{
    width?: string
    fixed?: string
}>`
    && {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 60px;
        max-width: ${props => (props.fixed ? props.width : 'none')};
        padding: 16px 8px;
    }
`
