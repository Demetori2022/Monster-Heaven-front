import{_ as B,af as C,a as I,r as N,D as U,o as i,c as g,d as t,e as a,w as n,h as $,S as G,ay as z,a8 as D,an as P,aq as l,p as A,f as E,az as h,ap as u,ao as F,g as L,i as M,aA as T,aB as j}from"./index.5f2f40f7.js";import{_ as H}from"./Pagination.585724c7.js";import{_ as J}from"./InputNumber.4e9bae50.js";import{_ as K}from"./Space.6e6e038d.js";import"./Input.c484156c.js";import"./Tag.c7801bf8.js";const O=o=>(A("data-v-d6a00369"),o=o(),E(),o),Q={id:"product"},R={id:"container"},W=O(()=>t("h1",{class:"title"},"\u5361\u7F8E\u62C9\u7CFB\u5217\u5546\u54C1",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},ee={style:{"white-space":"pre"}},te={style:{"white-space":"pre"}},ne={class:"cart-button"},ae=L(" \u52A0\u5165\u8CFC\u7269\u8ECA "),oe={__name:"GameraView",setup(o){const v=C(),{addCart:f}=v,r=I([]),s=N(1),_=12,d=U(()=>r.slice(s.value*_-_,s.value*_));return(async()=>{try{const{data:p}=await $.get("/products");r.push(...p.result.filter(c=>c.category==="\u5361\u7F8E\u62C9"))}catch{G.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(p,c)=>{const y=J,w=K,x=M,S=T,b=j,k=z,V=H;return i(),g("div",Q,[t("div",R,[W,a(k,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(i(!0),g(D,null,P(l(d),(e,q)=>(i(),h(b,{key:q},{default:n(()=>[l(d).length>0?(i(),h(S,{bordered:!1,key:e._id},{cover:n(()=>[t("div",X,[t("img",{src:e.image},null,8,Y)])]),default:n(()=>[t("div",Z,[t("p",ee,u(e.name),1),t("h2",null," \u5546\u54C1\u50F9\u683C : "+u(e.price),1),t("h3",te,u(e.description),1),a(w,{vertical:""},{default:n(()=>[a(y,{"button-placement":"both",value:e.quantity,"onUpdate:value":m=>e.quantity=m,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),t("div",ne,[a(x,{onClick:m=>l(f)({product:e._id,quantity:e.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[ae]),_:2},1032,["onClick"])])])]),_:2},1024)):F("",!0)]),_:2},1024))),128))]),_:1}),a(V,{page:s.value,"onUpdate:page":c[0]||(c[0]=e=>s.value=e),"page-count":Math.ceil(r.length/_)},null,8,["page","page-count"])])])}}},ue=B(oe,[["__scopeId","data-v-d6a00369"]]);export{ue as default};
