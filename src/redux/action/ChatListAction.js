const initChatList = value => ({
  type: 'GET_CHATLIST',
  value,
});

export default function getChatList() {
  return dispatch => fetch('http://localhost:3001/chatShortDetail')
    .then(response => {
        return response.json()
    })
    .then((response) => {
      dispatch(initChatList(response));
    })
}