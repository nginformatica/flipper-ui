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
    | 'Words'
    | 'Letter'
    | 'Number'
    | 'Numbers'
    | 'JSXButton'
    | 'BoxParams'
    | 'ListOfWords'

export type AvatarVariant = 'default' | 'primary' | 'with-children'
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

export type SpyCats = 'badge-children'

export interface SpyObj {
    original: string
    alias: string
}

export type MockObj = SpyObj

// export interface MockObj extends SpyObj {}

export enum MuiSelectors {
    BadgeDot = '.MuiBadge-dot'
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
