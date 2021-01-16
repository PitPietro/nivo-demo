import React, {Component} from "react";
import Title from "../utils/titles/title";
import H3 from "../utils/titles/h3";
import H2 from "../utils/titles/h2";
import Layout from "../utils/layout";
import CodeBlock from "../utils/codeBlock";
import BasicAlerts from "./alerts/BasicAlerts";
import LinkAlerts from "./alerts/LinkAlerts";
import AdditionalContentAlerts from "./alerts/AdditionalContentAlerts";
import DismissibleAlerts from "./alerts/DismissibleAlerts";
import BasicButtons from "./buttons/BasicButtons";
import OutlineAlerts from "./buttons/OutlineButtons";
import TagButtons from "./buttons/TagButtons";
import SizeButtons from "./buttons/SizeButtons";
import ActiveButtons from "./buttons/ActiveButtons";
import CheckboxRadioButtons from "./buttons/CheckboxRadioButtons";
import LoadingStateButtons from "./buttons/LoadingStateButtons";
import UncontrolledButtons from "./buttons/UncontrolledButtons";
import ControlledButtons from "./buttons/ControlledButtons";

class ReactBootstrapGetStarted extends Component {
    render() {
        return (
            <Layout>
                <Title title="React Bootstrap"/>
                <H2 title="1. Get started"/>
                <H3 title="1.1. Install"/>
                <div className="text-justify">
                    <p>You can use <b>npm</b> to consume React-Bootstrap:</p>
                    <CodeBlock>
                        npm install react-bootstrap bootstrap
                    </CodeBlock>
                    <p>Or you can also use <b>yarn</b>:</p>
                    <CodeBlock>
                        yarn add react-bootstrap bootstrap
                    </CodeBlock>
                </div>

                <H3 title="1.2. Import Component"/>
                <div className="text-justify">
                    <p>
                        You should import individual components like: <code
                        className="text-light">react-bootstrap/Container</code> rather than the entire library:
                    </p>
                    <CodeBlock>
                        import Container from 'react-bootstrap/Container';<br/><br/>
                        import &#123; Container &#125; from 'react-bootstrap';
                    </CodeBlock>
                </div>

                <H3 title="1.3. Stylesheets"/>
                <div className="text-justify">
                    <p>
                        React-Bootstrap doesn't depend on a precise version of Bootstrap so it's not shipped with any
                        included CSS. Some stylesheet is required to use these components.
                    </p>
                    <CodeBlock>
                        &#47;* The following line can be included in your src/index.js or App.js file *&#47; <br/><br/>
                        import 'bootstrap/dist/css/bootstrap.min.css';
                    </CodeBlock>
                </div>

                <H2 title="3. Buttons"/>
                <BasicButtons />
                <OutlineAlerts />
                <TagButtons />
                <SizeButtons />
                <ActiveButtons />
                <LoadingStateButtons />
                <CheckboxRadioButtons />
                <UncontrolledButtons />
                <ControlledButtons />

            </Layout>
        );
    }
}

export default ReactBootstrapGetStarted;