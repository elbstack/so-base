/**
* @providesModule ActionBar
*/

import React, { Component, PropTypes, StyleSheet, View, Text } from 'react-native'

export default class ActionBar extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  }

  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.label }>{ this.props.label }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    paddingTop: 20,
    backgroundColor: '#359aed',
    alignItems: 'center',
    justifyContent: 'center'
  },
  label: {
    color: '#FFFFFF'
  }
})
