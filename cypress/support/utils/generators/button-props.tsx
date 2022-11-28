import { cond } from 'ramda'
import { ButtonProps } from '../../../../src/core/Button'
import { ButtonVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

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

export const buttonPropsGenerator = (preset: ButtonVariant): ButtonProps => {
    const validate = (variant: ButtonVariant) =>
        validator<ButtonVariant>(variant)

    return cond([
        [validate('primary'), () => primary],
        [validate('secondary'), () => secondary],
        [validate('contained-primary'), () => containedPrimary],
        [validate('contained-secondary'), () => containedSecondary],
        [validate('outlined-primary'), () => outlinedPrimary],
        [validate('outlined-secondary'), () => outlinedSecondary],
        [validate('selected'), () => selected],
        [validate('dashed-primary'), () => dashedPrimary],
        [validate('dashed-secondary'), () => dashedSecondary],
        [validate('add-icon'), () => addIcon],
        [validate('small'), () => small],
        [validate('medium'), () => medium],
        [validate('large'), () => large],
        [validate('disabled'), () => disabled]
    ])(preset)
}
