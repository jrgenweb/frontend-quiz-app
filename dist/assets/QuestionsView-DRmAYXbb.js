import{_ as f,o as C,a,c as v,b as s,t as d,n as A,d as I,e as L,u as V,r as o,g as E,f as S,h as k,F,i as M,j as _,k as P,l as R,m as Z}from"./index-9nG2A0TN.js";import{B as h}from"./ButtonComponent-DYfw--0r.js";const j={class:"cards"},q={class:"icon"},z="ABCDEFG",D={__name:"CardItem",props:{text:String,index:Number,state:Object},setup(t){const u=t;C(()=>{});function l(){console.log(u.state,"bindClass")}return(n,r)=>(a(),v("div",j,[s("div",{class:A(["card",[t.state.correct,t.state.fail,{active:t.state.active}]]),onClick:l},[s("span",q,d(z[t.index]),1),s("span",null,d(t.text),1)],2)]))}},T=f(D,[["__scopeId","data-v-63b3bbd0"]]),G={class:"outer"},H={__name:"ProgressBar",props:{value:Number,max:Number},setup(t){const u=t,l=I(()=>u.value/u.max*100+"%");return(n,r)=>(a(),v("div",null,[s("div",G,[s("div",{class:"inner",style:L(`--width:${l.value}`)},null,4)])]))}},O=f(H,[["__scopeId","data-v-3a8cdc1b"]]),J={},K={xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"none",viewBox:"0 0 40 40"},U=s("path",{fill:"#EE5454",d:"M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"},null,-1),W=[U];function X(t,u){return a(),v("svg",K,W)}const Y=f(J,[["render",X]]),ee={class:"flex"},se={class:"leftside"},te={key:3,class:"error-message"},ae={__name:"QuestionsView",setup(t){const u=V(),l=o(0),n=o(0),r=o(0),p=o(0),x=o(0),e=o(!1),$=o(0),c=o(0),m=o(!1);C(()=>{w()});function w(){l.value=E(u.params.type),n.value=S(l.value,r.value),p.value=n.value.question,x.value=n.value.options}function y(){if(m.value=!0,console.log(c.value,e.value),!c.value)return!1;e.value=!e.value,Q(c.value)&&console.log("helyes")}function B(){m.value=!1,c.value="",e.value&&(r.value++,w()),e.value=!1}function Q(g){return n.value.answer===g?($.value++,!0):!1}function N(){Z.push("/results/")}return(g,le)=>(a(),v("div",ee,[s("div",se,[s("div",null,[s("p",null,"Question "+d(r.value+1)+" of "+d(l.value.length),1),s("h2",null,d(p.value),1)]),k(O,{max:l.value.length,value:r.value+1,class:"progressbar"},null,8,["max","value"])]),s("div",null,[(a(!0),v(F,null,M(x.value,(i,b)=>(a(),_(T,{key:b,icon:"HTML",text:i,index:b,class:"carditem",onClick:ne=>e.value?null:c.value=i,state:{active:i==c.value,correct:n.value.answer===i&&e.value?"correct":"",fail:e.value&&i!=n.value.answer&&i==c.value?"fail":""}},null,8,["text","index","onClick","state"]))),128)),e.value?r.value+1==l.value.length&&e.value?(a(),_(h,{key:1,title:"See Results",class:"btn",onClick:N})):(a(),_(h,{key:2,title:"Next Question",class:"btn",onClick:B})):(a(),_(h,{key:0,title:"Submit Answer",class:"btn",onClick:y})),!c.value&&!e.value&&m.value?(a(),v("span",te,[k(Y),P(" Please select an answer ")])):R("",!0)])]))}},ue=f(ae,[["__scopeId","data-v-dd7fe25d"]]);export{ue as default};