(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{24:function(e,t,n){e.exports={deleteBtn:"DeleteBtn_deleteBtn__2adOd"}},25:function(e,t,n){e.exports={contact:"Contact_contact__2vsAj"}},32:function(e,t,n){},33:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c,a=n(1),r=n(0),i=n.n(r),o=n(9),u=n.n(o),l=(n(32),n(33),n(8)),s=n(6),b=n.n(s),j=n(5),d=n(21),O=n(11),m=n(16),f=n(2),h=n(4),p=n(22),x=n.n(p),v=n(3),_=n(23),g=n.n(_),C=Object(v.b)("add"),k=Object(v.b)("delete"),y=Object(v.b)("filter"),B={key:"root",storage:x.a,blacklist:["filter"]},N=[].concat(Object(m.a)(Object(v.d)({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e]}})),[g.a]),S=Object(v.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(O.a)(c,C,(function(e,t){var n=t.payload;return[].concat(Object(m.a)(e),[n])})),Object(O.a)(c,k,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),c)),D=Object(v.c)("",Object(O.a)({},y,(function(e,t){return t.payload.toLowerCase()}))),w=Object(f.c)({contacts:S,filter:D}),F=Object(h.g)(B,w),P=Object(v.a)({reducer:F,devTools:!1,middleware:N}),T=Object(h.h)(P);var A=Object(j.b)((function(e){return e}),(function(e){return{handleSubmit:function(t){return e(C(t))}}}))((function(e){var t=e.handleSubmit,n=Object(r.useState)(""),c=Object(l.a)(n,2),i=c[0],o=c[1],u=Object(r.useState)(""),s=Object(l.a)(u,2),j=s[0],O=s[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),P.getState().contacts.map((function(e){return e.name})).includes(i)?alert("".concat(i," is already exists in contacts")):(t({id:Object(d.v4)(),name:i,number:j}),o(""),O(""))},children:[Object(a.jsxs)("label",{className:b.a.label,children:["Name",Object(a.jsx)("input",{className:b.a.input1,name:"name",onChange:function(e){var t=e.currentTarget.value;o(t)},value:i,type:"text"})]}),Object(a.jsxs)("label",{className:b.a.label,children:["Number",Object(a.jsx)("input",{className:b.a.input2,name:"number",onChange:function(e){var t=e.currentTarget.value;O(t)},value:j,type:"text"})]}),Object(a.jsx)("button",{className:b.a.input1,type:"submit",children:"Add contact"})]})]})})),L=n(24),z=n.n(L);var E=function(e){return Object(a.jsx)("button",{className:z.a.deleteBtn,onClick:e.onClickDeleteBtn,type:"button",children:"Delete"})},I=n(25),J=n.n(I);var H=function(e){return Object(a.jsxs)("li",{className:J.a.contact,children:[e.name," : ",e.number,Object(a.jsx)(E,{onClickDeleteBtn:function(){return e.deleteBtn(e.id)}})]})};var K=Object(j.b)((function(e){return{contacts:e.contacts.filter((function(t){return t.name.toLowerCase().includes(e.filter)}))}}),(function(e){return{onDeleteBtnClick:function(t){return e(k(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteBtnClick;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)("ul",{children:t.map((function(e){return Object(a.jsx)(H,{name:e.name,number:e.number,id:e.id,deleteBtn:function(){return n(e.id)}},e.id)}))})]})}));var M=Object(j.b)((function(e){return e}),(function(e){return{dispatchFilter:function(t){return e(y(t))}}}))((function(e){var t=e.dispatchFilter,n=Object(r.useState)(""),c=Object(l.a)(n,2),i=c[0],o=c[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"Find contacts by name"}),Object(a.jsx)("input",{onChange:function(e){var n=e.currentTarget.value;o(n),t(n)},value:i})]})}));var Q=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(A,{}),Object(a.jsx)(M,{}),Object(a.jsx)(K,{})]})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},W=n(26);u.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(j.a,{store:P,children:Object(a.jsx)(W.a,{loading:null,persistor:T,children:Object(a.jsx)(Q,{})})})}),document.getElementById("root")),R()},6:function(e,t,n){e.exports={form:"Phonebook_form__Sn1_5",label:"Phonebook_label__Wze63",input1:"Phonebook_input1__2e_by",input2:"Phonebook_input2__mQl-t"}}},[[43,1,2]]]);
//# sourceMappingURL=main.848f5b1d.chunk.js.map