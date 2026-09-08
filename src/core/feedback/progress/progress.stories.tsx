import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Progress from '.'
import { theme } from '@/theme'

const { deepOrange } = theme.colors

const meta: Meta<typeof Progress> = {
    title: 'Feedback/Progress',
    component: Progress,
    argTypes: {
        linear: {
            control: 'boolean',
            description:
                'If `true`, renders a horizontal bar instead of the ring. ' +
                'If not informed, the ring is rendered'
        },
        variant: {
            options: ['buffer', 'determinate', 'indeterminate', 'query'],
            control: { type: 'radio' },
            description:
                'The progress variant when linear is set to true. ' +
                'Must be `buffer | determinate | indeterminate | query`. ' +
                'When the linear is set to false, the variants are `determinate | indeterminate`. ' +
                'If not set, the default is "indeterminate"'
        },
        value: {
            control: 'number',
            description:
                'How much of the progress is filled, from 0 to 100. Read ' +
                'only by the `determinate` and `buffer` variants'
        },
        label: {
            control: 'text',
            description:
                'Inline content rendered next to the progress. It goes ' +
                'beside the linear bar, and inside the ring of a circular ' +
                'one — below 40px the ring is too small, so it falls back ' +
                'to beside it. It also names the progressbar, so no ' +
                '`ariaLabel` is needed alongside it'
        },
        labelPosition: {
            options: ['inside', 'beside'],
            control: { type: 'radio' },
            description:
                'Where a circular `label` goes. If not informed, it is ' +
                '"inside" from 40px up and "beside" below it. The linear ' +
                'bar ignores it and always renders the label beside itself'
        },
        ariaLabel: {
            control: 'text',
            description:
                'The accessible name, required whenever there is no ' +
                '`label` — a progressbar with no name announces a bare ' +
                'percentage. Overrides `label` as the name'
        },
        borderRadius: {
            control: 'text',
            description:
                'The linear bar corner radius, as CSS — `3px`, `50%`. The ' +
                'fill is clipped by it on its own, since the bar hides its ' +
                'own overflow. Use with `linear=true`'
        },
        thickness: {
            control: 'text',
            description:
                'The linear bar height. The fill follows it on its own, ' +
                'so the inner bars need no styling. Use with ' +
                '`linear=true`. If not set, the default is 4'
        },
        size: {
            control: 'number',
            description:
                'The ring diameter. Use with `linear=false`. If not set, ' +
                'the default is 40'
        },
        color: {
            options: [
                'inherit',
                'primary',
                'secondary',
                'error',
                'info',
                'success',
                'warning'
            ],
            control: { type: 'radio' },
            description:
                'The progress color. Must be ' +
                '`inherit | primary | secondary | error | info | success | warning`. ' +
                'If not set, the default is "primary"'
        },
        valueBuffer: {
            control: 'number',
            description:
                'The progress value buffer. Use with `linear=true` and `variant="buffer" | "determinate"`'
        },
        primaryColor: {
            control: 'color',
            description:
                'The track color, behind the fill. Use with ' +
                '`linear=true` and `variant="determinate"`'
        },
        barPrimaryColor: {
            control: 'color',
            description:
                'The fill color. Use with `linear=true` and ' +
                '`variant="determinate"`'
        },
        barSecondaryColor: {
            control: 'color',
            description:
                'The fill color of the second bar, which only exists in ' +
                'the `buffer` variant. Requires `color="secondary"`'
        },
        sx: {
            control: false,
            description:
                'MUI system styles, merged over the ones the color props ' +
                'generate instead of replacing them'
        },
        margin: {
            control: 'text',
            description: 'The progress margin'
        },
        padding: {
            control: 'text',
            description: 'The progress padding'
        }
    }
}

export default meta

type Story = StoryObj<typeof Progress>

const renderStory: Story['render'] = ({ ...args }) => <Progress {...args} />

const baseArgs = {
    margin: '12px',
    padding: '0px'
}

const LOADING_DESCRIPTION = [
    'O `Progress` nasce indicador de carregamento: anel circular e',
    'indeterminado. É esse default que faz o componente parecer *só* um',
    'loading — mas ele é também a barra de dado, como as demais stories',
    'mostram.',
    '',
    '```tsx',
    "import { Progress } from 'flipper-ui'",
    '',
    '<Progress />',
    '',
    '<Progress linear />',
    '```',
    '',
    'Sem `variant`, o indicador é indeterminado: fica em movimento perpétuo',
    'porque não existe progresso conhecido a mostrar. É o modo correto para',
    'espera de duração desconhecida, e nele o `value` é ignorado.',
    '',
    '> `buffer` e `query` são implementadas pela barra linear apenas. O',
    '> anel as aceita por tipagem — para que a interseção de `ICircular`',
    '> com `ILinear` não colapse e as deixe inacessíveis nos dois modos —',
    '> e as repassa ao MUI como vêm.'
].join('\n')

const DATA_BAR_DESCRIPTION = [
    'O mesmo componente serve de **barra de dado** — não é preciso outro.',
    'Com `variant="determinate"` e `value`, ele mostra quanto de algo já',
    'foi consumido, e não que a página está carregando.',
    '',
    '```tsx',
    "import { Progress } from 'flipper-ui'",
    '',
    '<Progress',
    '    linear',
    "    variant='determinate'",
    '    value={72}',
    "    label='72%'",
    '    thickness={6}',
    "    borderRadius='3px'",
    '/>',
    '```',
    '',
    '`thickness` afina a barra para caber numa linha de tabela — o',
    'preenchimento acompanha a altura sozinho, então não há nada a',
    'estilizar por dentro. `label` renderiza ao lado e a barra ocupa o',
    'espaço restante.',
    '',
    'O tom semântico fica com quem consome, porque o limiar é regra de',
    'negócio, não do design system:',
    '',
    '```tsx',
    '<Progress',
    '    linear',
    "    variant='determinate'",
    '    value={Math.min(consumed, 100)}',
    '    label={`${consumed}%`}',
    '    thickness={6}',
    "    borderRadius='3px'",
    "    color={consumed >= 100 ? 'error' : consumed >= 80 ? 'warning' : 'success'}",
    '/>',
    '```',
    '',
    '`borderRadius` arredonda as pontas — a barra esconde o próprio',
    'overflow, então o preenchimento é recortado junto, sem estilizar nada',
    'por dentro.',
    '',
    '`sx` continua disponível para o resto, e é mesclado **sobre** os',
    'estilos que as props de cor geram, nunca no lugar deles.',
    '',
    "> `borderRadius` recebe CSS, então informe a unidade: `'3px'`. Pelo",
    '> `sx` do MUI, um número nesta propriedade seria multiplicado por',
    '> `theme.shape.borderRadius` — `3` sairia `12px`.',
    '',
    '> Sem `label`, informe `ariaLabel`. Um `progressbar` sem nome anuncia',
    '> só a porcentagem, e numa tabela de várias linhas o leitor de tela',
    '> repete "72%" sem dizer 72% de quê.'
].join('\n')

const CIRCULAR_LABEL_DESCRIPTION = [
    'No anel, a `label` é centralizada por dentro. Abaixo de 40px ela não',
    'cabe mais, então passa a ser renderizada ao lado — sem que você',
    'precise escolher.',
    '',
    '```tsx',
    "import { Progress } from 'flipper-ui'",
    '',
    '<Progress',
    '    size={48}',
    "    variant='determinate'",
    '    value={72}',
    "    label='72%'",
    '/>',
    '',
    '<Progress',
    '    size={24}',
    "    variant='determinate'",
    '    value={72}',
    "    label='72%'",
    '/>',
    '```',
    '',
    'A `label` também nomeia o `progressbar`, via `aria-labelledby`, então',
    'o texto não é duplicado para quem usa leitor de tela. Quando ela é',
    'texto, alimenta ainda o `aria-valuetext` — necessário para rótulos',
    'que não são porcentagem, como "3 de 5 dias", em que o `aria-valuenow`',
    'sozinho não significa nada.',
    '',
    'A escolha é automática, mas não é obrigatória: `labelPosition` decide',
    'por você, e é a saída quando o `size` vem numa unidade que não dá para',
    'medir sem o DOM.',
    '',
    '```tsx',
    '<Progress',
    "    size='3rem'",
    "    labelPosition='inside'",
    "    variant='determinate'",
    '    value={72}',
    "    label='72%'",
    '/>',
    '```',
    '',
    '> Sem `labelPosition`, a comparação com os 40px é numérica: `size` em',
    '> número ou em `px` é medido, e em `rem` ou `em` o anel é tratado como',
    '> grande o suficiente.'
].join('\n')

const CUSTOM_COLORS_DESCRIPTION = [
    'Para fugir da paleta do tema, `primaryColor` pinta a trilha e',
    '`barPrimaryColor` o preenchimento. `barSecondaryColor` atinge a',
    'segunda barra, que só existe na variante `buffer` e exige',
    '`color="secondary"`.',
    '',
    '```tsx',
    "import { Progress } from 'flipper-ui'",
    "import { theme } from 'flipper-ui/theme'",
    '',
    'const { deepOrange } = theme.colors',
    '',
    '<Progress',
    '    linear',
    "    variant='determinate'",
    '    value={50}',
    '    valueBuffer={75}',
    '    primaryColor={`${deepOrange[600]}80`}',
    '    barPrimaryColor={deepOrange[600]}',
    '/>',
    '```',
    '',
    '> Estas três props antecedem o `sx` e continuam valendo. Elas são o',
    '> atalho; o `sx` é a via geral, e o que ele traz vence, porque entra',
    '> depois na cascata.'
].join('\n')

export const loading: Story = {
    name: 'Carregamento',
    parameters: {
        docs: {
            description: {
                story: LOADING_DESCRIPTION
            }
        }
    },
    render: renderStory,
    args: {
        ...baseArgs,
        size: 48,
        color: 'primary',
        variant: 'indeterminate',
        linear: false
    }
}

export const dataBar: Story = {
    name: 'Barra de dado',
    parameters: {
        docs: {
            description: {
                story: DATA_BAR_DESCRIPTION
            }
        }
    },
    render: renderStory,
    args: {
        ...baseArgs,
        linear: true,
        variant: 'determinate',
        value: 72,
        label: '72%',
        thickness: 6,
        color: 'warning'
    }
}

export const circularWithLabel: Story = {
    name: 'Anel com rótulo',
    parameters: {
        docs: {
            description: {
                story: CIRCULAR_LABEL_DESCRIPTION
            }
        }
    },
    render: renderStory,
    args: {
        ...baseArgs,
        linear: false,
        size: 48,
        variant: 'determinate',
        value: 72,
        label: '72%'
    }
}

export const customColors: Story = {
    name: 'Cores customizadas',
    parameters: {
        docs: {
            description: {
                story: CUSTOM_COLORS_DESCRIPTION
            }
        }
    },
    render: renderStory,
    args: {
        ...baseArgs,
        linear: true,
        variant: 'determinate',
        value: 50,
        valueBuffer: 75,
        primaryColor: `${deepOrange[600]}80`,
        barPrimaryColor: deepOrange[600]
    }
}
