import ACTION from '../actions/actionTypes'
import axios from "axios";
import { put } from 'redux-saga/effects';
export function* getAllPostsSaga() {
    try{
        const { data } = yield axios.get('https://jsonplaceholder.typicode.com/posts');
        yield put({type:ACTION.GET_ALL_POSTS_RESPONSE, posts: data});
    }catch (err) {
        yield put({type: ACTION.POSTS_ERROR, err: {
                message: err.response.data,
                status: err.response.status,
            } })
    }
}
