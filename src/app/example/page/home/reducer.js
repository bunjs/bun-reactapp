const initialState = [];

export default function homeReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_HOME_SUCCESS': return Object.assign({}, state, action.payload);
        default: return state;
    }
}