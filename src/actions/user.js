export const REQUEST_USER = 'REQUEST_USER';
export function requestUser(userId) {
    return (dispatch) => {
        return dispatch(fetchUser(userId));
    };
}

export const RECEIVE_USER_SUCCESS = 'RECEIVE_USER_SUCCESS';
export function receiveUserSuccess(user) {
    return {
        type: RECEIVE_USER_SUCCESS,
        results: user
    };
}

function fetchUser(userId) {
    return dispatch => {
        return fetch('https://api.github.com/users/' + userId)
            .then(response => response.json())
            .then(json => dispatch(receiveUserSuccess(json)));
    };
}