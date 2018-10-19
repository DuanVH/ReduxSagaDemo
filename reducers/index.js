import {combineReducers} from 'redux';
import counterReducers from './counterReducers';

const allReducers = combineReducers({
    counterReducers,
    // You can add more reducers here, separated?
});
export default allReducers;
