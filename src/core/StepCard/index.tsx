import { LinearProgress } from '@material-ui/core'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import React from 'react'
import StepCardSkeleton from '../StepCardSkeleton'
import Typography from '../Typography'
import { PropWithDataCy } from '../types'
import { StepCardDetails } from './StepCardDetails'
import { StepCardPanel } from './StepCardPanel'
import { Container } from './styles'

/**
 * Props for the StepCard component
 *
 * @interface IStepCardProps
 */
export interface IStepCardProps {
    /**
     * Whether the step card expansion panel is initially expanded or not
     * @type {boolean}
     * @memberof IStepCardProps
     * @default false
     */
    expanded?: boolean

    /**
     * Callback fired when the expansion state changes
     * @type {(event: React.ChangeEvent<{}>, expanded: boolean) => void}
     * @memberof IStepCardProps
     * @default undefined
     * @example
     * const handleChange = (event: React.ChangeEvent<{}>, expanded: boolean) => {
     *    setExpanded(expanded)
     * }
     * <StepCard onChange={handleChange} />
     * @example
     * <StepCard onChange={(event, expanded) => setExpanded(expanded)} />
     */
    onChange?: (
        event: React.ChangeEvent<Record<string, unknown>>,
        expanded: boolean
    ) => void

    /**
     * Whether the step card is full width
     * @type {boolean}
     * @memberof IStepCardProps
     * @default false
     */
    fullWidth?: boolean

    /**
     * Whether the step card are loading
     * @type {boolean}
     * @memberof IStepCardProps
     * @default false
     */
    loading?: boolean

    /**
     * The percentage of the progress bar
     * @type {number}
     * @memberof IStepCardProps
     */
    percentage: number

    /**
     * Whether to show the percentage on the expansion panel summary
     * Defaults to true
     * @type {boolean}
     * @memberof IStepCardProps
     * @default true
     */
    showBottomPercentage?: boolean

    /**
     * A text to be displayed on the expansion panel summary
     *
     * @type {string}
     * @memberof IStepCardProps
     * @example using literals
     * summary: '%i items remaining - %i minute(s)'
     *
     * @example using string
     * summary: 'Your progress'
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
     * The number of remaining steps
     * @type {number}
     * @memberof IStepCardProps
     */
    remainingSteps?: number

    /**
     * The time in seconds to be displayed on the expansion panel summary
     * @type {number}
     * @memberof IStepCardProps
     */
    time?: number

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
    steps?: {
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
     * Props to be passed to the expansion panel details
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
    expandable?: boolean

    /**
     * Whether to show the icon on the expansion panel summary
     * @type {boolean}
     * @memberof IStepCardProps
     * @default true
     */
    showIcon?: boolean

    /**
     * Padding applied to the root element
     * @type {React.CSSProperties['padding']}
     * @memberof IStepCardProps
     */
    padding?: React.CSSProperties['padding']

    /**
     * Margin applied to the root element
     * @type {React.CSSProperties['margin']}
     * @memberof IStepCardProps
     */
    margin?: React.CSSProperties['margin']

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
 * @Storybook https://flipper-ui.ngi.com.br/?path=/story/stepcard--default
 *
 * @Source
 * https://github.com/nginformatica/flipper-ui/blob/master/src/core/StepCard
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
        expanded,
        loading = false,
        percentage,
        time,
        steps,
        remainingSteps,
        title,
        titleProps,
        subTitle,
        image,
        showBottomPercentage = true,
        expandable = true,
        showIcon = true,
        summary,
        summaryProps,
        expansionPanelDetailsProps,
        linearProgressBarProps,
        summaryLinearProgressBarProps,
        rootProps,
        onStepUrlClick,
        fullWidth,
        padding,
        margin,
        onChange
    } = props

    return loading ? (
        <StepCardSkeleton
            expandable={expandable}
            showIcon={showIcon}
            showBottomPercentage={showBottomPercentage}
            fullWidth={fullWidth}
        />
    ) : (
        <Container margin={margin} fullWidth={fullWidth} {...rootProps}>
            <MuiExpansionPanel
                {...(expanded ? { expanded } : {})}
                onChange={onChange}>
                <StepCardPanel
                    fullWidth={fullWidth}
                    title={title}
                    padding={padding}
                    summary={summary}
                    expandable={expandable}
                    remainingSteps={remainingSteps || 0}
                    time={time || 0}
                    showIcon={showIcon}
                    showBottomPercentage={showBottomPercentage}
                    subTitle={subTitle}
                    percentage={percentage}
                    titleProps={titleProps}
                    summaryProps={summaryProps}
                    summaryLinearProgressBarProps={
                        summaryLinearProgressBarProps
                    }
                    linearProgressBarProps={linearProgressBarProps}
                />
                {expandable && (
                    <StepCardDetails
                        steps={steps}
                        image={image}
                        expansionPanelDetailsProps={expansionPanelDetailsProps}
                        onStepUrlClick={onStepUrlClick}
                    />
                )}
            </MuiExpansionPanel>
        </Container>
    )
}

export default StepCard
