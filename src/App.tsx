import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './components/Avatar'
import Button from './components/Button'
import Paper from './components/Paper'

const App = (
    <Paper>
        <Avatar>A</Avatar>
        <Button outline>Click me</Button>
    </Paper>
)

ReactDOM.render(App, document.getElementById('root'))
