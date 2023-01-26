import React from 'react'
import { mount } from 'cypress/react18'
import { StepCardVariant } from '../types-interfaces-enums'
import { Generators } from '..'
import StepCard from '../../../src/core/StepCard'

export const StepCardFactory = (preset: StepCardVariant) => {
    const generatedProps = Generators.StepCardPropsGenerator(preset)
    const props = Object.assign({}, generatedProps, {
        'data-cy': 'step-card-container'
    })

    mount(
        <StepCard
            {...props}
            summaryProps={{ 'data-cy': 'summary-text' }}
            expansionPanelDetailsProps={{
                'data-cy': 'expansion-panel-details-container'
            }}
            linearProgressBarProps={{
                'data-cy': 'linear-progress-bar-container'
            }}
            summaryLinearProgressBarProps={{
                'data-cy': 'summary-linear-progress-bar-container'
            }}
        />
    )
}
