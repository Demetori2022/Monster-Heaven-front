import{_ as w,a as x,o as e,c as n,d as t,e as o,w as s,am as S,S as V,a9 as m,an as f,ao as k,ap as l,p as I,f as b}from"./index.02af4335.js";import{_ as D,a as B}from"./Col.e8ff3a50.js";import{_ as N,a as O}from"./Table.1ba4a1fa.js";import{_ as P}from"./Space.8da93be7.js";const h=c=>(I("data-v-7df2f1b3"),c=c(),b(),c),q={id:"orderPage"},C={id:"container"},L=h(()=>t("h1",{class:"title"},"\u8A02\u55AE",-1)),z=h(()=>t("thead",null,[t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")])],-1)),A={key:0},E={__name:"OrderView",setup(c){const u=x([]);return(async()=>{try{const{data:r}=await S.get("/orders");u.push(...r.result.map(i=>(i.totalPrice=i.products.reduce((d,a)=>d+a.product.price*a.quantity,0),i)))}catch(r){console.log(r),V.fire({icon:"error",title:"\u5931\u6557",text:"\u7121\u6CD5\u53D6\u5F97\u8A02\u55AE"})}})(),(r,i)=>{const d=N,a=B,g=O,y=P,v=D;return e(),n("div",q,[t("div",C,[o(v,null,{default:s(()=>[o(a,{span:24},{default:s(()=>[L,o(d)]),_:1}),o(a,{span:24},{default:s(()=>[t("div",null,[o(y,{vertical:""},{default:s(()=>[o(g,{size:"small",striped:""},{default:s(()=>[z,u.length>0?(e(),n("tbody",A,[(e(!0),n(m,null,f(u,_=>(e(),n("tr",{key:_._id},[t("td",null,l(_._id),1),t("td",null,l(new Date(_.date).toLocaleDateString()),1),t("td",null,l(_.totalPrice),1),t("td",null,[t("ul",null,[(e(!0),n(m,null,f(_.products,p=>(e(),n("li",{key:p._id},l(p.product.name)+" x "+l(p.quantity),1))),128))])])]))),128))])):k("",!0)]),_:1})]),_:1})])]),_:1})]),_:1})])])}}},K=w(E,[["__scopeId","data-v-7df2f1b3"]]);export{K as default};
