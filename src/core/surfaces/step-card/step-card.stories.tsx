import React from 'react'
import type { Meta, StoryFn } from '@storybook/react'
import stepCardImage from '../../../images/step-card-image.svg'
import StepCard from '.'

export default {
    title: 'Surfaces/StepCard',
    component: StepCard
} as Meta<typeof StepCard>

const Template: StoryFn<typeof StepCard> = args => {
    return <StepCard {...args} />
}

const TemplateWithLoading: StoryFn<typeof StepCard> = args => {
    return <StepCard {...args} loading={args.loading} subTitle='É rápido!' />
}

export const Default = Template.bind({})

Default.args = {
    summary: '%i passos restantes - Leva %i minuto(s)',
    time: 2,
    percentage: 75,
    remainingSteps: 3,
    title: 'Configurar a organização e filial',
    image: stepCardImage,
    onStepUrlClick: (url: string) => alert(url),
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
    ]
}

export const WithoutExpandable = Template.bind({})

WithoutExpandable.args = {
    loading: false,
    padding: '30px',
    percentage: 75,
    showBottomPercentage: false,
    expandable: false,
    showIcon: false,
    title: 'Conheça mais sobre o Quírons',
    subTitle:
        'Siga os passos recomendados para uma melhor experiência ' +
        'dentro da plataforma.',
    summary: 'Seu progresso',
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
    ]
}

export const WithLoading = TemplateWithLoading.bind({})

WithLoading.args = {
    loading: true,
    summary: '%i passos restantes - Leva %i minuto(s)',
    time: 2,
    remainingSteps: 3,
    title: 'Configurar a organização e filial',
    image: stepCardImage,
    onStepUrlClick: (url: string) => alert(url),
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
    ]
}
