import { combineReducers, createStore } from "redux";
import test from "./category_state";

const rootReducer = combineReducers({
  test,
});
// 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// store 만들고 현재 값 확인
const store = createStore(rootReducer, devTools);
console.log(store.getState());

export default store;
