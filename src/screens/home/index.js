import React, { Component } from "react";
import {
  ImageBackground,
  View,
  FlatList,
  Image,
  TouchableHighlight
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import AsyncStorage from '@react-native-community/async-storage';
import styles from "./styles";

import QuestionListItem from '../questions/questionlistitem';
import QuestionHelper from '../Services/questionhelper';

import localQuestionList from '../../../assets/raw/gamelist.json';

class Home extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this._makeLocalRequestForGameList();
  }

  _makeLocalRequestForGameList = () => {
    this.setState({ loading: true });
    this.setState({ error: null });
    this.setState({ gameList: localQuestionList.games });
    this.setState({ loading: false });
  };

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item }) => (
    <QuestionListItem
      game={item}
      onPressItem={this._onPressItem}
    />
  );

  _onPressItem = (game) => {
    //  Store the selected game
    QuestionHelper.setActualGame(game);

    this.props.navigation.navigate(
      'QuestionScreen',
      {
        game: game
      }
    );

  };

  logout() {

    removeValue = async () => {
      try {
        await AsyncStorage.removeItem('@token');
        await AsyncStorage.removeItem('@despessoa');
        await AsyncStorage.removeItem('@desemail');
      } catch (e) {
        console.log(error);
      }
    }
    removeValue();

    console.warn('sair');
    this.props.navigation.navigate('Login');

  }

  render() {
    return (
      <Container style={styles.container}>

        <View style={styles.headerContainer}>
          <Image style={styles.logoIMG} source={require('./../../../assets/images/logo.png')} />
        </View>

        <View>
          <Text style={styles.txtSimulado}>Simulados</Text>
        </View>

        <FlatList
          style={styles.simulados}
          data={this.state.gameList}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />

        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={this.logout.bind(this)} >
          <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Entrar com outra conta</Text>
        </TouchableHighlight>

      </Container>
    );
  }
}

export default Home;