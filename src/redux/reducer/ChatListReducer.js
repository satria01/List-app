const initialState = {
  chatShortDetail: null,
  id: 4,
};

const ChatListReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_CHATLIST': {
      return {
        ...state,
        chatShortDetail: action.value,
      }
    }
    default: {
      return state;
    }
  }
};

export default ChatListReducer;
