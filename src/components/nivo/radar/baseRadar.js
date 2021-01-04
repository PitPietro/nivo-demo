import React from "react"
import {ResponsiveRadar} from '@nivo/radar'
import {Col, Form, Row} from "react-bootstrap"

/*
function print_dict(object) {
        for(let key in object) {
            // check if the property/key is defined in the object itself, not in parent
            if(object.hasOwnProperty(key)) {
                console.log(key + ': ' + object[key]);
            }
        }
}
 */

export default class BaseRadar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            schemeColor: 'nivo',
            mate1Comm: 50,
            mate1CT: 50,
            mate1Lead: 100,
            mate1PA: 63,
            mate1Team: 80
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        // const value = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;
        const name = target.name;

        console.log('\n handleInputChange');
        console.log('value: ' + value);
        console.log('name: ' + name);
        this.setState({
            [name]: value
        });
    }

    render() {
        const teamMates = ['Mike', 'Anne', 'John'];
        const softSkills = ['Communication', 'Critical Thinking', 'Leadership', 'Positive Attitude', 'Teamwork'];

        /*
        console.log('The team is composed by: ')
        let tm = 0
        teamMates.forEach( mate => {
            console.log(tm + ') ' + mate.toString());
            tm++;
        })

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
         */

        const teamMatesDict = {
            'Mike': [this.state.mate1Comm, this.state.mate1CT, this.state.mate1Lead, this.state.mate1PA, this.state.mate1Team],
            'Anne': [30, 79, 47, 90, 30],
            'John': [89, 90, 55, 20, 50]
        };

        // get teamMatesDict keys
        const teamKeys = Object.keys(teamMatesDict);

        // list of dictionaries containing the layers (team mate and their values) foreach dimension (soft skill)
        let my_data = [];
        const taste = "taste";
        for (let i = 0; i < softSkills.length; i++) {
            let tmp_dict = {};
            // iterate over the skills
            tmp_dict[taste] = softSkills[i];
            for (let j = 0; j < teamKeys.length; j++) {
                tmp_dict[teamKeys[j]] = teamMatesDict[teamKeys[j]][i];
            }

            my_data.push(tmp_dict);

            // console.log(i + '| printing tmp dict:');
            // print_dict(tmp_dict);
        }

        /*
        console.log("\nData array of dictionaries: ");
        for(let k = 0; k < my_data.length; k++) {
            console.log('|index: ' + k);
            print_dict(my_data[k]);
        }
         */

        const margins = {top: 50, right: 120, bottom: 50, left: 80};

        const curveOptions = ['linearClosed', 'basisClosed', 'catmullRomClosed', 'cardinalClosed']

        const gridLiv = 10
        const gridLabelOffset = 16 // default: 16
        const gridShape = ['circular', 'linear']

        // console.log('There are ' + schemeColors.length + ' different types of scheme colors')

        return (
            <>
                <Row>
                    <Col>
                        <div className="base-div-50">
                            <ResponsiveRadar
                                data={my_data}
                                keys={teamMates}
                                indexBy={taste}
                                maxValue="auto"
                                margin={margins}
                                curve={curveOptions[2]}
                                borderWidth={2} // default: 2px
                                borderColor={{from: 'color'}}
                                gridLevels={gridLiv}
                                gridShape={gridShape[1]}
                                gridLabelOffset={gridLabelOffset}
                                enableDots={true}
                                dotSize={10}
                                dotColor={{theme: 'background'}}
                                dotBorderWidth={2}
                                dotBorderColor={{from: 'color'}}
                                enableDotLabel={true}
                                dotLabel="value"
                                dotLabelYOffset={-12}
                                colors={{scheme: this.state.schemeColor}}
                                fillOpacity={0.25} // 0-1
                                blendMode="multiply" // default: "normal"
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
                        </div>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>
                                        Theme
                                    </Form.Label>
                                    <Form.Control as="select" name="schemeColor" value={this.state.schemeColor}
                                                  onChange={this.handleInputChange}>
                                        <option value="nivo">Nivo</option>
                                        <option value="category10">Category10</option>
                                        <option value="accent">Accent</option>
                                        <option value="dark2">Dark2</option>
                                        <option value="paired">Paired</option>
                                        <option value="pastel1">Pastel1</option>
                                        <option value="pastel2">Pastel2</option>
                                        <option value="set1">Set1</option>
                                        <option value="set2">Set2</option>
                                        <option value="set3">Set3</option>
                                        <option value="brown_blueGreen">Brown to Blue/Green</option>
                                        <option value="purpleRed_green">Purple/Red to Green</option>
                                        <option value="pink_yellowGreen">Pink to Yellow/Green</option>
                                        <option value="purple_orange">Purple to Orange</option>
                                        <option value="red_blue">Red to Blue</option>
                                        <option value="red_grey">Red Grey</option>
                                        <option value="red_yellow_blue">Red to Yellow to Blue</option>
                                        <option value="red_yellow_green">Red to Yellow to Green</option>
                                        <option value="spectral">Spectral</option>
                                        <option value="blues">Blues</option>
                                        <option value="greens">Greens</option>
                                        <option value="greys">Greys</option>
                                        <option value="oranges">Oranges</option>
                                        <option value="purples">Purples</option>
                                        <option value="reds">Reds</option>
                                        <option value="blue_green">Blue to Green</option>
                                        <option value="blue_purple">Blue to Purple</option>
                                        <option value="green_blue">Green Blue</option>
                                        <option value="orange_red">Orange Red</option>
                                        <option value="purple_blue_green">Purple to Blue to Green</option>
                                        <option value="purple_blue">Purple to Blue</option>
                                        <option value="purple_red">Purple to Red</option>
                                        <option value="red_purple">Red to Purple</option>
                                        <option value="yellow_green_blue">Yellow to Green to Blue</option>
                                        <option value="yellow_green">Yellow to Green</option>
                                        <option value="yellow_orange_brown">Yellow to Orange to Brown</option>
                                        <option value="yellow_orange_red">Yellow to Orange to Red</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Label>Skill Values</Form.Label>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} md="4">
                                    <h4>Communication</h4>
                                    <Form.Label>Mike</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        name="mate1Comm"
                                        value={this.state.mate1Comm}
                                        onChange={this.handleInputChange}
                                    />
                                </Form.Group>

                            </Form.Row>
                            <h4>Critical Thinking</h4>
                            <label>
                                <input
                                    name="mate1CT" type="number"
                                    value={this.state.mate1CT}
                                    onChange={this.handleInputChange}/>
                            </label>
                            <h4>Leadership</h4>
                            <label>
                                <input
                                    name="mate1Lead" type="number"
                                    value={this.state.mate1Lead}
                                    onChange={this.handleInputChange}/>
                            </label>
                            <h5>Positive Attitude</h5>
                            <label>
                                <input
                                    name="mate1PA" type="number"
                                    value={this.state.mate1PA}
                                    onChange={this.handleInputChange}/>
                            </label>
                            <h4>Teamwork</h4>
                            <label>
                                <input
                                    name="mate1Team" type="number"
                                    value={this.state.mate1Team}
                                    onChange={this.handleInputChange}/>
                            </label>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }
}

// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
// https://reactjs.org/docs/forms.html
// <a href="https://nivo.rocks/radar/">Docs</a>
// import { generateCountriesData } from '@nivo/generators'
