'use strict';

import React, { Component } from 'react';

import { StyleSheet,  View, FlatList, RefreshControl } from 'react-native'
import { Container, Header,Icon,Left,Body, Title, Content, List,Right, ListItem, Text, Button, Thumbnail } from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class FetchiNgdAtas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lasthistory : [],
      "header": {
            "pairs":12,
            "left" :4,
            "right":8
      },
    }
  }

  componentDidMount() {
    this._interval = setInterval(() => {
     this.getdAtasPeople()
      // console.warn( this.state.people)
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

    //for refreshing down pull

   
    // for get data
    getdAtasPeople = () => {
      fetch('http://otoritech.com/data')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          lasthistory : responseJson.lasthistory
        })
          console.warn(responseJson.lasthistory)
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
      const { cell,pairs, left, right, datetime,   } = item;
      // console.warn(title)
      return (
       <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri : 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg'}} />
              </Left>
              <Body>
                <Text >{cell}</Text>
                <Text >{pairs}</Text>
                <Text >{this.state.header.pairs}</Text>
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
          data={this.state.lasthistory}
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
