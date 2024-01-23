import type { CSSProperties, ReactNode } from 'react'

export interface DefaultProps {
    /**
     * The children of the component.
     * @optional
     */
    children?: ReactNode
    /**
     * The style of the component.
     * @optional
     */
    style?: CSSProperties
    /**
     * The class name of the component.
     * @optional
     */
    className?: string
    /**
     * The id of the component.
     * @optional
     */
    margin?: number | string
    /**
     * The padding of the component.
     * @optional
     */
    padding?: number | string
    /**
     * The name of the component.
     * @optional
     */
    name?: string
    /**
     * The id of the component.
     * @optional
     */
    id?: string
}
