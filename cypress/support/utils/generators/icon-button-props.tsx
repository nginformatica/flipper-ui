import { cond } from 'ramda'
import { IconButtonProps } from '../../../../src/core/IconButton'
import { IconButtonVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (
    props: IconButtonProps
): Record<IconButtonVariant, IconButtonProps> => ({
    default: props,
    primary: {
        ...props,
        color: 'primary'
    },
    secondary: {
        ...props,
        color: 'secondary'
    },
    disabled: {
        ...props,
        disabled: true
    }
})

const DEFAULT: IconButtonProps = {}

const { primary, secondary, disabled } = generate(DEFAULT)

export const IconButtonPropsGenerator = (
    preset: IconButtonVariant
): IconButtonProps => {
    const validate = (variant: IconButtonVariant) =>
        validator<IconButtonVariant>(variant)

    return cond([
        [validate('primary'), () => primary],
        [validate('secondary'), () => secondary],
        [validate('disabled'), () => disabled]
    ])(preset)
}
