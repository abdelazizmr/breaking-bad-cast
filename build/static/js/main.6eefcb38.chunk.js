(this["webpackJsonpbreaking-bad-cast"]=this["webpackJsonpbreaking-bad-cast"]||[]).push([[0],{1:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),i=t.n(c),l=t(3),s=t.n(l),u=t(6),m=t(2),o=(t(1),t(7)),p=t.n(o),d=function(e){var a=e.getQuery,t=Object(n.useState)(""),c=Object(m.a)(t,2),i=c[0],l=c[1];return r.a.createElement("header",null,r.a.createElement("img",{src:p.a,alt:""}),r.a.createElement("form",null,r.a.createElement("input",{type:"text",placeholder:"Search a character",value:i,onChange:function(e){return t=e.target.value,l(t),void a(t);var t}})))},f=function(e){var a=e.character,t=a.img,n=a.name,c=a.birthday,i=a.nickname,l=a.portrayed,s=a.category;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t||"https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623",alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h3",null,n),r.a.createElement("hr",null),r.a.createElement("p",null,"Nickname : ",i),r.a.createElement("p",null,"Actor : ",l),r.a.createElement("p",null,"Birthday : ",c),r.a.createElement("p",null,"Serie : ",s))))},g=t(8),E=t.n(g),b=function(){return r.a.createElement("img",{className:"spinner",src:E.a,alt:"spinner-animation"})},h=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],i=function(){var e=Object(u.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a?"https://www.breakingbadapi.com/api/characters?name=".concat(a):"https://www.breakingbadapi.com/api/characters");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c(n),console.log(n);case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i()}),[]),r.a.createElement("div",{className:"app"},r.a.createElement(d,{getQuery:i}),r.a.createElement("div",{className:"grid"},t.length>0?t.map((function(e,a){return r.a.createElement(f,{character:e,key:a})})):r.a.createElement(b,null)))};i.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(e,a,t){e.exports=t.p+"static/media/logo.3795f66d.png"},8:function(e,a,t){e.exports=t.p+"static/media/spinner.235b9b3e.gif"},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6eefcb38.chunk.js.map