import { combineReducers } from "redux";

import conversationReducer from "./conversation/ConversationReducer";
import searchContentReducer from './searchContact/searchContactReducer';
import sendMessageReducer from "./sendMessege/sendMessegeReducer";
import makeConversationReducer from "./makeConversation/makeConversationReducer";
import getMessageReducer from "./getMessage/getMessegeReducer";

const rootReducer = combineReducers({
  loadConversation: conversationReducer,
  searchContent: searchContentReducer,
  sendMessege: sendMessageReducer,
  makeConversation: makeConversationReducer,
  getMessage: getMessageReducer,
})

export default rootReducer