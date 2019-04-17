import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import { AsyncStorage } from "@react-native-community/async-storage";

import styles from "./styles";

class Simulados extends Component {

  


  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Simulados</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Simulados Disponiveis:</Text>
        </Content>


      </Container>
    );
  }
}

export default Simulados;
