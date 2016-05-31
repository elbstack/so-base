import React, {
  AppRegistry,
  Component
} from 'react-native'

import AppContainer from 'AppContainer'

class SO-Base extends Component {
  render() {
    return (
      <AppContainer />
    )
  }
}

AppRegistry.registerComponent('SO-Base', () => SO-Base)
