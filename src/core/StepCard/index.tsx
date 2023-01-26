/* eslint-disable max-lines */
import { Box, LinearProgress, List, ListItemText } from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import { theme } from 'nginformatica-styleguide'
import React, { useMemo } from 'react'
import {
    CheckCircle as CheckCircleIcon,
    ExpandMore as ExpandMoreIcon,
    Help as HelpIcon
} from '../../icons'
import Typography from '../Typography'
import './colors.css'
import {
    ListItemContainer,
    StepCardColumn,
    StepCardRow,
    StepContainer,
    Container,
    NormalProgressContainer,
    TitleContainer
} from './styles'
import IconButton from '../IconButton'
import { PropWithDataCy } from '../types'

const { feedback, grays } = theme.colors
const DONE_COLOR = feedback.success
const UNDONE_COLOR = grays.g3
const UNDONE_FONT_COLOR = grays.g2
const UNDONE_TITLE_COLOR = grays.g1
const UNDONE_PROGRESS_COLOR = grays.g5

/**
 * Props for the StepCard component
 *
 * @interface IStepCardProps
 */
export interface IStepCardProps {
    /**
     * Whether to show the percentage on the expansion panel summary
     * Defaults to true
     * @type {boolean}
     * @memberof IStepCardProps
     * @default true
     */
    showBottomPercentage: boolean

    /**
     * A text to be displayed on the expansion panel summary
     *
     * @type {string}
     * @memberof IStepCardProps
     */
    summary: string

    /**
     * The title of the step card
     *
     * @type {string}
     * @memberof IStepCardProps
     */
    title: string

    /**
     * The subtitle of the step card title
     *
     * @type {string}
     * @memberof IStepCardProps
     */
    subTitle?: string

    /**
     * The image to be displayed on the expansion panel details
     *
     * @type {string}
     * @memberof IStepCardProps
     */
    image?: string

    /**
     * The total number of steps
     *
     * @type {number}
     * @memberof IStepCardProps
     */
    totalSteps: number

    /**
     * The number of completed steps
     *
     * @type {number}
     * @memberof IStepCardProps
     */
    doneSteps: number

    /**
     * An array of steps, each with a title, a done flag and an optional url
     *
     * @type [{
     *         title: string;
     *         done: boolean;
     *         url?: string;
     *     }]
     * @memberof IStepCardProps
     */
    steps: {
        title: string
        done: boolean
        url?: string
    }[]

    /**
     * Props to be passed to the root element
     *
     * @type {(React.HTMLAttributes<HTMLDivElement> | undefined)}
     * @memberof IStepCardProps
     */
    rootProps?: React.HTMLAttributes<HTMLDivElement>

    /**
     * Props to be passed to the title typography
     *
     * @type {(typeof Typography | undefined)}
     * @memberof IStepCardProps
     */
    titleProps?: PropWithDataCy<typeof Typography>

    /**
     * Props to be passed to the summary typography
     *
     * @type {(typeof Typography | undefined)}
     * @memberof IStepCardProps
     */
    summaryProps?: PropWithDataCy<typeof Typography>

    /**
     * Props to be passed to the expansion panel
     * @type {(typeof MuiExpansionPanel | undefined)}
     * @memberof IStepCardProps
     */
    expansionPanelDetailsProps?: PropWithDataCy<typeof MuiExpansionPanelDetails>

    /**
     * Props to be passed to the linear progress bar
     * @type {(typeof LinearProgress | undefined)}
     * @memberof IStepCardProps
     */
    linearProgressBarProps?: PropWithDataCy<typeof LinearProgress>

    /**
     * Props to be passed to the expansion panel summary linear progress bar
     * @type {(typeof LinearProgress | undefined)}
     * @memberof IStepCardProps
     */
    summaryLinearProgressBarProps?: PropWithDataCy<typeof LinearProgress>

    /**
     * Whether the expansion panel is expandable
     * @type {boolean}
     * @memberof IStepCardProps
     * @default true
     */
    expandable: boolean

    /**
     * Whether to show the icon on the expansion panel summary
     * @type {boolean}
     * @memberof IStepCardProps
     * @default true
     */
    showIcon: boolean

    /**
     * Callback to be called when the user clicks on a step url
     * @memberof IStepCardProps
     * @default undefined
     * @type {(url: string) => void}
     */
    onStepUrlClick?: (url: string) => void
}

/**
 * StepCard is a reusable component that displays a card with a title, a summary,
 * an expandable panel, and a progress bar.
 * The expandable panel displays a list of steps, each with a title, a done flag,
 * and an optional url.
 *
 * @example
 * <StepCard
 *   showBottomPercentage={true}
 *   summary="50% Complete"
 *   title="Step 1"
 *   subTitle="Subtitle for step 1"
 *   image="https://via.placeholder.com/150"
 *   totalSteps={4}
 *   doneSteps={2}
 *   steps={[
 *     { title: "Step 1-1", done: true },
 *     { title: "Step 1-2", done: true, url: "/step-1-2" },
 *     { title: "Step 1-3", done: false },
 *     { title: "Step 1-4", done: false }
 *   ]}
 *   rootProps={{ className: "my-custom-class" }}
 *   titleProps={{ variant: "h3", color: "primary" }}
 *   summaryProps={{ variant: "body2", color: "secondary" }}
 *   expandable={true}
 *   defaultExpanded={false}
 * />
 */

const StepCard = (props: IStepCardProps) => {
    const {
        steps,
        title,
        titleProps,
        subTitle,
        image,
        showBottomPercentage = true,
        expandable = true,
        showIcon = true,
        doneSteps,
        totalSteps,
        summary,
        summaryProps,
        expansionPanelDetailsProps,
        linearProgressBarProps,
        rootProps,
        onStepUrlClick
    } = props
    const percentage = Math.round((doneSteps / totalSteps) * 100)

    const renderTitleColumn = useMemo(
        () => (
            <>
                {showIcon && (
                    <CheckCircleIcon
                        style={{
                            fontSize: 40,
                            color:
                                percentage === 100 ? DONE_COLOR : UNDONE_COLOR
                        }}
                    />
                )}
                <TitleContainer>
                    <Typography
                        variant='h6'
                        style={{
                            color: UNDONE_TITLE_COLOR,
                            fontSize: 24,
                            textAlign: 'center'
                        }}
                        {...titleProps}>
                        {title}
                    </Typography>
                    {subTitle && (
                        <Typography
                            variant='h6'
                            style={{
                                color: UNDONE_COLOR,
                                textAlign: 'center'
                            }}
                            {...titleProps}>
                            {subTitle}
                        </Typography>
                    )}
                </TitleContainer>
            </>
        ),
        [showIcon, percentage, titleProps, title, subTitle]
    )

    const renderSummaryColumn = useMemo(
        () => (
            <>
                <MuiExpansionPanelSummary
                    style={{ textAlign: 'center' }}
                    expandIcon={<ExpandMoreIcon fontSize='large' />}>
                    <Typography variant='h6' {...summaryProps}>
                        {summary}
                    </Typography>
                </MuiExpansionPanelSummary>
            </>
        ),
        [summary, summaryProps]
    )

    const renderStepsList = useMemo(
        () => (
            <List>
                {steps.map((step, index) => {
                    const handleOnClickStepUrl = () => {
                        if (onStepUrlClick && step.url) {
                            onStepUrlClick(step.url)
                        }
                    }

                    return (
                        <ListItemText
                            key={index}
                            primary={
                                <ListItemContainer>
                                    <CheckCircleIcon
                                        style={{
                                            color: step.done
                                                ? DONE_COLOR
                                                : UNDONE_COLOR
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
                            }
                        />
                    )
                })}
            </List>
        ),
        [onStepUrlClick, steps]
    )

    const renderNormalProgress = useMemo(
        () => (
            <NormalProgressContainer>
                <Typography variant='h6' {...summaryProps}>
                    {summary}
                </Typography>
                <Typography
                    variant='subtitle2'
                    style={{
                        position: 'absolute',
                        right: 8
                    }}>{`${percentage}%`}</Typography>
                <Box style={{ width: '100%' }}>
                    <LinearProgress
                        variant='determinate'
                        value={percentage}
                        color='primary'
                        classes={{
                            barColorPrimary: 'barColorPrimary'
                        }}
                        style={{
                            borderRadius: 10,
                            height: '16px',
                            backgroundColor: UNDONE_PROGRESS_COLOR
                        }}
                    />
                </Box>
            </NormalProgressContainer>
        ),
        [percentage, summary, summaryProps]
    )

    return (
        <Container {...rootProps}>
            <MuiExpansionPanel>
                <StepContainer>
                    <StepCardRow height={expandable ? '100px' : '100%'}>
                        <StepCardColumn justifyContent='start'>
                            {renderTitleColumn}
                        </StepCardColumn>
                        <StepCardColumn justifyContent='end'>
                            {expandable
                                ? renderSummaryColumn
                                : renderNormalProgress}
                        </StepCardColumn>
                    </StepCardRow>
                    {showBottomPercentage && (
                        <StepCardRow height='15px'>
                            <Box style={{ width: '100%' }}>
                                <LinearProgress
                                    variant='determinate'
                                    value={percentage}
                                    color='primary'
                                    classes={{
                                        barColorPrimary: 'barColorPrimary'
                                    }}
                                    style={{
                                        height: '16px',
                                        backgroundColor: UNDONE_PROGRESS_COLOR
                                    }}
                                    {...linearProgressBarProps}
                                />
                            </Box>
                        </StepCardRow>
                    )}
                </StepContainer>
                {expandable && (
                    <MuiExpansionPanelDetails
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                        {...expansionPanelDetailsProps}>
                        <StepCardColumn justifyContent='start'>
                            {renderStepsList}
                        </StepCardColumn>
                        {image && (
                            <StepCardColumn justifyContent='end'>
                                <img src={image} alt='Step Icon' />
                            </StepCardColumn>
                        )}
                    </MuiExpansionPanelDetails>
                )}
            </MuiExpansionPanel>
        </Container>
    )
}

export default StepCard
