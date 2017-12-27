import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../reducers/grid-reducer';
import {Link} from 'react-router-dom';
import GridRecord from './grid-record';

class GridComponent extends Component {
    componentDidMount() {
        const {actions} = this.props;
        actions.setFilter(null);
    }

    applyFilter = (e) => {
        const {actions} = this.props;
        actions.setFilter(e.target.value);
    };

    toggleActive = (index, newValue) => {
        const {actions} = this.props;
        actions.toggleActive(index);
    };

    updateLastName = (index, value) => {
        const {actions} = this.props;
        actions.changeLastName({index, value})
    }

    render() {
        // this.state.records.map((record, index) => console.log(record, index));

        const {users} = this.props;
        // console.log(users);

        if (!users) {
            return (
                <div style={{width: 300, height: 300, padding: 20}}>Loading...</div>
            )
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1">
                            <Link to={'/'}>Main</Link>
                        </div>
                    </div>
                    <p>
                        <input type="text" placeholder="Filter by First Name..."
                               onChange={this.applyFilter.bind(this)}/>
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
                            <GridRecord
                                record={record}
                                key={index}
                                updateLastName={this.updateLastName.bind(this, index)}
                                toggleActive={this.toggleActive.bind(this, index)}
                            />
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
