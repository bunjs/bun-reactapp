const initialState = [];

export default function pageReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_PAGE_SUCCESS': return Object.assign({}, state, action.payload);
        default: return state;
    }
}