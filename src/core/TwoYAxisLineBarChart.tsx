import React from 'react'
import { Wrapper } from '../charts/style'
import {
    FlexibleXYPlot,
    HorizontalGridLines,
    VerticalGridLines,
    XAxis,
    YAxis,
    VerticalBarSeries,
    LineMarkSeries
} from 'react-vis'
import { IBarInfos } from './LineVerticalBarChart'

type TData = [string, number]

interface IProps {
    width?: number
    height?: number
    barsInfo?: IBarInfos[]
    data: TData[][]
}

const toCartesianPlan = ([x, y]: TData) => ({
    x,
    y
})

export const getDomainY = (data: TData[]) => data.map(([, y]: TData) => y)

const TwoYAxisLineBarChart = (props: IProps) => {
    const { width, height, data, barsInfo } = props
    const firstX = data[0].map(toCartesianPlan)
    const secondX = data[1].map(toCartesianPlan)
    const lineMark = data[2].map(toCartesianPlan)
    const maxValue = Math.max.apply(null, getDomainY(data[2]))

    return (
        <Wrapper>
            <FlexibleXYPlot
                height={ height || 275 }
                width={ width || 275 }
                xType='ordinal'
                yType='linear'
                margin={ { left: '50', right: '30' } }
                stackBy='y'>
                <HorizontalGridLines />
                <VerticalGridLines />
                <XAxis />
                <YAxis
                    tickFormat={ tick => 'R$ ' + tick }
                    yDomain={ [0, maxValue] }
                    tickSize={ 4 }
                    style={ {
                        text: {
                            fontSize: '10px',
                            transform: 'translate(-4px)'
                        }
                    } }
                />
                <YAxis
                    tickFormat={ tick => tick + '%' }
                    left={ (width - 80) }
                    yDomain={ [0, 100] }
                    tickSize={ 4 }
                    style={ {
                        line: { stroke: barsInfo[2].color },
                        text: {
                            transform: 'translate(28px)',
                            fontSize: '10px',
                            fontWeight: '300',
                            fill: barsInfo[2].color
                        }
                    } }
                />
                <VerticalBarSeries
                    color={ barsInfo[0].color }
                    data={ firstX }
                />
                <VerticalBarSeries
                    color={ barsInfo[1].color }
                    data={ secondX }
                />
                <LineMarkSeries
                    style={ {
                        strokeWidth: 1,
                        markWidht: 1
                    } }
                    lineStyle={ { stroke: barsInfo[2].color || '#004A7C' } }
                    markStyle={ {
                        stroke: barsInfo[2].color || '#004A7C',
                        fill: barsInfo[2].color || '#004A7C',
                        r: 2.5
                    } }
                    data={ lineMark }
                />
            </FlexibleXYPlot>
        </Wrapper >
    )
}

export default TwoYAxisLineBarChart
