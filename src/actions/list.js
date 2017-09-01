export const REQUEST_USERS = 'REQUEST_USERS';
export function requestUsers() {
    return (dispatch) => {
        return dispatch(fetchUsers());
    };
}

export const RECEIVE_USERS_SUCCESS = 'RECEIVE_USERS_SUCCESS';
export function receiveUsersSuccess(users) {
    return {
        type: RECEIVE_USERS_SUCCESS,
        results: users
    };
}

function fetchUsers() {
    return dispatch => {
        return fetch('https://api.github.com/users?per_page=100')
            .then(response => response.json())
            .then(json => dispatch(receiveUsersSuccess(json)));
    };
}
