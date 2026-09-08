import React from 'react'
import type { ReactNode } from 'react'
import type { ITypographyProps } from '@/core/data-display/typography'
import type { IButtonProps } from '@/core/inputs/button'
import type { IconButtonProps } from '@/core/inputs/icon-button'
import Line from '@/core/data-display/line'
import Typography from '@/core/data-display/typography'
import AddButton from '@/core/inputs/add-button'
import IconButton from '@/core/inputs/icon-button'
import Paper from '@/core/surfaces/paper'
import { IconClose, IconEdit, IconDelete } from '@/icons/mui'
import { ActionsWrapper, Header } from './styles'

export interface IProps {
    id?: string
    name: string
    title?: string
    label?: string
    nested?: boolean
    editing?: boolean
    children: ReactNode
    renderRemove?: boolean
    action?: JSX.Element | null
    /**
     * Merged over the title defaults — `variant='h6'`, `color='primary'`.
     * `variant` also sets the heading level, so `{ component: 'h2' }`
     * keeps the `h6` type scale on an `<h2>` tag.
     */
    titleProps?: Partial<ITypographyProps>
    onAddProps?: Partial<IButtonProps>
    onEditProps?: Partial<IconButtonProps>
    onRemoveProps?: Partial<IconButtonProps>
    onRemove?(): void
    onClickAdd?(): void
    onToggleEdit?(): void
}

const Card = (props: IProps) => {
    const {
        id,
        name,
        label,
        nested,
        title,
        titleProps,
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
                                color='primary'
                                {...titleProps}>
                                {title}
                            </Typography>
                        )}

                        <ActionsWrapper>
                            {action}

                            {onRemove && !!renderRemove && (
                                <IconButton
                                    aria-label='Excluir'
                                    {...onRemoveProps}
                                    className={editing ? '' : 'showable-target'}
                                    name={`remove-${name}`}
                                    padding='4px'
                                    onClick={onRemove}>
                                    <IconDelete
                                        color='error'
                                        fontSize='small'
                                    />
                                </IconButton>
                            )}

                            {onToggleEdit && (
                                <IconButton
                                    aria-label={editing ? 'Cancelar' : 'Editar'}
                                    {...onEditProps}
                                    className={editing ? '' : 'showable-target'}
                                    name={`${editing ? 'cancel' : 'edit'}-${name}`}
                                    padding='4px'
                                    onClick={onToggleEdit}>
                                    {editing ? (
                                        <IconClose fontSize='small' />
                                    ) : (
                                        <IconEdit fontSize='small' />
                                    )}
                                </IconButton>
                            )}
                        </ActionsWrapper>
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
