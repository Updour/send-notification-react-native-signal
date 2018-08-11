import React, { Component } from "react";
import {
    FlatList
} from 'react-native'
import {
  Container,
  Header,
  Title,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Right,
  Left,
  Button,
  Icon
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import styles from "./styles";

export default class DashBoArdList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          lasthistory : [],
      }
      componentDidMount(){
        this._interval = setInterval(() => {
            this._onFetChingdAtas()
             // console.warn( this.state.people)
           }, 5000);
         }
    //get dAtas
        _onFetChingdAtas = () => {
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
        <Text>{this.state.header.pairs}</Text>
        <FlatList
          data={this.state.lasthistory}
		  keyExtractor={(x,i) => i.toString()}
          renderItem={({item})=>
          <Content style={styles.content}>
        <Grid style={styles.grid}>
          <Col style={styles.col}>
            <Content>
              <Card style={styles.cardsRow}>
                <CardItem style={styles.cardsRow}>
                  <Body>
                    <Text>{item.pairs}</Text>
                    <Text>{item.pairs}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Col>
          <Col style={styles.col}>
            <Content>
              <Card style={styles.cardsRow}>
                <CardItem style={styles.cardsRow}>
                  <Body>
                    <Text>Left 3</Text>
                    <Text>Left 3</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Col>
        </Grid>
        <Grid style={styles.gridRows}>
          <Row>
            <Content style={styles.contentRow}>
              <Card style={styles.cardsRow}>
                <CardItem style={styles.cardsRow}>
                  <Body>
                    <Text style={styles.textRowName} note>PAIRS</Text>
                    <Text style={styles.textRowdAtas}>{item.pairs}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Row>
        </Grid>
        <Grid style={styles.gridCols3}>
          <Col style={styles.col3}>
            <Text style={styles.TextFont}>asasas</Text>
            <Content>
              <Card style={styles.cardsRow}>
                <CardItem style={styles.cardsRow}>
                  <Left>
                    <Text style={styles.TextFont}>{item.cell}</Text>
                  </Left>
                  <Body>
                    <Text style={styles.TextFont}>Google</Text>
                    <Text style={styles.TextFont}>sasdasd:4</Text>
                  </Body>
                  <Right>
                    <Text style={styles.TextFont}> Plus</Text>
                  </Right>
                </CardItem>
              </Card>
              <Card style={styles.cardsRow}>
                <CardItem style={styles.cardsRow}>
                  <Left>
                    <Text style={styles.TextFont}>asd</Text>
                  </Left>
                  <Body>
                    <Text style={styles.TextFont}>Google</Text>
                    <Text style={styles.TextFont}>sdfsdf:s</Text>
                  </Body>
                  <Right>
                    <Text style={styles.TextFont}> Plus</Text>
                  </Right>
                </CardItem>
              </Card>
              <Card style={styles.cardsRow}>
                <CardItem style={styles.cardsRow}>
                  <Left>
                    <Text style={styles.TextFont}>asd</Text>
                  </Left>
                  <Body>
                    <Text style={styles.TextFont}>Google</Text>
                    <Text style={styles.TextFont}>Google</Text>
                  </Body>
                  <Right>
                    <Text  style={styles.TextFont}> Plus</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </Col>
        </Grid>
      </Content>
          }
        />
        </Content>
      </Container>
    );
  }
}
