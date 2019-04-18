import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Modal,
  TouchableHighlight,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import SimuladosOptionItem from '../simuladosoptionitem';
import QuestionHelper from '../../Services/questionhelper';

const imageCorrect = require('../../../../assets/images/correct.png')
const imageWrong = require('../../../../assets/images/wrong.png')

import styles from "./styles";

class SimuladoScreen extends Component {

  static navigationOptions = {
    header: null
  }

  constructor (props) {

    super(props);

    const game = QuestionHelper.getActualGame();
    const quiz = QuestionHelper.getActualQuiz();
    this.actualQuizOption = -1;

    this.state = {
      game: game,
      quiz: quiz,
      modalCorrectVisible: false,
      modalWrongVisible: false,
    };
    /*
    this.state = {
      modalCorrectVisible: false,
    };*/
  }

  _onCancelButton = () => {
    console.log ("_onCancelButton");
    this.props.navigation.goBack();
  }

  _onAcceptButton = () => {
    console.log ("_onAcceptButton");
    //  Navigate to the first quiz
    this.props.navigation.navigate('SimuladoScreen');
  }

  _onPressOption = (quizOption) => {
      console.log ("_onPressOption");
      console.log (quizOption);
      //console.log (index);

      this.actualQuizOption = quizOption;

      this._checkValidAnswer (quizOption);

  };

  _moveNext = () => {
    console.log ("_moveNext");

    QuestionHelper.updateQuizStatus (this.actualQuizOption);
    QuestionHelper.moveNextQuiz ();
    if (QuestionHelper.isAnyQuizPending()) {

      //  Navigate to the next quiz
      this.props.navigation.navigate(
        'SimuladoScreen'
      );

    } else {

      //  Navigate to the game results
      this.props.navigation.navigate(
        'QuestionResultsScreen'
      );

    }

  };

  _checkValidAnswer = (quizOption) => {

    this.correctAnswer = QuestionHelper.checkValidAnswer (this.state.quiz, quizOption);

    if (this.correctAnswer) {

      this._setModalCorrectVisible();
      this._hideModals();

    } else {

      this._setModalWrongVisible();
      this._hideModals();

    }

  }

  _renderQuizOption = ({item}) => (
    <SimuladosOptionItem
      quizOption={item}
      onPressItem={this._onPressOption}
      />
  );

  _keyExtractor = (item, index) => index;

  _setModalCorrectVisible() {
    this.setState({modalCorrectVisible: true});
    this.setState({modalWrongVisible: false});
  }

  _setModalWrongVisible(visible) {
    this.setState({modalCorrectVisible: false});
    this.setState({modalWrongVisible: true});
  }

  _hideModals () {
    this.setState({modalCorrectVisible: false});
    this.setState({modalWrongVisible: false});
  }


  _onRequestClose = () => {
    console.log ('Modal has been closed.');
    //this._hideModals();
    this._moveNext();
  }

  _onDismiss = () => {
    console.log ('Modal has been dismissed.');
    //  Quiz answered so move to the next
    this._moveNext();
  }

  _onShow = () => {
    console.log ('Modal has been shown.');
    //  ???????
  }


  _renderQuizStatus = () => {

      const image = (this.state.modalCorrectVisible) ? imageCorrect : imageWrong;

      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={(this.state.modalCorrectVisible || this.state.modalWrongVisible)}
          onRequestClose={this._onRequestClose}
          onDismiss={this._onDismiss}
          onShow={this._onShow}
          >
            <View style={styles.statusContainer}>

              <TouchableHighlight
                  onPress={() => {
                    //this._hideModals();
                  }}>
                <Image
                  style={styles.statusImage}
                  source={image}
                />
              </TouchableHighlight>

            </View>
        </Modal>
      );

  }


  render() {

    let actualQuizNumber = QuestionHelper.getActualQuizIdx() + 1;
    let totalQuizNumber = QuestionHelper.getQuizzes().length;

    return (
      <View style={styles.container}>

        <ImageBackground
         style = {styles.imageBackground}
         source = {require('../../../../assets/images/bg.png')}
         resizeMode = "cover"
        >

          <View style={styles.headerContainer}>
            <Text style = {styles.headerTitle}>Quiz {actualQuizNumber}/{totalQuizNumber}</Text>
          </View>

          <View style={styles.quizDataContainer}>

            <View style={[{backgroundColor: this.state.game.color},styles.quizData]}>

              <Text style = {styles.quizDescription}>{this.state.quiz.description}</Text>

            </View>

            <FlatList
              style={styles.quizOptions}
              data={this.state.quiz.options}
              renderItem={this._renderQuizOption}
              keyExtractor={this._keyExtractor}
              onPressItem={this._onPressOption}
              scrollEnabled={true}
              />

          </View>

        </ImageBackground>

        {this._renderQuizStatus()}

      </View>
    );

  }

}

export default SimuladoScreen