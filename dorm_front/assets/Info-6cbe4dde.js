import{s as f}from"./index-bd4e735d.js";import{f as M,e as h,a as c,o as t,c as a,b as V,d,w as i,i as g,j as S,h as y,t as r,F as b,g as j}from"./index-2feffed8.js";import"./http-29679fce.js";const F={class:"info"},L=V("h1",null,"个人信息",-1),T={class:"btn-container"},U={key:0},D={key:1},O={key:1},G={__name:"Info",setup(P){M(p);const e=h({}),B={no:"学号",idCard:"身份证号",studentName:"姓名",college:"学院",className:"班级",grade:"年级",sex:"性别",email:"邮箱",phone:"电话",building:"宿舍楼",dorm:"宿舍",money:"电费"};let _,m;async function p(){const s=await f.getInfo();e.value=s.data,_=e.value.email,m=e.value.phone}const n=h(!1);function C(){return n.value?"success":"primary"}function k(){return n.value?"保存":"编辑"}async function x(){const s=n.value;if(n.value=!s,s){const v=await f.modifyInfoCommon({email:e.value.email,phone:e.value.phone}),{code:l,msg:u}=v;ElMessage({message:u,type:l}),p()}}function N(){e.value.email=_,e.value.phone=m,n.value=!1}return(s,v)=>{const l=c("el-button"),u=c("el-input"),I=c("el-descriptions-item"),w=c("el-descriptions");return t(),a("div",F,[L,V("div",T,[d(l,{type:C(),onClick:x},{default:i(()=>[y(r(k()),1)]),_:1},8,["type"]),n.value?(t(),g(l,{key:0,onClick:N},{default:i(()=>[y("取消")]),_:1})):S("",!0)]),d(w,{border:"",column:1},{default:i(()=>[(t(!0),a(b,null,j(Object.keys(e.value),o=>(t(),g(I,{key:o,label:B[o]},{default:i(()=>[["email","phone"].includes(o)?(t(),a(b,{key:0},[n.value?(t(),a("div",U,[d(u,{modelValue:e.value[o],"onUpdate:modelValue":E=>e.value[o]=E,placeholder:""},null,8,["modelValue","onUpdate:modelValue"])])):(t(),a("div",D,r(e.value[o]),1))],64)):(t(),a("div",O,r(e.value[o]),1))]),_:2},1032,["label"]))),128))]),_:1})])}}};export{G as default};
