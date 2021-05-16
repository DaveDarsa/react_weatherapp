import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//redux setup
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./components/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//using redux devtools with redux-thunk.
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
//redux store with thunk and devtools
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
