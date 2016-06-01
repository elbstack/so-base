import { MESSAGE_SEND } from '../actions/message'

const initialState = {
  messages: []
}

export default function messaging(state = initialState, action) {
  switch (action.type) {
    case MESSAGE_SEND:
      const messages = [].concat(state.messages)
      messages.push(action.message)
      return {
        ...state,
        messages
      }
    default:
      return state
  }
}
