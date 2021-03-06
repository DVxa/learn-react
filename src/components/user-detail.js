import React, {Component} from 'react';

class UserDetail extends Component {
    render() {
        let {detail} = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
                        <div className="well profile">
                            <div className="col-sm-12">
                                <div className="col-xs-12 col-sm-8">
                                    <h2>{detail.firstName} {detail.lastName}</h2>
                                    <p><strong>About: </strong> {detail.about} </p>
                                    <p><strong>Hobbies: </strong> {detail.hobby} </p>
                                    <p><strong>Skills: </strong>
                                        {detail.skills.map((skill, i) => {
                                            return <span key={i} className="tags">{skill}</span>
                                        })}
                                    </p>
                                </div>
                                <div className="col-xs-12 col-sm-4 text-center">
                                    <figure>
                                        <img
                                            src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-2.jpg"
                                            alt="" className="rounded-circle"/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetail