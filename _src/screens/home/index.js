import React, { Component } from "react";
import { ImageBackground, View, StatusBar, AsyncStorage, TextInput } from "react-native";
import { Container, Button, Text, Form, Item, Input, Icon } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/bg.jpg");

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      desemail: '',
      dessenha: ''
    }
  }

  efetuaLogin() {

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
          console.warn('Conectado');
        } else {
          alert(responseJson.msg);
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
                  onChangeText={(desemail) => this.setState({ desemail })} />
              </Item>
              <Item >
                <Icon style={styles.color} active name="lock" />
                <Input style={styles.color}
                  secureTextEntry
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

export default Home;
