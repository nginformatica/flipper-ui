import React from 'react'
import type { ReactNode } from 'react'
import { Close as IconClose, Edit as IconEdit } from '@mui/icons-material'
import type { ButtonProps } from '@/core/inputs/button'
import type { IconButtonProps } from '@/core/inputs/icon-button'
import { Paper, Line, Button as AddButton } from '@/index'
import {
    EditButton,
    Header,
    NESTED_ELEVATION,
    PAPER_PROPS,
    Title
} from './styles'

export interface IProps {
    /**
     * Children to be rendered inside the card.
     */
    children: ReactNode
    /**
     * If `true`, the card will be rendered with a nested style.
     * @default false
     */
    nested?: boolean
    /**
     * Title of the card.
     * @default undefined
     */
    title?: string
    name: string
    /**
     * Label to be displayed on the add button.
     * @default undefined
     */
    onAddBtnLabel?: string
    id?: string
    editing?: boolean
    action?: JSX.Element | null
    onAddProps?: Partial<ButtonProps>
    onEditProps?: Partial<IconButtonProps>
    onClickAdd?(): void
    onToggleEdit?(): void
}

const Card = (props: IProps) => {
    const {
        id,
        name,
        onAddBtnLabel,
        nested,
        title,
        action,
        onToggleEdit,
        editing,
        children,
        onClickAdd,
        onAddProps,
        onEditProps,
        ...otherProps
    } = props

    return (
        <Paper
            {...otherProps}
            name={name}
            id={id}
            style={PAPER_PROPS}
            className='showable'
            elevation={nested ? NESTED_ELEVATION : undefined}
            padding={nested ? '0' : '24px'}>
            {title && (
                <>
                    <Header>
                        {title && (
                            <Title
                                name={name + '-title'}
                                variant='h6'
                                color='primary'>
                                {title}
                            </Title>
                        )}
                        {action}
                        {onToggleEdit && (
                            <EditButton
                                {...onEditProps}
                                className={editing ? '' : 'showable-target'}
                                name={`${editing ? 'cancel' : 'edit'}-${name}`}
                                margin='-10px'
                                padding='0px'
                                onClick={onToggleEdit}>
                                {editing ? <IconClose /> : <IconEdit />}
                            </EditButton>
                        )}
                    </Header>
                    <div>
                        <Line />
                    </div>
                </>
            )}

            {onClickAdd && (
                <AddButton {...onAddProps} onClick={onClickAdd}>
                    {onAddBtnLabel}
                </AddButton>
            )}
            <div>{children}</div>
        </Paper>
    )
}

export default Card
