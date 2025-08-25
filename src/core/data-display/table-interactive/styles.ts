import styled from '@emotion/styled'
import TableCell from '../table/table-cell'
import { theme } from '@/theme'

const { gray } = theme.colors

export const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${gray[300]};
`

export const TableHeaderContent = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin: 0 0 8px 0;

    & > div {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
`

export const ActionsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const TableCellInteractive = styled(TableCell)<{ width?: string }>`
    && {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        @media (max-width: 1440px) {
            padding: 16px 8px;
        }
    }
`
