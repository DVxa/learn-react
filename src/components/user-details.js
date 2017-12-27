import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as gridActions from '../reducers/grid-reducer';
import UserDetail from './user-detail';
import {Link} from 'react-router-dom';
import './user-details.css';

let UserDetails = class UserDetails extends Component {
    constructor() {
        super();
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        this.fetchList();
    }

    componentWillReceiveProps() {
        this.fetchList();
    }

    fetchList = () => {
        let {match: {params: {id}}, users} = this.props;
        this.setState({details: users});
        if (id) {
            console.log('id', id, users.filter(it => it.id === id));
            this.setState({details: users.filter(it => it.id === id)})
        }
    };

    render() {
        // console.log(this.state.details);
        return (
            <div>
                <Link to={'/users'}>Users</Link>
                {this.state.details.map((detail, i) => {
                    return <UserDetail key={i} detail={detail}/>
                })}
            </div>
        )
    }
};

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(gridActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);

