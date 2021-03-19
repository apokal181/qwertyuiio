import { takeLatest } from 'redux-saga/effects';
import ACTION from '../actions/actionTypes';
import {getAllPostsSaga} from './postsSaga'

function* rootSaga() {
    yield takeLatest(ACTION.GET_ALL_POSTS_ACTION, getAllPostsSaga);
}

export default rootSaga;
