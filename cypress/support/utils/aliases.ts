import { ButtonProps } from '@material-ui/core'
import { MuiSelectors } from '../types-interfaces-enums'
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
