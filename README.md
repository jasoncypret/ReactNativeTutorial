# React Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/Diz38bg5dN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Setup
1. Create a new react native project
`react-native init AwesomeProject`
`cd AwesomeProject`

2. Run your iOS app
`react-native run-ios`


## Build Initial view
1. Add folder `src/components/screens`

2. Add ViewOne
```
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

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
        <Text>Hello</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
  },
})

export default ViewOne
```

3. Add index.js
```
import ViewOne from './ViewOne';

export {
  ViewOne,
};
```


## Show our new view from main App.js

1. Import our view

`import { ViewOne } from "./src/components/screens";`

2. Update render
```
      <View style={styles.container}>
        <ViewOne />
      </View>
```


## Add a link to our view

1. import  `TouchableOpacity`

2. Update render
```
        <TouchableOpacity
        onPress={() => alert('hi')}
      >
          <Text>Hello</Text>
        </TouchableOpacity>
```



## Build Second view
1. Duplicate ViewOne

2. Edit ViewTwo.js & change references from `ViewOne` to `ViewTwo`

3. Add `ViewTwo` to `index.js`

4. Switch Main to target view (App.js)

`import { ViewOne, ViewTwo } from "./src/components/screens";`

5.  Update render in App.js
`<ViewTwo />`

## Add Navigation
Visit [Getting started · React Navigation](https://reactnavigation.org/docs/en/getting-started.html)

1. Stop server and install

```
yarn add react-navigation
yarn add react-native-gesture-handler
react-native link react-native-gesture-handler
```

2. Create stack navigator

`import { createAppContainer, createStackNavigator } from 'react-navigation';`


3. Create routes for StackNavigator
```
const RootStack = createStackNavigator(
  {
    ViewOne: {
      screen: ViewOne,
      navigationOptions: {
      },
    },
    ViewTwo: {
      screen: ViewTwo,
      navigationOptions: {
      },
    },
  }, {
    initialRouteName: 'ViewOne',
  }
);
```

4. Create AppContainer
`const AppContainer = createAppContainer(RootStack);`

5. Update render (Remove surrounding view)
`<AppContainer />`


## Update press and push

1. Bring in withNavigation to ViewOne.js

`import { withNavigation } from 'react-navigation';`

2. Update the export in ViewOne.js

`export default withNavigation(ViewOne);`

3. Update our onPress in ViewOne.js

`this.props.navigation.push('ViewTwo', { data: 'Hello' })`			
---

### Resources

This is a great example creating an instagram clone:
[Turbo 360 | Learn Node, React, Redux with Real World Project Tutorials.](https://www.turbo360.co/tutorial/react-native---instagram)
