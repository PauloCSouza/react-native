import React, { Component } from "react";
import { ImageBackground, View, StatusBar, AsyncStorage } from "react-native";
import { Container, Button, Text, Form, Item, Input, Icon, Toast } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/bg.jpg");

AsyncStorage.getItem('token')
    .then(token => {
        if (token) {
            logado = true;
        } else {
            logado = false;
        }
    })

class ScreenLoad extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.titulo}>Simul@ TI</Text>
                        <Text> Bem vindo de volta, Paulo !</Text>
                        
                        <Button block
                            style={styles.button}
                            onPress={this.efetuaLogin.bind(this)}>
                            <Text>ENTRAR</Text>
                        </Button>
                        <Button block
                            style={styles.button}
                            onPress={this.efetuaLogin.bind(this)}>
                            <Text>SAIR</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Container>
        );
    }

}

export default ScreenLoad;
