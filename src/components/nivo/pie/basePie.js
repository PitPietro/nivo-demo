import React from "react"
import {ResponsivePie} from '@nivo/pie'

export default function BasePie() {

    const slice = ["sleep", "eat", "work", "study", "side project"]
    const sliceValues = [8, 2, 4, 6, 4]

    const my_data = [
            {
                "id": slice[0],
                "label": slice[0],
                "value": sliceValues[0],
                "color": "hsl(357, 70%, 50%)"
            },
            {
                "id": slice[1],
                "label": slice[1],
                "value": sliceValues[1],
                "color": "hsl(306, 70%, 50%)"
            },
            {
                "id": slice[2],
                "label": slice[2],
                "value": sliceValues[2],
                "color": "hsl(329, 70%, 50%)"
            },
            {
                "id": slice[3],
                "label": slice[3],
                "value": sliceValues[3],
                "color": "hsl(164, 70%, 50%)"
            },
            {
                "id": slice[4],
                "label": slice[4],
                "value": sliceValues[4],
                "color": "hsl(38, 70%, 50%)"
            }
    ]

    const my_defs = [
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]

    const my_fill = [
            {
                match: {
                    id: slice[0]
                },
                id: 'lines'
            },
            {
                match: {
                    id: slice[1]
                },
                id: 'lines'
            },
            {
                match: {
                    id: slice[2]
                },
                id: 'dots'
            },
            {
                match: {
                    id: slice[3]
                },
                id: 'dots'
            },
            {
                match: {
                    id: slice[4]
                },
                id: 'lines'
            }
        ]

    const my_legend = [
        {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
                {
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }
            ]
        }
    ]

    const margins = {top: 40, right: 80, bottom: 80, left: 80};

    return (
        <>
            <div className="base-div-50">
                <ResponsivePie
                    data={my_data}
                    margin={margins}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{scheme: 'nivo'}}
                    borderWidth={1}
                    borderColor={{from: 'color', modifiers: [['darker', 0.2]]}}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkColor={{from: 'color'}}
                    sliceLabelsSkipAngle={10}
                    sliceLabelsTextColor="#333333"
                    defs={my_defs}
                    fill={my_fill}
                    legends={my_legend}
                    enableRadialLabels={true}
                    enableSliceLabels={true}
                    endAngle={360}
                    fit={true}
                    id={'id'}
                    isInteractive={true}
                    radialLabel={'id'}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsTextXOffset={6}
                    sliceLabel={'formattedValue'}
                    sliceLabelsRadiusOffset={0.5}
                    sortByValue={false}
                    startAngle={0}
                />
            </div>
        </>
    )
}