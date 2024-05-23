import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from '.'
import { BreadcrumbStoryLink } from './styles'

const meta: Meta<typeof Breadcrumbs> = {
    title: 'Experimental/Breadcrumbs',
    component: Breadcrumbs,
    argTypes: {
        linkWrapper: {
            table: {
                disable: true
            }
        },
        pathname: {
            control: 'text',
            description:
                'The pathname to render breadcrumbs `(default: window.location.pathname)`'
        },
        homeId: {
            control: false,
            description: 'The homeId (eg: "-"), must be a key of `pathMapping`'
        },
        pathMapping: {
            control: 'object',
            description:
                'A mapping between the pathname and the friendly name `{ "*": "Home", "foo": "Bar"}`'
        }
    }
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

export const breadcrumbs: Story = {
    render: ({ ...args }) => {
        // the storybook doesn't understand the react-router Link
        // using this <a></a> tag to exemplify only
        const defaultLinkWrapper = (link: string, label: string) => (
            <BreadcrumbStoryLink key={link} href={link}>
                {label}
            </BreadcrumbStoryLink>
        )

        return <Breadcrumbs {...args} linkWrapper={defaultLinkWrapper} />
    },
    args: {
        pathname: '/foo/bar',
        homeId: '-',
        pathMapping: {
            '-': 'Home',
            foo: 'Foo',
            bar: 'Bar'
        }
    }
}
