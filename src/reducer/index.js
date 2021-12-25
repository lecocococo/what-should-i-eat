import { combineReducers, createStore } from "redux";
import category from "./category_state";
import modal from "./modal_state";

const rootReducer = combineReducers({
  category,
  modal,
});
// 리덕스 개발자도구 적용
const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// store 만들고 현재 값 확인
const store = createStore(rootReducer, devTools);
console.log(store.getState());

export default store;
