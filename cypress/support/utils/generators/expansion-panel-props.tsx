import React from 'react'
import { Button, Typography } from '../../../../src'
import ExpandMore from '@material-ui/icons/ExpandMore'
import {
    ExpansionPanelVariant,
    GenerateMockProps
} from 'cypress/support/types-interfaces-enums'
import { generateSpy } from '../../component'
import { ExpansionPanelProps } from 'src/core/ExpansionPanel'
import { validator } from '../validators'
import { ifElse } from 'ramda'

const generate = (
    props: ExpansionPanelProps
): Record<ExpansionPanelVariant, ExpansionPanelProps> => ({
    default: props,
    'with-editable': {
        ...props,
        editable: true
    }
})

export const generateExpansionPanelProps = (
    preset: ExpansionPanelVariant,
    mockedValues: GenerateMockProps[]
): ExpansionPanelProps => {
    const onHelperClickSpy = generateSpy('expansion-panel-on-helper-click')
    const onConfirmClickSpy = generateSpy('expansion-panel-on-confirm-click')

    const [summary, body, footer] = mockedValues

    const defaultProps: ExpansionPanelProps = {
        summary: typeof summary === 'string' ? summary : '',
        onHelperClick: onHelperClickSpy,
        expandIcon: <ExpandMore />,
        actions: (
            <Button color='primary' onClick={onConfirmClickSpy}>
                Confirm
            </Button>
        ),
        details: (
            <div>
                <Typography gutterBottom>
                    {typeof body === 'string' ? body : ''}
                </Typography>
                <Typography variant='caption'>
                    {typeof footer === 'string' ? footer : ''}
                </Typography>
            </div>
        )
    }

    const { default: defProp, 'with-editable': withEditable } =
        generate(defaultProps)

    const validate = (variant: ExpansionPanelVariant) =>
        validator<ExpansionPanelVariant>(variant)

    return ifElse(
        validate('with-editable'),
        () => withEditable,
        () => defProp
    )(preset)

    // return defaultProps
}
