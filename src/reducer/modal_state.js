// 액션 작성
export const CHANGE = "CHANGE";

// 초기상태 정의
export const intialState = {
  modal: false,
};

// 액션 생성함수 정의
export const changeModalState = (modal) => ({ type: CHANGE, modal });
// 리듀서 작성
const modal = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        modal: !action.modal,
      };
    default:
      return state;
  }
};

export default modal;
