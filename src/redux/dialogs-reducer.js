const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  messages: [
    {message: 'Hi'},
    {message: 'How are you?'},
    {message: 'Hello'},
  ],
  dialogs: [
    {id: 1, name: 'Дмитрий'},
    {id: 2, name: 'Алексей'},
    {id: 3, name: 'Наталья'},
    {id: 4, name: 'Екатерина'},
    {id: 5, name: 'Илья'},
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;