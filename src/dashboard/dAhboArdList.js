import React, { Component } from "react";
import {
    FlatList, ActivityIndicator, View, StatusBar, NetInfo
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
import OfflineNotice from './OfflineNotice'
export default class DashBoArdList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          lasthistory : [],
          header:{
            "pairs":'',
            "left" :'',
            "right":''
          },
          loading : true,
      }
        NetInfo.getConnectionInfo().then((connectionInfo) => {
          console.warn('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
        });
        function handleFirstConnectivityChange(connectionInfo) {
          console.warn('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
          NetInfo.removeEventListener(
            'connectionChange',
            handleFirstConnectivityChange
            );
        }
        NetInfo.addEventListener(
          'connectionChange',
          handleFirstConnectivityChange
          );
    }
    
    componentDidMount () {
      this._interval = setInterval(() => {
        this._onFetChingdAtas()
               // console.warn( this.state.people)
        }, 5000);
    }
    componentWillUnmount () {
      clearInterval(this._interval);
    }
      //get dAtas
      _onFetChingdAtas = () => {
        fetch('api')
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            lasthistory : responseJson.lasthistory,
            header : responseJson.header,
            loading: false
          })
          // console.warn(responseJson.lasthistory)
          // console.warn(responseJson.header)
        })
        .catch(e=>{
          this.setState({
            errorMessage : e
          })
                  // console.warn(e)
        })
      }

    //for list 
      _keyExtractor= (x,i) => i.toString()
      _renderItem= ({item})=> {
        const { cell,pairs, left, right, datetime,   } = item;
        return(
          <Content>
            <Grid>
              <Col>
                <Content>
                  <Card style={styles.listheAderCard}>
                    <CardItem style={styles.listheAderCard}>
                      <Left>
                        <Text style={styles.listLefts}>{cell}</Text>
                      </Left>
                      <Body>
                        <Text style={styles.listCenters}>LEFT     :  {left}</Text>
                        <Text style={styles.listCenters}>RIGHT  :  {right}</Text>
                      </Body>
                      <Right>
                        <Text style={styles.listpAirs}>PAIRS  :  {pairs}</Text>
                        <Text note style={styles.listpAirsc} >CALIBRATED: YES</Text>
                      </Right>
                    </CardItem>
                  </Card>
                </Content>
              </Col>
            </Grid>
          </Content>
        )
      }

  render() {
    if (this.state.loading) {
      return(
        <View style={{flex: 1, padding: 20, flexDirection: 'row', padding: 10, justifyContent: 'space-around' }}>
          <ActivityIndicator size="small" color="blue"/>
        </View>
      )
    }
    return (
      <Container>
        <Header style={{backgroundColor: 'red'}} > 
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
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <OfflineNotice />
        <Content style={{backgroundColor: '#efefef'}}>
          <Content>
          <Grid style={styles.gridHeader}>
            <Col>
              <Content >
                <Card style={styles.headerCard}>
                  <CardItem style={styles.headerCard}>
                    <Body>
                      <Text note style={styles.textCard}>     RIGHT</Text>
                      <Text style={styles.textCarddAta}>{this.state.header.left}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Col>
            <Col >
              <Content>
                <Card style={styles.headerCard}>
                  <CardItem style={styles.headerCard}>
                    <Body>
                      <Text note style={styles.textCard}>     LEFT</Text>
                      <Text style={styles.textCarddAta}>{this.state.header.right}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Col>
          </Grid>
          <Grid style={styles.gridHeaderPairs}>
            <Row>
              <Content>
                <Card  style={styles.headerCard}>
                  <CardItem style={styles.headerCard}>
                    <Body>
                      <Text note style={styles.textCard}>     PAIRS</Text>
                      <Text style={styles.textCarddAta}>{this.state.header.pairs}</Text>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            </Row>
          </Grid>
          </Content>
          <Card style={styles.listContent}>
            <FlatList
              data={this.state.lasthistory}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
            /> 
          </Card>
            
        </Content>
      </Container>
    );
  }
}
