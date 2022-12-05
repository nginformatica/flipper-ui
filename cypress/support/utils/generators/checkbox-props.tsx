import { cond } from 'ramda'
import { CheckboxProps } from '../../../../src/core/Checkbox'
import { CheckboxVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (
    props: CheckboxProps,
    onHelperClick?: () => void
): Record<CheckboxVariant, CheckboxProps> => ({
    default: props,
    'with-helper': {
        ...props,
        onHelperClick
    },
    primary: {
        ...props,
        color: 'primary'
    },
    'without-label': {
        ...props,
        label: undefined
    },
    switch: {
        ...props,
        type: 'switch'
    },
    'switch-with-helper': {
        ...props,
        type: 'switch',
        onHelperClick
    }
})
const validate = (variant: CheckboxVariant) =>
    validator<CheckboxVariant>(variant)

export const checkboxPropsGenerator = (
    preset: CheckboxVariant,
    props: CheckboxProps,
    onHelperClick?: () => void
): CheckboxProps => {
    const {
        'with-helper': withHelper,
        primary,
        'without-label': withoutLabel,
        switch: switchComponent,
        'switch-with-helper': switchWithHelper
    } = generate(props, onHelperClick)

    return cond([
        [validate('with-helper'), () => withHelper],
        [validate('primary'), () => primary],
        [validate('without-label'), () => withoutLabel],
        [validate('switch'), () => switchComponent],
        [validate('switch-with-helper'), () => switchWithHelper]
    ])(preset)
}
