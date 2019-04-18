import React, { Component } from "react";
import {
  ImageBackground,
  View,
  FlatList
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

  _onPressItem = (game: Object) => {
    //  Store the selected game
    QuestionHelper.setActualGame(game);

    this.props.navigation.navigate(
      'QuestionScreen',
      {
        game: game
      }
    );

  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <ImageBackground
          style={styles.imageBackground}
          source={require('../../../assets/images/bg.png')}
          resizeMode="cover"
        >
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Themes</Text>
          </View>

          <FlatList
            style={styles.games}
            data={this.state.gameList}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />
        </ImageBackground>

      </Container>
    );
  }
}

export default Home;