import{_ as b,af as x,a as k,o as s,c as u,d as e,e as o,w as n,h as V,S as F,aG as H,a8 as q,an as C,p as I,f as B,aH as l,ap as d,aq as N,ao as U,g as $,i as D,aI as E,aJ as G}from"./index.cc864b41.js";import{_ as J}from"./InputNumber.70a5fb12.js";import{_ as L}from"./Space.10c814f4.js";import"./Input.db4c82ba.js";const T=a=>(I("data-v-5d9039a6"),a=a(),B(),a),j={id:"product"},z={id:"container"},A=T(()=>e("h1",{class:"title"},"S.H.Figuarts\u7CFB\u5217\u5546\u54C1",-1)),K={class:"imgbox"},M=["src"],O={class:"content"},P={class:"cart-button"},Q=$(" \u52A0\u5165\u8CFC\u7269\u8ECA "),R={__name:"SHFiguartsView",setup(a){const p=x(),{addCart:m}=p,_=k([]);return(async()=>{try{const{data:c}=await V.get("/products");_.push(...c.result.filter(i=>i.brand==="S.H.Figuarts"))}catch{F.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,i)=>{const g=J,h=L,v=D,f=E,y=G,S=H;return s(),u("div",j,[e("div",z,[A,o(S,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(s(!0),u(q,null,C(_,(t,w)=>(s(),l(y,{key:w},{default:n(()=>[_.length>0?(s(),l(f,{bordered:!1,key:t._id},{cover:n(()=>[e("div",K,[e("img",{src:t.image},null,8,M)])]),default:n(()=>[e("div",O,[e("h1",null,d(t.name),1),e("h2",null," \u5546\u54C1\u50F9\u683C : "+d(t.price),1),o(h,{vertical:""},{default:n(()=>[o(g,{"button-placement":"both",value:t.quantity,"onUpdate:value":r=>t.quantity=r,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),e("div",P,[o(v,{onClick:r=>N(m)({product:t._id,quantity:t.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[Q]),_:2},1032,["onClick"])])])]),_:2},1024)):U("",!0)]),_:2},1024))),128))]),_:1})])])}}},et=b(R,[["__scopeId","data-v-5d9039a6"]]);export{et as default};