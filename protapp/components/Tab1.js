import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Footer
} from 'native-base';
import {
  View,
  TouchableOpacity
} from 'react-native';
import CircleButton from '@components/CircleButton';
import {Styles} from "../Styles";

class Tab1 extends Component {
  render() {
    return (
      <Container>
       <Header style={{backgroundColor: "white"}}>
         <Left>
           <Button transparent onPress={this.props.screenProps.handleDrawer}>
             <Icon name='md-arrow-round-back' style={{color: "black"}}/>
           </Button>
         </Left>
         <Body>
          <View style={{marginLeft: 80}}>
            <Title style={{color: "black"}}>Header</Title>
          </View>
         </Body>
         <Right>
           <Button transparent onPress={this.props.screenProps.handleOption}>
             <Icon name='md-menu' style={{color: "black"}}/>
           </Button>
         </Right>
       </Header>
        <Content>
          <View style={Styles.tab1}>
            <CircleButton content="Button1"/>
            <CircleButton content="Button2"/>
            <CircleButton content="Button3"/>
          </View>
          <View style={Styles.tab1}>
            <CircleButton content="Button4"/>
            <CircleButton content="Button5"/>
          </View>
        </Content>
        <Footer style={Styles.footer}>
          <Right>
            <TouchableOpacity>
              <Icon name="md-add" size={40} style={{marginRight: 20}}/>
            </TouchableOpacity>
          </Right>
        </Footer>
      </Container>
    );
  }
}

export default Tab1;