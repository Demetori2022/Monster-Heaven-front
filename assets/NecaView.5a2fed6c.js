import{_ as N,af as x,a as k,o,c as l,d as t,e as s,w as n,h as C,S,ay as V,a9 as q,an as B,p as I,f as A,az as u,ap as p,aq as E,ao as U,g as $,i as z,aA as D,aB as F}from"./index.02af4335.js";import{_ as L}from"./InputNumber.1a1b4f95.js";import{_ as T}from"./Space.8da93be7.js";import"./Input.3f877eb0.js";const j=a=>(I("data-v-91acf9b7"),a=a(),A(),a),G={id:"product"},H={id:"container"},J=j(()=>t("h1",{class:"title"},"NECA\u7CFB\u5217\u5546\u54C1",-1)),K={class:"imgbox"},M=["src"],O={class:"content"},P={class:"cart-button"},Q=$(" \u52A0\u5165\u8CFC\u7269\u8ECA "),R={__name:"NecaView",setup(a){const d=x(),{addCart:m}=d,_=k([]);return(async()=>{try{const{data:c}=await C.get("/products");_.push(...c.result.filter(i=>i.brand==="NECA"))}catch{S.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,i)=>{const h=L,f=T,g=z,v=D,y=F,b=V;return o(),l("div",G,[t("div",H,[J,s(b,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(o(!0),l(q,null,B(_,(e,w)=>(o(),u(y,{key:w},{default:n(()=>[_.length>0?(o(),u(v,{bordered:!1,key:e._id},{cover:n(()=>[t("div",K,[t("img",{src:e.image},null,8,M)])]),default:n(()=>[t("div",O,[t("h1",null,p(e.name),1),t("h2",null," \u5546\u54C1\u50F9\u683C : "+p(e.price),1),s(f,{vertical:""},{default:n(()=>[s(h,{"button-placement":"both",value:e.quantity,"onUpdate:value":r=>e.quantity=r,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),t("div",P,[s(g,{onClick:r=>E(m)({product:e._id,quantity:e.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[Q]),_:2},1032,["onClick"])])])]),_:2},1024)):U("",!0)]),_:2},1024))),128))]),_:1})])])}}},te=N(R,[["__scopeId","data-v-91acf9b7"]]);export{te as default};
