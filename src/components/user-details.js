import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../reducers/grid-reducer';
import UserDetail from './user-detail';
import {Link} from 'react-router-dom';
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

    componentWillUnmount () {
        console.log('cwu')
        const {actions} = this.props;
        actions.clearFilterDetails();
    }

    fetchList = (id) => {
        const {actions} = this.props;
        actions.setFilterDetails(id);
    };

    render() {
        const {users} = this.props;
        return (
            <div>
                <Link to={'/grid'}>Users</Link>
                {users.map((detail, i) => {
                    return <UserDetail key={i} detail={detail}/>
                })}
            </div>
        )
    }
};

const mapStateToProps = state => ({users: state.users})
const mapDispatchToProps = dispatch => ({actions: bindActionCreators(gridActions, dispatch)});
export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

