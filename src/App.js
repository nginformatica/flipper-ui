import React, { Component, Fragment } from 'react'
import { evolve, not } from 'ramda'
import styled from 'styled-components'
import TextArea from './components/TextArea'
import TextField from './components/TextField'
import Button from './components/Button'
import Picker from './components/Picker'
import Avatar from './components/Avatar'
import Stepper from './components/Stepper'
import Paper from './components/Paper'
import Tree from './components/Tree'
import Checkbox from './components/Checkbox'
import Pagination from './components/Pagination'
import Card from './components/Card'
import Header, { HeaderTitle } from './components/Header'
import Content from './components/Content'
import Container from './components/Container'
import Sidebar from './components/Sidebar'
import List from './components/List'
import { MdBackup, MdBook } from 'react-icons/md'

const Segment = styled.div`
    display: flex;
    align-items: center;
    flex-flow: row wrap;
`

class App extends Component {
    constructor(props) {
        super(props)
        this.state = { sidebar: false }
    }

    handleToggleSidebar() {
        this.setState(evolve({ sidebar: not }))
    }

    render() {
        return (
            <Fragment>
                <Header>
                    <HeaderTitle>Flipper UI</HeaderTitle>
                </Header>
                <Container>
                    <Sidebar
                        top={ 60 }
                        position="fixed"
                        open={ this.state.sidebar }
                        onToggle={ this.handleToggleSidebar.bind(this) }>
                        <List
                            onlyIcons={ !this.state.sidebar }
                            options={
                                [
                                    {
                                        name: 'menu1',
                                        icon: <MdBackup size="24" />,
                                        label: 'Such option'
                                    },
                                    {
                                        name: 'menu2',
                                        icon: <MdBook size="24" />,
                                        label: 'Much wow'
                                    }
                                ]
                            }
                        />
                    </Sidebar>
                   <Content>
                        <Paper>
                            Work in progress...
                            <Stepper
                                active={ 2 }
                                steps={ ['1', '2', '3', '4', '5'] }
                            />
                            <Segment>
                                <Avatar>W</Avatar>
                                <Avatar primary>L</Avatar>
                            </Segment>
                            <Segment>
                                <Pagination
                                    pages={ 5 }
                                    active={ 3 }
                                />
                            </Segment>
                            <Segment>
                                <Button raised>Button</Button>
                                <Button raised outline>Raised Outline</Button>
                                <Button outline>Outline</Button>
                                <Button>Flat</Button>
                                <Button transparent>Transparent</Button>
                                <Button active>Active</Button>
                            </Segment>
                            <Segment>
                                <TextArea rows={ 4 } placeholder="Description" />
                                <TextField placeholder="Email" />
                                <Picker
                                    value={ 'first' }
                                    options={
                                        [
                                            {
                                                label: 'First option',
                                                value: 'first'
                                            },
                                            {
                                                label: 'Second Option',
                                                value: 'second'
                                            }
                                        ]
                                    }
                                    onChange={ () => {} }
                                />
                            </Segment>
                            <Segment>
                                <Checkbox label={ 'Li e aceito os termos de uso' } />
                            </Segment>
                            <Segment>
                                <Tree
                                    nodes={ [
                                        {
                                            id: 0,
                                            type: '',
                                            name: 'Tree',
                                            nodes: [
                                                {
                                                    id: 1,
                                                    type: '',
                                                    name: 'Branch'
                                                },
                                                {
                                                    id: 2,
                                                    type: '',
                                                    name: 'Branch'
                                                },
                                                {
                                                    id: 3,
                                                    type: '',
                                                    name: 'Branch',
                                                    nodes: [
                                                        {
                                                            id: 5,
                                                            type: '',
                                                            name: 'Leaf'
                                                        }
                                                    ]
                                                },
                                                {
                                                    id: 4,
                                                    type: '',
                                                    name: 'Branch',
                                                    nodes: [
                                                        {
                                                            id: 6,
                                                            type: '',
                                                            name: 'Leaf'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ] }
                                />
                            </Segment>
                            <Segment>
                                <Card title={ 'Full width card' } />
                                <Card xs={ 6 } title={ 'Half width card' } />
                                <Card xs={ 6 } title={ 'Half width card' } />
                            </Segment>
                        </Paper>
                    </Content>
                </Container>
            </Fragment>
        )
    }
}

export default App
