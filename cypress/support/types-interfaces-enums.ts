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
    | 'CardParams'

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

export type SpyCats =
    | 'badge-children'
    | 'button-onclick'
    | 'card-top'
    | 'card-bottom'

export interface SpyObj {
    original: string
    alias: string
}

export type MockObj = SpyObj

// export interface MockObj extends SpyObj {}

export enum MuiSelectors {
    BadgeDot = '.MuiBadge-dot',
    BtnTextPrimary = 'MuiButton-textPrimary',
    BtnTextSecondary = 'MuiButton-textSecondary',
    BtnContainedPrimary = 'MuiButton-containedPrimary',
    BtnContainedSecondary = 'MuiButton-containedSecondary',
    BtnContained = 'MuiButton-contained',
    BtnOutlined = 'MuiButton-outlined',
    BtnOutlinedPrimary = 'MuiButton-outlinedPrimary',
    BtnOutlinedSecondary = 'MuiButton-outlinedSecondary',
    BtnSmall = 'MuiButton-sizeSmall',
    BtnLarge = 'MuiButton-sizeLarge'
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
