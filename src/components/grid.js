import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../reducers/grid-reducer';
import GridRecord from './grid-record';

class GridComponent extends Component {

    componentDidMount () {
        const {actions} =this.props;
        actions.setFilter(null);
    }

    applyFilter = (e) => {
        const {actions} =this.props;
        actions.setFilter(e.target.value);
    };

    updateLastName = (index, newValue) => {
        let {records} = this.state;
        records[index].lastName = newValue;
        this.setState({
            records: records
        })
    }

    render() {
        // this.state.records.map((record, index) => console.log(record, index));

        const {users} = this.props;
        // console.log(users);

        return (
            <div>
                <div className="container">
                    <p>
                        <input type="text" placeholder="Filter by First Name..." onChange={this.applyFilter}/>
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
                        { users.map((record, index) =>
                            <GridRecord record={record} key={index}
                                        updateLastName={this.updateLastName.bind(this, index)}/>
                        )}
                        </tbody>
                    </table>
                </div>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = state => ({users: state.users})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(gridActions, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(GridComponent);
