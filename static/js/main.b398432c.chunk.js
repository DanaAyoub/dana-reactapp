(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},43:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t.n(s),r=t(30),n=t.n(r),h=(t(40),t(35)),A=t(4),g=t(33),l=t(15),i=(t(41),t(12)),j=[{index:0,image:"https://www.maybelline.com/~/media/mny/us/homepage-modules/homepage-carousel/lash-sensational-sky-high/mu4eym_homepage_banner_skyhigh_dt_au1.jpg",text:"MakeUp"},{index:1,image:"https://www.maybelline.com/~/media/mny/us/homepage-modules/homepage-carousel/iar/mu4eym_homepage_banner_iar_dt_au1_reduced.jpg",text:"MakeUp"},{index:2,image:"https://www.maybelline.com/~/media/mny/us/homepage-modules/homepage-carousel/superstay-matte-ink/mu4eym_homepage_banner_ssmi_dt_au1-reduced.jpg",text:"MakeUp"}],o=t(1),C=function(e){var a=Object(s.useState)(0),t=Object(l.a)(a,2),c=t[0],r=t[1];return Object(o.jsxs)("div",{className:"Announcment",children:[Object(o.jsx)("h1",{className:"Announcment__title",children:"Maybelline All you need of makeup products!"}),Object(o.jsx)("img",{src:j[c].image,alt:j[c].text},j[c].index),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"Announcment__button",onClick:function(){r(0==c?c+1:0)},children:Object(o.jsx)(i.a,{})}),Object(o.jsx)("button",{className:"Announcment__button",onClick:function(){r(c>=2?0:c+1)},children:Object(o.jsx)(i.b,{})})]})]})};t(43),t(20);var m=function(e){return Object(o.jsxs)("div",{className:"Card",children:[Object(o.jsx)("img",{src:e.src,className:"Card_img",alt:"MakeUp products"}),Object(o.jsxs)("div",{className:"Card_info",children:[Object(o.jsxs)("h4",{className:"Card_text",children:[" ",e.text," "]}),Object(o.jsxs)("h4",{className:"Card_price",children:[" ",e.price," "]}),Object(o.jsx)("button",{className:"Card_btn",children:" Add to cart"})]})]})},b=t(17),u=t.n(b),d=t(31),E=t(32),I=t.n(E),B=function(){var e=Object(d.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline");case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log("fetch failed",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(e){return console.log(e),!e.products||e.products.length<=0?null:Object(o.jsx)("div",{children:e.products.map((function(e){return Object(o.jsx)("div",{className:"Products",children:Object(o.jsx)("div",{className:"productItems",children:Object(o.jsx)(m,{src:e.image_link,text:e.name,price:e.price})})})}))})},O=t.p+"static/media/face.14fd61ca.jpg",Q=t.p+"static/media/eyes.47d04e14.jpg",p=t.p+"static/media/lips.0863e919.jpg",D=(t(63),function(){return Object(o.jsxs)("div",{className:"Suggested",children:[Object(o.jsxs)("div",{className:"Suggested__card",children:[Object(o.jsx)("h2",{children:"Face"}),Object(o.jsx)("img",{className:"Suggested__image",alt:"BCream",src:O}),Object(o.jsx)("button",{className:"Suggested__button",children:"View all"})]}),Object(o.jsxs)("div",{className:"Suggested__card",children:[Object(o.jsx)("h2",{children:"Eyes"}),Object(o.jsx)("img",{className:"Suggested__image",alt:"HCream",src:Q}),Object(o.jsx)("button",{className:"Suggested__button",children:"View all"})]}),Object(o.jsxs)("div",{className:"Suggested__card",children:[Object(o.jsx)("h2",{children:"Lips"}),Object(o.jsx)("img",{className:"Suggested__image",alt:"HCream",src:p}),Object(o.jsx)("button",{className:"Suggested__button",children:"View all"})]})]})}),f=function(){var e=Object(s.useState)([]),a=Object(l.a)(e,2),t=a[0],r=a[1];return c.a.useEffect((function(){B().then((function(e){r(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)(C,{}),Object(o.jsx)(D,{}),Object(o.jsx)(w,{products:t})]})},x=(t(64),function(){return Object(o.jsxs)("div",{className:"Header",children:[Object(o.jsx)("img",{className:"Header__logo",alt:"logo",src:"data:image/png;base64,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"}),Object(o.jsx)("a",{className:"Header__bar",href:"#home",children:"Home"}),Object(o.jsx)("a",{className:"Header__bar",href:"#about",children:"About"}),Object(o.jsx)("a",{className:"Header__bar",href:"#contact",children:"Contact"}),Object(o.jsx)("a",{className:"Header__bar",href:"signIn",children:"Sign In"}),Object(o.jsx)("input",{className:"Header__search",type:"text",placeholder:"Search.."})]})}),N=t(9),S=(t(65),function(){return Object(o.jsxs)("div",{className:"Footer",children:[Object(o.jsx)("a",{className:"Footer__bar",href:"help",children:"Help"}),Object(o.jsx)("a",{className:"Footer__bar",href:"private",children:"Private Policy"}),Object(o.jsx)("a",{className:"Footer__bar",href:"use",children:"Terms of Use"}),Object(o.jsx)("a",{className:"Footer__bar",href:"setting",children:"Settings"}),Object(o.jsx)("a",{className:"Footer__bar",href:"language",children:"Language"}),Object(o.jsxs)("div",{className:"Footer__contant",children:[Object(o.jsxs)("a",{href:"https://www.facebook.com/maybelline",className:"Footer__icon",target:"_blank",rel:"noreferrer","aria-label":"Facebook",children:[Object(o.jsx)(N.a,{})," Facebook"]}),Object(o.jsxs)("a",{href:"https://twitter.com/maybelline",className:"Footer__icon",target:"_blank",rel:"noreferrer","aria-label":"Twitter",children:[Object(o.jsx)(N.d,{})," Twitter"]}),Object(o.jsxs)("a",{href:"https://www.pinterest.com/Maybelline/",className:"Footer__icon",target:"_blank",rel:"noreferrer","aria-label":"Pinterest",children:[Object(o.jsx)(N.c,{}),"Pinterest"]}),Object(o.jsxs)("a",{href:"https://instagram.com/maybelline/",className:"Footer__icon",target:"_blank",rel:"noreferrer","aria-label":"Instagram",children:[Object(o.jsx)(N.b,{}),"  Instagram"]}),Object(o.jsxs)("a",{href:"https://www.youtube.com/user/maybellinenewyork",className:"Footer__icon",target:"_blank",rel:"noreferrer","aria-label":"Youtube",children:[Object(o.jsx)(N.e,{}),"   Youtube"]})]}),Object(o.jsx)("h5",{className:"Footer_copyright",children:" Copyright \xa9 2021 Maybelline New York."})]})}),P=(t(66),Object(g.a)({})),y=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(x,{}),Object(o.jsx)(h.a,{history:P,children:Object(o.jsx)(A.a,{path:"/",component:f})}),Object(o.jsx)(S,{})]})};n.a.render(Object(o.jsx)(y,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.b398432c.chunk.js.map