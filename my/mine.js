/**
 * Created by Administrator on 2017/7/3.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Dimensions
    } from 'react-native';

export default class Mine extends Component {
    OpBack() {
        this.props.navigation.goBack('Mine');
        //this.props.navigation.navigate('My',{id:this.props.navigation.state.params.id});
    }
    constructor(props) {
        super(props);
    }
    shouye(){
        this.props.navigation.navigate('Set')
    }
    account(){
        this.props.navigation.navigate('AccountSafe',{id:this.props.navigation.state.params.id})
    }
    render() {
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>this.OpBack()}
                        >
                        <View style={styles.backAll} >
                            <Image  style={styles.back} source={require('../imgs/lljt.png')}/>
                            <Text style={styles.backwz}>
                                返回
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.info}
                        >设置
                    </Text>
                </View>
                <ScrollView style={styles.childContent}>
                    <TouchableOpacity
                        onPress={()=>this.shouye()}
                        >
                        <View style={styles.first1}>
                            <Text style={styles.first1Text}>首页设置</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>this.account()}
                        >
                        <View style={styles.first2}>
                            <Text style={styles.first2Text}>账号与安全</Text>
                            <Text style={styles.wz3} >已保护</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </TouchableOpacity>
                    <View style={[styles.TotalSetting]}>
                        <View style={[styles.TotalSetting1]}>
                            <Text style={styles.wz2} >新消息通知</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={[styles.TotalSetting1]}>
                            <Text style={styles.wz2} >手动同步</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={[styles.TotalSetting1]}>
                            <Text style={styles.wz2} >个性化设置</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={[styles.TotalSetting1]}>
                            <Text style={styles.wz2} >系统状态</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                        <View style={[styles.TotalSetting1]}>
                            <Text style={styles.wz2} >清理储存空间</Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </View>
                    <View style={styles.first3}>
                        <Text style={styles.first3Text}>关于我们</Text>
                        <Text style={styles.wz3} >7.1.1</Text>
                        <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                    </View>
                    <View style={styles.first4}>
                        <Text style={styles.first4Text}>退出登录</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ancestorCon:{
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
    container: {
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderBottomColor:'#F0F0F0',
        height: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom:5,
    },
    backAll:{
        width:60,
        height:30,
        flexDirection: 'row',
        alignItems:'flex-start',
    },
    back: {
        width:20,
        height:20,
        marginTop:7,
    },
    backwz: {
        marginTop:7,
        color: 'red',
    },
    info:{
        marginLeft:screenW *0.32,
        marginTop:7,
    },
    first1:{
        height:30,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderTopColor:'#F0F0F0',
        borderBottomColor:'#F0F0F0',
        position:'relative',
        marginBottom:5
    },
    first1Text:{
        position:'absolute',
        top:5,
        left:5,
        fontSize:12
    },
    rjt2:{
        width: 16,
        height: 16,
        position:'absolute',
        top:15,
        left:360
    },
    TotalSetting: {
        height:150,
        marginBottom:10
    },
    TotalSetting1:{
        height:30,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor:'#F0F1F2',
        backgroundColor:'#fff',
        justifyContent: 'center',
        position:'relative'
    },
    wz2: {
        position:'absolute',
        top:4,
        left:5,
        fontSize:12
    },
    rjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:4,
        left:360
    },
    SettingAddress:{
        height:40,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor:'#F0F1F2',
        backgroundColor:'#fff',
        justifyContent: 'center',
        position:'relative'
    },
    wz1: {
        position:'absolute',
        top:10,
        left:5,
        fontSize:12
    },
    rjt1:{
        width: 16,
        height: 16,
        position:'absolute',
        top:10,
        left:360
    },
    wz3:{
        position:'absolute',
        top:5,
        left:324,
        fontSize:12,
        color:'#ccc',
    },
    first2:{
        height:30,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderTopColor:'#F0F0F0',
        borderBottomColor:'#F0F0F0',
        position:'relative',
        marginBottom:5
    },
    first3:{
        height:30,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderTopColor:'#F0F0F0',
        borderBottomColor:'#F0F0F0',
        position:'relative',
        marginBottom:5
    },
    first4:{
        height:40,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderTopColor:'#F0F0F0',
        borderBottomColor:'#F0F0F0',
        marginBottom:5,
        justifyContent: 'center',
    },
    first2Text:{
        position:'absolute',
        top:5,
        left:5,
        fontSize:12
    },
    first3Text:{
        position:'absolute',
        top:5,
        left:5,
        fontSize:12
    },
    first4Text:{
        fontSize:12,
        color:'red',
        marginLeft:screenW *0.4,
    },
});