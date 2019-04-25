import React, { Component } from "react";
import { ImageBackground, View, StatusBar, Image, TextInput, TouchableHighlight } from "react-native";
import { Container, Button, Text, Form, Item, Input, Icon, Toast } from "native-base";
import AsyncStorage from '@react-native-community/async-storage';

import styles from "./styles";

const launchscreenBg = require("../../../assets/images/bg.jpg");

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
                    this.props.navigation.replace('Home');
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

        const formData = new FormData()
        formData.append("desemail", this.state.desemail);
        formData.append("dessenha", this.state.dessenha);

        fetch('https://cms.fastcode.com.br/api/pessoas/enter', {
            method: 'post',
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJNREV5VW10R1ZGWkZUazVWZHowOVRXcEJlVTUzUFQwIn0=.OtD6Px6ZZIdfHm8PuOX3MFKVyLgxdD/ASNTkh5kcZLM=',
                'Content-Type': 'multipart/form-data'
            },
            body: formData
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
            <Container style={styles.bgcolor}>

                <View style={styles.logoContainer}>
                    <Image style={styles.logoIMG} source={require('./../../../assets/images/logo.png')} />
                </View>

                <View style={styles.formContainer}>
                    <Form>
                        <TextInput placeholder="Digite seu e-mail"
                            style={styles.input}
                            keyboardType='email-address'
                            value={this.state.email}
                            onChangeText={(desemail) => this.setState({ desemail })}
                            autoCapitalize="none" />
                        <TextInput placeholder="Sua senha"
                            style={styles.input}
                            value={this.state.senha}
                            onChangeText={(dessenha) => this.setState({ dessenha })}
                            secureTextEntry={true} />
                    </Form>
                    <TouchableHighlight
                        style={styles.btnLogin}
                        onPress={this.efetuaLogin.bind(this)}>
                        <Text style={styles.btnText}>Entrar</Text>
                    </TouchableHighlight>
                </View>

            </Container>
        );
    }
}

export default Login;
