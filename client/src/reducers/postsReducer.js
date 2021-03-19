import ACTION from '../actions/actionTypes';
const initialState = {
    posts: [],

    err: null,
};
export default function (state = initialState, action) {
    switch (action.type) {
        case ACTION.GET_ALL_POSTS_RESPONSE: {
            return {
                ...state,
                err: null,
                posts: action.posts
            };
        }
        case ACTION.POSTS_ERROR: {
            return {
                ...state,
                err: action.err
            }
        }
        default:
            return state;
    }
}
