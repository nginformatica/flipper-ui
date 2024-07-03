import React from 'react'
import type { MouseEvent, CSSProperties } from 'react'
import type { IFabProps } from '@/core/data-display/fab'
import Fab from '@/core/data-display/fab'
import Tooltip from '@/core/feedback/tooltip'

export interface IProps extends IFabProps {
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
        const { mini, children, padding, name, margin, style, ...otherProps } =
            props

        return (
            <Fab
                size={mini ? 'small' : 'medium'}
                name={name || 'action-button'}
                data-testid='fab-button'
                {...otherProps}
                style={{ margin, padding, ...style }}
                onClick={props.onClick}>
                {children}
            </Fab>
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
