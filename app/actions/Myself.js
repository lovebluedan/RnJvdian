/**
 * desc：我的页面
 * author：林丹荣
 * date： 2018/1/5
 */
import React, {PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Dimensions, ScrollView, Image, Text,
} from 'react-native';
import HeaderItem from "../components/HeaderItem";
import MySelfItem from "../components/MySelfItem";

import Images from "../resource/Images";
import AllHeader from "../components/AllHeader";

let {width, height} = Dimensions.get('window');
export default class Myself extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    static propTypes = {}

    /**
     * 初始化了状态之后，在第一次绘制 render() 之前
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentWillMount() {

    }

    /**
     * 这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，
     * 或者发起网络请求。这个函数也是只被调用一次
     * （能够使用setState()来改变属性 有且只有一次）
     */
    componentDidMount() {

    }

    /**
     * 输入参数 nextProps 是即将被设置的属性，旧的属性还是可以通过 this.props 来获取。在这个回调函数里面，你可以根据属性的变化，
     * 通过调用 this.setState() 来更新你的组件状态，这里调用更新状态是安全的，并不会触发额外的 render()
     * （能够使用setState()来改变属性 多次调用）
     */
    componentWillReceiveProps() {

    }

    // /**
    //  * 当组件接收到新的属性和状态改变的话，都会触发调用 shouldComponentUpdate(...)
    //  * （不能够使用setState()来改变属性 多次调用）
    //  */
    // shouldComponentUpdate() {
    // return true;
    // }

    /**
     * 如果组件状态或者属性改变，并且上面的 shouldComponentUpdate(...) 返回为 true，就会开始准更新组件
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentWillUpdate() {

    }

    /**
     * 调用了 render() 更新完成界面之后，会调用 componentDidUpdate() 来得到通知
     * （不能够使用setState()来改变属性 多次调用）
     */
    componentDidUpdate() {

    }

    /**
     * 组件要被从界面上移除的时候，就会调用 componentWillUnmount()
     * （不能够使用setState()来改变属性 有且只有一次调用）
     */
    componentWillUnmount() {

    }

    render() {
        return (
            <View>
                <AllHeader text='我的'/>
                <ScrollView>

                    <View style={styles.container}>
                        <View style={styles.smallView}/>

                        <HeaderItem/>

                        <View style={styles.smallView}/>

                        <View style={{
                            backgroundColor: 'white',
                            height: 80,
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',

                        }}>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 0.5
                            }}>
                                <Image style={{height: 24, width: 24, marginRight: 12}}
                                       source={Images.My.ic_rebate_tag_normal}></Image>
                                <View>
                                    <Text style={{color: '#262626'}}>推荐收益</Text>
                                    <Text>￥288.00</Text>
                                </View>
                            </View>
                            <View style={{height: 24, width: 1, backgroundColor: "#D9D9D9"}}/>

                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 0.5
                            }}>
                                <Image style={{height: 24, width: 24, marginRight: 12}}
                                       source={Images.My.ic_spend_tag_normal}></Image>
                                <View>
                                    <Text style={{color: '#262626'}}>我的消费</Text>
                                    <Text>￥288.00</Text>
                                </View>
                            </View>

                        </View>
                        <View style={styles.smallView}/>
                        <View style={{backgroundColor: 'white'}}>
                            <MySelfItem title="我的推荐" img={Images.My.ic_recommend_tag_normal}/>
                            <View style={{marginLeft: 50, width: width, height: 1, backgroundColor: "#D9D9D9"}}/>
                            <MySelfItem title="我的邀约" img={Images.My.ic_party_tag_normal}/>
                            <View style={{marginLeft: 50, width: width, height: 1, backgroundColor: "#D9D9D9"}}/>
                            <MySelfItem title="我的礼物" img={Images.My.ic_set_gift}/>
                            <View style={styles.smallView}/>
                            <MySelfItem title="添加好友" img={Images.My.ic_search_tag_normal}/>
                            <View style={{marginLeft: 50, width: width, height: 1, backgroundColor: "#D9D9D9"}}/>
                            <MySelfItem title="我的关注" img={Images.My.ic_follow_tag_normal}/>
                            <View style={{
                                marginLeft: 50, width: width, height: 1, backgroundColor: "#D9D9D9"
                            }}/>
                            <MySelfItem title="我的粉丝" img={Images.My.ic_followf_tag_normal}/>
                            <View style={{marginLeft: 50, width: width, height: 1, backgroundColor: "#D9D9D9"}}/>
                            <MySelfItem title="我的钱包" img={Images.My.ic_wallet_tag_normal}/>

                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    smallView: {
        width,
        height: 14,
        backgroundColor: '#F5F5F5',
        paddingLeft: 32
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#F5F5F5',
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