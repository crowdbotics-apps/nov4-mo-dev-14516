import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen414005Navigator from '../features/BlankScreen414005/navigator';
import BlankScreen313804Navigator from '../features/BlankScreen313804/navigator';
import BlankScreen213803Navigator from '../features/BlankScreen213803/navigator';
import BlankScreen013795Navigator from '../features/BlankScreen013795/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen414005: { screen: BlankScreen414005Navigator },
BlankScreen313804: { screen: BlankScreen313804Navigator },
BlankScreen213803: { screen: BlankScreen213803Navigator },
BlankScreen013795: { screen: BlankScreen013795Navigator },

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
