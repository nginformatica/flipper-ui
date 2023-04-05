import { Close as IconClose, Edit as IconEdit } from '../../../icons'
import React, { CSSProperties } from 'react'
import Typography from '../../Typography'
import styled from 'styled-components'
import IconButton from '../../IconButton'
import Paper from '../../Paper'
import Line from '../../Line'
import AddButton from '../../Button'

export interface IProps {
    children: React.ReactNode
    label?: string
    nested?: boolean
    title?: string
    name: string
    id?: string
    editing?: boolean
    action?: JSX.Element | null
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
        label,
        children,
        onClickAdd,
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
            {onClickAdd && <AddButton onClick={onClickAdd} />}
            <div>{children}</div>
        </Paper>
    )
}

export default Card
