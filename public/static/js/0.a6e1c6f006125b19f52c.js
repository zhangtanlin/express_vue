webpackJsonp([0],{FTNl:function(t,e){},P7ry:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("7+uW"),s=o("BTaQ");n.default.prototype.$Message=s.Message;var r={name:"Login",data:function(){return{loginBodyHeight:400,loginForm:{user:"",passwd:""},ruleCustom:{user:[{validator:function(t,e,o){""===e?o(new Error("请输入正确的用户名")):o()},trigger:"blur"}],passwd:[{validator:function(t,e,o){""===e?o(new Error("请输入正确的密码")):o()},trigger:"blur"}]}}},mounted:function(){var t=this;this.loginBodyHeight=document.documentElement.clientHeight,window.addEventListener("resize",function(){var e=document.documentElement.clientHeight;t.loginBodyHeight=e>400?document.documentElement.clientHeight:400})},methods:{changeUseW3c:function(){this.useW3c=!this.useW3c},handleSubmit:function(t){var e=this,o=this;this.$refs[t].validate(function(t){if(t){var n=e.$qs.stringify({account:e.loginForm.user,password:e.loginForm.passwd});e.$axios.post("/api/acl_user/login",n).then(function(t){console.log(t),sessionStorage.setItem("userInfo",o.loginForm.user),200==t.data.code?o.$router.push({path:"/home"}):o.$Message.error("后台获取数据失败,请验证用户名和密码后重新输入")})}else e.$Message.error("失败")})}},components:{Row:s.Row,Col:s.Col,Form:s.Form,FormItem:s.FormItem,Input:s.Input,Checkbox:s.Checkbox,Button:s.Button,Icon:s.Icon,Message:s.Message}},i={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login"},[o("Row",{style:{height:t.loginBodyHeight+"px"},attrs:{type:"flex",justify:"center",align:"middle",id:"login"}},[o("Col",{attrs:{xs:1,sm:6,md:6,lg:10}}),t._v(" "),o("Col",{attrs:{xs:22,sm:12,md:12,lg:4}},[o("div",{attrs:{id:"loginBox"}},[o("p",{attrs:{id:"loginTitle"}},[o("span",[t._v("登陆表单")])]),t._v(" "),o("Form",{ref:"loginForm",attrs:{model:t.loginForm,rules:t.ruleCustom}},[o("FormItem",{attrs:{prop:"user"}},[o("Input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:t.loginForm.user,callback:function(e){t.$set(t.loginForm,"user",e)},expression:"loginForm.user"}})],1),t._v(" "),o("FormItem",{attrs:{prop:"passwd"}},[o("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.loginForm.passwd,callback:function(e){t.$set(t.loginForm,"passwd",e)},expression:"loginForm.passwd"}})],1),t._v(" "),o("FormItem",[o("Checkbox",{on:{"on-change":t.changeUseW3c},model:{value:t.loginForm.useW3c,callback:function(e){t.$set(t.loginForm,"useW3c",e)},expression:"loginForm.useW3c"}},[t._v("是否使用W3c账号")])],1),t._v(" "),o("FormItem",{staticStyle:{"text-align":"center"}},[o("Button",{on:{click:function(e){t.handleSubmit("loginForm")}}},[t._v("提交")]),t._v(" "),o("Button",{attrs:{type:"text",id:"loginLostPwdBtn"}},[t._v("忘记密码")])],1)],1),t._v(" "),o("div",{attrs:{id:"loginInfo"}},[o("p",{attrs:{id:"loginLinkCreateAccount"}},[o("font",[t._v("暂无账号?")]),t._v(" "),o("a",[t._v("新建帐号")])],1),t._v(" "),o("p",{attrs:{id:"loginCompanyLogo"}},[o("Icon",{attrs:{type:"ios-grid-view"}}),t._v("\r\n                    Gentelella Alela！\r\n                ")],1),t._v(" "),o("p",{attrs:{id:"loginCompanyInfo"}},[t._v("Copyright (c) 2016-present, iView")])])],1)]),t._v(" "),o("Col",{attrs:{xs:1,sm:6,md:6,lg:10}})],1)],1)},staticRenderFns:[]};var l=o("VU/8")(r,i,!1,function(t){o("FTNl")},"data-v-3af27c66",null);e.default=l.exports}});
//# sourceMappingURL=0.a6e1c6f006125b19f52c.js.map