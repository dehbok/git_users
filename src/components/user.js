import React from 'react';
import { connect } from 'react-redux';
import { requestUser } from '../actions/user';

class User extends React.Component {

    constructor(props) {
        super(props);

        this.props.dispatch(requestUser(parseInt(this.props.routeParams.id)));
    }

    render() {
        const { user } = this.props;
        return (
            <div>
                <h1>User Details</h1>
                <img src={user.item.avatar_url}/>
                <p className="bg-info">Name: { user.item.name }</p>
                <p className="bg-info">Followers: { user.item.followers }</p>
                <p className="bg-info">Following: { user.item.following }</p>
                <p className="bg-info">Created: { user.item.created_at }</p>
                <p className="bg-info">Company: { user.item.company }</p>
                <p className="bg-info">Email: { user.item.email }</p>
                <p className="bg-info">Location: { user.item.location }</p>
                <p className="bg-info">Blog: { user.item.blog }</p>
                <p className="bg-info">Bio: { user.item.bio }</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    store: state.store
})

export default connect(mapStateToProps)(User)