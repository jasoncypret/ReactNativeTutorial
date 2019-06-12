import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation';

class ViewOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      example: false,
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity
        onPress={() => this.props.navigation.push('ViewTwo', { data: 'Hello' }) }
      >
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default withNavigation(ViewOne);
