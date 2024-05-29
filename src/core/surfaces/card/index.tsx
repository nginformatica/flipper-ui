import React from 'react'
import type { ReactNode } from 'react'
import {
    Close as IconClose,
    Edit as IconEdit,
    Delete as IconDelete
} from '@mui/icons-material'
import type { ButtonProps } from '@/core/inputs/button'
import type { IconButtonProps } from '@/core/inputs/icon-button'
import Line from '@/core/data-display/line'
import AddButton from '@/core/inputs/add-button'
import Paper from '../paper'
import {
    CardButton,
    Header,
    NESTED_ELEVATION,
    PAPER_PROPS,
    Title
} from './styles'
import { theme } from '@/theme'

const { feedback } = theme.colors

export interface IProps {
    children: ReactNode
    nested?: boolean
    title?: string
    name: string
    label?: string
    id?: string
    editing?: boolean
    action?: JSX.Element | null
    renderRemove?: boolean
    onAddProps?: Partial<ButtonProps>
    onEditProps?: Partial<IconButtonProps>
    onRemoveProps?: Partial<IconButtonProps>
    onClickAdd?(): void
    onToggleEdit?(): void
    onRemove?(): void
}

const Card = (props: IProps) => {
    const {
        id,
        name,
        label,
        nested,
        title,
        action,
        onToggleEdit,
        editing,
        children,
        renderRemove,
        onRemove,
        onClickAdd,
        onAddProps,
        onEditProps,
        onRemoveProps,
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

                        {onRemove && !!renderRemove && (
                            <CardButton
                                {...onRemoveProps}
                                className={editing ? '' : 'showable-target'}
                                name={`remove-${name}`}
                                margin='-10px 20px'
                                padding='0px'
                                onClick={onRemove}>
                                <IconDelete htmlColor={feedback.danger} />
                            </CardButton>
                        )}

                        {onToggleEdit && (
                            <CardButton
                                {...onEditProps}
                                className={editing ? '' : 'showable-target'}
                                name={`${editing ? 'cancel' : 'edit'}-${name}`}
                                margin='-10px'
                                padding='0px'
                                onClick={onToggleEdit}>
                                {editing ? <IconClose /> : <IconEdit />}
                            </CardButton>
                        )}
                    </Header>
                    <Line />
                </>
            )}

            {onClickAdd && (
                <AddButton
                    {...onAddProps}
                    name={name}
                    label={label}
                    onClick={onClickAdd}
                />
            )}

            {children}
        </Paper>
    )
}

export default Card
