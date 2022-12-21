import { mount } from 'cypress/react'
import React from 'react'
import { CheckboxProps } from 'src/core/Checkbox'
import { Checkbox } from '../../../src'
// eslint-disable-next-line max-len
import { Generators } from '../../support'
import { generateMockList, generateSpy } from '../component'
import { CheckboxVariant } from '../types-interfaces-enums'

export const CheckboxFactory = (variant: CheckboxVariant) => {
    const onChangeSpy = generateSpy('checkbox-onchange')
    const onHelperClickSpy = generateSpy('checkbox-onHelper-click')
    generateMockList({
        value: 'checkbox-params',
        type: ['Word', 'GenericStyleParams']
    }).then(mockedList => {
        const defaultProps = {
            ...mockedList[1],
            label: mockedList[0],
            checkboxProps: {
                'data-cy': 'checkbox-container'
            }
        } as unknown as CheckboxProps

        const props = Generators.checkboxPropsGenerator(
            variant,
            defaultProps,
            onHelperClickSpy
        )

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        mount(<Checkbox {...props} onChange={onChangeSpy} />)
    })
}
