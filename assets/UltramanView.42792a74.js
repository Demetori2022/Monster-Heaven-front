import{_ as b,af as k,a as S,o,c as l,d as e,e as s,w as n,h as V,S as U,aG as q,a8 as C,an as I,p as B,f as N,aH as d,ap as u,aq as $,ao as D,g as E,i as F,aI as G,aJ as H}from"./index.cc864b41.js";import{_ as J}from"./InputNumber.70a5fb12.js";import{_ as L}from"./Space.10c814f4.js";import"./Input.db4c82ba.js";const T=a=>(B("data-v-76cd5ff8"),a=a(),N(),a),j={id:"product"},z={id:"container"},A=T(()=>e("h1",{class:"title"},"\u8D85\u4EBA\u529B\u9738\u738B\u7CFB\u5217\u5546\u54C1",-1)),K={class:"imgbox"},M=["src"],O={class:"content"},P={class:"cart-button"},Q=E(" \u52A0\u5165\u8CFC\u7269\u8ECA "),R={__name:"UltramanView",setup(a){const p=k(),{addCart:m}=p,_=S([]);return(async()=>{try{const{data:c}=await V.get("/products");_.push(...c.result.filter(i=>i.category==="\u8D85\u4EBA\u529B\u9738\u738B"))}catch{U.fire({icon:"error",title:"\u5931\u6557",text:"\u4F3A\u670D\u5668\u932F\u8AA4"})}})(),(c,i)=>{const f=J,h=L,g=F,v=G,y=H,w=q;return o(),l("div",j,[e("div",z,[A,s(w,{cols:"1 s:2 m:3 l:4",responsive:"screen"},{default:n(()=>[(o(!0),l(C,null,I(_,(t,x)=>(o(),d(y,{key:x},{default:n(()=>[_.length>0?(o(),d(v,{bordered:!1,key:t._id},{cover:n(()=>[e("div",K,[e("img",{src:t.image},null,8,M)])]),default:n(()=>[e("div",O,[e("h1",null,u(t.name),1),e("h2",null," \u5546\u54C1\u50F9\u683C : "+u(t.price),1),s(h,{vertical:""},{default:n(()=>[s(f,{"button-placement":"both",value:t.quantity,"onUpdate:value":r=>t.quantity=r,placeholder:"\u8CFC\u8CB7\u6578\u91CF",min:0},null,8,["value","onUpdate:value"])]),_:2},1024),e("div",P,[s(g,{onClick:r=>$(m)({product:t._id,quantity:t.quantity}),strong:"",round:"",type:"warning"},{default:n(()=>[Q]),_:2},1032,["onClick"])])])]),_:2},1024)):D("",!0)]),_:2},1024))),128))]),_:1})])])}}},et=b(R,[["__scopeId","data-v-76cd5ff8"]]);export{et as default};