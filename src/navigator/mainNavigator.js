import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile189054Navigator from '../features/UserProfile189054/navigator';
import Tutorial189053Navigator from '../features/Tutorial189053/navigator';
import NotificationList189025Navigator from '../features/NotificationList189025/navigator';
import Settings189024Navigator from '../features/Settings189024/navigator';
import Settings189016Navigator from '../features/Settings189016/navigator';
import UserProfile189014Navigator from '../features/UserProfile189014/navigator';
import Settings188865Navigator from '../features/Settings188865/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile189054: { screen: UserProfile189054Navigator },
Tutorial189053: { screen: Tutorial189053Navigator },
NotificationList189025: { screen: NotificationList189025Navigator },
Settings189024: { screen: Settings189024Navigator },
Settings189016: { screen: Settings189016Navigator },
UserProfile189014: { screen: UserProfile189014Navigator },
Settings188865: { screen: Settings188865Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
