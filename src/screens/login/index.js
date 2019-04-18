import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, Text, Form, Item, Input, Icon, Toast } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';

import styles from "./styles";

const launchscreenBg = require("../../../assets/bg.jpg");

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            desemail: '',
            dessenha: ''
        }
    }

    async componentDidMount() {

        getData = async () => {
            try {
                const value = await AsyncStorage.getItem('@token') || null;
                if (value) {
                    this.props.navigation.push('Home');
                }
            } catch (e) {
                console.error(e);
            }
        }

        getData();

    }

    efetuaLogin() {

        if (this.state.desemail == '') {
            Toast.show({
                text: 'Favor informe o E-mail!',
                buttonText: 'Okay',
                position: "bottom",
                type: "warning"
            })
            return;
        }

        if (this.state.dessenha == '') {
            Toast.show({
                text: 'Favor informe a Senha!',
                buttonText: 'Okay',
                position: "bottom",
                type: "warning"
            })
            return;
        }

        fetch('http://192.168.0.2:3000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                desemail: this.state.desemail,
                dessenha: this.state.dessenha
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.success) {
                    setValue = async () => {
                        try {
                            await AsyncStorage.setItem('@token', responseJson.data.idpessoacode);
                            await AsyncStorage.setItem('@despessoa', responseJson.data.despessoa);
                            await AsyncStorage.setItem('@desemail', responseJson.data.desemail);
                        } catch (e) {
                            console.log(error);
                        }
                    }
                    setValue();
                    console.warn('Login Efetuado!');
                    this.props.navigation.navigate('Home');
                } else {
                    Toast.show({
                        text: responseJson.msg,
                        buttonText: 'Okay',
                        position: "bottom",
                        type: "danger"
                    })
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <Container>
                <StatusBar barStyle="light-content" />
                <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
                    <View style={styles.logoContainer}>
                        <Text style={styles.titulo}>Simul@ TI</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Form>
                            <Item >
                                <Icon style={styles.color} active name="mail" />
                                <Input style={styles.color}
                                    placeholder="exemplo@dominio.com"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={(desemail) => this.setState({ desemail })} />
                            </Item>
                            <Item >
                                <Icon style={styles.color} active name="lock" />
                                <Input style={styles.color}
                                    secureTextEntry={true}
                                    onChangeText={(dessenha) => this.setState({ dessenha })} />
                            </Item>
                        </Form>
                        <Button block
                            style={styles.button}
                            onPress={this.efetuaLogin.bind(this)}>
                            <Text>ENTRAR</Text>
                        </Button>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}

export default Login;
