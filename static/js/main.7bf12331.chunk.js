(this["webpackJsonphomeworks-lapa"]=this["webpackJsonphomeworks-lapa"]||[]).push([[0],{11:function(e,t,r){},13:function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),n=r(5),s=r.n(n),c=(r(11),r(6)),o=r.n(c),l=r(2),j=r.n(l),d=r(0),h=function(e){return Object(d.jsxs)("div",{className:j.a.message_wrapper,children:[Object(d.jsx)("div",{className:j.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:""})}),Object(d.jsxs)("div",{className:j.a.text_wrapper,children:[Object(d.jsx)("div",{className:j.a.name,children:e.name}),Object(d.jsx)("div",{className:j.a.message,children:e.message}),Object(d.jsx)("div",{className:j.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",u="Pavel",b="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",p="22:00";var f=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1 should work (\u0434\u043e\u043b\u0436\u043d\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c)",Object(d.jsx)(h,{avatar:m,name:u,message:b,time:p}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},O=r(4);var x=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:["I like ",e.affair.name]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var _=function(e){var t=e.data.map((function(t){return Object(d.jsx)(x,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})]})},v=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var g=function(){var e=Object(i.useState)(v),t=Object(O.a)(e,2),r=t[0],a=t[1],n=Object(i.useState)("all"),s=Object(O.a)(n,2),c=s[0],o=s[1],l=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):e}(r,c);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(_,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return t!==e._id}))}(r,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var w=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(f,{}),Object(d.jsx)(g,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},2:function(e,t,r){e.exports={message_wrapper:"Message_message_wrapper__1JYsN",avatar:"Message_avatar__1kQhV",text_wrapper:"Message_text_wrapper__1phnk",message:"Message_message__2vHKY",name:"Message_name__3AyOC",time:"Message_time__3cSZ2"}},6:function(e,t,r){e.exports={App:"App_App__17N1A"}}},[[13,1,2]]]);
//# sourceMappingURL=main.7bf12331.chunk.js.map