const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Дмитрий', message: 'Hi. We are from...'},
    {id: 2, name: 'Алексей', message: 'How are you?'},
    {id: 3, name: 'Наталья', message: 'By. Never write me.'},
    {id: 4, name: 'Екатерина', message: 'Hello Peter'},
    {id: 5, name: 'Валера', message: 'Whats up? Man'},
    {id: 6, name: 'Костя', message: 'Whats up? Man'},
    {id: 7, name: 'Паша', message: 'What? Man'},
    {id: 8, name: 'Саша', message: 'Man'},
    {id: 9, name: 'Маша', message: 'Whats up? Man'},
    {id: 10, name: 'Олеся', message: 'Whats up? Man'},
  ]
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE: 
      let body = action.newMessageBody;
      return {
        ...state,
        dialogs: [{id: 11, name: 'Vasya', message: body}, ...state.dialogs]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;