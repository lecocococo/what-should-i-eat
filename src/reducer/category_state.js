// 액션 작성
export const ACT = "DELETE";

// 초기상태 정의
export const intialState = {
  category_data: [],
};

// 액션 생성함수 정의
export const deleteCount = (category_data) => ({ type: ACT, category_data });
// 리듀서 작성
const category = (state = intialState, action) => {
  switch (action.type) {
    case ACT:
      return {
        ...state,
        category_data: action.category_data,
      };
    default:
      return state;
  }
};

export default category;
