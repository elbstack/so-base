import React, {
  AppRegistry,
  Component
} from 'react-native'

import AppContainer from 'AppContainer'

class Sobase extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

AppRegistry.registerComponent('sobase', () => Sobase)
