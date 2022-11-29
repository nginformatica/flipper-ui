import React, { useState } from 'react'
import { mount } from 'cypress/react'
import { Dialog, Button } from '../../../src'
import { generateMockList, generateSpy } from '../component'

interface IProps {
    onClose: () => void
    title: string
    text: string
}

const Component: React.FC<IProps> = props => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open dialog</Button>
            <Dialog
                open={open}
                title={props.title}
                text={props.text}
                onClose={props.onClose}
                actions={
                    <Button onClick={() => setOpen(false)}>Close dialog</Button>
                }
            />
        </>
    )
}

export const DialogFactory = () => {
    generateMockList({ value: 'dialog-content', type: ['Word', 'Words'] }).then(
        ([title, text]) => {
            const props: IProps = {
                onClose: generateSpy('checkbox-onchange'),
                title:
                    typeof title === 'string' ? title : 'My beautiful Dialog',
                text: typeof text === 'string' ? text : 'A nice description'
            }
            mount(<Component {...props} />)
        }
    )
}
