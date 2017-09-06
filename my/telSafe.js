/**
 * Created by Administrator on 2017/7/4.
 * 账号安全中修改手机号
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions,
    TouchableHighlight
    } from 'react-native';
import config from '../common/config';
import request from '../common/request';
import toast from '../common/toast';
export default class TelSafe extends Component {
    //添加职位信息或修改
    constructor(props){
        super(props)
        this.state={
            tel:'',
        };
    }
    //点击更换按钮
    modifyTel() {
        var url = config.api.base + config.api.myselfInfomation;
        let {params}=this.props.navigation.state;
        request.post(url,{
            userid:params.canshu.userid,//使用者的id
            telphone:this.state.tel,//手机号
        }).then((responseJson) => {
            if(responseJson.sing==0){
                toast.center('温馨提示：修改的手机号不能为空！');
            }
            if(responseJson.sing==1){
                toast.center('修改成功');
                this.props.navigation.navigate('AccountSafe', {id:params.canshu.userid,tel:params.canshu.tel});
            }
            if(responseJson.sing==2){
                toast.center('修改失败');
            }
        }).catch((error)=>{
            toast.bottom('网络连接失败，请检查网络后重试');
        })
    };
    //点击更换按钮

    OpBack() {
        this.props.navigation.goBack('TelSafe');
    }
    render() {
        const {params} = this.props.navigation.state;
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
                        >手机号
                    </Text>
                </View>
                <View style={styles.childContent} >
                    <Image style={{width:60,height:60,marginTop:20,marginBottom:20}} source={require('../imgs/my/changePhone.png')}/>
                    <Text style={{marginBottom:20,color:'#000'}}>你的手机号：{params.canshu.tel}</Text>
                    <Text style={{marginBottom:10,color:'#ccc',fontSize:12}}>如果不再使用当前手机号，请及时更换</Text>

                    <View style={{width:screenW*0.6,marginBottom:15,}}>
                        <TextInput
                            style={{height: 30,borderColor: '#eeee', borderWidth: 1,backgroundColor:'#f9f9f9'}}
                            onChangeText={(tel) => this.setState({tel})}
                            underlineColorAndroid={"transparent"}
                            placeholder='请输入您要修改的手机号码'
                            value={this.state.tel}
                            />
                    </View>
                    <TouchableHighlight
                        onPress={()=>this.modifyTel()}
                        underlayColor="#dadada"
                        >
                        <View style={[styles.changePhone,styles.childContent]}>
                            <Text>更换手机号</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const styles = StyleSheet.create({
    ancestorCon: {
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    container: {
        borderWidth: 1,
        borderColor: '#F0F1F2',
        borderBottomColor: '#F0F0F0',
        height: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        marginBottom: 5,
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
        marginLeft:screenW*0.3,
        marginTop:7,
    },
    infoSave:{
        marginLeft:screenW*0.37,
        marginTop:7,
        color:'red',
    },
    childContent: {//子容器页面级
        justifyContent: 'center',
        alignItems:'center'
    },
    changePhone:{
        width:screenW*0.8,
        backgroundColor:'#e15215',
        borderRadius:4,
        height:30,
    },
});
