'use strict';

import React, { Component } from 'react';

import { StyleSheet,  View, FlatList } from 'react-native'
import { Container, Header,Icon,Left,Body, Title, Content, List,Right, ListItem, Text, Button, Thumbnail } from 'native-base'

export default class FetchiNgdAtas extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      people : [],
      errorMessage : ''
    };
  }

   componentDidMount(){
    this.getdAtasPeople()
  }
 
    getdAtasPeople = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
        .then(responseJson => {
          this.setState({
            people : responseJson
          })
          // console.warn(responseJson)
        })
        .catch(e=>{
          this.setState({
            errorMessage : e
          })
          // console.warn(e)
        })
      
    }
    _keyExtractor = (item, i) => i.toString();
    _renderItem = ({ item }) => {
      const { _id, title, body } = item;

      return (
       <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
              </Left>
              <Body>
                <Text>{item.title.substring(1, 18)}</Text>
                <Text note>{item.body.substring(1, 28)}</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      )
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.people}
          keyExtractor = {this._keyExtractor}
          renderItem={this._renderItem}
        />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
