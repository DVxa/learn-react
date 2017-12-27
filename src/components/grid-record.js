import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class GridRecord extends Component {

    handleLastNameChange = (e) => {
        const {updateLastName} = this.props;
        updateLastName(e.target.value);
    };

    handleToggleActive = (value) => {
        const {toggleActive} = this.props;
        toggleActive(value);
    };

    render() {
        const {record} = this.props;
        return (
            <tr>
                <td>{record.firstName}</td>
                <td>
                    <input type="text" value={record.lastName} onChange={this.handleLastNameChange}/>
                </td>
                <td>
                    <input type="checkbox" checked={record.active} onChange={this.handleToggleActive}/>
                </td>
                <td><Link to={`/users/${record.id}`}>View >></Link></td>
            </tr>
        )
    }
}
export default GridRecord;
