import React, {Component} from 'react';

class GridRecord extends Component {

    render() {
        const {record, updateLastName} = this.props;
        console.log(updateLastName);
        return (
            <tr>
                <td>{record.firstName}</td>
                <td><input type="text" value={record.lastName} onChange={(args) => console.log(...args)}/></td>
                <td>Да</td>
            </tr>
        )
    }
}


export default GridComponent;
