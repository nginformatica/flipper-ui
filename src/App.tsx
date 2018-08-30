import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from './components/Avatar'
import Badge from './components/Badge'
import Button from './components/Button'
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
            <Badge counter={ 12 }>
                <ShoppingCartIcon />
            </Badge>
            <br />
            <br />
            <Badge counter={ 150 } color='secondary'>
                <Button variant='outlined'>Click me</Button>
            </Badge>
            <br />
            <Badge counter={ 0 }>
                <ShoppingCartIcon />
            </Badge>
            <div>
                <TextField />
            </div>
        </Paper>
    </div>
)

ReactDOM.render(App, document.getElementById('root'))
