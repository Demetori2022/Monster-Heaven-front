import{_ as b,af as k,a as S,o,c as l,d as t,e as s,w as n,h as V,S as q,ay as B,a9 as C,an as I,p as N,f as G,az as d,ap as u,aq as U,ao as $,g as z,i as A,aA as D,aB as E}from"./index.02af4335.js";import{_ as F}from"./InputNumber.1a1b4f95.js";import{_ as L}from"./Space.8da93be7.js";import"./Input.3f877eb0.js";const T=a=>(N("data-v-49276d93"),a=a(),G(),a),j={id:"product"},H={id:"container"},J=T(()=>t("h1",{class:"title"},"\u5361\u7F8E\u62C9\u7CFB\u5217\u5546\u54C1",-1)),K={class:"imgbox"},M=["src"],O={class:"content"},P={class:"cart-button"},Q=z(" \u52A0\u5165\u8CFC\u7269\u8ECA "),R={__name:"GameraView",setup(a){const p=k(),{addCart:m}=p,_=S([]);return(async()=>{try{const{data:c}=await V.get("/products");_.push(...c.result.filter(i=>i.category==="\u5361\u7F8E\u62C9"))}catch{q.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,i)=>{const h=F,g=L,v=A,f=D,y=E,w=B;return o(),l("div",j,[t("div",H,[J,s(w,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(o(!0),l(C,null,I(_,(e,x)=>(o(),d(y,{key:x},{default:n(()=>[_.length>0?(o(),d(f,{bordered:!1,key:e._id},{cover:n(()=>[t("div",K,[t("img",{src:e.image},null,8,M)])]),default:n(()=>[t("div",O,[t("h1",null,u(e.name),1),t("h2",null," \u5546\u54C1\u50F9\u683C : "+u(e.price),1),s(g,{vertical:""},{default:n(()=>[s(h,{"button-placement":"both",value:e.quantity,"onUpdate:value":r=>e.quantity=r,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),t("div",P,[s(v,{onClick:r=>U(m)({product:e._id,quantity:e.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[Q]),_:2},1032,["onClick"])])])]),_:2},1024)):$("",!0)]),_:2},1024))),128))]),_:1})])])}}},te=b(R,[["__scopeId","data-v-49276d93"]]);export{te as default};