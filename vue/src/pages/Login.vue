<template>
<div class="login">
    <Row type="flex" justify="center" align="middle" id="login" v-bind:style="{height:loginBodyHeight+'px'}">
        <Col :xs="1" :sm="6" :md="6" :lg="10"></Col>
        <Col :xs="22" :sm="12" :md="12" :lg="4">
        <div id="loginBox">
            <p id="loginTitle">
                <span>登陆表单</span>
            </p>
            <!--表单-->
            <Form ref="loginForm" :model="loginForm" :rules="ruleCustom">
                <FormItem prop="user">
                    <Input type="text" v-model="loginForm.user" placeholder="请输入用户名"></Input>
                </FormItem>
                <FormItem prop="passwd">
                    <Input type="password" v-model="loginForm.passwd" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem>
                    <Checkbox v-model="loginForm.useW3c" @on-change="changeUseW3c">是否使用W3c账号</Checkbox>
                </FormItem>
                <FormItem style="text-align:center;">
                    <Button @click="handleSubmit('loginForm')">提交</Button>
                    <Button type="text" id="loginLostPwdBtn">忘记密码</Button>
                </FormItem>
            </Form>
            <div id="loginInfo">
                <p id="loginLinkCreateAccount">
                    <font>暂无账号?</font>
                    <a>新建帐号</a>
                </p>
                <p id="loginCompanyLogo">
                    <Icon type="ios-grid-view"></Icon>
                    Gentelella Alela！
                </p>
                <p id="loginCompanyInfo">Copyright (c) 2016-present, iView</p>
            </div>
        </div>
        </Col>
        <Col :xs="1" :sm="6" :md="6" :lg="10"></Col>
    </Row>
</div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.$Message = Message; //Message的注册应该使用下面的方法
//导入iview样式
import {
    Row,
    Col,
    Form,
    FormItem,
    Input,
    Checkbox,
    Button,
    Icon,
    Message
} from 'iview';

export default {
    name: 'Login',
    data() {
        //表单验证方法
        const validateUser = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入正确的用户名'));
            } else {
                callback();
            }
        };
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入正确的密码'));
            } else {
                callback();
            }
        };
        return {
            loginBodyHeight: 400,
            loginForm: {
                user: '',
                passwd: ''
            },
            ruleCustom: {
                user: [{
                    validator: validateUser,
                    trigger: 'blur'
                }],
                passwd: [{
                    validator: validatePass,
                    trigger: 'blur'
                }]
            }
        }
    },
    mounted() {
        //登陆界面高度默认值
        this.loginBodyHeight = document.documentElement.clientHeight;
        /**
         * [onresize 监听浏览器窗口改变时修改组件高度
         * window.onresize只是一个回掉改变，addEventListener才是监听]
         * @return {[type]} [description]
         */
        window.addEventListener('resize', () => {
            let bodyHeight = document.documentElement.clientHeight;
            if (bodyHeight > 400) {
                this.loginBodyHeight = document.documentElement.clientHeight;
            } else {
                this.loginBodyHeight = 400;
            }
        });
    },
    methods: {
        changeUseW3c() {
            this.useW3c = !this.useW3c;
        },
        handleSubmit(name) {
            //利用$axios向后台发送请求
            let _self = this;
            this.$refs[name].validate((valid) => {
                if (valid) {
                    //利用qs解决后台获取不到post数据
                    var obj = this.$qs.stringify({
                        account: this.loginForm.user,
                        password: this.loginForm.passwd
                    });
                    this.$axios.post('/api/acl_user/login', obj).then(function(res) {
                        console.log(res);
                        //存储sessionStorage【将对象转为json字符串存储】
                        sessionStorage.setItem('userInfo', _self.loginForm.user);
                        if (res.data.code == 200) {
                            _self.$router.push({
                                path: '/home'
                            })
                        } else {
                            _self.$Message.error('后台获取数据失败,请验证用户名和密码后重新输入');
                        }
                    });
                } else {
                    this.$Message.error('失败');
                }
            })
        }
    },
    components: {
        Row,
        Col,
        Form,
        FormItem,
        Input,
        Checkbox,
        Button,
        Icon,
        Message
    }
}
</script>
<style scoped="scoped" media="screen">
#login {
    background-color: #F7F7F7;
    height: 400px;
}

#loginBox {
    height: 400px;
    width: 100%;
}

#loginTitle {
    display: block;
    height: 40px;
    font-size: 25px;
    color: #73879C;
    text-align: center;
    margin-bottom: 24px;
}

#loginTitle::after,
#loginTitle::before {
    content: "";
    width: 20%;
    height: 1px;
    background: #7e7e7e;
    position: absolute;
    top: 20px;
}

#loginTitle::before {
    left: 0;
}

#loginTitle::after {
    right: 0;
}

#loginLostPwdBtn {
    margin-left: 30px;
}

#loginInfo {
    text-align: center;
    border-top: 1px solid #D8D8D8;
    padding-top: 10px;
}

#loginLinkCreateAccount {
    color: #73879C;
}

#loginLinkCreateAccount a {
    color: #73879C;
}

#loginLinkCreateAccount a:hover {
    color: #23527c;
}

#loginCompanyLogo {
    font-size: 25px;
    margin: 30px 0;
}
</style>
