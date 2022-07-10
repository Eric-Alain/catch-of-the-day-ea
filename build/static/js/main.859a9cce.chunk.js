(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var s=a(19),n=a(3),c=a(34),r=a(10);function i(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function o(e){return e[Math.floor(Math.random()*e.length)]}function l(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(o(e),"-").concat(o(e),"-").concat(o(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var u=a(2),j=function(e){var t=e.history,a=Object(n.useRef)(null);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{children:"Fish!"}),Object(u.jsxs)("form",{className:"store-selector",onSubmit:function(e){e.preventDefault(),t.push("/store/".concat(a.current.value))},children:[Object(u.jsx)("h2",{children:"Please enter a store"}),Object(u.jsx)("input",{type:"text",required:!0,placeholder:"Store name",defaultValue:l(),ref:a}),Object(u.jsx)("button",{type:"submit",children:"Visit store"})]})]})},h=a(5),d=a(21),b=function(e){var t=e.tagline;return Object(u.jsxs)("header",{className:"top",children:[Object(u.jsxs)("h1",{children:["Catch",Object(u.jsxs)("span",{className:"ofThe",children:[Object(u.jsx)("span",{className:"of",children:"of"}),Object(u.jsx)("span",{className:"the",children:"the"})]}),"day"]}),Object(u.jsx)("h3",{className:"tagline",children:Object(u.jsx)("span",{children:t})})]})},f=a(18),m=a.n(f),p=a(24),O=function(e){var t=e.addFish,a=Object(n.useRef)(null),s=Object(n.useRef)(null),c=Object(n.useRef)(null),r=Object(n.useRef)(null),i=Object(n.useRef)(null);return Object(u.jsxs)("form",{className:"fish-edit",onSubmit:function(e){e.preventDefault();var n={name:a.current.value,price:parseFloat(s.current.value),status:r.current.value,desc:r.current.value,image:i.current.value};t(n),e.currentTarget.reset()},children:[Object(u.jsx)("input",{ref:a,name:"name",type:"text",placeholder:"Name"}),Object(u.jsx)("input",{ref:s,name:"price",type:"text",placeholder:"Price"}),Object(u.jsxs)("select",{ref:c,name:"status",children:[Object(u.jsx)("option",{value:"available",children:"Fresh!"}),Object(u.jsx)("option",{value:"unavailable",children:"Sold out!"})]}),Object(u.jsx)("textarea",{ref:r,name:"desc"}),Object(u.jsx)("input",{ref:i,name:"image",type:"text",placeholder:"Image"}),Object(u.jsx)("button",{type:"submit",children:"+ Add fish"})]})},x=function(e){var t=e.index,a=e.fish,s=e.updateInventory,n=e.deleteFish,c=a||{},r=c.name,i=c.price,o=c.status,l=c.desc,j=c.image,d=function(e){var n=Object(h.a)(Object(h.a)({},a),{},{[e.target.name]:e.target.value});s(t,n)};return Object(u.jsxs)("div",{className:"fish-edit",children:[Object(u.jsx)("input",{type:"text",name:"name",value:r,onChange:d}),Object(u.jsx)("input",{type:"text",name:"price",value:i,onChange:d}),Object(u.jsxs)("select",{type:"text",name:"status",value:o,onChange:d,children:[Object(u.jsx)("option",{value:"available",children:"Fresh!"}),Object(u.jsx)("option",{value:"unavailable",children:"Sold out!"})]}),Object(u.jsx)("textarea",{type:"text",name:"desc",value:l,onChange:d}),Object(u.jsx)("input",{type:"text",name:"image",value:j,onChange:d}),Object(u.jsx)("button",{onClick:function(){return n(t)},children:"Remove fish"})]})},v=function(e){var t=e.authenticate;return Object(u.jsxs)("nav",{className:"login",children:[Object(u.jsx)("h2",{children:"Inventory login"}),Object(u.jsx)("p",{children:"Sign in to manage your store's inventory"}),Object(u.jsx)("button",{className:"github",onClick:function(){return t("Github")},children:"Login with Github"}),Object(u.jsx)("button",{className:"twitter",onClick:function(){return t("Twitter")},children:"Login with Twitter"}),Object(u.jsx)("button",{className:"facebook",onClick:function(){return t("Facebook")},children:"Login with Facebook"})]})},g=a(32),y=a(33),w=a.n(y),k=a(27);a(48);g.config();var N=k.default.initializeApp({apiKey:'"AIzaSyB4QLkvbyJin3UqkvAhNor1VpVAOVF32H8";',authDomain:'"catch-of-the-day-ea.firebaseapp.com";',databaseURL:'"https://catch-of-the-day-ea-default-rtdb.firebaseio.com";',projectId:'"catch-of-the-day-ea";'}),S=w.a.createClass(N.database()),F=N,I=a(29),C=function(e){var t=e.fishes,a=e.addFish,s=e.loadSampleFishes,c=e.updateInventory,r=e.deleteFish,i=e.storeId,o=e.uid,l=e.setUid,j=e.owner,h=e.setOwner,d=e.flag,b=e.setFlag;Object(n.useEffect)((function(){I.a.auth().onAuthStateChanged((function(e){e&&f({user:e})}))}),[]);var f=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),e.next=3,S.fetch("".concat(i),{context:undefined});case 3:if((a=e.sent).owner){e.next=7;break}return e.next=7,S.post("".concat(i,"/owner"),{data:t.user.uid});case 7:l(t.user.uid),h(a.owner||t.user.uid);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new(I.a.auth["".concat(t,"AuthProvider")]),e.prev=1,e.next=4,F.auth().signInWithPopup(a).then((function(e){return f(e)}));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),b(!0);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(p.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.auth().signOut();case 2:l(null),b(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return Object(u.jsx)("button",{onClick:y,children:"Log out!"})};return o||d?o!==j||!0===d?Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"Sorry, you are not the owner of this store."}),Object(u.jsx)(w,{})]}):Object(u.jsxs)("div",{className:"inventory",children:[Object(u.jsx)("h2",{children:"Inventory"}),Object(u.jsx)(w,{}),Object.keys(t).map((function(e){return Object(u.jsx)(x,{index:e,fish:t[e],updateInventory:c,deleteFish:r},e)})),Object(u.jsx)(O,{addFish:a}),Object(u.jsx)("button",{onClick:s,children:"Load sample fishes"})]}):Object(u.jsx)(v,{authenticate:g})},A=a(60),T=a(59),L=function(e){var t=e.fishes,a=e.order,s=e.removeFromOrder,n=e.uid,c=e.flag,r=Object.keys(a),o=r.reduce((function(e,s){var n=t[s],c=a[s];return n&&n.status?e+c*n.price:e}),0);return Object(u.jsxs)("div",{className:"order-wrap",children:[Object(u.jsx)("h2",{children:"Order"}),n&&!c?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(A.a,{component:"ul",className:"order",children:r.map((function(e){var n=t[e],c=a[e],r={classNames:"order",key:e,timeout:{enter:250,exit:250}};return n?"available"===!n.status?Object(u.jsx)(T.a,Object(h.a)(Object(h.a)({},r),{},{children:Object(u.jsxs)("li",{children:[n?n.name:"fish"," is no longer available"]},e)})):Object(u.jsx)(T.a,Object(h.a)(Object(h.a)({},r),{},{children:Object(u.jsx)("li",{children:Object(u.jsxs)("span",{children:[Object(u.jsx)(A.a,{component:"span",className:"count",children:Object(u.jsx)(T.a,{classNames:"count",timeout:{enter:250,exit:250},children:Object(u.jsx)("span",{children:c})},c)}),"lbs ",n.name," ",i(c*n.price),Object(u.jsx)("button",{onClick:function(){return s(e)},children:"\xd7"})]})},e)})):null}))}),Object(u.jsxs)("div",{className:"total",children:["Total:",Object(u.jsx)("strong",{children:i(o)})]})]}):null]})},R=function(e){var t=e.details,a=e.addToOrder,s=e.index,n=t||{},c=n.name,r=n.price,o=n.status,l=n.desc,j=n.image,h="available"===o;return Object(u.jsx)("div",{className:"single-fish",children:Object(u.jsxs)("li",{className:"menu-fish",children:[Object(u.jsx)("img",{src:j,alt:c}),Object(u.jsxs)("h3",{className:"fish-name",children:[c,Object(u.jsx)("span",{className:"price",children:i(r)})]}),Object(u.jsx)("p",{children:l}),Object(u.jsx)("button",{disabled:!h,onClick:function(){a(s)},children:h?"Add to order":"Sold out!"})]})})},P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},J=function(e){var t=e.match,a=Object(n.useState)({fishes:{},order:{}}),s=Object(d.a)(a,2),c=s[0],r=s[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),l=o[0],j=o[1],f=Object(n.useState)(!1),m=Object(d.a)(f,2),p=(m[0],m[1],Object(n.useState)(null)),O=Object(d.a)(p,2),x=O[0],v=O[1],g=Object(n.useState)(null),y=Object(d.a)(g,2),w=y[0],k=y[1];Object(n.useEffect)((function(){var e=localStorage.getItem(t.params.storeId);e&&r((function(t){return Object(h.a)(Object(h.a)({},t),{},{order:JSON.parse(e)})})),F.database().ref("".concat(t.params.storeId,"/fishes")).on("value",(function(e){e.val()&&r((function(t){return Object(h.a)(Object(h.a)({},t),{},{fishes:e.val()})}))}))}),[]),Object(n.useEffect)((function(){F.database().ref("".concat(t.params.storeId,"/fishes")).update(c.fishes)}),[c.fishes]),Object(n.useEffect)((function(){localStorage.setItem(t.params.storeId,JSON.stringify(c.order))}));var N=function(e){var t=Object(h.a)({},c.order);t[e]=t[e]+1||1,r((function(e){return Object(h.a)(Object(h.a)({},e),{},{order:t})}))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"catch-of-the-day",children:[Object(u.jsxs)("div",{className:"menu",children:[Object(u.jsx)(b,{tagline:"Fresh Seafood Market"}),x&&!l?Object(u.jsx)("ul",{className:"fishes",children:Object.keys(c.fishes).map((function(e){return Object(u.jsx)(R,{index:e,details:c.fishes[e],addToOrder:N},e)}))}):null]}),Object(u.jsx)(L,{fishes:c.fishes,order:c.order,removeFromOrder:function(e){var t=Object(h.a)({},c.order);delete t[e],r((function(e){return Object(h.a)(Object(h.a)({},e),{},{order:t})}))},uid:x,flag:l}),Object(u.jsx)(C,{fishes:c.fishes,addFish:function(e){var t=Object(h.a)({},c.fishes);t["fish".concat(Date.now())]=e,r((function(e){return Object(h.a)(Object(h.a)({},e),{},{fishes:t})}))},loadSampleFishes:function(){r((function(e){return Object(h.a)(Object(h.a)({},e),{},{fishes:P})}))},updateInventory:function(e,t){var a=Object(h.a)({},c.fishes);a[e]=t,r((function(e){return Object(h.a)(Object(h.a)({},e),{},{fishes:a})}))},deleteFish:function(e){var t=Object(h.a)({},c.fishes);t[e]=null,r((function(e){return Object(h.a)(Object(h.a)({},e),{},{fishes:t})}))},storeId:t.params.storeId,uid:x,setUid:v,owner:w,setOwner:k,flag:l,setFlag:j})]})})},M=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Not found!"})})},U=function(){return Object(u.jsx)(c.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{exact:!0,path:"/",component:j}),Object(u.jsx)(r.a,{path:"/store/:storeId",component:J}),Object(u.jsx)(r.a,{component:M})]})})};a(56);Object(s.render)(Object(u.jsx)(U,{}),document.querySelector("#main"))}},[[57,1,2]]]);
//# sourceMappingURL=main.859a9cce.chunk.js.map