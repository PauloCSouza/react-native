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

class QuestionScreen extends Component {


    static navigationOptions = {
        header: null
    }


    _onCancelButton = () => {
        this.props.navigation.goBack();
    }

    _onAcceptButton = () => {

        //  Create quiz List
        QuestionHelper.generateQuizzes();

        //  Navigate to the first quiz
        this.props.navigation.navigate(
            'SimuladoScreen'
        );

    }

    render() {

        const game = QuestionHelper.getActualGame();

        return (
            <View style={styles.container}>

                <ImageBackground
                    style={styles.imageBackground}
                    source={require('../../../../assets/images/bg.png')}
                    resizeMode="cover"
                >

                    <View style={styles.headerContainer}>
                        <Text style={styles.headerTitle}>Start the Game?</Text>
                    </View>

                    <View style={styles.gameDataContainer}>

                        <View style={[{ backgroundColor: game.color }, styles.gameData]}>

                            <Text style={styles.gameName}>{game.name}</Text>
                            <Text style={styles.gameDescription}>{game.description}</Text>

                        </View>

                    </View>

                    <View style={styles.actionsContainer}>

                        <TouchableOpacity onPress={this._onCancelButton}>
                            <Image
                                style={styles.cancelButton}
                                source={require('../../../../assets/images/wrong.png')}
                            />
                        </TouchableOpacity>

                        <View style={styles.actionSeparator} />

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

export default QuestionScreen;