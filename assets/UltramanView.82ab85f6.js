import{_ as q,af as B,a as C,r as I,D as N,o as i,c as m,d as e,e as a,w as n,h as $,S as z,ay as D,a8 as P,an as A,aq as p,p as E,f as F,az as g,ap as v,ao as L,g as M,i as T,aA as j,aB as G}from"./index.42cef7f6.js";import{_ as H}from"./Pagination.9c997355.js";import{_ as J}from"./InputNumber.35886c37.js";import{_ as K}from"./Space.ec471de6.js";import"./Input.a1e98544.js";import"./Tag.0dd87f09.js";const O=o=>(E("data-v-702c272a"),o=o(),F(),o),Q={id:"product"},R={id:"container"},W=O(()=>e("h1",{class:"title"},"\u8D85\u4EBA\u529B\u9738\u738B\u7CFB\u5217\u5546\u54C1",-1)),X={class:"imgbox"},Y=["src"],Z={class:"content"},tt={class:"cart-button"},et=M(" \u52A0\u5165\u8CFC\u7269\u8ECA "),nt={__name:"UltramanView",setup(o){const h=B(),{addCart:f}=h,r=C([]),s=I(1),_=12,u=N(()=>r.slice(s.value*_-_,s.value*_));return(async()=>{try{const{data:l}=await $.get("/products");r.push(...l.result.filter(c=>c.category==="\u8D85\u4EBA\u529B\u9738\u738B"))}catch{z.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(l,c)=>{const y=J,w=K,x=T,S=j,b=G,k=D,U=H;return i(),m("div",Q,[e("div",R,[W,a(k,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(i(!0),m(P,null,A(p(u),(t,V)=>(i(),g(b,{key:V},{default:n(()=>[p(u).length>0?(i(),g(S,{bordered:!1,key:t._id},{cover:n(()=>[e("div",X,[e("img",{src:t.image},null,8,Y)])]),default:n(()=>[e("div",Z,[e("h1",null,v(t.name),1),e("h2",null," \u5546\u54C1\u50F9\u683C : "+v(t.price),1),a(w,{vertical:""},{default:n(()=>[a(y,{"button-placement":"both",value:t.quantity,"onUpdate:value":d=>t.quantity=d,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),e("div",tt,[a(x,{onClick:d=>p(f)({product:t._id,quantity:t.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[et]),_:2},1032,["onClick"])])])]),_:2},1024)):L("",!0)]),_:2},1024))),128))]),_:1}),a(U,{page:s.value,"onUpdate:page":c[0]||(c[0]=t=>s.value=t),"page-count":Math.ceil(r.length/_)},null,8,["page","page-count"])])])}}},lt=q(nt,[["__scopeId","data-v-702c272a"]]);export{lt as default};
