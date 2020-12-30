import React from "react"
import { ResponsiveRadar } from '@nivo/radar'

export default function BaseRadar() {
    const teamMates = ['Mike', 'Anne', 'John'];
    const softSkills = ['Communication', 'Critical Thinking', 'Leadership', 'Positive Attitude', 'Teamwork'];

    console.log('The team is composed by: ')
    let tm = 0
    teamMates.forEach( mate => {
            console.log(tm + ') ' + mate.toString());
            tm++;
    })

    console.log('The soft skill considered are: ')
    let s = 0
    softSkills.forEach( skill => {
            console.log(s + ') ' + skill.toString());
            s++;
    })

    const my_data = [
        {
            "taste": softSkills[0],
            "Mike": 21,
            "Anne": 114,
            "John": 99
        },
        {
            "taste": softSkills[1],
            "Mike": 52,
            "Anne": 91,
            "John": 92
        },
        {
            "taste": softSkills[2],
            "Mike": 79,
            "Anne": 113,
            "John": 98
        },
        {
            "taste": softSkills[3],
            "Mike": 65,
            "Anne": 96,
            "John": 120
        },
        {
            "taste": softSkills[4],
            "Mike": 67,
            "Anne": 62,
            "John": 26
        }
    ];

    for(let key in my_data) {
        console.log(my_data[key]);
    }

    const margins = {top: 50, right: 120, bottom: 50, left: 80};


    return (
        <>
            <div className="radar-div">
                <h1>Base Radar</h1>
                <ResponsiveRadar
                    data={ my_data}
                    keys={ teamMates}
                    indexBy="taste"
                    maxValue="auto"
                    margin={margins}
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
                            translateX: 50,
                            translateY: 40,
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
                <a href="https://nivo.rocks/radar/">Docs</a>
            </div>
        </>
    )
}


// import { generateCountriesData } from '@nivo/generators'
