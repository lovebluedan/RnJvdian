/**
 * desc：显示头部的头像跟名称等
 * author：林丹荣
 * date：2018/1/4
 */
import React, {PropTypes} from 'react';
import {
    Image,
    StyleSheet, Text,
    View,
} from 'react-native';
import Images from "../resource/Images";

export default class HeaderItem extends React.Component {

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
    //
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
            <View style={styles.bodyStyle}>
                <Image style={styles.imageStyle} source={Images.test.text}>
                </Image>
                <View style={styles.centreNameViewStyle}>
                    <View style={styles.nameViewStyle}>
                        <Text style={styles.textNameStyle}>
                            我的名字是haha
                        </Text>
                        <View style={styles.sexStyle}>
                            <Image style={{height: 12, width: 12}} source={Images.Home.ic_myself_on}></Image>
                            <Text style={{color: 'white', fontSize: 12}}>26</Text>
                        </View>
                    </View>
                    <Text style={styles.descNameStyle}>
                        从前从前从前,有个人叫你哈哈
                    </Text>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyStyle: {
        flex: 0.3,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        paddingTop: 12,
        paddingLeft: 12,
        paddingBottom: 12,
    },
    imageStyle: {
        height: 64,
        width: 64,
        borderRadius: 8, //设置圆角
    },
    nameViewStyle: {
        flexDirection: 'row',
    },
    centreNameViewStyle: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
    },
    textNameStyle: {
        fontSize:16,
        color: '#262626',
    },
    descNameStyle: {
        paddingTop: 6,
        fontSize: 12,
        color: '#999999',
    },
    sexStyle: {
        marginTop:3,
        marginLeft: 12,
        height: 14,
        width: 27,
        backgroundColor: '#ECA8B8',
        flexDirection: 'row'
    }


});