import { cond } from 'ramda'
import { ButtonProps } from '../../../../src/core/Button'
import { ButtonVariant } from '../../types-interfaces-enums'
import { buttonValidators } from '../validators'

const generate = (props: ButtonProps): Record<ButtonVariant, ButtonProps> => ({
    default: props,
    primary: {
        ...props,
        color: 'primary'
    },
    secondary: {
        ...props,
        color: 'secondary'
    },
    'contained-primary': {
        ...props,
        variant: 'contained',
        color: 'primary'
    },
    'contained-secondary': {
        ...props,
        variant: 'contained',
        color: 'secondary'
    },
    'outlined-primary': {
        ...props,
        variant: 'outlined',
        color: 'primary'
    },
    'outlined-secondary': {
        ...props,
        variant: 'outlined',
        color: 'secondary'
    },
    selected: {
        ...props,
        variant: 'contained',
        color: 'primary',
        selected: true
    },
    'dashed-primary': {
        ...props,
        variant: 'dashed',
        color: 'primary'
    },
    'dashed-secondary': {
        ...props,
        variant: 'dashed',
        color: 'secondary'
    },
    'add-icon': {
        ...props,
        color: 'primary'
    },
    small: {
        ...props,
        size: 'small',
        variant: 'contained',
        color: 'primary'
    },
    medium: {
        ...props,
        size: 'medium',
        variant: 'contained',
        color: 'primary'
    },
    large: {
        ...props,
        size: 'large',
        variant: 'contained',
        color: 'primary'
    },
    disabled: {
        ...props,
        variant: 'contained',
        color: 'primary',
        disabled: true
    }
})

const DEFAULT: ButtonProps = {
    margin: 12
}

const {
    isPrimary,
    isSecondary,
    isContainedPrimary,
    isContainedSecondary,
    isOutlinedPrimary,
    isOutlinedSecondary,
    isSelected,
    isDashedPrimary,
    isDashedSecondary,
    isWithAddIcon,
    isSmall,
    isMedium,
    isLarge,
    isDisabled
} = buttonValidators

const {
    primary,
    secondary,
    'contained-primary': containedPrimary,
    'contained-secondary': containedSecondary,
    'outlined-primary': outlinedPrimary,
    'outlined-secondary': outlinedSecondary,
    selected,
    'dashed-primary': dashedPrimary,
    'dashed-secondary': dashedSecondary,
    'add-icon': addIcon,
    small,
    medium,
    large,
    disabled
} = generate(DEFAULT)

export const buttonPropsGenerator = (preset: ButtonVariant): ButtonProps =>
    cond([
        [isPrimary, () => primary],
        [isSecondary, () => secondary],
        [isContainedPrimary, () => containedPrimary],
        [isContainedSecondary, () => containedSecondary],
        [isOutlinedPrimary, () => outlinedPrimary],
        [isOutlinedSecondary, () => outlinedSecondary],
        [isSelected, () => selected],
        [isDashedPrimary, () => dashedPrimary],
        [isDashedSecondary, () => dashedSecondary],
        [isWithAddIcon, () => addIcon],
        [isSmall, () => small],
        [isMedium, () => medium],
        [isLarge, () => large],
        [isDisabled, () => disabled]
    ])(preset)
