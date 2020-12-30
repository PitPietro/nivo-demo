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

    const teamMatesDict = {
        'Mike': [50, 52, 100, 63, 80],
        'Anne': [30, 79, 47, 90, 30],
        'John': [89, 90, 55, 20, 50]
    };

    // get teamMatesDict keys
    const teamKeys = Object.keys(teamMatesDict);
    console.log('\nTeam keys: ' + teamKeys)

    console.log('\nTeam + values: ')
    for(let key in teamMatesDict) {
        console.log(key + ': ');
        for(let i = 0; i < 5; i++) {
            console.log('\t' + i + ') ' + teamMatesDict[key][i]);
        }
    }

    console.log('\nThe soft skill considered are: ')
    let s = 0
    softSkills.forEach( skill => {
            console.log(s + ') ' + skill.toString());
            s++;
    })

    // list of dictionaries containing the layers (team mate and their values) foreach dimension (soft skill)
    const my_data = [
        {
            "taste": softSkills[0],
            [teamKeys[0]]: teamMatesDict[teamKeys[0]][0],
            [teamKeys[1]]: teamMatesDict[teamKeys[1]][0],
            [teamKeys[2]]: teamMatesDict[teamKeys[2]][0]
        },
        {
            "taste": softSkills[1],
            [teamKeys[0]]: teamMatesDict[teamKeys[0]][1],
            [teamKeys[1]]: teamMatesDict[teamKeys[1]][1],
            [teamKeys[2]]: teamMatesDict[teamKeys[2]][1]
        },
        {
            "taste": softSkills[2],
            [teamKeys[0]]: teamMatesDict[teamKeys[0]][2],
            [teamKeys[1]]: teamMatesDict[teamKeys[1]][2],
            [teamKeys[2]]: teamMatesDict[teamKeys[2]][2]
        },
        {
            "taste": softSkills[3],
            [teamKeys[0]]: teamMatesDict[teamKeys[0]][3],
            [teamKeys[1]]: teamMatesDict[teamKeys[1]][3],
            [teamKeys[2]]: teamMatesDict[teamKeys[2]][3]
        },
        {
            "taste": softSkills[4],
            [teamKeys[0]]: teamMatesDict[teamKeys[0]][4],
            [teamKeys[1]]: teamMatesDict[teamKeys[1]][4],
            [teamKeys[2]]: teamMatesDict[teamKeys[2]][4]
        }
    ];

    for(let i = 0; i < my_data.length; i++) {
        console.log('|index: ' + i);
        for(let key in my_data[i]) {
            console.log(key + ': ' + my_data[i][key]);
        }
    }

    const margins = {top: 50, right: 120, bottom: 50, left: 80};


    return (
        <>
            <div className="radar-div">
                <h1>Base Radar</h1>
                <ResponsiveRadar
                    data={ my_data }
                    keys={ teamMates }
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
