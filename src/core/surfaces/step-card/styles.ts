import { Box, LinearProgress } from '@material-ui/core'
import { default as styled } from 'styled-components'
import Typography from '@/core/data-display/typography'
import { CheckCircle, Help as HelpIcon } from '@/icons'
import { theme } from '@/theme'

const { feedback, grays } = theme.colors

interface IStepContainerProps {
    padding?: React.CSSProperties['padding']
}

interface IRowProps {
    minHeight: React.CSSProperties['minHeight']
    fullWidth?: boolean
}

interface IContainerProps {
    fullWidth?: boolean
    margin?: React.CSSProperties['margin']
}

interface IColumnProps {
    justifyContent: React.CSSProperties['justifyContent']
}

export const PROGRESS_BAR = {
    barColorPrimary: 'barColorPrimary'
}

export const TEXT_ALIGN = { textAlign: 'center' } as const

export const ICON_BUTTON = {
    backgroundColor: 'unset'
}

export const ACORDION_DETAILS = {
    display: 'flex',
    justifyContent: 'space-between'
}

export const Container = styled.div<IContainerProps>`
    width: 100%;
    max-width: ${props => (props.fullWidth ? '100%' : '1100px')};
    ${props => (props.margin ? `margin: ${props.margin};` : '')}
`

export const StepCardRow = styled.div<IRowProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: ${props => (props.fullWidth ? '100%' : '1100px')};
    min-height: ${props => props.minHeight};
`

export const StepContainer = styled.div<IStepContainerProps>`
    display: flex;
    flex-direction: column;
    ${props => (props.padding ? `padding: ${props.padding};` : '')}
`

export const StepCardColumn = styled.div<IColumnProps>`
    padding-inline: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.justifyContent};
    width: 100%;

    ${props => {
        if (props.justifyContent === 'start') {
            return `
                svg:first-child {
                    margin-right: 40px;
                }
                `
        }

        return ''
    }}
`

export const ListItemContainer = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    margin: 16px 0;

    svg:first-child {
        margin-right: 16px;
    }
`

export const TitleContainer = styled.div`
    h6:first-child {
        padding-inline: 20px;
    }

    span {
        margin-left: 20px;
    }
`

export const NormalProgressContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h6:first-child {
        margin-bottom: 8px;
    }
`

export const BarWrapper = styled(Box)`
    width: 100%;

    & .barColorPrimary {
        background-color: ${theme.colors.feedback.success};
    }
`

export const TypographyTitle = styled(Typography)`
    && {
        color: ${grays.g1};
        font-size: 24px;
        text-align: center;
    }
`

export const TypographySubtitle = styled(Typography)`
    && {
        color: ${grays.g3};
        text-align: center;
    }
`

export const TypographyProgress = styled(Typography)`
    && {
        position: absolute;
        right: 8;
    }
`

export const BottomProgressBar = styled(LinearProgress)`
    && {
        height: 16px;
        background-color: ${grays.g5};
    }
`

export const ProgressBar = styled(LinearProgress)`
    && {
        border-radius: 10px;
        height: 16px;
        background-color: ${grays.g5};
    }
`

export const CheckIcon = styled(CheckCircle)<{ percentage: number }>`
    && {
        font-size: 40px;
        color: ${props =>
            props.percentage === 100 ? feedback.success : grays.g3};
    }
`

export const IconHelp = styled(HelpIcon)`
    && {
        margin: 0px;
    }
`

export const IconCheck = styled(CheckCircle)<{ done: boolean }>`
    && {
        font-size: 40px;
        color: ${props => (props.done ? feedback.success : grays.g3)};
    }
`

export const TypographyContainer = styled(Typography)`
    && {
        color: ${grays.g2};
        font-weight: 600;
    }
`
