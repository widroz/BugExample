import React from 'react'
import { Link } from 'react-router-dom'

export default function NavigationBar() {


    const HOME_EMOJI = '🏠'
    const CHART_EMOJI = '📊'
    const PIECES_EMOJI = '🧩'


    //render a navigation bar which contains the following links:
    //Home
    //Pieces
    //Cut Sizes Chart

    return (
        <div className="navigation-bar">

            <Link to="/">
                <span className="app-name">Home</span><span className="emoji">{HOME_EMOJI}</span>
            </Link>
            <Link to="/pieces">
                <span className="app-name">Pieces</span><span className="emoji">{PIECES_EMOJI}</span>
            </Link>
            <Link to="/chart">
            <span className="app-name">Chart</span><span className="emoji">{CHART_EMOJI}</span>
            </Link>
        </div>
    )
}
