import React from "react";
import { StatusBar } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import OfflineNotice from './OfflineNotice'
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          
        <OfflineNotice />
        <Text>as</Text>
        </Content>
      </Container>
          
    );
  }
}
