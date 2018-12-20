import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ChatListReducer from './reducer/ChatListReducer';
import ContentListReducer from './reducer/ContentListReducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const reducer = combineReducers({
    ChatListReducer,
    ContentListReducer,
});

const configureStore = initialState => createStoreWithMiddleware(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configureStore;
