/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableNativeFeedback,
    TouchableHighlight,
    DeviceEventEmitter,
} from 'react-native';

import config from '../common/config';
import request from '../common/request';
import toast from '../common/toast';

export default class My extends Component {
    //查询个人信息
    constructor(props){
        super(props)
        this.state={
            //底部选择项 默认不显示
            show: false,
            visibleModal:false,
            id:"",
            avatar:"",
            name: "",
        };
    }
    componentDidMount(){
        this.subscription = DeviceEventEmitter.addListener('avatar',(value)=>{
            this.setState({
                avatar:value
            })
        });
        this.getNet();
    }

    componentWillUnmount(){
        this.subscription.remove();
    }
    getNet(){
        var url = config.api.base + config.api.myselfInfomation;
        var id=5;
        request.post(url,{
            id: id,
        }).then((responseJson) => {
            this.setState({
                id:responseJson.id,
                avatar:responseJson.avatar,
                name: responseJson.name,
                tel:responseJson.tel,
                email:responseJson.email,
                department:responseJson.department,
                position:responseJson.position,
                address:responseJson.address
            })
        }).catch((error)=>{
            toast.bottom('网络连接失败，请检查网络后重试');
        })
    }
    reportInfo(){
        this.props.navigation.navigate('Report')
    };
    companyQuery(){
        this.props.navigation.navigate('WebViewExample')
    };
    companySetting(){
        this.props.navigation.navigate('CompanySetting',{companyid:3});
        //alert("公司设置！");
    };
    selfSetting(){
        this.props.navigation.navigate('Mine',{id:this.state.id});
    };
    selfGrade(){
        alert("我的积分！");
    };
    selfSuccess(){
        alert("我的成就！");
    };
    explorde(){
        alert("推荐给朋友！");
    };

    render() {
        return (
            <View style={styles.ancestorCon}>
                <View style={styles.container}>
                    <TouchableHighlight
                        onPress={()=>this.reportInfo()}
                        underlayColor="#A0A0A0"
                        >
                        <Image style={styles.report} source={require('../imgs/baobiao.png')}/>
                    </TouchableHighlight>
                    <Text style={styles.myselfTop}>我的</Text>
                </View>

                <ScrollView style={styles.childContent}>
                    {/*头部滚动模块*/}
                    <TouchableHighlight
                        onPress={() => this.props.navigation.navigate('Info', {id:this.state.id})}>
                        <View style={[styles.topMoudel]}>
                            {(this.state.avatar == '' || this.state.avatar ==null)?
                                (<Image style={styles.myself} source={require('../imgs/avatar.png')}/>)
                                :(<Image style={styles.myself} source={{uri:this.state.avatar}}/>)
                            }
                            <Text style={styles.info}>{this.state.name}</Text>
                            <Image style={styles.mrjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </TouchableHighlight>
                    {/*顶部滚动模块*/}
                    <View style={[styles.topDiv]}>
                        {/*块级导航*/}
                        <View style={[styles.DIV]}>
                            <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween]}>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/ld32.png')}/>
                                <Text>理单</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/ht32.png')}/>
                                <Text>合同</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/dd32.png')}/>
                                <Text>订单</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/mb32.png')}/>
                                <Text>目标</Text>
                            </View>
                        </View>
                            <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween]}>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/rz32.png')}/>
                                <Text>日志</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/gz32.png')}/>
                                <Text>审批</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/gg32.png')}/>
                                <Text>公告</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/xm32.png')}/>
                                <Text>项目</Text>
                            </View>
                        </View>
                            <View style={[styles.DIVRowCon,styles.row,styles.rowSpaceBetween,styles.bottomSpace]}>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/xlbf32.png')}/>
                                <Text>线路拜访</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/kq32.png')}/>
                                <Text>考勤</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/cp32.png')}/>
                                <Text>产品</Text>
                            </View>
                            <View style={[styles.DIVRowConDiv]}>
                                <Image style={styles.DIVImg} source={require('../imgs/jgb32.png')}/>
                                <Text>价格表</Text>
                            </View>
                        </View>
                        </View>
                    </View>
                    <TouchableNativeFeedback
                        onPress={()=>this.companyQuery()}
                        >
                        <View style={[styles.CommerceQuery]}>
                            <Image style={styles.cx} source={require('../imgs/qyquery.png')}/>
                            <Text style={styles.wz} >企业工商查询   </Text>
                            <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={[styles.TotalSetting]}>
                        <TouchableHighlight
                        onPress={()=>this.companySetting()}
                        >
                            <View style={[styles.TotalSetting1]}>
                                <Image style={styles.sz} source={require('../imgs/qysz.png')}/>
                                <Text style={styles.wz} >企业设置</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.selfSetting()}
                            >
                            <View style={[styles.TotalSetting1]}>
                                <Image style={styles.sz} source={require('../imgs/grsz.png')}/>
                                <Text style={styles.wz} >个人设置</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.selfGrade()}
                            >
                            <View style={[styles.TotalSetting1]}>
                                <Image style={styles.sz} source={require('../imgs/wdjf.png')}/>
                                <Text style={styles.wz} >我的积分</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.selfSuccess()}
                            >
                            <View style={[styles.TotalSetting1]}>
                                <Image style={styles.sz} source={require('../imgs/wdcj.png')}/>
                                <Text style={styles.wz} >我的成就</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={()=>this.explorde()}
                            >
                            <View style={[styles.TotalSetting1]}>
                                <Image style={styles.sz} source={require('../imgs/pytj.png')}/>
                                <Text style={styles.wz} >推荐[手机OA]给朋友</Text>
                                <Image style={styles.rjt} source={require('../imgs/rjt.png')}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ancestorCon: {//祖先级容器
        flex: 1,
        backgroundColor: '#F0F1F2',
    },
    container: {
        //height: 40,
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //alignItems: 'flex-start',
        //backgroundColor: '#fff',
        borderWidth: 1,
        borderColor:'#F0F1F2',
        borderBottomColor:'#F0F0F0',
        //justifyContent: 'center',
        height: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        padding: 5
    },
    report:{
        paddingTop:3,
        width:20,
        height:20
    },
    myselfTop: {
        color:'black',
        fontSize:12,
        paddingTop:4,
        marginRight:180,
    },
    childContent: {//子容器页面级
        flex: 1
        //justifyContent: 'space-between',
    },
    topMoudel:{
        height:80,
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#fff',
        position:'relative',
        borderBottomColor:'#F0F0F0'
    },
    myself:{
        position:'absolute',
        top:18,
        left:20,
        width:40,
        height:40
    },
    info:{
        fontSize:12,
        position:'absolute',
        top:20,
        left:65
    },
    mrjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:30,
        left:360
    },
    topDiv: {
        height: 230,
        backgroundColor:'#fff',
        margin: 10,
        marginLeft:0,
        marginRight:0,
        marginBottom:0,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    row:{
        flexDirection: 'row'
    },
    rowConCenter: {
        justifyContent: 'center'//居中
    },
    rowSpaceBetween: {
        justifyContent: 'space-between',//一行平均分布
        padding: 10
    },
    DIV: {
        height: 230,
        paddingLeft:10,
        paddingRight:15
    },
    DIVRowCon: {
        height: 70,
        borderBottomColor:'#F0F0F0',
        borderBottomWidth:1,
    },
    DIVImg: {
        marginBottom:5
    },
    DIVRowConDiv:{
        height:70,
        width:72,
        alignItems: 'center'
    },
    bottomSpace:{
        borderBottomColor:'#fff',
        borderBottomWidth:0,
    },
    CommerceQuery: {
        flex: 1,
        height:25,
        margin: 15,
        marginTop: 10,
        marginBottom:10,
        marginLeft:0,
        marginRight:0,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff',
        backgroundColor:'#fff',
        position:'relative',
    },
    TotalSetting: {
        flex: 1
    },
    TotalSetting1:{
        height:25,
        borderWidth: 1,
        borderColor: '#fff',
        borderBottomColor:'#F0F1F2',
        backgroundColor:'#fff',
        justifyContent: 'center',
        position:'relative'
    },
    cx: {
        width: 20,
        height: 20,
        justifyContent: 'space-between',
        position:'absolute',
        top:1,
        left:3
    },
    sz: {//图标
        width: 16,
        height: 16,
        justifyContent: 'space-between',
        position:'absolute',
        top:2,
        left:3
    },
    wz: {
        position:'absolute',
        top:1,
        left:30
    },
    rjt:{
        width: 16,
        height: 16,
        position:'absolute',
        top:3,
        left:360
    }
});
