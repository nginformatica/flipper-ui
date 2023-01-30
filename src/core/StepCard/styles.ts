import { Box } from '@material-ui/core'
import { theme } from 'nginformatica-styleguide'
import styled from 'styled-components'

interface IStepContainerProps {
    withPadding?: boolean
}

interface IRowProps {
    height: React.CSSProperties['maxHeight']
    fullWidth?: boolean
}

interface IContainerProps {
    fullWidth?: boolean
}

interface IColumnProps {
    justifyContent: React.CSSProperties['justifyContent']
}

export const Container = styled.div<IContainerProps>`
    width: 100%;
    max-width: ${props => (props.fullWidth ? '100%' : '1100px')};
`

export const StepCardRow = styled.div<IRowProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: ${props => (props.fullWidth ? '100%' : '1100px')};
    height: ${props => props.height};
`

export const StepContainer = styled.div<IStepContainerProps>`
    display: flex;
    flex-direction: column;
    ${props => {
        if (props.withPadding) {
            return `
                padding: 20px;
            `
        } else {
            return ''
        }
    }}
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
        } else {
            return ''
        }
    }}
`

export const ListItemContainer = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;

    svg:first-child {
        margin-right: 16px;
    }
`

export const TitleContainer = styled.div`
    h6:first-child {
        padding-inline: 20px;
    }

    span:first-child {
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
