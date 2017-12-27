import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div className="component">
                <ul>
                    <li><Link to={'/grid'}>Editable Grid </Link></li>
                    <li><Link to={'/users/1'}>User Card Example </Link></li>
                </ul>
            </div>
        )
    }
}