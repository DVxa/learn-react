import React, {Component} from 'react';

class GridRecord extends Component {

    handleLastNameChange = (e) => {
        const {updateLastName} = this.props;
        updateLastName(e.target.value);
    };

    handleToggleActive = (e) => {
        const {toggleActive} = this.props;
        toggleActive(e.target.value);
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
            </tr>
        )
    }
}
export default GridRecord;
