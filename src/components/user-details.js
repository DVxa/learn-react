import React, {Component} from 'react';
import UserDetail from './user-detail'

let detailsRecords = [{
    id: "1",
    name: "John Doe",
    about: "Nice guy",
    hobby: "Likes drinking wine",
    skills: ["html", "javascript", "redux"]
}, {
    id: "2",
    name: "Mary Moe",
    about: "Cute girl",
    hobby: "Likes playing xbox whole days long",
    skills: ["Fortran", "Lua", "R#"]
}];


let UserDetails = class UserDetails extends Component {
    constructor() {
        super();
        this.state = {
            details: []
        }
    }

    componentDidMount() {
        let {match: {params: {id}}} = this.props;
        this.setState({details: detailsRecords})
        if (id) {
            console.log('id', id, detailsRecords.filter(it => it.id !== id));
            this.setState({details: detailsRecords.filter(it => it.id !== id)})
        }
    }

    render() {
        console.log(this.state.details);
        return (
            <div>
                {this.state.details.map((detail, i) => {
                    return <UserDetail key={i} detail={detail}/>
                })}
            </div>
        )
    }
};

export default UserDetails;