(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4458:function(e,r){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var l=n.apply(null,t);l&&e.push(l)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var i in t)s.call(t,i)&&t[i]&&e.push(i)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0!==(t=(function(){return n}).apply(r,[]))&&(e.exports=t)}()},1877:function(e,r,t){"use strict";var s=t(2265);let n=s.createContext(null);n.displayName="CardHeaderContext",r.Z=n},4473:function(e,r,t){"use strict";t.d(r,{pi:function(){return c},vE:function(){return i},zG:function(){return o}});var s=t(2265);t(7437);let n=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:l}=n;function i(e,r){let{prefixes:t}=(0,s.useContext)(n);return e||t[r]||r}function c(){let{breakpoints:e}=(0,s.useContext)(n);return e}function o(){let{minBreakpoint:e}=(0,s.useContext)(n);return e}},4092:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var s=t(4458),n=t.n(s),a=/-(.)/g,l=t(2265),i=t(4473),c=t(7437);let o=e=>e[0].toUpperCase()+e.replace(a,function(e,r){return r.toUpperCase()}).slice(1);function d(e,{displayName:r=o(e),Component:t,defaultProps:s}={}){let a=l.forwardRef(({className:r,bsPrefix:a,as:l=t||"div",...o},d)=>{let x={...s,...o},u=(0,i.vE)(a,e);return(0,c.jsx)(l,{ref:d,className:n()(r,u),...x})});return a.displayName=r,a}},7098:function(e,r,t){"use strict";var s=t(2265),n=t(4458),a=t.n(n),l=t(7437);r.Z=e=>s.forwardRef((r,t)=>(0,l.jsx)("div",{...r,ref:t,className:a()(r.className,e)}))},2305:function(e,r,t){Promise.resolve().then(t.bind(t,4213))},4213:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return C}});var s=t(7437),n=t(4458),a=t.n(n),l=t(2265),i=t(4473),c=t(4092),o=t(7098);let d=l.forwardRef(({bsPrefix:e,className:r,variant:t,as:n="img",...l},c)=>{let o=(0,i.vE)(e,"card-img");return(0,s.jsx)(n,{ref:c,className:a()(t?`${o}-${t}`:o,r),...l})});d.displayName="CardImg";var x=t(1877);let u=l.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},c)=>{let o=(0,i.vE)(e,"card-header"),d=(0,l.useMemo)(()=>({cardHeaderBsPrefix:o}),[o]);return(0,s.jsx)(x.Z.Provider,{value:d,children:(0,s.jsx)(t,{ref:c,...n,className:a()(r,o)})})});u.displayName="CardHeader";let m=(0,o.Z)("h5"),h=(0,o.Z)("h6"),f=(0,c.Z)("card-body"),p=(0,c.Z)("card-title",{Component:m}),j=(0,c.Z)("card-subtitle",{Component:h}),y=(0,c.Z)("card-link",{Component:"a"}),g=(0,c.Z)("card-text",{Component:"p"}),v=(0,c.Z)("card-footer"),N=(0,c.Z)("card-img-overlay"),b=l.forwardRef(({bsPrefix:e,className:r,bg:t,text:n,border:l,body:c=!1,children:o,as:d="div",...x},u)=>{let m=(0,i.vE)(e,"card");return(0,s.jsx)(d,{ref:u,...x,className:a()(r,m,t&&`bg-${t}`,n&&`text-${n}`,l&&`border-${l}`),children:c?(0,s.jsx)(f,{children:o}):o})});b.displayName="Card";var _=Object.assign(b,{Img:d,Title:p,Subtitle:j,Body:f,Link:y,Text:g,Header:u,Footer:v,ImgOverlay:N});let T=l.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},l)=>{let c=(0,i.vE)(e,"row"),o=(0,i.pi)(),d=(0,i.zG)(),x=`${c}-cols`,u=[];return o.forEach(e=>{let r;let t=n[e];delete n[e],null!=t&&"object"==typeof t?{cols:r}=t:r=t;let s=e!==d?`-${e}`:"";null!=r&&u.push(`${x}${s}-${r}`)}),(0,s.jsx)(t,{ref:l,...n,className:a()(r,c,...u)})});function C(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("picture",{className:"my-4 m-[0px] px-[0px] align-center container",children:(0,s.jsx)("img",{className:"w-full h-auto",src:"/images/img_1.png",alt:""})}),(0,s.jsxs)("div",{className:"container",children:[(0,s.jsxs)("div",{className:"m-4",children:[(0,s.jsx)("h2",{className:"text-center font-bold leading-[48px]",children:"Discover NEW Arrivals"}),(0,s.jsx)("p",{className:"text-center font-normal",children:"Recently added shirts!"})]}),(0,s.jsxs)("div",{className:"mx-5",children:[(0,s.jsxs)(T,{xs:1,md:4,className:"g-4 mt-4",children:[(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]}),(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]}),(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]}),(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]})]}),(0,s.jsxs)(T,{xs:1,md:4,className:"g-4",children:[(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]}),(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]}),(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]}),(0,s.jsxs)(_,{style:{border:0},children:[(0,s.jsx)(_.Img,{variant:"top",src:"/images/card1.png"}),(0,s.jsxs)(_.Body,{children:[(0,s.jsx)(_.Title,{className:"text-center",children:"Plain White Shirt"}),(0,s.jsx)(_.Text,{style:{color:"blue"},className:"text-center",children:"$123"})]})]})]})]})]})]})}T.displayName="Row"},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=t(2265),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,t){var s,a={},o=null,d=null;for(s in void 0!==t&&(o=""+t),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(d=r.ref),r)l.call(r,s)&&!c.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:o,ref:d,props:a,_owner:i.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=2305)}),_N_E=e.O()}]);