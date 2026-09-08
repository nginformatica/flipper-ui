import React from 'react'
import type { ICustomAction } from '.'
import type { Meta, StoryObj } from '@storybook/react'
import {
    IconArrowBack,
    IconCloudDownload,
    IconContentCopy,
    IconDelete,
    IconPrint,
    IconRestore
} from '@/icons/mui'
import Actions from '.'

const ICONS: Record<string, JSX.Element> = {
    back: <IconArrowBack />,
    copy: <IconContentCopy />,
    delete: <IconDelete />,
    download: <IconCloudDownload />,
    print: <IconPrint />,
    restore: <IconRestore />
}

const meta: Meta<typeof Actions> = {
    title: 'DataDisplay/Actions',
    component: Actions,
    argTypes: {
        customActions: {
            control: 'object',
            description:
                'Extra buttons. When informed, they **replace** the ' +
                'cancel/confirm pair. Text button: `{ label, onClick, name?, ' +
                'color?, variant?, size?, padding?, disabled? }`. Icon ' +
                'button: `{ icon, aria-label, onClick, … }` — renders an ' +
                'IconButton, and `aria-label` is required because an icon ' +
                'has no text. `size` defaults to "medium" on text and ' +
                '"small" on icons, so an icon never makes the bar taller. ' +
                '**In this control only**, pass `icon` as one of ' +
                '`back | copy | delete | download | print | restore` — the ' +
                'real prop takes a ReactNode, which JSON cannot express'
        },
        buttons: {
            options: ['cancel', 'confirm'],
            control: { type: 'check' },
            description:
                'Which of the default buttons to render. Must be ' +
                "`Array<'confirm' | 'cancel'>`. If not informed, both are " +
                'rendered. Ignored when `customActions` is informed'
        },
        labels: {
            control: 'object',
            description:
                'The default buttons inner label. An object with the ' +
                '`cancel` and `confirm` keys'
        },
        names: {
            control: 'object',
            description:
                'The `name` attribute of the default buttons. An object ' +
                'with the `cancel` and `confirm` keys'
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
            description:
                'The cancel/confirm buttons size. Must be ' +
                '`small | medium | large`. Default is "medium"'
        },
        actionButtonColor: {
            options: [
                'inherit',
                'primary',
                'secondary',
                'success',
                'error',
                'info',
                'warning'
            ],
            control: { type: 'radio' },
            description:
                'The "Confirmar" button color. If not set, the default is ' +
                '"secondary"'
        },
        align: {
            options: ['flex-end', 'flex-start', 'center'],
            control: { type: 'radio' },
            description:
                'The buttons position. Must be `flex-end | flex-start | center`'
        },
        ariaLabel: {
            control: 'text',
            description:
                'The accessible name of the action bar group. ' +
                'Default is "Ações"'
        },
        padding: {
            control: 'text',
            description: 'The action bar padding'
        },
        margin: {
            control: 'text',
            description: 'The action bar margin'
        },
        readonly: {
            control: 'boolean',
            description:
                'If `true`, hides the confirm button and the custom actions'
        },
        disabled: {
            control: 'boolean',
            description: 'If `true`, every button is disabled'
        },
        disabledCancel: {
            control: 'boolean',
            description: 'If `true`, the Cancel button is disabled'
        },
        disabledConfirm: {
            control: 'boolean',
            description: 'If `true`, the Confirm button is disabled'
        },
        onCancel: {
            control: false,
            description: 'The onCancel function, must be `() => void | boolean`'
        },
        onConfirm: {
            control: false,
            description: 'The onConfirm function, must be `() => void`'
        }
    }
}

export default meta

type Story = StoryObj<typeof Actions>

type TEditableAction = Omit<ICustomAction, 'icon' | 'onClick'> & {
    icon?: string
}

const toCustomActions = (actions?: TEditableAction[]) =>
    actions?.map(action => {
        const name = action['aria-label'] || String(action.label)

        return {
            ...action,
            icon: action.icon ? ICONS[action.icon] : undefined,
            onClick: () => alert(name)
        } as ICustomAction
    })

const renderStory: Story['render'] = ({ customActions, ...args }) => (
    <Actions
        {...args}
        customActions={toCustomActions(
            customActions as unknown as TEditableAction[]
        )}
        onCancel={() => alert('Cancelar')}
        onConfirm={() => alert('Confirmar')}
    />
)

const baseArgs = {
    align: 'flex-end' as const,
    margin: '',
    padding: '',
    size: 'medium' as const,
    ariaLabel: 'Ações',
    actionButtonColor: 'primary' as const,
    readonly: false,
    disabled: false,
    onConfirm: () => undefined
}

const DEFAULT_DESCRIPTION = [
    'Sem `customActions`, o componente renderiza o par Cancelar/Confirmar —',
    'exatamente como sempre funcionou. Use `buttons` para esconder um dos',
    'dois e `labels` para trocar os textos.',
    '',
    '```tsx',
    "import { Actions } from 'flipper-ui'",
    '',
    '<Actions',
    "    margin='12px'",
    '    onCancel={handleCancel}',
    '    onConfirm={handleConfirm}',
    '/>',
    '```',
    '',
    'Escondendo o Cancelar e trocando os textos:',
    '',
    '```tsx',
    '<Actions',
    "    buttons={['confirm']}",
    "    labels={{ cancel: 'Voltar', confirm: 'Excluir' }}",
    "    actionButtonColor='error'",
    '    onConfirm={handleDelete}',
    '/>',
    '```'
].join('\n')

const CUSTOM_DESCRIPTION = [
    'Informando `customActions`, esses botões **substituem** o par',
    'Cancelar/Confirmar — a barra passa a ser só o que você declarou, em',
    'qualquer quantidade. Aceita botão de texto (`label`) e de ícone',
    '(`icon` + `aria-label`) na mesma lista.',
    '',
    '```tsx',
    "import { Actions } from 'flipper-ui'",
    "import { IconCloudDownload } from 'flipper-ui/icons/mui'",
    '',
    '<Actions',
    '    customActions={[',
    '        {',
    '            icon: <IconCloudDownload />,',
    "            'aria-label': 'Baixar arquivo',",
    '            onClick: handleDownload',
    '        },',
    "        { label: 'Exportar', onClick: handleExport },",
    "        { label: 'Imprimir', onClick: handlePrint },",
    '        {',
    "            label: 'Publicar',",
    "            color: 'primary',",
    "            variant: 'contained',",
    '            onClick: handlePublish',
    '        }',
    '    ]}',
    '    onConfirm={() => {}}',
    '/>',
    '```',
    '',
    'Cada item aceita `size` (`small | medium | large`), `padding`,',
    '`color`, `variant`, `disabled`, `name` e `data-testid`. O `size`',
    'nasce `medium` no botão de texto e `small` no de ícone, para que um',
    'ícone nunca deixe a barra mais alta.',
    '',
    '> `onConfirm` continua obrigatório por tipagem mesmo neste modo, mas',
    '> nunca é chamado — o botão Confirmar não é renderizado. Por isso o',
    '> exemplo passa `() => {}`: não existe handler real a informar aqui.'
].join('\n')

export const defaultComponent: Story = {
    name: 'Componente padrão',
    parameters: {
        docs: {
            description: {
                story: DEFAULT_DESCRIPTION
            }
        }
    },
    render: renderStory,
    args: {
        ...baseArgs,
        buttons: ['cancel', 'confirm'],
        labels: { cancel: 'Cancelar', confirm: 'Confirmar' },
        names: { cancel: 'cancel-action', confirm: 'confirm-action' },
        disabledCancel: false,
        disabledConfirm: false,
        customActions: []
    }
}

export const customComponent: Story = {
    name: 'Componente customizado',
    parameters: {
        docs: {
            description: {
                story: CUSTOM_DESCRIPTION
            }
        }
    },
    render: renderStory,
    args: {
        ...baseArgs,
        customActions: [
            { icon: 'download', 'aria-label': 'Baixar arquivo' },
            { label: 'Exportar', name: 'export-action' },
            { label: 'Imprimir', name: 'print-action' },
            {
                label: 'Publicar',
                name: 'publish-action',
                color: 'primary',
                variant: 'contained'
            }
        ] as unknown as ICustomAction[]
    }
}
