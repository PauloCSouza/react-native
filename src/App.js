import React from "react";
import { Root } from "native-base";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./screens/login/";
import Home from "./screens/home/";

// Question Componentes
import QuestionScreen from './screens/questions/questionscreen';
import QuestionResultsScreen from './screens/questions/questionresultscreen';
import SimuladoScreen from './screens/simulados/simuladoscreen';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    QuestionScreen: QuestionScreen,
    QuestionResultsScreen: QuestionResultsScreen,
    SimuladoScreen: SimuladoScreen
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