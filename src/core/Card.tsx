// import { divide, multiply, pipe, prop } from 'ramda'
import React, { FC, useState } from 'react'
// import styled from 'styled-components'
// import { primary, white } from '../colors'
import { IDefault } from './Advertise'
import AutoComplete from './AutoComplete'
import TextField from './TextField'
import ListItem from './ListItem'

interface IProps extends IDefault {
    xs?: number
    name?: string
    id?: string
    title?: string
}

interface IContainer {
    xs: number
    style?: object
}

// __ from ramda was not recognized by TS
// const getPercent = pipe(prop('xs'), multiply(100), num => divide(num, 12))

// const Container = styled.div<IContainer>`
//     width: calc(${getPercent}% - 24px);
//     background: ${primary.normal};
//     font-family: 'Roboto', sans-serif;
//     display: block;
//     border-radius: 12px;
//     margin: 12px;
// `

// const Header = styled.div`
//     border-radius: 12px;
//     color: ${white};
//     padding: 0.75em;
// `

// const Content = styled.div`
//     background: ${white};
//     border-radius: 12px;
//     min-height: 52px;
//     padding: 12px;
//     border: 1px solid ${primary.normal};
// `

// const Card: FC<IProps> = ({
//     children,
//     padding,
//     margin,
//     style = {},
//     title,
//     xs = 12,
//     ...otherProps
// }) =>
//     <Container
//         xs={ xs }
//         style={ { padding, margin, ...style } }
//         { ...otherProps }>
//         <Header>{ title }</Header>
//         <Content>{ children }</Content>
//     </Container>

interface IA {
    label: string
    type?: string
    value: string
}

const INITIAL: IA = {
    label: 'teste 1',
    value: 'teste1'
}

const Card: FC = () => {
    const [value, setValue] = useState<string | IA>(INITIAL)

    const suggestions = [{
        label: 'teste 1',
        value: 'teste1'
    }, {
        label: 'teste 2',
        value: 'teste2'
    }]

    console.log(value)

    return (
        <AutoComplete
            openOnFocus
            value={ value }
            renderInput={ props =>
                <TextField
                    { ...props }
                    label='Teste autocomplete'
                />
            }
            renderSuggestion={ (item, itemProps, selected) =>
                <ListItem selected={ selected } { ...itemProps }>
                    { item.label }
                </ListItem>
            }
            suggestions={ suggestions }
            onChange={ newValue => setValue(newValue) }
        />
    )
}

export default Card
