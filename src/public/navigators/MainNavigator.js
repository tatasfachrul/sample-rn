import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '../../screens/home/Home'
import Profile from '../../screens/profile/Profile'

const AppNavigator = createStackNavigator({
  Home,
  Profile
}, {
  headerMode: 'none',
  initialRouteName: 'Profile'
})

export default createAppContainer(AppNavigator)
