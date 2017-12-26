import React, {Component} from 'react';
import UserDetailsComponent from './user-details';

class GridComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            records: [
                {firstName: 'John', lastName: 'Doe'},
                {firstName: 'Mary', lastName: 'Doe'},
                {firstName: 'Peter', lastName: 'Noname'},
            ]
        };
    }

    updateLastName(index, newValue) {
        let {records} = this.state;
        records[index].lastName = newValue;
        this.setState({
            records: records
        })
    }

    render() {
        // this.state.records.map((record, index) => console.log(record, index));

        return (
            <div>
                <div style={{width: 300, height: 300, padding: 20}}>
                    <p>
                        <input type="text" placeholder="Filter by..."/>
                    </p>
                    <table className="table table-condensed">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Active</th>
                        </tr>
                        </thead>
                        <tbody>
                        { this.state.records.map((record, index) =>
                            <GridRecord record={record} key={index}
                                        updateLastName={this.updateLastName.bind(this, index)}/>
                        )}
                        </tbody>
                    </table>
                </div>
                <hr/>
                <UserDetailsComponent id={1} />
            </div>
        )
    }
}

class GridRecord extends Component {

    handleLastNameChange = (e) => {
        const {updateLastName} = this.props;
        updateLastName(e.target.value);
    };

    render() {
        const {record} = this.props;
        return (
            <tr>
                <td>{record.firstName}</td>
                <td><input type="text" value={record.lastName}
                           onChange={this.handleLastNameChange}/></td>
                <td>Да</td>
            </tr>
        )
    }
}

export default GridComponent;
