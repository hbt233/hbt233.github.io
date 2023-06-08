import{h as C}from"./http-29679fce.js";import{t as B}from"./tableHandle-8b58f2a5.js";import{f as M,e as _,k as E,a as o,o as v,c as b,b as d,d as a,w as l,u,h as m,F,g as L}from"./index-2feffed8.js";const T=i=>C("repair/record",i,"POST"),U=i=>C("repair/findHistories",i),y={record:T,findHistories:U};const $={class:"repair"},j=d("h1",null,"宿舍报修",-1),O={class:"btn-container"},P=d("h1",null,"报修原因",-1),q={class:"btn-container"},J={__name:"Repair",setup(i){M(c);const k=[{name:"内容",key:"content",width:100},{name:"时间",key:"time",width:100}],{pageSize:g,pageNum:w,total:f,handleCurrentChange:x,handleSizeChange:V}=B(c),h=_([]);async function c(){const p=await y.findHistories({pageSize:g.value,pageNum:w.value}),{data:e}=p;e.list.forEach(n=>{n.time=E(Number(n.time)).format("YYYY-MM-DD HH:mm:ss")}),h.value=e.list,f.value=e.total}const s=_(!1),r=_("");function z(){r.value=""}async function H(){await y.record({content:r.value}).then(p=>{s.value=!1,c()})}return(p,e)=>{const n=o("el-button"),N=o("el-table-column"),S=o("el-table"),D=o("el-pagination"),R=o("el-input"),Y=o("el-dialog");return v(),b("div",$,[j,d("div",O,[a(n,{onClick:e[0]||(e[0]=t=>s.value=!0)},{default:l(()=>[m("报修")]),_:1})]),a(S,{data:h.value,style:{width:"100%","margin-bottom":"30px"},"max-height":"600px"},{default:l(()=>[(v(),b(F,null,L(k,t=>a(N,{key:t.key,prop:t.key,label:t.name,"min-width":t.width},null,8,["prop","label","min-width"])),64))]),_:1},8,["data"]),a(D,{background:"",layout:"prev, pager, next",total:u(f),"page-size":u(g),onCurrentChange:u(x),onSizeChange:u(V)},null,8,["total","page-size","onCurrentChange","onSizeChange"]),a(Y,{class:"repairDialog",modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=t=>s.value=t),width:"30%",onClosed:z},{footer:l(()=>[d("div",q,[a(n,{onClick:e[2]||(e[2]=t=>s.value=!1)},{default:l(()=>[m("取消")]),_:1}),a(n,{type:"primary",onClick:H},{default:l(()=>[m("保存")]),_:1})])]),default:l(()=>[P,a(R,{type:"textarea",autosize:{minRows:8},placeholder:"报修原因",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=t=>r.value=t)},null,8,["modelValue"])]),_:1},8,["modelValue"])])}}};export{J as default};
