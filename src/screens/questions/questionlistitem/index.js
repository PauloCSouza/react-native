import React, { PureComponent } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

import StringUtils from '../../../libs/StringUtils';
import styles from "./styles";

class QuestionListItem extends PureComponent {

    _onPress = () => {
        this.props.onPressItem(this.props.game);
    };

    render() {

        const { game } = this.props

        return (
            <TouchableOpacity
                onPress={this._onPress}
            >
                <View style={styles.game}>

                    <View style={[{ backgroundColor: game.color }, styles.gameData]}>
                        <Text style={styles.gameName}>{StringUtils.capitalize(game.name)}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

export default QuestionListItem;