import styled from '@emotion/styled'
import { alpha } from '@mui/material/styles'
import { theme } from '@/theme'

const { neutral, orange } = theme.colors

interface IHeader {
    anchor?: 'top' | 'left' | 'bottom' | 'right'
}

interface ICollapsible {
    expanded?: boolean
}

interface IIconButton {
    selected?: boolean
}

interface IFavoritesHeader {
    open?: boolean
}

export const Header = styled.div<IHeader>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${props =>
        props.anchor === 'right' ? 'row-reverse' : 'row'};
    width: 100%;
    height: 56px;
    padding: 0 10px;
    border-bottom: 1px solid ${alpha(neutral[50], 0.08)};
    box-sizing: border-box;
    overflow: hidden;
`

export const LogoContainer = styled.div<ICollapsible>`
    display: flex;
    align-items: center;
    flex: ${props => (props.expanded === false ? '0 0 0' : '1 1 auto')};
    min-width: 0;
    max-width: ${props => (props.expanded === false ? '0px' : 'none')};
    margin-right: ${props => (props.expanded === false ? '0px' : '8px')};
    overflow: hidden;
    opacity: ${props => (props.expanded === false ? 0 : 1)};
    transition:
        max-width 225ms cubic-bezier(0.4, 0, 0.6, 1),
        margin-right 225ms cubic-bezier(0.4, 0, 0.6, 1),
        flex-basis 225ms cubic-bezier(0.4, 0, 0.6, 1),
        opacity 195ms cubic-bezier(0.4, 0, 0.6, 1);
`

export const HeaderActions = styled.div`
    display: flex;
    align-items: center;
    flex-shrink: 0;
`

export const HeaderActionsItem = styled.div<ICollapsible>`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    max-width: ${props => (props.expanded === false ? '0px' : '30px')};
    margin-right: ${props => (props.expanded === false ? '0px' : '8px')};
    opacity: ${props => (props.expanded === false ? 0 : 1)};
    transition:
        max-width 225ms cubic-bezier(0.4, 0, 0.6, 1),
        margin-right 225ms cubic-bezier(0.4, 0, 0.6, 1),
        opacity 195ms cubic-bezier(0.4, 0, 0.6, 1);
`

export const HeaderIconButton = styled.button<IIconButton>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 6px;
    border: 1px solid
        ${props =>
            props.selected
                ? alpha(orange[600], 0.35)
                : alpha(neutral[50], 0.1)};
    background-color: ${props =>
        props.selected ? alpha(orange[600], 0.14) : alpha(neutral[50], 0.06)};
    color: ${props => (props.selected ? orange[600] : alpha(neutral[50], 0.7))};
    cursor: pointer;
    transition:
        background-color 120ms ease,
        color 120ms ease,
        border-color 120ms ease;

    & svg {
        font-size: 18px;
    }

    &:hover {
        background-color: ${props =>
            props.selected
                ? alpha(orange[600], 0.22)
                : alpha(neutral[50], 0.12)};
        color: ${props => (props.selected ? orange[300] : neutral[50])};
    }

    &:focus-visible {
        outline: 2px solid ${alpha(orange[600], 0.6)};
        outline-offset: 1px;
    }
`

export const FavoritesSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 8px 4px;
    width: 100%;
    box-sizing: border-box;
`

export const FavoritesHeader = styled.button<IFavoritesHeader>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
    width: 100%;
    padding: 4px 8px;
    border: 0;
    background: transparent;
    color: ${alpha(neutral[50], 0.55)};
    cursor: pointer;
    transition: color 120ms ease;

    & svg {
        font-size: 14px;
        transition: transform 160ms ease;
        transform: rotate(${props => (props.open ? 180 : 0)}deg);
    }

    &:hover {
        color: ${alpha(neutral[50], 0.85)};
    }

    &:focus-visible {
        outline: 2px solid ${alpha(orange[600], 0.6)};
        outline-offset: 2px;
    }
`

export const DividerWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 12px;
    padding: 6px 12px;
    box-sizing: border-box;
`

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${alpha(neutral[50], 0.06)};
`

export const MainArea = styled.div`
    display: flex;
    flex: 1 0 0;
    flex-direction: column;
    min-height: 0;
    width: 100%;
    padding: 8px 8px 16px;
    overflow: auto;
    box-sizing: border-box;
`

export const SidebarNewStorie = styled.div`
    position: relative;
    height: 700px;
    overflow: hidden;

    .MuiDrawer-root,
    .MuiDrawer-paper {
        position: absolute !important;
        top: 0 !important;
        height: 100% !important;
    }
`
