import{_ as q,af as B,a as C,r as H,D as I,o as i,c as m,d as e,e as o,w as n,h as N,S as U,ay as $,a8 as z,an as D,aq as l,p as P,f as A,az as g,ap as v,ao as E,g as L,i as M,aA as T,aB as j}from"./index.42cef7f6.js";import{_ as G}from"./Pagination.9c997355.js";import{_ as J}from"./InputNumber.35886c37.js";import{_ as K}from"./Space.ec471de6.js";import"./Input.a1e98544.js";import"./Tag.0dd87f09.js";const O=a=>(P("data-v-79601837"),a=a(),A(),a),Q={id:"product"},R={id:"container"},W=O(()=>e("h1",{class:"title"},"S.H.Figuarts\u7CFB\u5217\u5546\u54C1",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},tt={class:"cart-button"},et=L(" \u52A0\u5165\u8CFC\u7269\u8ECA "),nt={__name:"SHFiguartsView",setup(a){const h=B(),{addCart:f}=h,r=C([]),s=H(1),_=12,p=I(()=>r.slice(s.value*_-_,s.value*_));return(async()=>{try{const{data:u}=await N.get("/products");r.push(...u.result.filter(c=>c.brand==="S.H.Figuarts"))}catch{U.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(u,c)=>{const y=J,S=K,w=M,b=T,x=j,k=$,V=G;return i(),m("div",Q,[e("div",R,[W,o(k,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(i(!0),m(z,null,D(l(p),(t,F)=>(i(),g(x,{key:F},{default:n(()=>[l(p).length>0?(i(),g(b,{bordered:!1,key:t._id},{cover:n(()=>[e("div",X,[e("img",{src:t.image},null,8,Y)])]),default:n(()=>[e("div",Z,[e("h1",null,v(t.name),1),e("h2",null," \u5546\u54C1\u50F9\u683C : "+v(t.price),1),o(S,{vertical:""},{default:n(()=>[o(y,{"button-placement":"both",value:t.quantity,"onUpdate:value":d=>t.quantity=d,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),e("div",tt,[o(w,{onClick:d=>l(f)({product:t._id,quantity:t.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[et]),_:2},1032,["onClick"])])])]),_:2},1024)):E("",!0)]),_:2},1024))),128))]),_:1}),o(V,{page:s.value,"onUpdate:page":c[0]||(c[0]=t=>s.value=t),"page-count":Math.ceil(r.length/_)},null,8,["page","page-count"])])])}}},ut=q(nt,[["__scopeId","data-v-79601837"]]);export{ut as default};
