import { cond } from 'ramda'
import { HeaderProps } from '../../../../src/core/Header'
import { HeaderVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (props: HeaderProps): Record<HeaderVariant, HeaderProps> => ({
    default: props,
    primary: {
        ...props,
        color: 'primary'
    },
    secondary: {
        ...props,
        color: 'secondary'
    },
    inherit: {
        ...props,
        color: 'inherit'
    }
})

const DEFAULT: HeaderProps = {
    color: 'default'
}

const { primary, secondary, inherit, default: defProps } = generate(DEFAULT)

export const headerPropsGenerator = (preset: HeaderVariant): HeaderProps => {
    const validate = (variant: HeaderVariant) =>
        validator<HeaderVariant>(variant)

    return cond([
        [validate('primary'), () => primary],
        [validate('secondary'), () => secondary],
        [validate('inherit'), () => inherit],
        [validate('default'), () => defProps]
    ])(preset)
}
