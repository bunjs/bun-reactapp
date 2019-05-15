import homeReducer from '../page/home/reducer.js';
import pageReducer from '../page/pageone/reducer.js';


function rootReducer(state = {}, action) {
  return {
    home: homeReducer(state.home, action),
    pageone: homeReducer(state.pageone, action)
  };
}

export default rootReducer;