import{h as f}from"./http-ab8c5c03.js";import{e as _,f as V,a as r,o as b,c as N,b as x,d as t,w as d,h as v}from"./index-f29a31d7.js";const w=l=>f("notice/post",l,"POST"),B=l=>f("notice/findRecent"),h=l=>f("notice/getById",l),g={post:w,findRecent:B,getById:h};const k={class:"notice"},C=x("h1",null,"公告",-1),R={class:"btn-container"},D={__name:"Notice",setup(l){const o=_({title:"",content:""}),a=_(null);V(I);const y=_(!1);async function p(s){if(!a.value){ElMessage({message:"当前还没有公告",type:"error"});return}const e=s==="last"?a.value-1:a.value+1,u=await g.getById({noticeId:e,type:s}),{noticeData:n,code:c,msg:m}=u;c==="success"?(a.value=n.noticeId,delete n.noticeId,o.value=n):ElMessage({message:m,type:c})}async function I(){const s=await g.findRecent(),{noticeData:e}=s;a.value=e.noticeId,delete e.noticeId,o.value=e}return(s,e)=>{const u=r("el-button"),n=r("el-input"),c=r("el-form-item"),m=r("el-form");return b(),N("div",k,[C,x("div",R,[t(u,{onClick:e[0]||(e[0]=i=>p("last"))},{default:d(()=>[v("上一条公告")]),_:1}),t(u,{onClick:e[1]||(e[1]=i=>p("next"))},{default:d(()=>[v("下一条公告")]),_:1})]),t(m,{disabled:!y.value},{default:d(()=>[t(c,{label:"标题"},{default:d(()=>[t(n,{modelValue:o.value.title,"onUpdate:modelValue":e[2]||(e[2]=i=>o.value.title=i),placeholder:""},null,8,["modelValue"])]),_:1}),t(c,{label:"内容"},{default:d(()=>[t(n,{modelValue:o.value.content,"onUpdate:modelValue":e[3]||(e[3]=i=>o.value.content=i),autosize:{minRows:18},maxlength:"960","show-word-limit":"",type:"textarea",placeholder:"暂无公告"},null,8,["modelValue"])]),_:1})]),_:1},8,["disabled"])])}}};export{D as default};
