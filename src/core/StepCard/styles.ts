import style from 'styled-components'

interface IStepContainerProps {
    withPadding?: boolean
}

interface IRowProps {
    height: React.CSSProperties['maxHeight']
}

interface IColumnProps {
    justifyContent: React.CSSProperties['justifyContent']
}

export const Container = style.div`
    width: 100%;
    max-width: 1100px;
`

export const StepCardRow = style.div<IRowProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;
    height: ${props => props.height};
`

export const StepContainer = style.div<IStepContainerProps>`
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

export const StepCardColumn = style.div<IColumnProps>`
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

export const ListItemContainer = style.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;

    svg:first-child {
        margin-right: 16px;
    }
`

export const TitleContainer = style.div`
    h6:first-child {
        padding-inline: 20px;
    }

    span:first-child {
        margin-left: 20px;
    }
`

export const NormalProgressContainer = style.div`
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
