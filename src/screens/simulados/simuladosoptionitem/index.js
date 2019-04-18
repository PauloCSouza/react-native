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

class SimuladosOptionItem extends PureComponent {

    _onPress = () => {
        console.log('SimuladosOptionItem Pressed : ');
        console.log(this.props.quizOption);
        this.props.onPressItem(this.props.quizOption);
    };

    render() {
        console.log(this.props);
        const { quizOption } = this.props

        return (
            <TouchableOpacity
                onPress={this._onPress}
            >
                <View style={styles.quizOption}>
                    <Text style={styles.quizOptionDescription}>{quizOption.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default SimuladosOptionItem;