import{e as h,f as v,a as e,o as s,c as _,d as t,w as n,F as b,g,b as c,t as y}from"./index-f68cef2b.js";const k={class:"layout"},w={class:"main"},B={__name:"Layout",setup(I){const l=h("1");v(()=>{l.value=cusSessionStorage.getItem("defaultIndex")??"1"});const d=[{index:"1",label:"公告发布",path:"notice"},{index:"2",label:"学生列表",path:"student"},{index:"3",label:"宿舍信息",path:"dorm"},{index:"4",label:"缺勤管理",path:"absent"},{index:"5",label:"报修管理",path:"repair"}],i=o=>{cusSessionStorage.setItem("defaultIndex",o.index),router.push(o.path)};return(o,S)=>{const u=e("el-menu-item"),r=e("el-menu"),p=e("el-aside"),m=e("router-view"),x=e("el-main"),f=e("el-container");return s(),_("div",k,[t(f,null,{default:n(()=>[t(p,{width:"200px"},{default:n(()=>[t(r,{"default-active":l.value},{default:n(()=>[(s(),_(b,null,g(d,a=>t(u,{key:a.index,index:a.index,onClick:C=>i(a)},{default:n(()=>[c("span",null,y(a.label),1)]),_:2},1032,["index","onClick"])),64))]),_:1},8,["default-active"])]),_:1}),t(x,null,{default:n(()=>[c("div",w,[t(m)])]),_:1})]),_:1})])}}};export{B as default};
