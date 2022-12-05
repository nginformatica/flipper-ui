import React from 'react'
import { ComponentMeta } from '@storybook/react'
import Container from '../core/Container'

export default {
    title: 'Container',
    component: Container
} as ComponentMeta<typeof Container>

export const Default = () => <Container>I am a Container</Container>
