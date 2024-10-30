import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import stepCardImage from '../../../images/step-card-image.svg'
import StepCard from '.'

const meta: Meta<typeof StepCard> = {
    title: 'Surfaces/StepCard',
    component: StepCard,
    argTypes: {
        title: {
            control: 'text',
            description: 'The step card title'
        },
        subTitle: {
            control: 'text',
            description: 'The step card subTitle'
        },
        summary: {
            control: 'text',
            description: 'The step card summary'
        },
        image: {
            control: false,
            description: 'The step card image'
        },
        steps: {
            control: false,
            description: 'The step card steps content'
        },
        loading: {
            control: 'boolean',
            description: 'The step card loading state'
        },
        showIcon: {
            control: 'boolean',
            description: 'The step card showIcon state'
        },
        expandable: {
            control: 'boolean',
            description: 'The step card expandable state'
        },
        showBottomPercentage: {
            control: 'boolean',
            description: 'The step card showBottomPercentage state'
        },
        time: {
            control: 'number',
            description: 'The step card time'
        },
        percentage: {
            control: 'number',
            description: 'The step card percentage'
        },
        remainingSteps: {
            control: 'number',
            description: 'The step card remainingSteps'
        },
        margin: {
            control: 'text',
            description: 'The step card margin'
        },
        padding: {
            control: 'text',
            description: 'The step card margin'
        }
    }
}

export default meta

type Story = StoryObj<typeof StepCard>

export const stepCard: Story = {
    render: ({ ...args }) => {
        return <StepCard {...args} />
    },
    args: {
        title: 'Configurar a organização e filial',
        summary: '%i passos restantes - Leva %i minuto(s)',
        time: 2,
        percentage: 75,
        remainingSteps: 3,
        image: stepCardImage,
        steps: [
            {
                title: 'Informar Razão social',
                done: true,
                url: 'https://www.google.com'
            },
            {
                title: 'Informar dados do eSocial',
                done: true,
                url: 'https://www.google.com'
            },
            {
                title: 'Informar dados da filial(CNAE, CNPJ)',
                done: false,
                url: 'https://www.google.com'
            }
        ],
        onStepUrlClick: (url: string) => alert(url),
        margin: '',
        padding: ''
    }
}

export const stepCardWithoutExpandable: Story = {
    render: ({ ...args }) => {
        return <StepCard {...args} />
    },
    args: {
        title: 'Conheça mais sobre o Quírons',
        subTitle:
            'Siga os passos recomendados para uma melhor experiência ' +
            'dentro da plataforma.',
        summary: 'Seu progresso',
        loading: false,
        showIcon: false,
        expandable: false,
        showBottomPercentage: false,
        percentage: 75,
        steps: [
            {
                title: 'Informar Razão social',
                done: true,
                url: 'https://www.google.com'
            },
            {
                title: 'Informar dados do eSocial',
                done: true,
                url: 'https://www.google.com'
            },
            {
                title: 'Informar dados da filial(CNAE, CNPJ)',
                done: false,
                url: 'https://www.google.com'
            }
        ],
        margin: '',
        padding: '30px'
    }
}

export const stepCardWithLoading: Story = {
    render: ({ ...args }) => {
        return <StepCard {...args} />
    },
    args: {
        title: 'Configurar a organização e filial',
        subTitle: 'É rápido!',
        summary: '%i passos restantes - Leva %i minuto(s)',
        loading: true,
        time: 2,
        remainingSteps: 3,
        image: stepCardImage,
        steps: [
            {
                title: 'Informar Razão social',
                done: true,
                url: 'https://www.google.com'
            },
            {
                title: 'Informar dados do eSocial',
                done: true,
                url: 'https://www.google.com'
            },
            {
                title: 'Informar dados da filial(CNAE, CNPJ)',
                done: false,
                url: 'https://www.google.com'
            }
        ],
        onStepUrlClick: (url: string) => alert(url),
        margin: '',
        padding: ''
    }
}
