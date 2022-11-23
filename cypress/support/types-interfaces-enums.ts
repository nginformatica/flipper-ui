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

export type MockCats =
  | 'advertise-author'
  | 'advertise-comment'

export interface SpyObj {
  original: string
  alias: string
}

export type MockObj = SpyObj

// export interface MockObj extends SpyObj {}
