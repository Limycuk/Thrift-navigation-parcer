import { reducer as reduxFormReducer } from 'redux-form';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  form: reduxFormReducer
});

export default reducer;
