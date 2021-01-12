import React from "react"
import {Container} from "react-bootstrap";

export default function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light text-center py-3 m-0">
                <Container maxWidth="lg">
                    <h5>
                        Copyright © <a href="https://github.com/PitPietro/nivo-demo">Nivo Demo</a>
                    </h5>
                </Container>
            </footer>
        </div>
    );
}