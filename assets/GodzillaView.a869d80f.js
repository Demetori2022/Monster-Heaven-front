import{_ as z,af as B,a as C,r as I,D as N,o as i,c as m,d as t,e as o,w as n,h as U,S as $,ay as G,a8 as D,an as P,aq as p,p as A,f as E,az as g,ap as v,ao as F,g as L,i as M,aA as T,aB as j}from"./index.6b6f686b.js";import{_ as H}from"./Pagination.b2143be9.js";import{_ as J}from"./InputNumber.385aafc2.js";import{_ as K}from"./Space.5c80301e.js";import"./Input.06594f8c.js";import"./Tag.4b4b265e.js";const O=a=>(A("data-v-c2e63aba"),a=a(),E(),a),Q={id:"product"},R={id:"container"},W=O(()=>t("h1",{class:"title"},"\u54E5\u5409\u62C9\u7CFB\u5217\u5546\u54C1",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},ee={class:"cart-button"},te=L(" \u52A0\u5165\u8CFC\u7269\u8ECA "),ne={__name:"GodzillaView",setup(a){const h=B(),{addCart:f}=h,r=C([]),s=I(1),_=12,u=N(()=>r.slice(s.value*_-_,s.value*_));return(async()=>{try{const{data:l}=await U.get("/products");r.push(...l.result.filter(c=>c.category==="\u54E5\u5409\u62C9"))}catch{$.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(l,c)=>{const y=J,b=K,w=M,x=T,S=j,k=G,V=H;return i(),m("div",Q,[t("div",R,[W,o(k,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(i(!0),m(D,null,P(p(u),(e,q)=>(i(),g(S,{key:q},{default:n(()=>[p(u).length>0?(i(),g(x,{bordered:!1,key:e._id},{cover:n(()=>[t("div",X,[t("img",{src:e.image},null,8,Y)])]),default:n(()=>[t("div",Z,[t("h1",null,v(e.name),1),t("h2",null," \u5546\u54C1\u50F9\u683C : "+v(e.price),1),o(b,{vertical:""},{default:n(()=>[o(y,{"button-placement":"both",value:e.quantity,"onUpdate:value":d=>e.quantity=d,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),t("div",ee,[o(w,{onClick:d=>p(f)({product:e._id,quantity:e.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[te]),_:2},1032,["onClick"])])])]),_:2},1024)):F("",!0)]),_:2},1024))),128))]),_:1}),o(V,{page:s.value,"onUpdate:page":c[0]||(c[0]=e=>s.value=e),"page-count":Math.ceil(r.length/_)},null,8,["page","page-count"])])])}}},le=z(ne,[["__scopeId","data-v-c2e63aba"]]);export{le as default};