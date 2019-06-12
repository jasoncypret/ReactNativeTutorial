import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { withNavigation } from 'react-navigation';

class ViewTwo extends Component {

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
        onPress={() => this.props.navigation.push('ViewOne', { data: 'Hi' })}
      >
          <Text>Hello</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default withNavigation(ViewTwo);
