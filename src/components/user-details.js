import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../reducers/grid-reducer';
import UserDetail from './user-detail';
import {Link} from 'react-router-dom';
import '../bootstrap.css';
import './user-details.css';

class UserDetails extends Component {
    componentDidMount() {
        const {match: {params: {id}}} = this.props;
        this.fetchList(id);
    }

    componentWillReceiveProps(nextProps) {
        const {match: {params: {id: oldId}}} = this.props;
        const {match: {params: {id}}} = nextProps;
        if (oldId !== id) {
            this.fetchList(id);
        }
    }

    fetchList = (id) => {
        const {actions} = this.props;
        fetch("http://localhost:4730")
            .then(response => response.json())
            .then(json => actions.addDataInDetails(json.detailsRecords))
            .then(() => actions.setFilterDetails(id));
    };

    render() {
        const {users} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-1">
                        <span style={{margin: '20px 50px'}}><Link to={'/grid'}>Users</Link></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-1">
                        {users.map((detail, i) => {
                            return <UserDetail key={i} detail={detail}/>
                        })}
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({users: state.users})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(gridActions, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

