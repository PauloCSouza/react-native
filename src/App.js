import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { AsyncStorage } from "@react-native-community/async-storage";

import Home from "./screens/home/";
import Simulados from "./screens/simulados";
import ScreenLoad from "./screens/screenload";

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Simulados: Simulados,
    ScreenLoad: ScreenLoad
  },
  { headerMode: 'none' }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Root>
        <AppContainer />
      </Root>
    );
  }
}