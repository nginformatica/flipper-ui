import { cond, T } from 'ramda'
import { SnackbarVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'
import { SnackBarProps } from '../../../../src/core/Snackbar'

type CySnackBarProps = Omit<SnackBarProps, 'open'>

const generate = (
    props: CySnackBarProps
): Record<SnackbarVariant, CySnackBarProps> => ({
    default: props,
    success: {
        ...props,
        variant: 'success',
        message: 'This is a success message'
    },
    warning: {
        ...props,
        variant: 'warning',
        message: 'This is a warning message'
    },
    error: {
        ...props,
        variant: 'error',
        message: 'This is an error message'
    }
})

const DEFAULT: CySnackBarProps = {
    anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom'
    },
    message: 'This is a normal message'
}

const { default: defProps, success, warning, error } = generate(DEFAULT)

export const SnackbarPropsGenerator = (
    preset: SnackbarVariant
): SnackBarProps => {
    const validate = (variant: SnackbarVariant) =>
        validator<SnackbarVariant>(variant)

    return cond([
        [validate('success'), () => success],
        [validate('warning'), () => warning],
        [validate('error'), () => error],
        [T, () => defProps]
    ])(preset)
}
