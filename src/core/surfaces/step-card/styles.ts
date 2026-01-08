import styled from '@emotion/styled'

interface IStepContainerProps {
    padding?: string | number
}

interface IRowProps {
    minHeight: string | number
    fullWidth?: boolean
}

interface IContainerProps {
    fullWidth?: boolean
    margin?: string | number
}

interface IColumnProps {
    justifyContent: string | number
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
                svg:first-of-type {
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

    svg:first-of-type {
        margin-right: 16px;
    }
`

export const TitleContainer = styled.div`
    h6:first-of-type {
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
`

export const NormalProgressContent = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
`
