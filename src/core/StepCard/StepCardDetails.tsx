import { List } from '@material-ui/core'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { theme } from 'nginformatica-styleguide'
import React from 'react'
import { IStepCardProps } from '.'
import { CheckCircle as CheckCircleIcon, Help as HelpIcon } from '../../icons'
import IconButton from '../IconButton'
import Typography from '../Typography'
import { ListItemContainer, StepCardColumn } from './styles'

const { feedback, grays } = theme.colors
const DONE_COLOR = feedback.success
const UNDONE_COLOR = grays.g3
const UNDONE_FONT_COLOR = grays.g2

interface IStepCardDetailsProps {
    steps: IStepCardProps['steps']
    onStepUrlClick?: IStepCardProps['onStepUrlClick']
    image?: IStepCardProps['image']
    expansionPanelDetailsProps?: IStepCardProps['expansionPanelDetailsProps']
}

export const StepCardDetails = (props: IStepCardDetailsProps) => {
    const { steps, onStepUrlClick, image, expansionPanelDetailsProps } = props

    const StepsList = () => (
        <List>
            {(steps || []).map((step, index) => {
                const handleOnClickStepUrl = () => {
                    if (onStepUrlClick && step.url) {
                        onStepUrlClick(step.url)
                    }
                }

                return (
                    <ListItemContainer key={index}>
                        <CheckCircleIcon
                            style={{
                                color: step.done ? DONE_COLOR : UNDONE_COLOR
                            }}
                        />
                        <Typography
                            variant='body1'
                            style={{
                                color: UNDONE_FONT_COLOR,
                                fontWeight: 600
                            }}>
                            {step.title}
                        </Typography>
                        {step.url && onStepUrlClick && (
                            <>
                                <IconButton
                                    data-testid={`step-card-button-${index}`}
                                    style={{
                                        backgroundColor: 'unset'
                                    }}
                                    onClick={handleOnClickStepUrl}>
                                    <HelpIcon
                                        fontSize='small'
                                        style={{ margin: '0px' }}
                                    />
                                </IconButton>
                            </>
                        )}
                    </ListItemContainer>
                )
            })}
        </List>
    )

    return (
        <MuiAccordionDetails
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
            {...expansionPanelDetailsProps}>
            <StepCardColumn justifyContent='start'>
                <StepsList />
            </StepCardColumn>
            {image && (
                <StepCardColumn justifyContent='end'>
                    {typeof image === 'string' ? (
                        <img src={image} alt='Step Icon' />
                    ) : (
                        image
                    )}
                </StepCardColumn>
            )}
        </MuiAccordionDetails>
    )
}
