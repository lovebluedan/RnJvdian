/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator'

import {
    Image,
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';
import Images from "./app/resource/Images";
import HeaderItem from "./app/components/HeaderItem";
import Myself from "./app/actions/Myself";
import Message from "./app/actions/Message";
import Home from "./app/actions/Home";



export default class App extends Component<{}> {


    constructor(props) {
        super(props);
        this.state = {
            selectTab: 'home'
        };
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="据点"
                    selectedTitleStyle={styles.selectedTextStyle}
                    renderIcon={() => <Image source={Images.Home.ic_home_off} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={Images.Home.ic_home_on} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'home'})}
                >
                    <Home/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="动态"
                    selected={this.state.selectedTab === 'news'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    renderIcon={() => <Image source={Images.Home.ic_news_off} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={Images.Home.ic_news_on} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'news'})}
                >
                    <News/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    titleStyle={styles.untitledContainer}
                    selected={this.state.selectedTab === 'add'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    renderIcon={() => <Image source={Images.Home.ic_add_off} style={styles.addStyle}/>}
                    renderSelectedIcon={() => <Image source={Images.Home.ic_add_on} style={styles.addStyle}/>}
                    onPress={() => this.setState({selectedTab: 'add'})}
                >
                    <Add/>
                </TabNavigator.Item>

                <TabNavigator.Item
                    title="消息"
                    selected={this.state.selectedTab === 'message'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    renderIcon={() => <Image source={Images.Home.ic_message_off} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={Images.Home.ic_message_on} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'message'})}
                >
                    <Message/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我"
                    selected={this.state.selectedTab === 'myself'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    renderIcon={() => <Image source={Images.Home.ic_myself_off} style={styles.iconStyle}/>}
                    renderSelectedIcon={() => <Image source={Images.Home.ic_myself_on} style={styles.iconStyle}/>}
                    onPress={() => this.setState({selectedTab: 'myself'})}
                >
                    <Myself/>
                </TabNavigator.Item>
            </TabNavigator>

        );
    }
}




class News extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>

                </Text>

            </View>
        )
    }
}

class Add extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    添加
                </Text>
            </View>
        )
    }
}


// class Myself extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <HeaderItem/>
//                 <View style={styles.smallView}/>
//                 <MySelfItem/>
//                 <MySelfItem/>
//                 <View style={styles.smallView}/>
//                 <MySelfItem/>
//                 <MySelfItem/>
//                 <MySelfItem/>
//                 <MySelfItem/>
//             </View>
//         )
//     }
// }

let {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({

    smallView : {
        width,
        height:12,
        backgroundColor:'#F5F5F5',
        paddingLeft:32
    },

    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,

    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    selectedTextStyle: {
        color: '#F8C13E'
    },
    iconStyle: {
        width: 26,
        height: 26,
    },
    addStyle: {
        width: 35,
        height: 35,
    },

    untitleStyle: {
        width: 0,
        height: 0
    }
});
