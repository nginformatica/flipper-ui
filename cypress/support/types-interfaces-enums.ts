/* eslint-disable @typescript-eslint/no-unused-vars */
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
