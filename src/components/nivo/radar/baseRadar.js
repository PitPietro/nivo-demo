import React from "react"
import { ResponsiveRadar } from '@nivo/radar'
// import { generateCountriesData } from '@nivo/generators'

export default function BaseRadar() {
    const my_data = [
        {
            "taste": "fruity",
            "chardonay": 21,
            "carmenere": 114,
            "syrah": 99
        },
        {
            "taste": "bitter",
            "chardonay": 52,
            "carmenere": 91,
            "syrah": 92
        },
        {
            "taste": "heavy",
            "chardonay": 79,
            "carmenere": 113,
            "syrah": 98
        },
        {
            "taste": "strong",
            "chardonay": 65,
            "carmenere": 96,
            "syrah": 120
        },
        {
            "taste": "sunny",
            "chardonay": 67,
            "carmenere": 62,
            "syrah": 26
        }
    ];
    return (
        <>
            <div style={{ height: '50em', width: '50em' }}>
                <h1>Base Radar</h1>
                <ResponsiveRadar
                    data={ my_data}
                    keys={[ 'chardonay', 'carmenere', 'syrah' ]}
                    indexBy="taste"
                    maxValue="auto"
                    margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                    curve="linearClosed"
                    borderWidth={2}
                    borderColor={{ from: 'color' }}
                    gridLevels={5}
                    gridShape="circular"
                    gridLabelOffset={36}
                    enableDots={true}
                    dotSize={10}
                    dotColor={{ theme: 'background' }}
                    dotBorderWidth={2}
                    dotBorderColor={{ from: 'color' }}
                    enableDotLabel={true}
                    dotLabel="value"
                    dotLabelYOffset={-12}
                    colors={{ scheme: 'nivo' }}
                    fillOpacity={0.25}
                    blendMode="multiply"
                    animate={true}
                    motionConfig="wobbly"
                    isInteractive={true}
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            translateX: -50,
                            translateY: -40,
                            itemWidth: 80,
                            itemHeight: 20,
                            itemTextColor: '#999',
                            symbolSize: 12,
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
                    ]}
                />
            </div>
        </>
    )
}