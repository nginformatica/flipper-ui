import React from 'react'
import type { CSSProperties, ChangeEvent, HTMLAttributes } from 'react'
import { Accordion as MuiAccordion } from '@material-ui/core'
import type Typography from '@/core/data-display/typography'
import type {
    LinearProgress,
    AccordionDetails as MuiAccordionDetails
} from '@material-ui/core'
import { StepCardDetails } from './step-card-details'
import { StepCardPanel } from './step-card-panel'
import StepCardSkeleton from './step-card-skeleton'
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
     * @default undefined
     */
    expanded?: boolean

    /**
     * Callback fired when the expansion state changes
     * @type {(event: ChangeEvent<{}>, expanded: boolean) => void}
     * @memberof IStepCardProps
     * @default undefined
     * @example
     * const handleChange = (event: ChangeEvent<{}>, expanded: boolean) => {
     *    setExpanded(expanded)
     * }
     * <StepCard onChange={handleChange} />
     * @example
     * <StepCard onChange={(event, expanded) => setExpanded(expanded)} />
     */
    onChange?: (
        event: ChangeEvent<Record<string, unknown>>,
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
     * Accepts a string or a JSX.Element
     *
     * @type {string | JSX.Element}
     * @example
     * <StepCard image={<img src="https://picsum.photos/200" />} />
     * @example
     * <StepCard image="https://picsum.photos/200" />
     * @example
     * <StepCard image={<Image />} />
     * @memberof IStepCardProps
     */
    image?: string | JSX.Element

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
     * @type {(HTMLAttributes<HTMLDivElement> | undefined)}
     * @memberof IStepCardProps
     */
    rootProps?: HTMLAttributes<HTMLDivElement>

    /**
     * Props to be passed to the title typography
     *
     * @type {(typeof Typography | undefined)}
     * @memberof IStepCardProps
     */
    titleProps?: typeof Typography

    /**
     * Props to be passed to the summary typography
     *
     * @type {(typeof Typography | undefined)}
     * @memberof IStepCardProps
     */
    summaryProps?: typeof Typography

    /**
     * Props to be passed to the expansion panel details
     * @type {(typeof MuiExpansionPanel | undefined)}
     * @memberof IStepCardProps
     */
    expansionPanelDetailsProps?: typeof MuiAccordionDetails

    /**
     * Props to be passed to the linear progress bar
     * @type {(typeof LinearProgress | undefined)}
     * @memberof IStepCardProps
     */
    linearProgressBarProps?: typeof LinearProgress

    /**
     * Props to be passed to the expansion panel summary linear progress bar
     * @type {(typeof LinearProgress | undefined)}
     * @memberof IStepCardProps
     */
    summaryLinearProgressBarProps?: typeof LinearProgress

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
     * @type {CSSProperties['padding']}
     * @memberof IStepCardProps
     */
    padding?: CSSProperties['padding']

    /**
     * Margin applied to the root element
     * @type {CSSProperties['margin']}
     * @memberof IStepCardProps
     */
    margin?: CSSProperties['margin']

    /**
     * Whether to show the sub title skeleton
     * @type {boolean}
     * @memberof IStepCardProps
     * @default false
     */
    showSubTitleSkeleton?: boolean

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
const StepCard = ({
    expanded,
    loading = false,
    percentage,
    time = 0,
    steps,
    remainingSteps = 0,
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
    showSubTitleSkeleton = false,
    onChange
}: IStepCardProps) =>
    loading ? (
        <StepCardSkeleton
            expandable={expandable}
            subTitleSkeleton={showSubTitleSkeleton}
            showIcon={showIcon}
            showBottomPercentage={showBottomPercentage}
            fullWidth={fullWidth}
        />
    ) : (
        <Container margin={margin} fullWidth={fullWidth} {...rootProps}>
            <MuiAccordion
                {...(expanded ? { expanded } : {})}
                onChange={onChange}>
                <StepCardPanel
                    fullWidth={fullWidth}
                    title={title}
                    padding={padding}
                    summary={summary}
                    expandable={expandable}
                    remainingSteps={remainingSteps}
                    time={time}
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
            </MuiAccordion>
        </Container>
    )

export default StepCard
