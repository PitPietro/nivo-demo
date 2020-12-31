import React from "react"
import {Link} from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <div>
                <h1>Nivo Demo</h1>
                <ol>
                    <li><Link to="/radar">Radar</Link></li>
                    <li><Link to="/pie">Pie</Link></li>
                </ol>
            </div>
        </>
    )
}