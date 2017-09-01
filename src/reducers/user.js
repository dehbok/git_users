import { RECEIVE_USER_SUCCESS } from '../actions/user';

export default function user(state = {
    fetching: false,
    item: []
}, action) {
    switch (action.type) {

        case RECEIVE_USER_SUCCESS:
            return {
                fetching: true,
                item: action.results
            };

        default:
            return state;
    }
}