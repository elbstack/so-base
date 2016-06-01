import { combineReducers } from 'redux'

import navigation from './navigation'
import messaging from './message'

module.exports = combineReducers({
  navigation,
  messaging
})
