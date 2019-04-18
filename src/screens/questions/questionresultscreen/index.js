import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { StackNavigator, NavigationActions } from 'react-navigation';

import QuestionHelper from '../../Services/questionhelper';
import styles from "./styles";

class QuestionResultsScreen extends Component {

    static navigationOptions = {
        header: null
    }

    _onAcceptButton = () => {

        //  Navigate to the Themes list
        this.props.navigation.navigate(
            'Home'
        );

    }

    render() {

        const game = QuestionHelper.getActualGame();
        const correctCount = QuestionHelper.getCorrectAnswersCount();
        const wrongCount = QuestionHelper.getQuizzes().length - correctCount;

        return (
            <View style={styles.container}>

                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../../../../assets/images/bg.png')}
                    resizeMode="cover"
                >

                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>Game Results</Text>
                    </View>

                    <View style={styles.gameDataContainer}>

                        <View style={[{ backgroundColor: game.color }, styles.gameData]}>

                            <Text style={styles.gameName}>{game.name}</Text>

                            <View style={styles.gameResultsContainer}>

                                <View style={styles.gameResultsCorrectContainer}>
                                    <Image style={styles.gameResultsCorrectImage}
                                        source={require('../../../../assets/images/correct.png')}
                                    />
                                    <Text style={styles.gameResultsCorrectCount}>{correctCount}</Text>
                                </View>

                                <View style={styles.gameResultsWrongContainer}>
                                    <Image style={styles.gameResultsWrongImage}
                                        source={require('../../../../assets/images/wrong.png')}
                                    />
                                    <Text style={styles.gameResultsWrongCount}>{wrongCount}</Text>
                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={styles.actionsContainer}>

                        <TouchableOpacity onPress={this._onAcceptButton}>
                            <Image
                                style={styles.acceptButton}
                                source={require('../../../../assets/images/correct.png')}
                            />
                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>
        );
    }
}

export default QuestionResultsScreen;