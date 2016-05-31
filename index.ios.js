import React, {
  AppRegistry,
  Component
} from 'react-native'

import AppContainer from 'AppContainer'

class SOBase extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

AppRegistry.registerComponent('SOBase', () => SOBase)
