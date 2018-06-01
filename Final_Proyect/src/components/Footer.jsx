import React from 'react';
import {Panel } from 'react-bootstrap'

const Footers = () => (
    <Panel className="footer">
        <Panel.Body>
            &copy; {(new Date().getFullYear())} Copyright:{' '}
            <a alt="footer https://github.com/contedenis" href="https://github.com/contedenis"> 
                  https://github.com/contedenis 
            </a>
        </Panel.Body>
    </Panel>
)

export default Footers;