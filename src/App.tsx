import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './components/Avatar'
import Badge from './components/Badge'
import Button from './components/Button'
import Chip from './components/Chip'
import Header from './components/Header'
import Paper from './components/Paper'
import Stepper from './components/Stepper'
import TextField from './components/TextField'

const App = (
    <div>
        <Header position='sticky'>Flipper-UI</Header>
        <Paper padding={ 24 }>
            <Stepper active={ 1 } steps={ ['Para', 'bens', 'Lorena'] } />
            <Avatar primary>A</Avatar>
            <Button variant='outlined'>Click me</Button>
            <br />
            <br />
            <Badge counter={ 150 } color='secondary'>
                <Button variant='outlined'>Click me</Button>
            </Badge>
            <br />
            <Chip label='Hello darkness my old friend' />
            <Chip label='Hello darkness my old friend' avatar={ <Avatar>HD</Avatar> } />
            <div>
                <TextField />
            </div>
        </Paper>
    </div>
)

ReactDOM.render(App, document.getElementById('root'))
