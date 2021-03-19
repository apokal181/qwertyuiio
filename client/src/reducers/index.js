import { combineReducers } from 'redux';
import postsReducer from './postsReducer'
const appReducer = combineReducers({
    postsReducer,
});

const rootReducer = (state, action) => appReducer(state, action);
export default rootReducer;
