import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './components/Avatar'
import Button from './components/Button'
import Paper from './components/Paper'
import TextField from './components/TextField'

const App = (
    <Paper padding={ 24 }>
        <Avatar>A</Avatar>
        <Button variant='outlined'>Click me</Button>
        <div>
        <TextField />
        </div>
    </Paper>
)

ReactDOM.render(App, document.getElementById('root'))
