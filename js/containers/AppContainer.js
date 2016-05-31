/**
 * @providesModule AppContainer
 */

import React, { Component, StyleSheet, View } from 'react-native'
import AppNavigator from 'AppNavigator'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'

export default class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false }))
    }
  }

  render() {
    if (this.state.isLoading) {
      return null
    }

    return (
      <Provider store={this.state.store}>
        <View style={styles.container}>
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
