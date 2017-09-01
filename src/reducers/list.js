import { RECEIVE_USERS_SUCCESS } from '../actions/list';

export default function list(state = {
    fetching: false,
    items: []
}, action) {
    switch (action.type) {

        case RECEIVE_USERS_SUCCESS:
            return {
                fetching: true,
                items: action.results
            };

        default:
            return state;
    }
}