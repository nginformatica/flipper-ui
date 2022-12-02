import { ifElse } from 'ramda'
import { StepperProps } from '../../../../src/core/Stepper'
import { StepperVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (
    steps: StepperProps['steps']
): Record<StepperVariant, StepperProps> => ({
    default: {
        active: 0,
        steps
    },
    'with-icon': {
        bottomLabel: true,
        active: 0,
        steps
    }
})
export const StepperPropsGenerator = (
    preset: StepperVariant,
    steps: StepperProps['steps']
): StepperProps => {
    const validate = (variant: StepperVariant) =>
        validator<StepperVariant>(variant)

    const { default: defProp, 'with-icon': withIcon } = generate(steps)

    return ifElse(
        validate('with-icon'),
        () => withIcon,
        () => defProp
    )(preset)
}
