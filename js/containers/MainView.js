/**
 * @providesModule MainView
 */

import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'
import ActionBar from 'ActionBar'
import Messenger from 'react-native-gifted-messenger'
import { sendMessage } from '../actions/message'
import { STATUSBAR_HEIGHT, NAVIGATIONBAR_HEIGHT } from '../constants/sizes'

function mapStateToProps(state) {
  return ({
    messaging: state.messaging
  })
}

@connect((mapStateToProps), {
  sendMessage
})
export default class MainView extends Component {
  static propTypes = {
    navigator: PropTypes.object
  }

  handleSend(message) {
    this.props.sendMessage(message)
  }

  render() {
    const { messages } = this.props.messaging

    return (
      <View style={styles.container}>
        <ActionBar label="Messenger" />
        <Messenger
          autoFocus={false}
          messages={messages}
          maxHeight={
            Dimensions.get('window').height - (NAVIGATIONBAR_HEIGHT + STATUSBAR_HEIGHT)
          }
          handleSend={message => this.handleSend(message)}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
