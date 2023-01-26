import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import StepCard from '../core/StepCard'
import { sprintf } from 'sprintf-js'

const STEM_TIME_MULTIPLIER = 0.5

export default {
    title: 'StepCard',
    component: StepCard
} as ComponentMeta<typeof StepCard>

const Template: ComponentStory<typeof StepCard> = args => {
    const total = args.steps.length
    const done = args.steps.filter(step => step.done).length
    const remaining = total - done

    const summary =
        args.summary ||
        sprintf(
            '%i passos restantes - Leva %i minuto(s)',
            remaining,
            remaining * STEM_TIME_MULTIPLIER
        )

    return (
        <StepCard
            {...args}
            summary={summary}
            totalSteps={total}
            doneSteps={done}
        />
    )
}

export const Default = Template.bind({})

Default.args = {
    title: 'Configurar a organização e filial',
    image: 'https://dummyimage.com/130x124/000/fff',
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
