(this["webpackJsonphomeworks-lapa"]=this["webpackJsonphomeworks-lapa"]||[]).push([[0],[,,,function(e,r,t){e.exports={message_wrapper:"Message_message_wrapper__1JYsN",avatar:"Message_avatar__1kQhV",text_wrapper:"Message_text_wrapper__1phnk",message:"Message_message__2vHKY",name:"Message_name__3AyOC",time:"Message_time__3cSZ2"}},function(e,r,t){e.exports={wrapper:"Greeting_wrapper__ZNCGO",wrapperWithEror:"Greeting_wrapperWithEror__2crfF",counter:"Greeting_counter__3qY6a"}},,,,,function(e,r,t){e.exports={someClass:"Affairs_someClass__3zlCK",wrapper:"Affairs_wrapper__TtK3R",itemWrapper:"Affairs_itemWrapper__2ZEbp"}},function(e,r,t){e.exports={errorInput:"SuperInputText_errorInput__1DLBB",error:"SuperInputText_error__2rpOs",superInput:"SuperInputText_superInput__VngPD"}},,function(e,r,t){e.exports={default:"SuperButton_default__1Jg1i",red:"SuperButton_red__1bG0J"}},function(e,r,t){e.exports={blue:"HW4_blue__2F5n7",column:"HW4_column__2fscU",testSpanError:"HW4_testSpanError__dv574"}},function(e,r,t){e.exports={checkbox:"SuperCheckbox_checkbox__3Zja8",spanClassName:"SuperCheckbox_spanClassName__2rSfy"}},,,,function(e,r,t){e.exports={App:"App_App__17N1A"}},,,,,,,function(e,r,t){},,,,function(e,r,t){"use strict";t.r(r);var a=t(1),n=t.n(a),c=t(17),s=t.n(c),i=(t(25),t(18)),o=t.n(i),l=t(3),j=t.n(l),u=t(0),d=function(e){return Object(u.jsxs)("div",{className:j.a.message_wrapper,children:[Object(u.jsx)("div",{className:j.a.avatar,children:Object(u.jsx)("img",{src:e.avatar,alt:""})}),Object(u.jsxs)("div",{className:j.a.text_wrapper,children:[Object(u.jsx)("div",{className:j.a.name,children:e.name}),Object(u.jsx)("div",{className:j.a.message,children:e.message}),Object(u.jsx)("div",{className:j.a.time,children:e.time})]})]})},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Pavel",b="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",m="22:00";var O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(d,{avatar:p,name:h,message:b,time:m}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},x=t(2),_=t(5),f=t(6),g=t(12),v=t.n(g),C=function(e){var r=e.red,t=e.className,a=Object(f.a)(e,["red","className"]),n="".concat(r?v.a.red:v.a.default," ").concat(t);return Object(u.jsx)("button",Object(_.a)({className:n},a))},k=t(9),w=t.n(k);var N=function(e){return Object(u.jsxs)("div",{className:w.a.itemWrapper,children:[Object(u.jsxs)("span",{children:["I know ",e.affair.name," on ",e.affair.priority," level"]}),Object(u.jsx)(C,{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var y=function(e){var r=e.data.map((function(r){return Object(u.jsx)(N,{affair:r,deleteAffairCallback:e.deleteAffairCallback},r._id)}));return Object(u.jsxs)("div",{className:w.a.wrapper,children:[r,Object(u.jsxs)("div",{children:[Object(u.jsx)(C,{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)(C,{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)(C,{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)(C,{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(a.useState)(S),r=Object(x.a)(e,2),t=r[0],n=r[1],c=Object(a.useState)("all"),s=Object(x.a)(c,2),i=s[0],o=s[1],l=function(e,r){return"high"===r?e.filter((function(e){return"high"===e.priority})):"middle"===r?e.filter((function(e){return"middle"===e.priority})):"low"===r?e.filter((function(e){return"low"===e.priority})):e}(t,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(y,{data:l,setFilter:o,deleteAffairCallback:function(e){return n(function(e,r){return e.filter((function(e){return r!==e._id}))}(t,e))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},E=t(20),T=t(19),W=t(10),I=t.n(W),F=function(e){e.type;var r=e.onChange,t=e.onChangeText,a=e.onKeyPress,n=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(f.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(I.a.error," ").concat(i||""),j="".concat(I.a.errorInput," ").concat(s," ").concat(c?"":I.a.superInput);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(_.a)({type:"text",onChange:function(e){r&&r(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),n&&"Enter"===e.key&&n()},className:j},o)),c&&Object(u.jsx)("span",{className:l,children:c})]})},M=t(4),H=t.n(M),B=function(e){var r=e.name,t=e.setNameCallback,a=e.addUser,n=e.error,c=e.totalUsers,s=n?H.a.error:H.a.normal,i=(n?H.a.errorMessage:H.a.errorHide,n?H.a.wrapperWithEror:H.a.wrapper);return Object(u.jsxs)("div",{className:i,children:[Object(u.jsx)(F,{onChange:t,value:r,className:s,error:n}),Object(u.jsx)(C,{onClick:a,children:"Add"}),Object(u.jsxs)("span",{className:H.a.counter,children:["Total users: ",c]})]})},U=function(e){var r=e.users,t=e.addUserCallback,n=Object(a.useState)(""),c=Object(x.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)(""),l=Object(x.a)(o,2),j=l[0],d=l[1],p=r.length;return Object(u.jsx)(B,{name:s,setNameCallback:function(e){i(e.currentTarget.value),d("")},addUser:function(){s?(t(s),alert("Hello "+s+"!"),i(""),d("")):d("Enter a name")},error:j,totalUsers:p})};var G=function(){var e=Object(a.useState)([]),r=Object(x.a)(e,2),t=r[0],n=r[1],c=t;return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(U,{users:c,addUserCallback:function(e){var r={_id:Object(T.v1)(),name:e};c=[r].concat(Object(E.a)(t)),n(c),console.log(c)}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},J=t(13),K=t.n(J),P=t(14),Z=t.n(P),Y=function(e){e.type;var r=e.onChange,t=e.onChangeChecked,a=e.className,n=(e.spanClassName,e.children),c=Object(f.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Z.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(_.a)({type:"checkbox",onChange:function(e){r&&r(e),t&&t(e.currentTarget.checked)},className:s},c)),n&&Object(u.jsx)("span",{className:Z.a.spanClassName,children:n})]})};var q=function(){var e=Object(a.useState)(""),r=Object(x.a)(e,2),t=r[0],n=r[1],c=t?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},i=Object(a.useState)(!1),o=Object(x.a)(i,2),l=o[0],j=o[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 4",Object(u.jsxs)("div",{className:K.a.column,children:[Object(u.jsx)(F,{value:t,onChangeText:n,onEnter:s,error:c}),Object(u.jsx)(F,{className:K.a.blue}),Object(u.jsx)(C,{children:"default"}),Object(u.jsx)(C,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(C,{disabled:!0,children:"disabled"}),Object(u.jsx)(Y,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(Y,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var D=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{children:"react homeworks:"}),Object(u.jsx)(O,{}),Object(u.jsx)(A,{}),Object(u.jsx)(G,{}),Object(u.jsx)(q,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(D,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[29,1,2]]]);
//# sourceMappingURL=main.907aa5d5.chunk.js.map