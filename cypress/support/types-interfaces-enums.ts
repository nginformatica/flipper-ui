/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-ignore
import type * as H from 'history'

export interface MemoryRouterProps {
    initialEntries?: H.LocationDescriptor[]
    initialIndex?: number
    getUserConfirmation?: (
        message: string,
        callback: (ok: boolean) => void
    ) => void
    keyLength?: number
}

export type MockTypes =
    | 'Name'
    | 'Word'
    | 'Words'
    | 'Letter'
    | 'Number'
    | 'Numbers'
    | 'JSXButton'
    | 'BoxParams'
    | 'ListOfWords'
    | 'Icon'
    | 'GenericStyleParams'
    | 'ListOfChips'
    | 'ListOfItens'

export type AvatarVariant = 'default' | 'primary' | 'with-children'

export type ButtonVariant =
    | 'default'
    | 'primary'
    | 'secondary'
    | 'contained-primary'
    | 'contained-secondary'
    | 'outlined-primary'
    | 'outlined-secondary'
    | 'selected'
    | 'dashed-primary'
    | 'dashed-secondary'
    | 'add-icon'
    | 'small'
    | 'medium'
    | 'large'
    | 'disabled'

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'with-dot'

export type CheckboxVariant =
    | 'default'
    | 'with-helper'
    | 'primary'
    | 'without-label'
    | 'switch'
    | 'switch-with-helper'

export type ChipVariant =
    | 'default'
    | 'squared'
    | 'with-avatar'
    | 'with-icon-avatar'
    | 'with-image-avatar'
    | 'secondary-color'

export type MockCats =
    | 'advertise-author'
    | 'advertise-comment'
    | 'avatar-children'
    | 'badge-counter'
    | 'badge-children'
    | 'box-children'
    | 'box-params'
    | 'breadcrumb-links'
    | 'button-params'
    | 'button-label'
    | 'card-params'
    | 'chapter-content'
    | 'checkbox-params'
    | 'chip-field-values'
    | 'collapse-content'
    | 'container-content'
    | 'container-style'
    | 'content-content'
    | 'content-style'
    | 'dialog-content'
    | 'drawer-content'
    | 'expansion-panel-content'

export type SpyCats =
    | 'badge-children'
    | 'button-onclick'
    | 'card-top'
    | 'card-bottom'
    | 'checkbox-onchange'
    | 'checkbox-onHelper-click'
    | 'chip-field-on-add'
    | 'chip-field-on-delete'
    | 'expansion-panel-on-helper-click'
    | 'expansion-panel-on-confirm-click'
    | 'fab-onclick'

export enum MuiSelectors {
    BadgeDot = '.MuiBadge-dot',
    BtnBaseRoot = '.MuiButtonBase-root',
    BtnTextPrimary = 'MuiButton-textPrimary',
    BtnTextSecondary = 'MuiButton-textSecondary',
    BtnContainedPrimary = 'MuiButton-containedPrimary',
    BtnContainedSecondary = 'MuiButton-containedSecondary',
    BtnContained = 'MuiButton-contained',
    BtnOutlined = 'MuiButton-outlined',
    BtnOutlinedPrimary = 'MuiButton-outlinedPrimary',
    BtnOutlinedSecondary = 'MuiButton-outlinedSecondary',
    BtnSmall = 'MuiButton-sizeSmall',
    BtnLarge = 'MuiButton-sizeLarge',
    CheckboxSelected = 'Mui-checked',
    ChipRoot = '.MuiChip-root',
    ChipDeleteIcon = 'MuiChip-deleteIcon',
    ChipSquare = '.makeStyles-root-3',
    ChipRound = '.makeStyles-root-1',
    ChipAvatar = '.MuiAvatar-root',
    ChipSecondaryColor = '.MuiChip-colorSecondary',
    Button = '.MuiButton-root',
    CollapseHidden = '.MuiCollapse-hidden',
    CollapseVisible = '.MuiCollapse-entered',
    DialogContainer = '.MuiDialog-container',
    Divider = '.MuiDivider-root',
    Drawer = '.MuiDrawer-paper',
    ListItem = '.MuiListItem-root',
    ExpansionPanel = '.MuiExpansionPanelSummary-root',
    Icon = '.MuiIconButton-label'
}

export type TMockOptions = {
    max?: number
    min?: number
    length?: number
    onClick?: () => void
}

export interface GenerateMockProps {
    value: MockCats
    type: MockTypes
    options?: TMockOptions
}

export interface GenerateMockListProps {
    value: MockCats
    type: MockTypes[]
    options?: TMockOptions
}

export type TAlias = {
    original: string
    alias: string
}
