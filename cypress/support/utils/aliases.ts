import { ButtonProps } from '@material-ui/core'
import {
    MuiSelectors,
    MuiTypographySelectors,
    TypographyVariant
} from '../types-interfaces-enums'
import { amber, blue, green, red } from '@material-ui/core/colors'

const SUCCESS_COLOR = green[700]
const ERROR_COLOR = red[700]
const INFO_COLOR = blue[700]
const WARNING_COLOR = amber[700]

export const colorMapValues = new Map<ButtonProps['color'], MuiSelectors[]>([
    [
        'primary',
        [
            MuiSelectors.BtnTextPrimary,
            MuiSelectors.BtnContainedPrimary,
            MuiSelectors.BtnOutlinedPrimary
        ]
    ],
    [
        'secondary',
        [
            MuiSelectors.BtnTextSecondary,
            MuiSelectors.BtnContainedSecondary,
            MuiSelectors.BtnOutlinedSecondary
        ]
    ]
])

export const variantMapValues = new Map<ButtonProps['variant'], MuiSelectors[]>(
    [
        ['contained', [MuiSelectors.BtnContained]],
        ['outlined', [MuiSelectors.BtnOutlined]]
    ]
)

export const sizeMapValues = new Map<ButtonProps['size'], MuiSelectors>([
    ['small', MuiSelectors.BtnSmall],
    ['large', MuiSelectors.BtnLarge]
])

export const muiMessagesColors = new Map<string, string>([
    ['success', SUCCESS_COLOR],
    ['warning', WARNING_COLOR],
    ['error', ERROR_COLOR],
    ['info', INFO_COLOR.toUpperCase()]
])

export const muiTypographyValues: Map<TypographyVariant, string> = new Map<
    TypographyVariant,
    string
>([
    ['body1', MuiTypographySelectors.Body1],
    ['body2', MuiTypographySelectors.Body2],
    ['error-text', MuiTypographySelectors.ColorError],
    ['primary', MuiTypographySelectors.ColorPrimary],
    ['secondary', MuiTypographySelectors.ColorSecondary],
    ['text-primary', MuiTypographySelectors.ColorTextPrimary],
    ['text-secondary', MuiTypographySelectors.ColorTextSecondary],
    ['button', MuiTypographySelectors.Button],
    ['caption', MuiTypographySelectors.Caption],
    ['subtitle1', MuiTypographySelectors.Subtitle1],
    ['subtitle2', MuiTypographySelectors.Subtitle2],
    ['caption', MuiTypographySelectors.Caption],
    ['h1', MuiTypographySelectors.H1],
    ['h2', MuiTypographySelectors.H2],
    ['h3', MuiTypographySelectors.H3],
    ['h4', MuiTypographySelectors.H4],
    ['h5', MuiTypographySelectors.H5],
    ['h6', MuiTypographySelectors.H6]
])
