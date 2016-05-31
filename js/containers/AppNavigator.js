/**
 * @providesModule AppNavigator
 */

import React, { Component, Navigator, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'
import MainView from 'MainView'
import * as Routes from '../constants/routes'

@connect(
  state => ({
    routeName: state.navigation.routeName
  })
)
export default class AppNavigator extends Component {
  render() {
    const initialRouteName = Routes.MAIN

    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={route => {
          const sceneConfig = Navigator.SceneConfigs.FloatFromRight

          // Other scene configs for different Routes

          return sceneConfig
        }}
        initialRoute={{ name: initialRouteName }}
        renderScene={this.renderScene}
      />
    )
  }

  renderScene = (route, navigator) => {
    const routeProps = {
      navigator
    }

    let routeView = null

    if (route.viewProps) {
      Object.assign(routeProps, route.viewProps)
    }

    if (route.name === Routes.MAIN) {
      routeView = <MainView {...routeProps} />
    }

    if (routeView) {
      return (
        <View style={styles.container}>
          {routeView}
        </View>
      )
    }

    throw new Error('no View found to render the scene')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
