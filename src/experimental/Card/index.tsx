import { Close as IconClose, Edit as IconEdit } from '@/icons'
import React, { CSSProperties } from 'react'
import {
    Typography,
    Paper,
    Line,
    Button as AddButton,
    IconButton
} from '@/index'
import styled from 'styled-components'
import { ButtonProps } from '@/core/inputs/Button'
import { IconButtonProps } from '@/core/inputs/IconButton'

export interface IProps {
    /**
     * Children to be rendered inside the card.
     */
    children: React.ReactNode
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
    id?: string
    editing?: boolean
    action?: JSX.Element | null
    onAddProps?: Partial<ButtonProps>
    onEditProps?: Partial<IconButtonProps>
    onClickAdd?(): void
    onToggleEdit?(): void
}

export const Content = styled.div`
    flex: 1;
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 12px;
`

const Header = styled.div`
    display: flex;
`

export const Title = styled(Typography)`
    flex: 1;
`

const EditButton = styled(IconButton)`
    && {
        width: 36px;
        height: 36px;
    }
`

const NESTED_ELEVATION = 0

const paperStyle: CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
}

const Card = (props: IProps) => {
    const {
        id,
        name,
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
            style={paperStyle}
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
            {onClickAdd && <AddButton {...onAddProps} onClick={onClickAdd} />}
            <div>{children}</div>
        </Paper>
    )
}

export default Card
