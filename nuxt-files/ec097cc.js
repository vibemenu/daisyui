(window.webpackJsonp=window.webpackJsonp||[]).push([[72,9,11,44],{404:function(t,e,n){var l=n(18),o="["+n(405)+"]",r=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),c=function(t){return function(e){var n=String(l(e));return 1&t&&(n=n.replace(r,"")),2&t&&(n=n.replace(d,"")),n}};t.exports={start:c(1),end:c(2),trim:c(3)}},405:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},407:function(t,e,n){"use strict";var l=n(10),o=n(4),r=n(82),d=n(14),c=n(12),v=n(36),f=n(163),h=n(60),_=n(5),k=n(62),C=n(61).f,m=n(26).f,y=n(13).f,w=n(404).trim,x="Number",S=o.Number,T=S.prototype,E=v(k(T))==x,N=function(t){var e,n,l,o,r,d,c,code,v=h(t,!1);if("string"==typeof v&&v.length>2)if(43===(e=(v=w(v)).charCodeAt(0))||45===e){if(88===(n=v.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:l=2,o=49;break;case 79:case 111:l=8,o=55;break;default:return+v}for(d=(r=v.slice(2)).length,c=0;c<d;c++)if((code=r.charCodeAt(c))<48||code>o)return NaN;return parseInt(r,l)}return+v};if(r(x,!S(" 0o1")||!S("0b1")||S("+0x1"))){for(var A,O=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof O&&(E?_((function(){T.valueOf.call(n)})):v(n)!=x)?f(new S(N(e)),n,O):N(e)},I=l?C(S):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),D=0;I.length>D;D++)c(S,A=I[D])&&!c(O,A)&&y(O,A,m(S,A));O.prototype=T,T.constructor=O,d(o,x,O)}},408:function(t,e,n){"use strict";n.r(e);n(40),n(407),n(22),n(39),n(63),n(114),n(37),n(38),n(164),n(47),n(162),n(83),n(48);var l={name:"CollapseTransition",props:{name:{type:String,required:!1,default:"collapse"},dimension:{type:String,required:!1,default:"height",validator:function(t){return["height","width"].includes(t)}},duration:{type:Number,required:!1,default:300},easing:{type:String,required:!1,default:"ease-in-out"}},watch:{dimension:function(){this.clearCachedDimensions()}},data:function(){return{cachedStyles:null}},computed:{transition:function(){var t=this,e=[];return Object.keys(this.cachedStyles).forEach((function(n){e.push("".concat(t.convertToCssProperty(n)," ").concat(t.duration,"ms ").concat(t.easing))})),e.join(", ")}},methods:{enter:function(t,e){this.detectAndCacheDimensions(t),this.setClosedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setOpenedDimensions(t),setTimeout(e,this.duration)},afterEnter:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},leave:function(t,e){this.detectAndCacheDimensions(t),this.setOpenedDimensions(t),this.hideOverflow(t),this.forceRepaint(t),this.setTransition(t),this.setClosedDimensions(t),setTimeout(e,this.duration)},afterLeave:function(t){this.unsetOverflow(t),this.unsetTransition(t),this.unsetDimensions(t),this.clearCachedDimensions()},detectAndCacheDimensions:function(t){if(!this.cachedStyles){var e=t.style.visibility,n=t.style.display;t.style.visibility="hidden",t.style.display="",this.cachedStyles=this.detectRelevantDimensions(t),t.style.visibility=e,t.style.display=n}},clearCachedDimensions:function(){this.cachedStyles=null},detectRelevantDimensions:function(t){return"height"===this.dimension?{height:t.offsetHeight+"px",paddingTop:t.style.paddingTop||this.getCssValue(t,"padding-top"),paddingBottom:t.style.paddingBottom||this.getCssValue(t,"padding-bottom")}:"width"===this.dimension?{width:t.offsetWidth+"px",paddingLeft:t.style.paddingLeft||this.getCssValue(t,"padding-left"),paddingRight:t.style.paddingRight||this.getCssValue(t,"padding-right")}:{}},setTransition:function(t){t.style.transition=this.transition},unsetTransition:function(t){t.style.transition=""},hideOverflow:function(t){t.style.overflow="hidden"},unsetOverflow:function(t){t.style.overflow=""},setClosedDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]="0"}))},setOpenedDimensions:function(t){var e=this;Object.keys(this.cachedStyles).forEach((function(n){t.style[n]=e.cachedStyles[n]}))},unsetDimensions:function(t){Object.keys(this.cachedStyles).forEach((function(e){t.style[e]=""}))},forceRepaint:function(t){getComputedStyle(t)[this.dimension]},getCssValue:function(t,style){return getComputedStyle(t,null).getPropertyValue(style)},convertToCssProperty:function(style){var t=style.match(/([A-Z])/g);if(!t)return style;for(var i=0,e=t.length;i<e;i++)style=style.replace(new RegExp(t[i]),"-"+t[i].toLowerCase());return"-"===style.slice(0,1)&&(style=style.slice(1)),style}}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",{attrs:{name:t.name},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},409:function(t,e,n){n(410)},410:function(t,e,n){"use strict";var l=n(2),o=n(18),r=n(84),d=n(85),c=n(165),v=n(3),f=n(23),h=v("replace"),_=RegExp.prototype,k=Math.max,C=function(t,e,n){return n>t.length?-1:""===e?n:t.indexOf(e,n)};l({target:"String",proto:!0},{replaceAll:function(t,e){var n,l,v,m,y,w,x,S,T=o(this),E=0,N=0,A="";if(null!=t){if((n=r(t))&&!~String(o("flags"in _?t.flags:d.call(t))).indexOf("g"))throw TypeError("`.replaceAll` does not allow non-global regexes");if(void 0!==(l=t[h]))return l.call(t,T,e);if(f&&n)return String(T).replace(t,e)}for(v=String(T),m=String(t),(y="function"==typeof e)||(e=String(e)),w=m.length,x=k(1,w),E=C(v,m,0);-1!==E;)S=y?String(e(m,E,v)):c(m,v,E,[],void 0,e),A+=v.slice(N,E)+S,N=E+w,E=C(v,m,E+x);return N<v.length&&(A+=v.slice(N)),A}})},411:function(t,e,n){"use strict";var l=n(2),o=n(404).trim;l({target:"String",proto:!0,forced:n(412)("trim")},{trim:function(){return o(this)}})},412:function(t,e,n){var l=n(5),o=n(405);t.exports=function(t){return l((function(){return!!o[t]()||"​᠎"!="​᠎"[t]()||o[t].name!==t}))}},413:function(t,e,n){"use strict";n.r(e);n(409),n(411),n(114);var l={props:{title:String,classes:String,nocode:Boolean},data:function(){return{sourcecode:"",showcode:!1}},methods:{setSrc:function(){function t(e,n){for(var l,o=new Array(1+n++).join("  "),r=new Array(n-1).join("  "),i=0;i<e.children.length;i++)l=document.createTextNode("\n"+o),e.insertBefore(l,e.children[i]),t(e.children[i],n),e.lastElementChild==e.children[i]&&(l=document.createTextNode("\n"+r),e.appendChild(l));return e}var e,div;void 0!==this.$refs.component&&(this.sourcecode=(e=this.$refs.component.innerHTML,(div=document.createElement("div")).innerHTML=e.trim().replaceAll("\x3c!--","").replaceAll("--\x3e","")+"\n",t(div,0).innerHTML))}},mounted:function(){this.setSrc()}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("div",{staticClass:"pt-4 text-xs opacity-60"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.nocode?t._e():n("div",{staticClass:"mt-2 text-xs tabs"},[n("div",{staticClass:"tab tab-lifted",class:{"tab-active":!t.showcode},on:{click:function(e){t.showcode=!1}}},[t._v("Preview")]),t._v(" "),n("div",{staticClass:"tab tab-lifted",class:{"tab-active":t.showcode},on:{click:function(e){t.showcode=!0}}},[t._v("HTML")]),t._v(" "),n("div",{staticClass:"flex-1 cursor-default tab tab-lifted"})]),t._v(" "),n("div",[n("collapse-transition",[!t.nocode&&t.showcode?n("div",{staticClass:"pt-2"},[n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs",value:t.sourcecode,expression:"sourcecode"}]},[n("code",{staticClass:"h-64 p-4 font-mono text-xs rounded-box html"})])]):t._e()]),t._v(" "),n("collapse-transition",[t.showcode?t._e():n("div",{staticClass:"pt-2"},[n("div",{ref:"component",class:t.classes},[t._t("default")],2)])])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapseTransition:n(408).default})},414:function(t,e,n){"use strict";n.r(e);var l={props:["data"]},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mt-6 overflow-x-auto"},[n("table",{staticClass:"table w-full table-compact"},[n("thead",[n("tr",[n("th",[t._v("Class name")]),t._v(" "),!1!==t.data.showType?n("th",[t._v("Type")]):t._e(),t._v(" "),!0===t.data.showColors?n("th"):t._e(),t._v(" "),n("th")])]),t._v(" "),n("tbody",[t._l(t.data.components,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-success"},[t._v("Component")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])})),t._v(" "),t._l(t.data.utilities,(function(e,l){return n("tr",[n("th",{staticClass:"font-normal"},[n("span",{staticClass:"font-mono lowercase"},[t._v(t._s(e.class))])]),t._v(" "),!1!==t.data.showType?n("td",[n("span",{staticClass:"w-20 badge badge-sm badge-info"},[t._v("Utility")])]):t._e(),t._v(" "),!0===t.data.showColors?n("td",[n("span",{staticClass:"inline-block w-6 h-6 border rounded border-opacity-10",class:e.color})]):t._e(),t._v(" "),n("td",[t._v(t._s(e.desc))])])}))],2)])]),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"divider"}):t._e(),t._v(" "),!1!==t.data.showTitle?n("div",{staticClass:"mt-6 text-xl font-bold"},[t._v("Examples")]):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hidden mt-2 mb-10 text-center xl:block"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"728px",height:"90px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"1141251424"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-2 mb-10 text-center xl:hidden"},[n("ins",{staticClass:"adsbygoogle",staticStyle:{display:"inline-block",width:"300px",height:"100px"},attrs:{"data-ad-client":"ca-pub-4812562253949561","data-ad-slot":"6427020085"}}),t._v(" "),n("script",[t._v("\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    ")])])}],!1,null,null,null);e.default=component.exports},483:function(t,e,n){"use strict";n.r(e);var l={head:function(){return{title:"daisyUI — Tailwind CSS Kbd component",meta:[{hid:"description",name:"description",content:"Tailwind CSS kbd component - Tailwind CSS kbd example"}]}}},o=n(6),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ClassTable",{attrs:{data:{components:[{class:"kbd",desc:"Do show a keyboard key or a shortcut key"}],utilities:[{class:"kbd-lg",desc:"Large size"},{class:"kbd-md",desc:"Medium size (default)"},{class:"kbd-sm",desc:"Small size"},{class:"kbd-xs",desc:"Extra small size"}]}}}),t._v(" "),n("Wrapper",{attrs:{title:"kbd"}},[n("kbd",{staticClass:"kbd"},[t._v("A")])]),t._v(" "),n("Wrapper",{attrs:{title:"Sizes"}},[n("kbd",{staticClass:"kbd kbd-lg"},[t._v("Shift")]),t._v(" "),n("kbd",{staticClass:"kbd kbd-md"},[t._v("Shift")]),t._v(" "),n("kbd",{staticClass:"kbd kbd-sm"},[t._v("Shift")]),t._v(" "),n("kbd",{staticClass:"kbd kbd-xs"},[t._v("Shift")])]),t._v(" "),n("Wrapper",{attrs:{title:"key combination"}},[n("kbd",{staticClass:"kbd"},[t._v("ctrl")]),t._v("\n    +\n    "),n("kbd",{staticClass:"kbd"},[t._v("shift")]),t._v("\n    +\n    "),n("kbd",{staticClass:"kbd"},[t._v("del")])]),t._v(" "),n("Wrapper",{attrs:{title:"kbd"}},[n("kbd",{staticClass:"kbd"},[t._v("⌘")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("⌥")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("⇧")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("⌃")])]),t._v(" "),n("Wrapper",{attrs:{title:"kbd"}},[n("kbd",{staticClass:"kbd"},[t._v("▲")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("▼")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("◀︎")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("▶︎")])]),t._v(" "),n("Wrapper",{attrs:{title:"a full keyboard"}},[n("div",{staticClass:"flex justify-center gap-1 my-1 w-96"},[n("kbd",{staticClass:"kbd"},[t._v("q")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("w")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("e")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("r")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("t")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("y")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("u")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("i")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("o")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("p")])]),t._v(" "),n("div",{staticClass:"flex justify-center gap-1 my-1 w-96"},[n("kbd",{staticClass:"kbd"},[t._v("a")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("s")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("d")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("f")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("g")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("h")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("j")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("k")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("l")])]),t._v(" "),n("div",{staticClass:"flex justify-center gap-1 my-1 w-96"},[n("kbd",{staticClass:"kbd"},[t._v("z")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("x")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("c")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("v")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("b")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("n")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("m")]),t._v(" "),n("kbd",{staticClass:"kbd"},[t._v("/")])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClassTable:n(414).default,Wrapper:n(413).default})}}]);