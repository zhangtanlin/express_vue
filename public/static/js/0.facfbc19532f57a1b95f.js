webpackJsonp([0],{"2CYG":function(e,t){},P7ry:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),s=o("BTaQ");n.default.prototype.$Message=s.Message;var r={name:"Login",data:function(){return{loginBodyHeight:400,loginForm:{user:"",passwd:""},ruleCustom:{user:[{validator:function(e,t,o){""===t?o(new Error("请输入正确的用户名")):o()},trigger:"blur"}],passwd:[{validator:function(e,t,o){""===t?o(new Error("请输入正确的密码")):o()},trigger:"blur"}]}}},mounted:function(){var e=this;this.loginBodyHeight=document.documentElement.clientHeight,window.addEventListener("resize",function(){var t=document.documentElement.clientHeight;e.loginBodyHeight=t>400?document.documentElement.clientHeight:400})},methods:{changeUseW3c:function(){this.useW3c=!this.useW3c},handleSubmit:function(e){var t=this,o=this;this.$refs[e].validate(function(e){if(e){var n=t.$qs.stringify({account:t.loginForm.user,password:t.loginForm.passwd});t.$axios.post("/api/acl_user/login",n).then(function(e){console.log(e),sessionStorage.setItem("userInfo",o.loginForm.user),200==e.data.code?o.$router.push({path:"/home"}):o.$Message.error("后台获取数据失败,请验证用户名和密码后重新输入")})}else t.$Message.error("失败")})}},components:{Row:s.Row,Col:s.Col,Form:s.Form,FormItem:s.FormItem,Input:s.Input,Checkbox:s.Checkbox,Button:s.Button,Icon:s.Icon,Message:s.Message}},i={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("Row",{style:{height:e.loginBodyHeight+"px"},attrs:{type:"flex",justify:"center",align:"middle",id:"login"}},[o("Col",{attrs:{xs:1,sm:6,md:6,lg:10}}),e._v(" "),o("Col",{attrs:{xs:22,sm:12,md:12,lg:4}},[o("div",{attrs:{id:"loginBox"}},[o("p",{attrs:{id:"loginTitle"}},[o("span",[e._v("登陆表单")])]),e._v(" "),o("Form",{ref:"loginForm",attrs:{model:e.loginForm,rules:e.ruleCustom}},[o("FormItem",{attrs:{prop:"user"}},[o("Input",{attrs:{type:"text",placeholder:"请输入用户名"},model:{value:e.loginForm.user,callback:function(t){e.$set(e.loginForm,"user",t)},expression:"loginForm.user"}})],1),e._v(" "),o("FormItem",{attrs:{prop:"passwd"}},[o("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginForm.passwd,callback:function(t){e.$set(e.loginForm,"passwd",t)},expression:"loginForm.passwd"}})],1),e._v(" "),o("FormItem",[o("Checkbox",{on:{"on-change":e.changeUseW3c},model:{value:e.loginForm.useW3c,callback:function(t){e.$set(e.loginForm,"useW3c",t)},expression:"loginForm.useW3c"}},[e._v("是否使用W3c账号")])],1),e._v(" "),o("FormItem",{staticStyle:{"text-align":"center"}},[o("Button",{on:{click:function(t){e.handleSubmit("loginForm")}}},[e._v("提交")]),e._v(" "),o("Button",{attrs:{type:"text",id:"loginLostPwdBtn"}},[e._v("忘记密码")])],1)],1),e._v(" "),o("div",{attrs:{id:"loginInfo"}},[o("p",{attrs:{id:"loginLinkCreateAccount"}},[o("font",[e._v("暂无账号?")]),e._v(" "),o("a",[e._v("新建帐号")])],1),e._v(" "),o("p",{attrs:{id:"loginCompanyLogo"}},[o("Icon",{attrs:{type:"ios-grid-view"}}),e._v("\r\n                    Gentelella Alela！\r\n                ")],1),e._v(" "),o("p",{attrs:{id:"loginCompanyInfo"}},[e._v("Copyright (c) 2016-present, iView")])])],1)]),e._v(" "),o("Col",{attrs:{xs:1,sm:6,md:6,lg:10}})],1)],1)},staticRenderFns:[]};var l=o("VU/8")(r,i,!1,function(e){o("2CYG")},"data-v-2c9d4eec",null);t.default=l.exports}});
//# sourceMappingURL=0.facfbc19532f57a1b95f.js.map