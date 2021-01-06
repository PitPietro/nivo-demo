import React from "react"
import {ResponsiveRadar} from '@nivo/radar'
import {Accordion, Card, Col, Form, Row} from "react-bootstrap"

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
            curve: 'linearClosed',
            marginT: 50,
            marginB: 50,
            marginL: 80,
            marginR: 120,
            schemeColor: 'nivo',
            fillOpacity: 0.25,
            blendMode: 'normal',
            borderWidth: 2,
            gridLevels: 5,
            girdShape: 'circular',
            gridLabelOffset: 16,
            mate1Comm: 50,
            mate2Comm: 30,
            mate3Comm: 89,
            mate1CT: 50,
            mate2CT: 79,
            mate3CT: 90,
            mate1Lead: 100,
            mate2Lead: 47,
            mate3Lead: 55,
            mate1PA: 63,
            mate2PA: 90,
            mate3PA: 20,
            mate1Team: 80,
            mate2Team: 30,
            mate3Team: 50,
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
            'Anne': [this.state.mate2Comm, this.state.mate2CT, this.state.mate2Lead, this.state.mate2PA, this.state.mate2Team],
            'John': [this.state.mate3Comm, this.state.mate3CT, this.state.mate3Lead, this.state.mate3PA, this.state.mate3Team]
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

        const margins = {
            top: this.state.marginT,
            bottom: this.state.marginB,
            left: this.state.marginL,
            right: this.state.marginR
        };

        // console.log('There are ' + schemeColors.length + ' different types of scheme colors')

        return (
            <>
                <Row xs={1} md={2}>
                    <Col>
                        <div className="base-div-50">
                            <ResponsiveRadar
                                // start base menu
                                data={my_data}
                                indexBy={taste}
                                keys={teamMates}
                                maxValue="auto" //default: 'auto' else range 0 - 1000
                                curve={this.state.curve} // 'linearClosed', 'basisClosed', 'cardinalClosed', 'catmullRomClosed'
                                margin={margins}
                                // end base menu

                                // start style menu
                                colors={{scheme: this.state.schemeColor}} // default: {"scheme":"nivo"}
                                fillOpacity={this.state.fillOpacity} // default: 0.25
                                blendMode={this.state.blendMode} // default: 'normal'
                                borderWidth={this.state.borderWidth} // default: 2px
                                borderColor={{from: 'color'}}
                                // end style menu

                                // start grid menu
                                gridLevels={this.state.gridLevels} // default: 5 (min: 1)
                                gridShape={this.state.girdShape} // default: 'circular' (options: 'linear')
                                gridLabelOffset={this.state.gridLabelOffset} // default: 16
                                // end grid menu

                                // start dots
                                enableDots={true} // default: true
                                dotSize={10} // default: 6 (range: 0 - 50, step: 1)
                                dotColor={{theme: 'background'}} // default: {"from":"color"}
                                dotBorderWidth={2} // default: 0 (range: 0 ~ 10, step: 1)
                                dotBorderColor={{from: 'color'}} // default: {"from":"color"}
                                enableDotLabel={true} // default: false
                                dotLabel="value" // default: 'value' (options: 'index', 'key')
                                dotLabelYOffset={-12} // default -12: (range: -24 ~ +24, step: 1)
                                // end dots

                                // start interactivity
                                isInteractive={true} // default: true (do not touch it if you have an heart)
                                // end interactivity

                                // start motion
                                animate={true} // default: true (do not touch it if you have an heart)
                                motionConfig="wobbly" // default: 'wobbly'
                                // (options: 'default', 'gentle', 'wobbly', 'stiff', 'slow', 'molasses')
                                // end motion

                                // legend settings
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
                            <Accordion className="px-sm-1">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                        <h3>Base</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <h4>Curve</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="curve"
                                                                  value={this.state.curve}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="linearClosed">linearClosed</option>
                                                        <option value="basisClosed">basisClosed</option>
                                                        <option value="cardinalClosed">cardinalClosed</option>
                                                        <option value="catmullRomClosed">catmullRomClosed</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>Margins</h4>
                                            <Form.Row className="pl-5">
                                                <Form.Group as={Col} md="5" className="pr-3">
                                                    <Form.Label>top</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="marginT"
                                                        value={this.state.marginT}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="5" className="pl-3">
                                                    <Form.Label>right</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="marginR"
                                                        value={this.state.marginR}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row className="pl-5">
                                                <Form.Group as={Col} md="5" className="pr-3">
                                                    <Form.Label>bottom</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="marginB"
                                                        value={this.state.marginB}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="5" className="pl-3">
                                                    <Form.Label>left</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="marginL"
                                                        value={this.state.marginL}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <h3>Style</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <h4>Colors</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="schemeColor"
                                                                  value={this.state.schemeColor}
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
                                                        <option value="purple_blue_green">Purple to Blue to Green
                                                        </option>
                                                        <option value="purple_blue">Purple to Blue</option>
                                                        <option value="purple_red">Purple to Red</option>
                                                        <option value="red_purple">Red to Purple</option>
                                                        <option value="yellow_green_blue">Yellow to Green to Blue
                                                        </option>
                                                        <option value="yellow_green">Yellow to Green</option>
                                                        <option value="yellow_orange_brown">Yellow to Orange to Brown
                                                        </option>
                                                        <option value="yellow_orange_red">Yellow to Orange to Red
                                                        </option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>fillOpacity</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.fillOpacity}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="fillOpacity"
                                                                  min={0} max={1} step={0.05}
                                                                  value={this.state.fillOpacity}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>blendMode</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="blendMode"
                                                                  value={this.state.blendMode}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="normal">normal</option>
                                                        <option value="multiply">multiply</option>
                                                        <option value="screen">screen</option>
                                                        <option value="overlay">overlay</option>
                                                        <option value="darken">darken</option>
                                                        <option value="lighten">lighten</option>
                                                        <option value="color-dodge">color-dodge</option>
                                                        <option value="color-brune">color-brune</option>
                                                        <option value="hard-light">hard-light</option>
                                                        <option value="soft-light">soft-light</option>
                                                        <option value="difference">difference</option>
                                                        <option value="exclusion">exclusion</option>
                                                        <option value="hue">hue</option>
                                                        <option value="saturation">saturation</option>
                                                        <option value="color">color</option>
                                                        <option value="luminosity">luminosity</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>borderWidth</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.borderWidth}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="borderWidth"
                                                                  min={0} max={20} step={0.05}
                                                                  value={this.state.borderWidth}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                        <h3>Skill Values</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <h4>1. Communication</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Mike</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate1Comm"
                                                        value={this.state.mate1Comm}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Anne</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate2Comm"
                                                        value={this.state.mate2Comm}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>John</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate3Comm"
                                                        value={this.state.mate3Comm}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>2. Critical Thinking</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Mike</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate1CT"
                                                        value={this.state.mate1CT}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Anne</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate2CT"
                                                        value={this.state.mate2CT}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>John</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate3CT"
                                                        value={this.state.mate3CT}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>3. Leadership</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Mike</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate1Lead"
                                                        value={this.state.mate1Lead}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Anne</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate2Lead"
                                                        value={this.state.mate2Lead}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>John</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate3Lead"
                                                        value={this.state.mate3Lead}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>4. Positive Attitude</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Mike</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate1PA"
                                                        value={this.state.mate1PA}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Anne</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate2PA"
                                                        value={this.state.mate2PA}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>John</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate3PA"
                                                        value={this.state.mate3PA}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>5. Teamwork</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Mike</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate1Team"
                                                        value={this.state.mate1Team}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Anne</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate2Team"
                                                        value={this.state.mate2Team}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>John</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="mate3Team"
                                                        value={this.state.mate3Team}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                     <Accordion.Toggle as={Card.Header} eventKey="3">
                                        <h3>Grid</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <h4>gridLevels</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.gridLevels}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="gridLevels"
                                                                  min={1} max={20} step={1}
                                                                  value={this.state.gridLevels}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>girdShape</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="girdShape"
                                                                  value={this.state.girdShape}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="circular">circular</option>
                                                        <option value="linear">linear</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <p>TODO: gridLabelOffset does not work</p>
                                            <h4>gridLabelOffset</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.gridLabelOffset}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="gridLabelOffset"
                                                                  min={1} max={60} step={1}
                                                                  value={this.state.gridLabelOffset}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Form>
                    </Col>
                </Row>
            </>
        );
    }
}

// TODO: Make the form responsive based on the layers (team mates and their values) and dimensions (soft skills)

// https://www.pluralsight.com/guides/handling-multiple-inputs-with-single-onchange-handler-react
// https://reactjs.org/docs/forms.html
// <a href="https://nivo.rocks/radar/">Docs</a>
// import { generateCountriesData } from '@nivo/generators'
