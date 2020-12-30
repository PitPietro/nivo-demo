import React from "react"
import { ResponsiveRadar } from '@nivo/radar'

function print_dict(object) {
        for(let key in object) {
            // check if the property/key is defined in the object itself, not in parent
            if(object.hasOwnProperty(key)) {
                console.log(key + ': ' + object[key]);
            }
        }
}

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

    console.log('\nThe soft skills considered are: ')
    let s = 0
    softSkills.forEach( skill => {
            console.log(s + ') ' + skill.toString());
            s++;
    })

    // list of dictionaries containing the layers (team mate and their values) foreach dimension (soft skill)
    let my_data = [];

    for(let i = 0; i < softSkills.length; i++) {
        const taste = "taste";
        let tmp_dict = {};
        // iterate over the skills
        tmp_dict[taste] = softSkills[i];
        for(let j = 0; j < teamKeys.length; j++) {
            tmp_dict[teamKeys[j]] = teamMatesDict[teamKeys[j]][i];
        }

        my_data.push(tmp_dict);

        console.log(i + '| printing tmp dict:');
        print_dict(tmp_dict);
    }

    console.log("\nData array of dictionaries: ");
    for(let k = 0; k < my_data.length; k++) {
        console.log('|index: ' + k);
        print_dict(my_data[k]);
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
