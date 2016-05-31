/**
 * @providesModule MainView
 */

import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

@connect(
  state => ({
  })
)
export default class MainView extends Component {
  static propTypes = {
    navigator: PropTypes.object
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello socialobjects crew!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
