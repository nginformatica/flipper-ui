import * as React from 'react'
import { Fab as MFab, Tooltip } from '@/index'
import type { MouseEvent, CSSProperties } from 'react'

export interface IProps {
    mini?: boolean
    className?: string
    name?: string
    tooltip?: string
    padding?: string | number
    margin?: string | number
    style?: CSSProperties
    children: JSX.Element
    onClick(event: MouseEvent<HTMLButtonElement>): void
}

const FabV2 = (props: IProps) => {
    const renderButton = () => {
        const {
            mini = true,
            children,
            padding,
            name,
            margin,
            style,
            ...otherProps
        } = props

        return (
            <MFab
                size={mini ? 'small' : 'medium'}
                name={name || 'action-button'}
                data-testid='fab-button'
                {...otherProps}
                style={{ margin, padding, ...style }}
                onClick={props.onClick}>
                {children}
            </MFab>
        )
    }

    return props.tooltip ? (
        <Tooltip withWrapper title={props.tooltip}>
            {renderButton()}
        </Tooltip>
    ) : (
        renderButton()
    )
}

export default FabV2
