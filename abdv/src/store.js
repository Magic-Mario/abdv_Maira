import { configureStore, applyMiddleware } from "redux";
import { composewithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";


const initialState = {};
const middleware = [thunk];

const store = configureStore(
    rootReducer,
    initialState,
    composewithDevTools(applyMiddleware(...middleware))
)

export default store
