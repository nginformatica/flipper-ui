import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IconStar } from '@/icons/mui'
import Stepper from '.'

const COMPONENT_DESCRIPTION = [
    'O `Stepper` tem dois modos, e o segundo é opt-in.',
    '',
    '**Trilha linear (default).** Só leitura: `active` manda em tudo — o que',
    'vem antes dele aparece concluído, o que vem depois aparece apagado.',
    'Serve para acompanhar um fluxo em que o usuário anda para frente.',
    '',
    '**Trilha navegável (`nonLinear`).** Cada passo passa a carregar o',
    'próprio `completed` e `disabled`, e nada é inferido da posição. É o modo',
    'para telas de pastas, em que o usuário pula livremente e cada pasta tem',
    'um preenchimento próprio.',
    '',
    '> `onStepClick` sozinho **não** torna os passos clicáveis: ele precisa',
    '> de `nonLinear`. Isso é proposital — o portão é a prop explícita, não a',
    '> presença do handler, senão qualquer ferramenta que injete um `on*`',
    '> (as actions automáticas do próprio Storybook, um spread de props)',
    '> tornaria a trilha clicável sem ninguém ter pedido.'
].join('\n')

const DEFAULT_DESCRIPTION = [
    'A trilha de sempre, sem nenhuma prop nova. `steps` de strings ganha',
    'numeração automática, e `active` decide o desenho: "Name" e "Email"',
    'saem concluídos por estarem antes dele, "Photo" e "Be happy!" saem',
    'apagados por estarem depois. Nada aqui é clicável.',
    '',
    '```tsx',
    "import { Stepper } from 'flipper-ui'",
    '',
    '<Stepper',
    '    active={2}',
    "    steps={['Name', 'Email', 'Password', 'Photo', 'Be happy!']}",
    '/>',
    '```'
].join('\n')

const ICON_DESCRIPTION = [
    'Passo como objeto aceita `icon` no lugar do numeral. Pode ser um',
    'elemento pronto ou uma função que recebe se o passo está ativo — útil',
    'para trocar o ícone, não só a cor. `icon` é opcional: sem ele, o passo',
    'volta ao numeral. `bottomLabel` joga o rótulo para debaixo do ícone.',
    '',
    '```tsx',
    "import { Stepper } from 'flipper-ui'",
    '',
    '<Stepper',
    '    bottomLabel',
    '    active={1}',
    '    steps={[',
    "        { label: 'Start', icon: <IconStar /> },",
    "        { label: 'Finish', icon: active => <IconStar active={active} /> }",
    '    ]}',
    '/>',
    '```'
].join('\n')

const NAVIGATION_DESCRIPTION = [
    'O modo navegável: `nonLinear` + `onStepClick`. **Todo** passo é',
    'clicável, inclusive os que estão à frente do atual — clique no último e',
    'a trilha vai direto para lá. Cada passo vira um `<button>` de verdade,',
    'com foco e Enter/Espaço, e o ativo recebe `aria-current="step"`.',
    '',
    'Duas props sustentam o desenho:',
    '',
    '- `completed` por passo, porque aqui a conclusão não pode mais vir da',
    '  posição. Sem ela, abrir a última pasta marcaria todas as anteriores',
    '  como preenchidas, o que seria mentira.',
    '- `caption` por passo, para a linha secundária — o percentual. Ela é',
    '  renderizada dentro do rótulo, então entra no nome acessível: o leitor',
    '  de tela anuncia "Property 45%", não um "45%" órfão.',
    '',
    '```tsx',
    "import { Stepper } from 'flipper-ui'",
    '',
    'const [folder, setFolder] = useState(1)',
    '',
    '<Stepper',
    '    nonLinear',
    '    bottomLabel',
    '    active={folder}',
    '    steps={[',
    "        { label: 'Identification', caption: '100%', completed: true },",
    "        { label: 'Property', caption: '45%' }",
    '    ]}',
    '    onStepClick={setFolder}',
    '/>',
    '```'
].join('\n')

const BLOCKED_DESCRIPTION = [
    'A mesma trilha navegável, com um passo fora de alcance: `disabled` o',
    'apaga e o torna inacessível por mouse e por teclado. O bloqueio é',
    'sempre decisão de quem consome — neste modo a lib não trava passo',
    'nenhum por conta própria.',
    '',
    '```tsx',
    "import { Stepper } from 'flipper-ui'",
    '',
    '<Stepper',
    '    nonLinear',
    '    active={folder}',
    '    steps={[',
    "        { label: 'Property', caption: '45%' },",
    "        { label: 'Depreciation', caption: '0%', disabled: true }",
    '    ]}',
    '    onStepClick={setFolder}',
    '/>',
    '```'
].join('\n')

const meta: Meta<typeof Stepper> = {
    title: 'Navigation/Stepper',
    component: Stepper,
    parameters: {
        docs: {
            description: {
                component: COMPONENT_DESCRIPTION
            }
        }
    },
    argTypes: {
        active: {
            control: 'number',
            description: 'The active step'
        },
        bottomLabel: {
            control: 'boolean',
            description: 'The position of the step label'
        },
        nonLinear: {
            control: 'boolean',
            description:
                'Frees the steps from the active one. ' +
                'Each step carries its own `completed` and `disabled`, ' +
                'instead of inheriting them from its position. ' +
                'Needed to let the user jump to any step'
        },
        orientation: {
            options: ['horizontal', 'vertical'],
            control: { type: 'radio' },
            description:
                'The step orientation. ' +
                'Must be `horizontal | vertical`. ' +
                'If not set, the default is "horizontal"'
        },
        steps: {
            control: false,
            description:
                'The steps content. ' +
                'A string renders a numbered step; an object also takes ' +
                '`icon`, `caption`, `completed` and `disabled`'
        },
        onStepClick: {
            control: false,
            description:
                'Called with the index of the clicked step. ' +
                'It only turns the steps into buttons ' +
                'alongside `nonLinear`'
        },
        margin: {
            control: 'text',
            description: 'The stepper margin'
        },
        padding: {
            control: 'text',
            description: 'The stepper padding'
        },
        style: {
            control: 'object',
            description: 'The stepper style'
        }
    }
}

export default meta

type Story = StoryObj<typeof Stepper>

export const stepper: Story = {
    parameters: {
        docs: {
            description: {
                story: DEFAULT_DESCRIPTION
            }
        }
    },
    render: ({ ...args }) => {
        return <Stepper {...args} />
    },
    args: {
        active: 2,
        bottomLabel: false,
        orientation: 'horizontal',
        steps: ['Name', 'Email', 'Password', 'Photo', 'Be happy!'],
        margin: '',
        padding: '',
        style: {}
    }
}

export const stepperWithIcon: Story = {
    parameters: {
        docs: {
            description: {
                story: ICON_DESCRIPTION
            }
        }
    },
    render: ({ ...args }) => {
        return <Stepper {...args} />
    },
    args: {
        active: 1,
        bottomLabel: true,
        orientation: 'horizontal',
        steps: [
            { label: 'Start', icon: <IconStar /> },
            { label: 'You are here!', icon: <IconStar /> },
            { label: 'Finish', icon: <IconStar /> }
        ],
        margin: '',
        padding: '',
        style: {}
    }
}

const StepperWithNavigation = () => {
    const [active, setActive] = useState(1)

    return (
        <Stepper
            nonLinear
            bottomLabel
            active={active}
            steps={[
                { label: 'Identification', caption: '100%', completed: true },
                { label: 'Property', caption: '45%' },
                { label: 'Location', caption: '0%' },
                { label: 'Depreciation', caption: '0%' }
            ]}
            onStepClick={setActive}
        />
    )
}

export const stepperWithNavigation: Story = {
    parameters: {
        docs: {
            description: {
                story: NAVIGATION_DESCRIPTION
            }
        }
    },
    render: () => {
        return <StepperWithNavigation />
    }
}

const StepperWithBlockedStep = () => {
    const [active, setActive] = useState(0)

    return (
        <Stepper
            nonLinear
            bottomLabel
            active={active}
            steps={[
                { label: 'Identification', caption: '100%', completed: true },
                { label: 'Property', caption: '45%' },
                { label: 'Depreciation', caption: '0%', disabled: true }
            ]}
            onStepClick={setActive}
        />
    )
}

export const stepperWithBlockedStep: Story = {
    parameters: {
        docs: {
            description: {
                story: BLOCKED_DESCRIPTION
            }
        }
    },
    render: () => {
        return <StepperWithBlockedStep />
    }
}
