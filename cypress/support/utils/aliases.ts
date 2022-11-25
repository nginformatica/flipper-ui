import { ButtonProps } from '@material-ui/core'
import { MuiSelectors } from '../types-interfaces-enums'

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
