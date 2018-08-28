import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './components/Avatar'
import Button from './components/Button'
import Paper from './components/Paper'

const App = (
    <Paper padding={ 24 }>
        <Avatar>A</Avatar>
        <Button variant="outlined">Click me</Button>
    </Paper>
)

ReactDOM.render(App, document.getElementById('root'))
