import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './components/Avatar'
import Button from './components/Button'
import Checkbox from './components/Checkbox'
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
            <div>
                <TextField />
            </div>
            <Checkbox value='terms' label='I agree with the terms above' />
        </Paper>
    </div>
)

ReactDOM.render(App, document.getElementById('root'))
