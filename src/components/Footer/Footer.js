import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

import { Icon } from 'semantic-ui-react'

function Footer () {
    return (
        <div className="footer-footer">
            <div className="footer-container">
                <Link to="/brianventura"><Icon name='home' size="big" className="footer-link"/></Link>
                <a href="https://github.com/brianv212" target="_blank" rel="noreferrer" className="footer-link"><Icon name='github' size="big"/></a>
                <a href="https://instagram.com/briancv_" target="_blank" rel="noreferrer" className="footer-link"><Icon name='instagram' size="big"/></a>
            </div>
        </div>
    )
}

export default Footer