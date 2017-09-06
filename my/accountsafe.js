/**
 * Created by Administrator on 2017/7/3.
 */
/**
 * Created by Administrator on 2017/7/3.
 */
/**
 * Created by Administrator on 2017/6/7.
 */
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity
    } from 'react-native';
import config from '../common/config';
import request from '../common/request';
import toast from '../common/toast';
export default class accountsafe extends Component {
    OpBack() {
        this.props.navigation.goBack('AccountSafe')
        //this.props.navigation.navigate('Mine', {id:this.props.navigation.state.params.id});
    }
    constructor(props) {
        super(props);
        this.state={
            //底部选择项 默认不显示
            show: false,
            id:"",
            tel:"",
        };
    }
    componentDidMount(){
        this.getNet();
    }

    getNet(){
        var url = config.api.base + config.api.myselfInfomation;
        var id=this.props.navigation.state.params.id;
        request.post(url,{
            id: id,
        }).then((responseJson) => {
            this.setState({
                id:responseJson.id,
                tel:responseJson.tel,
            })

        }).catch((error)=>{
            toast.bottom('网络连接失败，请检查网络后重试');
        })
    }
    tel(){
        let data={
            userid:this.state.id,
            tel:this.state.tel,
        }
        this.props.navigation.navigate('TelSafe',{canshu:data})
    }
    password(){
        this.props.navigation.navigate('ModifyPassword',{id:this.state.id}) ;
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
                        >账号与安全
                    </Text>
                </View>
                <ScrollView style={styles.childContent}>
                    <View style={[styles.TotalSetting]}>
                        <TouchableOpacity
                            onPress={()=>this.tel()}
                            >
                            <View style={[styles.TotalSetting1]}>
                                <Text style={styles.wz2} >手机账号</Text>
                                <Text style={styles.wz3} >{this.state.tel}</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={()=>this.password()}
                        >
                        <View style={[styles.TotalSetting]}>
                            <View style={[styles.TotalSetting1]}>
                                <Text style={styles.wz2} >修改登录密码</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

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
        marginLeft:100,
        marginTop:7,
    },
    TotalSetting: {
        height:30,
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
    TotalSetting2: {
        height:60,
        marginBottom:10
    },
    wz3:{
        position:'absolute',
        top:5,
        right:30,
        fontSize:12,
        color:'#ccc',
    },
});