const initialState = [];

const ContentListReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_CONTENTLIST': {
      return action.value;
    }
    default: {
      return state;
    }
  }
};

export default ContentListReducer;
