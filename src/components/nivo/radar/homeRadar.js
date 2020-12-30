import React from "react"
import {Link} from "react-router-dom";
import BaseRadar from "./baseRadar";

export default function HomeRadar() {
    return (
        <>
            <div>
                <h1>Radar</h1>
                <ol>
                    <li><Link to="/radar-base/">Base</Link></li>
                </ol>

                <BaseRadar />
            </div>
        </>
    )
}