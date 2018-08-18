import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Left, Body, Right, Button, Text, Icon, Title } from 'native-base';

export default class SettingServer extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'red'}}>
          <StatusBar
           backgroundColor="#e60000"
           barStyle="light-content"
         />
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Setting Server</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{backgroundColor: '#efe'}} >
          <Form>
            <Item floatingLabel>
              <Label style={{fontFamily: 'roboto'}}>Setting Server</Label>
              <Input />
            </Item>
          </Form>
          <Button block info style={{marginRight: 7, marginLeft: 7}} 
          	onPress={() => this.props.navigation.navigate("Home")}
          >
          	<Text style={{fontFamily: 'roboto'}}>Change</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}