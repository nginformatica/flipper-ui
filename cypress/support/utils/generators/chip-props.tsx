import React from 'react'
import { ChipProps } from '@material-ui/core'
import { cond, T } from 'ramda'
import { Avatar } from '../../../../src'
import { IChipProps } from '../../../../src/core/Chip'
import { ChipVariant } from '../../types-interfaces-enums'
import { validator } from '../validators'
import FaceIcon from '@material-ui/icons/Face'

const generate = (
    props: ChipProps & IChipProps
): Record<ChipVariant, ChipProps & IChipProps> => ({
    default: props,
    'with-avatar': {
        ...props,
        avatar: <Avatar>HD</Avatar>
    },
    squared: {
        ...props,
        square: true
    },
    'with-icon-avatar': {
        ...props,
        avatar: (
            <Avatar>
                <FaceIcon />
            </Avatar>
        )
    },
    'with-image-avatar': {
        ...props,
        avatar: <Avatar src='https://picsum.photos/40' />
    },
    'secondary-color': {
        ...props,
        color: 'secondary'
    }
})

const validate = (variant: ChipVariant) => validator<ChipVariant>(variant)

export const chipPropsGenerator = (
    preset: ChipVariant,
    props: ChipProps & IChipProps
): ChipProps & IChipProps => {
    const {
        default: defProps,
        squared,
        'with-avatar': withAvatar,
        'with-icon-avatar': withIconAvatar,
        'with-image-avatar': withImageAvatar,
        'secondary-color': secondary
    } = generate(props)

    return cond([
        [validate('squared'), () => squared],
        [validate('with-avatar'), () => withAvatar],
        [validate('with-icon-avatar'), () => withIconAvatar],
        [validate('with-image-avatar'), () => withImageAvatar],
        [validate('secondary-color'), () => secondary],
        [T, () => defProps]
    ])(preset)
}
