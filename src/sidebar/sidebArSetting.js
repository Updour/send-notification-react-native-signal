import React from "react";
import { AppRegistry, Image, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Text, List, ListItem, Button, Left, Right, Body, Icon } from "native-base";

export default class SideBar extends React.Component {
  render() {
  	const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Image
            source={require('../assets/images/sidebarr.jpg')}
            style={{
              height: 120,
              alignSelf: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}
             />
           <List>
            <ListItem itemDivider >
              <Text>Apps</Text>
            </ListItem>
            <ListItem avatar>
              <Left>
               <Icon name="home" type="FontAwesome" />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Home")}>
                  <Text >Home</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Icon name="settings" />
              </Left>
              <Body>
                <TouchableOpacity onPress={() => navigate("Setting")}>
                  <Text>Setting Server</Text>
                </TouchableOpacity>
              </Body>
            </ListItem>
            </List>

        </Content>
      </Container>
    );
  }
}
