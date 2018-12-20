export const initContentList = value => ({
    type: 'GET_CONTENTLIST',
    value,
  });

  export function getContentList(callback) {
    return dispatch => fetch('http://localhost:3001/FeedData')
      .then(response => {
          return response.json()
      })
      .then((response) => {
        let newData = {};
        newData = response;
        dispatch(initContentList(newData));
        callback(response);
      })
  }