import{_ as B,af as C,a as I,r as N,D as U,o as i,c as m,d as t,e as a,w as n,h as G,S as $,ay as z,a8 as D,an as P,aq as u,p as A,f as E,az as g,ap as v,ao as F,g as L,i as M,aA as T,aB as j}from"./index.37cff73f.js";import{_ as H,a as J}from"./InputNumber.ff393118.js";import{_ as K}from"./Space.5ac589f0.js";import"./Input.1e902bcd.js";import"./Tag.3867d47b.js";const O=o=>(A("data-v-543f8115"),o=o(),E(),o),Q={id:"product"},R={id:"container"},W=O(()=>t("h1",{class:"title"},"\u5361\u7F8E\u62C9\u7CFB\u5217\u5546\u54C1",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},ee={class:"cart-button"},te=L(" \u52A0\u5165\u8CFC\u7269\u8ECA "),ne={__name:"GameraView",setup(o){const f=C(),{addCart:h}=f,r=I([]),s=N(1),_=12,p=U(()=>r.slice(s.value*_-_,s.value*_));return(async()=>{try{const{data:l}=await G.get("/products");r.push(...l.result.filter(c=>c.category==="\u5361\u7F8E\u62C9"))}catch{$.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(l,c)=>{const y=J,w=K,x=M,S=T,b=j,k=z,V=H;return i(),m("div",Q,[t("div",R,[W,a(k,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(i(!0),m(D,null,P(u(p),(e,q)=>(i(),g(b,{key:q},{default:n(()=>[u(p).length>0?(i(),g(S,{bordered:!1,key:e._id},{cover:n(()=>[t("div",X,[t("img",{src:e.image},null,8,Y)])]),default:n(()=>[t("div",Z,[t("h1",null,v(e.name),1),t("h2",null," \u5546\u54C1\u50F9\u683C : "+v(e.price),1),a(w,{vertical:""},{default:n(()=>[a(y,{"button-placement":"both",value:e.quantity,"onUpdate:value":d=>e.quantity=d,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),t("div",ee,[a(x,{onClick:d=>u(h)({product:e._id,quantity:e.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[te]),_:2},1032,["onClick"])])])]),_:2},1024)):F("",!0)]),_:2},1024))),128))]),_:1}),a(V,{page:s.value,"onUpdate:page":c[0]||(c[0]=e=>s.value=e),"page-count":Math.ceil(r.length/_)},null,8,["page","page-count"])])])}}},re=B(ne,[["__scopeId","data-v-543f8115"]]);export{re as default};