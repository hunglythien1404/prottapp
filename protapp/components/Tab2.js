import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';
import {Body, Button, Container, Content, Header, Icon, Right, Title, Tab, Tabs, TabHeading} from "native-base";
import NumKeyboard from '@components/numKeyboard';
import List from '@components/list';
import {Styles} from "../Styles";
import Setting from '@components/setting';

class Tab2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      modal: false,
    };
  }

  handleSetting = () => {
    this.setState(
      {
        modal: !this.state.modal,
      }
    );
  };

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: "white"}}>
          <View style={{display: "flex", flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}}>
            <Title style={{color: "black"}}>Header</Title>
          </View>
          <Right>
            <Button transparent onPress={this.props.screenProps.handleOption}>
              <Icon name='md-menu' style={{color: "black"}}/>
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{display: "flex", flex: 1,flexDirection: "column", justifyContent: "space-between", alignContent: "space-between"}}>
            <View>
              <View style={{alignItems: "center", height: 30, justifyContent: "center"}}>
                <TouchableOpacity
                  style={{flexDirection: "row"}}
                  onPress={this.handleSetting}
                >
                  <Text>Button</Text>
                  <Icon
                    name="ios-arrow-down"
                    style={{fontSize: 20, marginLeft: 5}}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Tabs
                tabContainerStyle={{backgroundColor: "cyan"}}
                tabBarUnderlineStyle={{backgroundColor: "none"}}
                initialPage={this.state.page}
                onChangeTab={({i}) => {this.setState({page: i})}}
              >
                <Tab heading={<TabHeading
                  style={Styles.TabHeading1}
                  activeTabStyle={{backgroundColor: "gray"}}>
                  <Text style={{color: 'black'}}>Popular</Text>
                </TabHeading>}>
                  <NumKeyboard/>
                </Tab>
                <Tab heading={<TabHeading style={Styles.TabHeading2} activeTabStyle={Styles.activeStyle}>
                  <Text style={{color: 'black'}}>Popular</Text>
                </TabHeading>}>
                  <List/>
                </Tab>
                <Tab heading={<TabHeading style={Styles.TabHeading3}>
                  <Text style={{color: 'black'}}>Popular</Text>
                </TabHeading>}>
                  <List/>
                </Tab>
                <Tab heading={<TabHeading style={Styles.TabHeading4}>
                  <Text style={{color: 'black'}}>Popular</Text>
                </TabHeading>}>
                  <List/>
                </Tab>
              </Tabs>
              <Modal visible={this.state.modal}>
                <Setting handleSetting={this.handleSetting}/>
              </Modal>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Tab2;