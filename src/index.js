import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/user';
import List from './components/list';
import { Router, Route, hashHistory } from 'react-router';
import { requestUsers } from './actions/list';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { applyMiddleware, createStore } from 'redux';
import createLogger from 'redux-logger';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

class App extends React.Component {

    constructor(props) {
        super(props);

        store.dispatch(requestUsers());
    }

    render() {
        return (
            <Router history={hashHistory} >
                <Route path='/' component={List} />
                <Route path='/details/:id' component={User} />
            </Router>
        );
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
