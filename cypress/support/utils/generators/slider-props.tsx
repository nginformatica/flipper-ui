import { cond, T } from 'ramda'
import { FlipperSliderProps } from '../../../../src/core/Slider'
import { SliderVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

const generate = (
    props: FlipperSliderProps
): Record<SliderVariant, FlipperSliderProps> => ({
    default: props,
    secondary: {
        ...props,
        color: 'secondary'
    },
    ranged: {
        ...props,
        value: [0, 100]
    },
    'fixed-label': {
        ...props,
        valueLabelDisplay: 'on',
        value: [0, 100]
    },
    'with-marks': {
        ...props,
        marks: [
            {
                value: 0,
                label: 'Start'
            },
            {
                value: 50,
                label: 'You are half way'
            },
            {
                value: 100,
                label: 'Finish'
            }
        ],
        valueLabelDisplay: 'on',
        value: [20, 75]
    }
})

const DEFAULT: FlipperSliderProps = {}

const {
    default: defProps,
    secondary,
    ranged,
    'fixed-label': fixedLabel,
    'with-marks': withMarks
} = generate(DEFAULT)

export const SliderPropsGenerator = (
    preset: SliderVariant
): FlipperSliderProps => {
    const validate = (variant: SliderVariant) =>
        validator<SliderVariant>(variant)

    return cond([
        [validate('secondary'), () => secondary],
        [validate('ranged'), () => ranged],
        [validate('fixed-label'), () => fixedLabel],
        [validate('with-marks'), () => withMarks],
        [T, () => defProps]
    ])(preset)
}
