import React, { useState } from 'react'
import { Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'
import Paper from '@/core/surfaces/paper'
import Table from '../table'
import TableBody from '../table/table-body'
import TableCell from '../table/table-cell'
import TableHead from '../table/table-head'
import TableRow from '../table/table-row'
import { useViewMode } from './useViewMode'
import ViewMode from '.'
import { Cards, WrapperEnd } from './styles'

const meta: Meta<typeof ViewMode> = {
    title: 'DataDisplay/View Mode',
    component: ViewMode,
    argTypes: {
        filters: {
            control: false,
            description:
                'Array of filter objects to customize the view mode options. Each filter should contain a label (ReactNode), active state (boolean) and click handler. When not provided, default table/cards icons will be used.'
        },
        activeMode: {
            control: false,
            description:
                'Current active view mode state (boolean). Typically true for table view and false for card view. This should be controlled by the parent component when using external state management. Defaults to false (card view).'
        },
        setActiveMode: {
            control: false,
            description:
                'Callback function to update the active mode state. Receives the new boolean value or can be used with prev => !prev pattern for toggle functionality. Required for controlled component usage.'
        }
    }
}

export default meta

type Story = StoryObj<typeof ViewMode>

const ViewModeStories = () => {
    const [activeMode, toggleActiveMode] = useViewMode('brigades-view-mode')

    return (
        <Paper padding={24} elevation={2}>
            <WrapperEnd>
                <ViewMode
                    activeMode={activeMode}
                    setActiveMode={toggleActiveMode}
                />
            </WrapperEnd>

            {activeMode ? (
                <Table style={{ border: 'none' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Occupation</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name 1</TableCell>
                            <TableCell>E-mail 1</TableCell>
                            <TableCell>Occupation 1</TableCell>
                            <TableCell>Country 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name 2</TableCell>
                            <TableCell>E-mail 2</TableCell>
                            <TableCell>Occupation 2</TableCell>
                            <TableCell>Country 2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name 3</TableCell>
                            <TableCell>E-mail 3</TableCell>
                            <TableCell>Occupation 3</TableCell>
                            <TableCell>Country 3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name 4</TableCell>
                            <TableCell>E-mail 4</TableCell>
                            <TableCell>Occupation 4</TableCell>
                            <TableCell>Country 4</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            ) : (
                <Cards>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 1</Typography>
                    </Paper>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 2</Typography>
                    </Paper>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 3</Typography>
                    </Paper>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 4</Typography>
                    </Paper>
                </Cards>
            )}
        </Paper>
    )
}

export const viewMode: Story = {
    render: () => {
        return <ViewModeStories />
    }
}

const ViewModeCustom = () => {
    const [activeMode, setActiveMode] = useState(false)

    const filters = [
        {
            label: 'Ativos',
            active: activeMode,
            onClick: () => setActiveMode(prev => !prev)
        },
        {
            label: 'Todos',
            active: !activeMode,
            onClick: () => setActiveMode(prev => !prev)
        }
    ]

    return (
        <Paper padding={24} elevation={2}>
            <WrapperEnd>
                <ViewMode filters={filters} />
            </WrapperEnd>

            {activeMode ? (
                <Table style={{ border: 'none' }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Occupation</TableCell>
                            <TableCell>Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name 1</TableCell>
                            <TableCell>E-mail 1</TableCell>
                            <TableCell>Occupation 1</TableCell>
                            <TableCell>Country 1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name 2</TableCell>
                            <TableCell>E-mail 2</TableCell>
                            <TableCell>Occupation 2</TableCell>
                            <TableCell>Country 2</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name 3</TableCell>
                            <TableCell>E-mail 3</TableCell>
                            <TableCell>Occupation 3</TableCell>
                            <TableCell>Country 3</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name 4</TableCell>
                            <TableCell>E-mail 4</TableCell>
                            <TableCell>Occupation 4</TableCell>
                            <TableCell>Country 4</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            ) : (
                <Cards>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 1</Typography>
                    </Paper>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 2</Typography>
                    </Paper>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 3</Typography>
                    </Paper>
                    <Paper padding='32px 16px' elevation={2}>
                        <Typography variant='button'>Card 4</Typography>
                    </Paper>
                </Cards>
            )}
        </Paper>
    )
}

export const viewModeCustom: Story = {
    render: () => {
        return <ViewModeCustom />
    }
}
