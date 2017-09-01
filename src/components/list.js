import React from 'react';
import { connect } from 'react-redux';

class List extends React.Component {

    redirectToUserDetails(id) {
        window.location = '/#/details/' + id;
    }

    renderUsers(users) {
        return users.items.map((user, key) =>
            <tr key={ key } onClick={ () => this.redirectToUserDetails(user.id)} role="button">
                <td>{ user.login }</td>
                <td>{ user.html_url }</td>
                <td><img width="100px" src={ user.avatar_url } /></td>
            </tr>
        );
    }


    render() {
        const { list } = this.props;

        return (
            <div>
                <h1>Users</h1>
                {(!list.fetching) ? 'Loading...' :
                    (<table className="table table-hover">
                        <thead>
                            <tr>
                                <td>Login</td>
                                <td>Profile link</td>
                                <td>Avatar</td>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderUsers(list) }
                        </tbody>
                    </table>)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    list: state.list
})

export default connect(mapStateToProps)(List)


