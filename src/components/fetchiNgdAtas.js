'use strict';

import React, { Component } from 'react';

import { StyleSheet,  View, FlatList, RefreshControl } from 'react-native'
import { Container, Header,Icon,Left,Body, Title, Content, List,Right, ListItem, Text, Button, Thumbnail } from 'native-base'

export default class FetchiNgdAtas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people : [],
      refreshing: false,
      errorMessage : '',
    };
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
     _refreshControl(){
    return (
      <RefreshControl
        refreshing={this.state.refreshing}
        onRefresh={()=>this.getdAtasPeople()} />
    )
  }
   
    // for get data
    getdAtasPeople = () => {
      fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          people : responseJson.data
        })
          console.warn(responseJson.data)
        })
      .catch(e=>{
        this.setState({
          errorMessage : e
        })
          console.warn(e)
        })
      
    }
  

    _keyExtractor = (item, i) => i.toString();
    _renderItem = ({ item }) => {
      const { id, first_name, last_name, avatar } = item;
      // console.warn(title)

      return (
       <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{uri : avatar}} />
              </Left>
              <Body>
                <Text key={item.id}>{first_name.substr(0, 2)}</Text>
                <Text >{last_name.substr(0, 5)}</Text>
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
