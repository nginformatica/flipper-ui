import { TypographyProps } from '@material-ui/core'
import { cond, T } from 'ramda'
import { DefaultProps } from '../../../../src/core/types'
import { TypographyVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'

type IProps = TypographyProps & DefaultProps

const generate = (): Record<TypographyVariant, IProps> => ({
    default: {},
    'error-text': {
        color: 'error'
    },
    primary: {
        color: 'primary'
    },
    secondary: {
        color: 'secondary'
    },
    'text-primary': {
        color: 'textPrimary'
    },
    'text-secondary': {
        color: 'textSecondary'
    },
    button: {
        variant: 'button'
    },
    caption: {
        variant: 'caption'
    },
    body1: {
        variant: 'body1'
    },
    body2: {
        variant: 'body2'
    },
    subtitle1: {
        variant: 'subtitle1'
    },
    subtitle2: {
        variant: 'subtitle2'
    },
    h1: {
        variant: 'h1'
    },
    h2: {
        variant: 'h2'
    },
    h3: {
        variant: 'h3'
    },
    h4: {
        variant: 'h4'
    },
    h5: {
        variant: 'h5'
    },
    h6: {
        variant: 'h6'
    }
})

export const TypographyPropsGenerator = (preset: TypographyVariant): IProps => {
    const {
        default: defProps,
        'error-text': errorText,
        primary,
        secondary,
        'text-primary': textPrimary,
        'text-secondary': textSecondary,
        button,
        caption,
        body1,
        body2,
        subtitle1,
        subtitle2,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6
    } = generate()

    const validate = (variant: TypographyVariant) =>
        validator<TypographyVariant>(variant)

    return cond([
        [validate('error-text'), () => errorText],
        [validate('primary'), () => primary],
        [validate('secondary'), () => secondary],
        [validate('text-primary'), () => textPrimary],
        [validate('text-secondary'), () => textSecondary],
        [validate('button'), () => button],
        [validate('caption'), () => caption],
        [validate('body1'), () => body1],
        [validate('body2'), () => body2],
        [validate('subtitle1'), () => subtitle1],
        [validate('subtitle2'), () => subtitle2],
        [validate('h1'), () => h1],
        [validate('h2'), () => h2],
        [validate('h3'), () => h3],
        [validate('h4'), () => h4],
        [validate('h5'), () => h5],
        [validate('h6'), () => h6],
        [T, () => defProps]
    ])(preset)
}
