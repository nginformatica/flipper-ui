import styled from '@emotion/styled'
import MuiListItemButton from '@mui/material/ListItemButton'
import { alpha } from '@mui/material/styles'
import { theme } from '@/theme'

const { neutral, orange } = theme.colors

interface IRootProps {
    selected?: boolean
    dense?: boolean
    expanded?: boolean
}

export const FavoriteActions = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 2px;
    margin-left: auto;
    opacity: 0;
    transition: opacity 120ms ease;
`

export const ItemButton = styled(MuiListItemButton)<IRootProps>`
    && {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        width: 100%;
        border-radius: 4px;
        padding: ${props => (props.dense ? '8px 12px' : '12px')};
        border-left: 3px solid
            ${props => (props.selected ? orange[600] : 'transparent')};
        background-color: ${props =>
            props.selected ? alpha(neutral[50], 0.12) : 'transparent'};
        color: ${props =>
            props.selected ? neutral[50] : alpha(neutral[50], 0.7)};
        font-weight: ${props => (props.selected ? 500 : 400)};
        overflow: hidden;
        white-space: nowrap;
        transition:
            background-color 120ms ease,
            color 120ms ease;
    }

    & svg {
        width: 18px;
        height: 18px;
        flex-shrink: 0;
        color: inherit;
    }

    & svg path,
    & svg circle,
    & svg rect {
        fill: currentColor;
    }

    &:hover .list-item-dark-actions,
    &:focus-within .list-item-dark-actions {
        opacity: 1;
    }

    &&:hover {
        background-color: ${props =>
            props.selected
                ? alpha(neutral[50], 0.12)
                : alpha(neutral[50], 0.06)};
        color: ${neutral[50]};
    }

    &&.Mui-disabled {
        opacity: 0.5;
    }

    &&.Mui-focusVisible {
        outline: 2px solid ${alpha(orange[600], 0.6)};
        outline-offset: -2px;
    }
`

export const IconSlot = styled.span<{ dense?: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: ${props => (props.dense ? '14px' : '18px')};
    height: ${props => (props.dense ? '14px' : '18px')};
    color: inherit;

    & > svg {
        width: 100%;
        height: 100%;
    }
`
