import React from 'react'
import type { ReactNode } from 'react'
import type { IButtonProps } from '@/core/inputs/button'
import type { IconButtonProps } from '@/core/inputs/icon-button'
import Line from '@/core/data-display/line'
import Typography from '@/core/data-display/typography'
import AddButton from '@/core/inputs/add-button'
import Paper from '@/core/surfaces/paper'
import { IconClose, IconEdit, IconDelete } from '@/icons/mui'
import { CardButton, Header } from './styles'
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
    onAddProps?: Partial<IButtonProps>
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
            id={id}
            name={name}
            className='showable'
            elevation={nested ? 0 : undefined}
            padding={nested ? '0px' : '24px'}
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
            }}>
            {title && (
                <>
                    <Header>
                        {title && (
                            <Typography
                                name={name + '-title'}
                                flex={1}
                                variant='h6'
                                color='primary'>
                                {title}
                            </Typography>
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
