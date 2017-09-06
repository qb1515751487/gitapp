/**
 * Created by Administrator on 2017/7/20.
 * 账号安全的修改密码
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
export default class ModifyPassword extends Component {
    //添加职位信息或修改
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            oldpwd:'',
            confirmpwd:'',
            text1:false,
        };
    }

    //点击更换按钮
    modifypwd() {
        if(this.state.text1==false){
            toast.center('温馨提示：原密码不能为空！');
            return false;
        }
        if(this.state.password==""){
            toast.center('温馨提示：新密码不能为空！');
            return false;
        }
        if(this.state.confirmpwd==""){
            toast.center('温馨提示：确认密码不能为空！');
            return false;
        }
        var password=this.state.password;
        var confirmcheck=this.state.confirmpwd;
        if(password !=  confirmcheck){
            toast.center('温馨提示：两次密码输入不一致！');
            return false;
        }
        var url = config.api.base + config.api.myselfInfomation;
        request.post(url, {
            userid:this.props.navigation.state.params.id,//使用者的id
            password: this.state.password,//密码
        }).then((responseJson) => {
            if (responseJson.status == 0) {
                toast.center('修改失败！');
            }
            if (responseJson.status == 1) {
                toast.center('修改成功');
                this.props.navigation.goBack('ModifyPassword');
            }
            if (responseJson.status == 2) {
                toast.center('修改后的密码不可与原密码一致！');
            }
        }).catch((error)=> {
            toast.bottom('网络连接失败，请检查网络后重试');
        })
    }

    OpBack() {
        this.props.navigation.goBack('ModifyPassword')
    }
    //验证原密码是否正确
    confirm(){
        var url = config.api.base + config.api.myselfInfomation;
        request.post(url, {
            userid: this.props.navigation.state.params.id,//使用者的id
            oldpwd: this.state.oldpwd,//密码
        }).then((responseJson) => {
            if (responseJson.status == 0) {
                toast.center('温馨提示：输入的原密码错误！');
                this.setState({
                    text1:false,
                    oldpwd:'',
                })
            }
            if (responseJson.status == 1) {
                this.setState({
                    text1:true
                })
            }

        }).catch((error)=> {
            toast.bottom('网络连接失败，请检查网络后重试');
        })
    }

    render()
    {
        const {params} = this.props.navigation.state;
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={()=>this.OpBack()}
                        >
                        <View style={styles.backAll}>
                            <Image style={styles.back} source={require('../imgs/lljt.png')}/>
                            <Text style={styles.backwz}>
                                返回
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.info}
                        >修改密码
                    </Text>
                    <TouchableHighlight
                        onPress={()=>this.modifypwd()}
                        underlayColor="#d5d5d5"
                        >
                        <View>
                            <Text
                                onPress={this.modifypwd.bind(this)} style={styles.infoSave}>
                                保存
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={{flexDirection: 'column',width:screenW,alignItems:'center',marginTop:10,backgroundColor:'#fff'}}>
                    <View style={{flexDirection: 'row',alignItems:'center',marginTop:10,marginLeft:screenW*0.2}}>
                        <Text style={{marginRight:5,paddingTop:5}}>原密码：</Text>
                        <TextInput
                            style={{color:'#cbb',width:screenW*0.4,padding:0,marginRight:screenW*0.1}}
                            onChangeText={(oldpwd) => this.setState({oldpwd})}
                            placeholder='请输入原密码'
                            secureTextEntry={true}
                            underlineColorAndroid={"transparent"}
                            placeholderTextColor ={"#CFCFCF"}
                            onBlur={()=>this.confirm()}
                            value={this.state.oldpwd}
                            />
                    </View>
                    <View style={{flexDirection: 'row',alignItems:'center',marginTop:6,marginLeft:screenW*0.2}}>
                        <Text style={{marginRight:5}}>新密码：</Text>
                        <TextInput
                            style={{color:'#cbb',width:screenW*0.4,padding:0,marginRight:screenW*0.1}}
                            onChangeText={(password) => this.setState({password})}
                            placeholder='请输入新密码'
                            secureTextEntry={true}
                            underlineColorAndroid={"transparent"}
                            placeholderTextColor ={"#CFCFCF"}
                            value={this.state.password}
                            />
                    </View>
                    <View style={{flexDirection: 'row',alignItems:'center',marginTop:6,marginLeft:screenW*0.2,marginBottom:20}}>
                        <Text style={{marginRight:5}}>确认密码：</Text>
                        <TextInput
                            style={{color:'#cbb',width:screenW*0.4,padding:0,marginRight:screenW*0.1}}
                            onChangeText={(confirmpwd) => this.setState({confirmpwd})}
                            placeholder='请输入确认密码'
                            secureTextEntry={true}
                            underlineColorAndroid={"transparent"}
                            placeholderTextColor ={"#CFCFCF"}
                            value={this.state.confirmpwd}
                            />
                    </View>
                </View>
            </View>
        )
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
        marginLeft:screenW*0.28,
        marginTop:7,
    },
    infoSave:{
        marginLeft:screenW*0.3,
        marginTop:7,
        color:'red',
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
});