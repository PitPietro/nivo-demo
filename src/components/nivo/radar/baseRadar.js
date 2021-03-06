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
            // base
            curve: 'linearClosed',
            marginT: 50,
            marginB: 50,
            marginL: 80,
            marginR: 120,

            // style
            schemeColor: 'nivo',
            fillOpacity: 0.25,
            blendMode: 'normal',
            borderWidth: 2,

            // grid
            gridLevels: 5,
            girdShape: 'circular',
            gridLabelOffset: 16,

            // dots
            enableDots: true,
            dotSize: 10,
            dotBorderWidth: 2,
            enableDotLabel: true,
            dotLabel: 'value',
            dotLabelYOffset: -12,

            // interactivity and motion
            isInteractive: true,
            animate: true,
            motionConfig: 'wobby',

            // legend
            anchorLegend: 'top-left',
            directionLegend: 'column',
            itemDirectionLegend: 'left-to-right',
            translateXLegend: 0,
            translateYLegend: 0,
            itemWidthLegend: 80,
            itemHeightLegend: 20,
            symbolSizeLegend: 12,
            symbolShapeLegend: 'square',

            // skill values
            // the amount of those values should change
            // based on the number of layers and dimension
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
        const value = target.type === 'checkbox' ? target.checked : target.value;
        // const value = target.value;
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
                                enableDots={this.state.enableDots} // default: true
                                dotSize={this.state.dotSize} // default: 6 (range: 0 - 50, step: 1)
                                dotColor={{theme: 'background'}} // default: {"from":"color"}
                                dotBorderWidth={this.state.dotBorderWidth} // default: 0 (range: 0 ~ 10, step: 1)
                                dotBorderColor={{from: 'color'}} // default: {"from":"color"}
                                enableDotLabel={this.state.enableDotLabel} // default: false
                                dotLabel={this.state.dotLabel} // default: 'value' (options: 'index', 'key')
                                dotLabelYOffset={this.state.dotLabelYOffset} // default -12: (range: -24 ~ +24, step: 1)
                                // end dots

                                // start interactivity
                                isInteractive={this.state.isInteractive} // default: true (do not touch it if you have an heart)
                                // end interactivity

                                // start motion
                                animate={this.state.animate} // default: true (do not touch it if you have an heart)
                                motionConfig={this.state.motionConfig} // default: 'wobbly'
                                // (options: 'default', 'gentle', 'wobbly', 'stiff', 'slow', 'molasses')
                                // end motion

                                // legends settings
                                // it could possible to add a button i.e. 'Add Legend' since this variable
                                // is a list of dictionaries containing all the legends of the radar
                                legends={[
                                    {
                                        // 'top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right',
                                        anchor: this.state.anchorLegend,
                                        direction: this.state.directionLegend, // 'column' or 'row'
                                        // itemDirection property defines how symbol and label are positioned.
                                        // 'left-to-right', 'right-to-left', 'top-to-bottom', 'bottom-to-top'
                                        itemDirection: this.state.itemDirectionLegend,
                                        translateX: this.state.translateXLegend,
                                        translateY: this.state.translateYLegend,
                                        itemWidth: this.state.itemWidthLegend,
                                        itemHeight: this.state.itemHeightLegend,
                                        itemTextColor: '#999',
                                        symbolSize: this.state.symbolSizeLegend,
                                        // you can use a custom shape passing a component
                                        symbolShape: this.state.symbolShapeLegend, // 'square', 'circle', 'triangle', 'diamond'
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
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="4">
                                        <h3>Dots</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="4">
                                        <Card.Body>
                                            <h4>enableDots</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        name="enableDots"
                                                        checked={this.state.enableDots}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>dotSize</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.dotSize}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="dotSize"
                                                                  min={0} max={50} step={1}
                                                                  value={this.state.dotSize}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>dotBorderWidth</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.dotBorderWidth}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="dotBorderWidth"
                                                                  min={0} max={10} step={1}
                                                                  value={this.state.dotBorderWidth}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>enableDotLabel</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        name="enableDotLabel"
                                                        checked={this.state.enableDotLabel}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>dotLabel</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="dotLabel"
                                                                  value={this.state.dotLabel}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="value">value</option>
                                                        <option value="index">index</option>
                                                        <option value="key">key</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>dotLabelYOffset</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Label>
                                                        {this.state.dotLabelYOffset}
                                                    </Form.Label>
                                                    <Form.Control type="range" name="dotLabelYOffset"
                                                                  min={-24} max={24} step={1}
                                                                  value={this.state.dotLabelYOffset}
                                                                  onChange={this.handleInputChange}/>
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="5">
                                        <h3>Interactivity & Motion</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="5">
                                        <Card.Body>
                                            <h4>isInteractive</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        name="isInteractive"
                                                        checked={this.state.isInteractive}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>animate</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Check
                                                        type="checkbox"
                                                        name="animate"
                                                        checked={this.state.animate}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>motionConfig</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="motionConfig"
                                                                  value={this.state.motionConfig}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="wobbly">wobbly</option>
                                                        <option value="default">default</option>
                                                        <option value="gentle">gentle</option>
                                                        <option value="stiff">stiff</option>
                                                        <option value="slow">slow</option>
                                                        <option value="molasses">molasses</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="6">
                                        <h3>Legend</h3>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="6">
                                        <Card.Body>
                                            <h4>anchor</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="anchorLegend"
                                                                  value={this.state.anchorLegend}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="top-left">top-left</option>
                                                        <option value="top">top</option>
                                                        <option value="top-right">top-right</option>
                                                        <option value="left">left</option>
                                                        <option value="center">center</option>
                                                        <option value="right">right</option>
                                                        <option value="bottom-left">bottom-left</option>
                                                        <option value="bottom">bottom</option>
                                                        <option value="bottom-right">bottom-right</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>direction</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="directionLegend"
                                                                  value={this.state.directionLegend}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="column">column</option>
                                                        <option value="row">row</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>itemDirection</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="itemDirectionLegend"
                                                                  value={this.state.itemDirectionLegend}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="left-to-right">left-to-right</option>
                                                        <option value="right-to-left">right-to-left</option>
                                                        <option value="top-to-bottom">top-to-bottom</option>
                                                        <option value="bottom-to-top">bottom-to-top</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>translateLegend</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>X</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="translateXLegend"
                                                        value={this.state.translateXLegend}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Y</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="translateYLegend"
                                                        value={this.state.translateYLegend}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>item dimension</h4>
                                            <Form.Row>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Width</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="itemWidthLegend"
                                                        value={this.state.itemWidthLegend}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                                <Form.Group as={Col} md="4">
                                                    <Form.Label>Height</Form.Label>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="itemHeightLegend"
                                                        value={this.state.itemHeightLegend}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>symbol Size</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control
                                                        required
                                                        type="number"
                                                        name="symbolSizeLegend"
                                                        value={this.state.symbolSizeLegend}
                                                        onChange={this.handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Form.Row>
                                            <h4>symbol Shape</h4>
                                            <Form.Row>
                                                <Form.Group as={Col}>
                                                    <Form.Control as="select" name="symbolShapeLegend"
                                                                  value={this.state.symbolShapeLegend}
                                                                  onChange={this.handleInputChange}>
                                                        <option value="square">square</option>
                                                        <option value="circle">circle</option>
                                                        <option value="triangle">triangle</option>
                                                        <option value="diamond">diamond</option>
                                                    </Form.Control>
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

// How To Build a Custom Toggle Switch with React
// https://www.digitalocean.com/community/tutorials/how-to-build-a-custom-toggle-switch-with-react