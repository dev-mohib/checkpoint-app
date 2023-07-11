import{g as An,R as $e,r as Lt,a as E,j as v,d as nt}from"./app-fffb7e5e.js";import{N as On}from"./icons-e45bfe1f.js";function ve(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ve(Object(n),!0).forEach(function(a){N(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function St(t){"@babel/helpers - typeof";return St=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},St(t)}function Nn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Sn(t,e,n){return e&&pe(t.prototype,e),n&&pe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ee(t,e){return En(t)||Cn(t,e)||Ue(t,e)||_n()}function ut(t){return Pn(t)||In(t)||Ue(t)||Tn()}function Pn(t){if(Array.isArray(t))return $t(t)}function En(t){if(Array.isArray(t))return t}function In(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Cn(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ue(t,e){if(t){if(typeof t=="string")return $t(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $t(t,e)}}function $t(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Tn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _n(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var be=function(){},ne={},We={},He=null,Xe={mark:be,measure:be};try{typeof window<"u"&&(ne=window),typeof document<"u"&&(We=document),typeof MutationObserver<"u"&&(He=MutationObserver),typeof performance<"u"&&(Xe=performance)}catch{}var Mn=ne.navigator||{},ge=Mn.userAgent,he=ge===void 0?"":ge,$=ne,y=We,ye=He,pt=Xe;$.document;var F=!!y.documentElement&&!!y.head&&typeof y.addEventListener=="function"&&typeof y.createElement=="function",Ge=~he.indexOf("MSIE")||~he.indexOf("Trident/"),bt,gt,ht,yt,xt,R="___FONT_AWESOME___",Ut=16,Be="fa",Ve="svg-inline--fa",V="data-fa-i2svg",Wt="data-fa-pseudo-element",Rn="data-fa-pseudo-element-pending",ae="data-prefix",re="data-icon",xe="fontawesome-i2svg",Ln="async",jn=["HTML","HEAD","STYLE","SCRIPT"],Ke=function(){try{return!0}catch{return!1}}(),h="classic",x="sharp",ie=[h,x];function mt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[h]}})}var ot=mt((bt={},N(bt,h,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),N(bt,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),bt)),st=mt((gt={},N(gt,h,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(gt,x,{solid:"fass",regular:"fasr",light:"fasl"}),gt)),ft=mt((ht={},N(ht,h,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(ht,x,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ht)),Fn=mt((yt={},N(yt,h,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(yt,x,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yt)),zn=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,qe="fa-layers-text",Dn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Yn=mt((xt={},N(xt,h,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(xt,x,{900:"fass",400:"fasr",300:"fasl"}),xt)),Qe=[1,2,3,4,5,6,7,8,9,10],$n=Qe.concat([11,12,13,14,15,16,17,18,19,20]),Un=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},lt=new Set;Object.keys(st[h]).map(lt.add.bind(lt));Object.keys(st[x]).map(lt.add.bind(lt));var Wn=[].concat(ie,ut(lt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(Qe.map(function(t){return"".concat(t,"x")})).concat($n.map(function(t){return"w-".concat(t)})),rt=$.FontAwesomeConfig||{};function Hn(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(y&&typeof y.querySelector=="function"){var Gn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Gn.forEach(function(t){var e=ee(t,2),n=e[0],a=e[1],r=Xn(Hn(n));r!=null&&(rt[a]=r)})}var Je={styleDefault:"solid",familyDefault:"classic",cssPrefix:Be,replacementClass:Ve,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rt.familyPrefix&&(rt.cssPrefix=rt.familyPrefix);var tt=u(u({},Je),rt);tt.autoReplaceSvg||(tt.observeMutations=!1);var d={};Object.keys(Je).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){tt[t]=n,it.forEach(function(a){return a(d)})},get:function(){return tt[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){tt.cssPrefix=e,it.forEach(function(n){return n(d)})},get:function(){return tt.cssPrefix}});$.FontAwesomeConfig=d;var it=[];function Bn(t){return it.push(t),function(){it.splice(it.indexOf(t),1)}}var D=Ut,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Vn(t){if(!(!t||!F)){var e=y.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=y.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return y.head.insertBefore(e,a),t}}var Kn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ct(){for(var t=12,e="";t-- >0;)e+=Kn[Math.random()*62|0];return e}function et(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function oe(t){return t.classList?et(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ze(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ze(t[n]),'" ')},"").trim()}function Ct(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function se(t){return t.size!==M.size||t.x!==M.x||t.y!==M.y||t.rotate!==M.rotate||t.flipX||t.flipY}function Qn(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Jn(t){var e=t.transform,n=t.width,a=n===void 0?Ut:n,r=t.height,i=r===void 0?Ut:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Ge?f+="translate(".concat(e.x/D-a/2,"em, ").concat(e.y/D-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/D,"em), calc(-50% + ").concat(e.y/D,"em)) "):f+="translate(".concat(e.x/D,"em, ").concat(e.y/D,"em) "),f+="scale(".concat(e.size/D*(e.flipX?-1:1),", ").concat(e.size/D*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Zn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function tn(){var t=Be,e=Ve,n=d.cssPrefix,a=d.replacementClass,r=Zn;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var ke=!1;function jt(){d.autoAddCss&&!ke&&(Vn(tn()),ke=!0)}var ta={mixout:function(){return{dom:{css:tn,insertCss:jt}}},hooks:function(){return{beforeDOMElementCreation:function(){jt()},beforeI2svg:function(){jt()}}}},L=$||{};L[R]||(L[R]={});L[R].styles||(L[R].styles={});L[R].hooks||(L[R].hooks={});L[R].shims||(L[R].shims=[]);var _=L[R],en=[],ea=function t(){y.removeEventListener("DOMContentLoaded",t),Pt=1,en.map(function(e){return e()})},Pt=!1;F&&(Pt=(y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState),Pt||y.addEventListener("DOMContentLoaded",ea));function na(t){F&&(Pt?setTimeout(t,0):en.push(t))}function dt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ze(t):"<".concat(e," ").concat(qn(a),">").concat(i.map(dt).join(""),"</").concat(e,">")}function we(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var aa=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Ft=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?aa(n,r):n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function ra(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Ht(t){var e=ra(t);return e.length===1?e[0].toString(16):null}function ia(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ae(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Xt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Ae(e);typeof _.hooks.addPack=="function"&&!r?_.hooks.addPack(t,Ae(e)):_.styles[t]=u(u({},_.styles[t]||{}),i),t==="fas"&&Xt("fa",e)}var kt,wt,At,q=_.styles,oa=_.shims,sa=(kt={},N(kt,h,Object.values(ft[h])),N(kt,x,Object.values(ft[x])),kt),fe=null,nn={},an={},rn={},on={},sn={},fa=(wt={},N(wt,h,Object.keys(ot[h])),N(wt,x,Object.keys(ot[x])),wt);function la(t){return~Wn.indexOf(t)}function ca(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!la(r)?r:null}var fn=function(){var e=function(i){return Ft(q,function(o,s,f){return o[f]=Ft(s,i,{}),o},{})};nn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),an=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),sn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in q||d.autoFetchSvg,a=Ft(oa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});rn=a.names,on=a.unicodes,fe=Tt(d.styleDefault,{family:d.familyDefault})};Bn(function(t){fe=Tt(t.styleDefault,{family:d.familyDefault})});fn();function le(t,e){return(nn[t]||{})[e]}function ua(t,e){return(an[t]||{})[e]}function B(t,e){return(sn[t]||{})[e]}function ln(t){return rn[t]||{prefix:null,iconName:null}}function ma(t){var e=on[t],n=le("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return fe}var ce=function(){return{prefix:null,iconName:null,rest:[]}};function Tt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?h:n,r=ot[a][t],i=st[a][t]||st[a][r],o=t in _.styles?t:null;return i||o||null}var Oe=(At={},N(At,h,Object.keys(ft[h])),N(At,x,Object.keys(ft[x])),At);function _t(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},N(e,h,"".concat(d.cssPrefix,"-").concat(h)),N(e,x,"".concat(d.cssPrefix,"-").concat(x)),e),o=null,s=h;(t.includes(i[h])||t.some(function(l){return Oe[h].includes(l)}))&&(s=h),(t.includes(i[x])||t.some(function(l){return Oe[x].includes(l)}))&&(s=x);var f=t.reduce(function(l,c){var m=ca(d.cssPrefix,c);if(q[c]?(c=sa[s].includes(c)?Fn[s][c]:c,o=c,l.prefix=c):fa[s].indexOf(c)>-1?(o=c,l.prefix=Tt(c,{family:s})):m?l.iconName=m:c!==d.replacementClass&&c!==i[h]&&c!==i[x]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var p=o==="fa"?ln(l.iconName):{},g=B(l.prefix,l.iconName);p.prefix&&(o=null),l.iconName=p.iconName||g||l.iconName,l.prefix=p.prefix||l.prefix,l.prefix==="far"&&!q.far&&q.fas&&!d.autoFetchSvg&&(l.prefix="fas")}return l},ce());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(q.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=B(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=U()||"fas"),f}var da=function(){function t(){Nn(this,t),this.definitions={}}return Sn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Xt(s,o[s]);var f=ft[h][s];f&&Xt(f,o[s]),fn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(m){typeof m=="string"&&(n[s][m]=l)}),n[s][f]=l}),n}}]),t}(),Ne=[],Q={},Z={},va=Object.keys(Z);function pa(t,e){var n=e.mixoutsTo;return Ne=t,Q={},Object.keys(Z).forEach(function(a){va.indexOf(a)===-1&&delete Z[a]}),Ne.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),St(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Q[o]||(Q[o]=[]),Q[o].push(i[o])})}a.provides&&a.provides(Z)}),n}function Gt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Q[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function K(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Q[t]||[];r.forEach(function(i){i.apply(null,n)})}function j(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Z[t]?Z[t].apply(null,e):void 0}function Bt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||U();if(e)return e=B(n,e)||e,we(cn.definitions,n,e)||we(_.styles,n,e)}var cn=new da,ba=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,K("noAuto")},ga={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(K("beforeI2svg",e),j("pseudoElements2svg",e),j("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,na(function(){ya({autoReplaceSvgRoot:n}),K("watch",e)})}},ha={icon:function(e){if(e===null)return null;if(St(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:B(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Tt(e[0]);return{prefix:a,iconName:B(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(zn))){var r=_t(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||U(),iconName:B(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=U();return{prefix:i,iconName:B(i,e)||e}}}},T={noAuto:ba,config:d,dom:ga,parse:ha,library:cn,findIconDefinition:Bt,toHtml:dt},ya=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?y:n;(Object.keys(_.styles).length>0||d.autoFetchSvg)&&F&&d.autoReplaceSvg&&T.dom.i2svg({node:a})};function Mt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return dt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(F){var a=y.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function xa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(se(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=Ct(u(u({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ka(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function ue(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,m=t.extra,p=t.watchable,g=p===void 0?!1:p,A=a.found?a:n,P=A.width,k=A.height,I=r==="fak",w=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(z){return m.classes.indexOf(z)===-1}).filter(function(z){return z!==""||!!z}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(P," ").concat(k)})},C=I&&!~m.classes.indexOf("fa-fw")?{width:"".concat(P/k*16*.0625,"em")}:{};g&&(O.attributes[V]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(c||ct())},children:[f]}),delete O.attributes.title);var S=u(u({},O),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:u(u({},C),m.styles)}),H=a.found&&n.found?j("generateAbstractMask",S)||{children:[],attributes:{}}:j("generateAbstractIcon",S)||{children:[],attributes:{}},X=H.children,Rt=H.attributes;return S.children=X,S.attributes=Rt,s?ka(S):xa(S)}function Se(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[V]="");var c=u({},o.styles);se(r)&&(c.transform=Jn({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var m=Ct(c);m.length>0&&(l.style=m);var p=[];return p.push({tag:"span",attributes:l,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function wa(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ct(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var zt=_.styles;function Vt(t){var e=t[0],n=t[1],a=t.slice(4),r=ee(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Aa={found:!1,width:512,height:512};function Oa(t,e){!Ke&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Kt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=U()),new Promise(function(a,r){if(j("missingIconAbstract"),n==="fa"){var i=ln(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&zt[e]&&zt[e][t]){var o=zt[e][t];return a(Vt(o))}Oa(t,e),a(u(u({},Aa),{},{icon:d.showMissingIcons&&t?j("missingIconAbstract")||{}:{}}))})}var Pe=function(){},qt=d.measurePerformance&&pt&&pt.mark&&pt.measure?pt:{mark:Pe,measure:Pe},at='FA "6.4.0"',Na=function(e){return qt.mark("".concat(at," ").concat(e," begins")),function(){return un(e)}},un=function(e){qt.mark("".concat(at," ").concat(e," ends")),qt.measure("".concat(at," ").concat(e),"".concat(at," ").concat(e," begins"),"".concat(at," ").concat(e," ends"))},me={begin:Na,end:un},Ot=function(){};function Ee(t){var e=t.getAttribute?t.getAttribute(V):null;return typeof e=="string"}function Sa(t){var e=t.getAttribute?t.getAttribute(ae):null,n=t.getAttribute?t.getAttribute(re):null;return e&&n}function Pa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ea(){if(d.autoReplaceSvg===!0)return Nt.replace;var t=Nt[d.autoReplaceSvg];return t||Nt.replace}function Ia(t){return y.createElementNS("http://www.w3.org/2000/svg",t)}function Ca(t){return y.createElement(t)}function mn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Ia:Ca:n;if(typeof t=="string")return y.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(mn(o,{ceFn:a}))}),r}function Ta(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Nt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(mn(r),n)}),n.getAttribute(V)===null&&d.keepOriginalSource){var a=y.createComment(Ta(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~oe(n).indexOf(d.replacementClass))return Nt.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return dt(s)}).join(`
`);n.setAttribute(V,""),n.innerHTML=o}};function Ie(t){t()}function dn(t,e){var n=typeof e=="function"?e:Ot;if(t.length===0)n();else{var a=Ie;d.mutateApproach===Ln&&(a=$.requestAnimationFrame||Ie),a(function(){var r=Ea(),i=me.begin("mutate");t.map(r),i(),n()})}}var de=!1;function vn(){de=!0}function Qt(){de=!1}var Et=null;function Ce(t){if(ye&&d.observeMutations){var e=t.treeCallback,n=e===void 0?Ot:e,a=t.nodeCallback,r=a===void 0?Ot:a,i=t.pseudoElementsCallback,o=i===void 0?Ot:i,s=t.observeMutationsRoot,f=s===void 0?y:s;Et=new ye(function(l){if(!de){var c=U();et(l).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ee(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ee(m.target)&&~Un.indexOf(m.attributeName))if(m.attributeName==="class"&&Sa(m.target)){var p=_t(oe(m.target)),g=p.prefix,A=p.iconName;m.target.setAttribute(ae,g||c),A&&m.target.setAttribute(re,A)}else Pa(m.target)&&r(m.target)})}}),F&&Et.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _a(){Et&&Et.disconnect()}function Ma(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Ra(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=_t(oe(t));return r.prefix||(r.prefix=U()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ua(r.prefix,t.innerText)||le(r.prefix,Ht(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function La(t){var e=et(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||ct()):(e["aria-hidden"]="true",e.focusable="false")),e}function ja(){return{iconName:null,title:null,titleId:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Te(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ra(t),a=n.iconName,r=n.prefix,i=n.rest,o=La(t),s=Gt("parseNodeAttributes",{},t),f=e.styleParser?Ma(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Fa=_.styles;function pn(t){var e=d.autoReplaceSvg==="nest"?Te(t,{styleParser:!1}):Te(t);return~e.extra.classes.indexOf(qe)?j("generateLayersText",t,e):j("generateSvgReplacementMutation",t,e)}var W=new Set;ie.map(function(t){W.add("fa-".concat(t))});Object.keys(ot[h]).map(W.add.bind(W));Object.keys(ot[x]).map(W.add.bind(W));W=ut(W);function _e(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var n=y.documentElement.classList,a=function(m){return n.add("".concat(xe,"-").concat(m))},r=function(m){return n.remove("".concat(xe,"-").concat(m))},i=d.autoFetchSvg?W:ie.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Fa));i.includes("fa")||i.push("fa");var o=[".".concat(qe,":not([").concat(V,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(V,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=et(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=me.begin("onTree"),l=s.reduce(function(c,m){try{var p=pn(m);p&&c.push(p)}catch(g){Ke||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,m){Promise.all(l).then(function(p){dn(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(p){f(),m(p)})})}function za(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;pn(t).then(function(n){n&&dn([n],e)})}function Da(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Bt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Bt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Ya=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?M:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,m=n.title,p=m===void 0?null:m,g=n.titleId,A=g===void 0?null:g,P=n.classes,k=P===void 0?[]:P,I=n.attributes,w=I===void 0?{}:I,O=n.styles,C=O===void 0?{}:O;if(e){var S=e.prefix,H=e.iconName,X=e.icon;return Mt(u({type:"icon"},e),function(){return K("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(p?w["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(A||ct()):(w["aria-hidden"]="true",w.focusable="false")),ue({icons:{main:Vt(X),mask:f?Vt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:u(u({},M),r),symbol:o,title:p,maskId:c,titleId:A,extra:{attributes:w,styles:C,classes:k}})})}},$a={mixout:function(){return{icon:Da(Ya)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_e,n.nodeCallback=za,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?y:a,i=n.callback,o=i===void 0?function(){}:i;return _e(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,m=a.maskId,p=a.extra;return new Promise(function(g,A){Promise.all([Kt(r,s),c.iconName?Kt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(P){var k=ee(P,2),I=k[0],w=k[1];g([n,ue({icons:{main:I,mask:w},prefix:s,iconName:r,transform:f,symbol:l,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(A)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=Ct(s);f.length>0&&(r.style=f);var l;return se(o)&&(l=j("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Ua={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Mt({type:"layer"},function(){K("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(ut(i)).join(" ")},children:o}]})}}}},Wa={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,m=c===void 0?{}:c;return Mt({type:"counter",content:n},function(){return K("beforeDOMElementCreation",{content:n,params:a}),wa({content:n.toString(),title:i,extra:{attributes:l,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(ut(s))}})})}}}},Ha={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?M:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,m=c===void 0?{}:c,p=a.styles,g=p===void 0?{}:p;return Mt({type:"text",content:n},function(){return K("beforeDOMElementCreation",{content:n,params:a}),Se({content:n,transform:u(u({},M),i),title:s,extra:{attributes:m,styles:g,classes:["".concat(d.cssPrefix,"-layers-text")].concat(ut(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Ge){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Se({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Xa=new RegExp('"',"ug"),Me=[1105920,1112319];function Ga(t){var e=t.replace(Xa,""),n=ia(e,0),a=n>=Me[0]&&n<=Me[1],r=e.length===2?e[0]===e[1]:!1;return{value:Ht(r?e[0]:e),isSecondary:a||r}}function Re(t,e){var n="".concat(Rn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=et(t.children),o=i.filter(function(X){return X.getAttribute(Wt)===e})[0],s=$.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Dn),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(f[2])?x:h,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?st[p][f[2].toLowerCase()]:Yn[p][l],A=Ga(m),P=A.value,k=A.isSecondary,I=f[0].startsWith("FontAwesome"),w=le(g,P),O=w;if(I){var C=ma(P);C.iconName&&C.prefix&&(w=C.iconName,g=C.prefix)}if(w&&!k&&(!o||o.getAttribute(ae)!==g||o.getAttribute(re)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var S=ja(),H=S.extra;H.attributes[Wt]=e,Kt(w,g).then(function(X){var Rt=ue(u(u({},S),{},{icons:{main:X,mask:ce()},prefix:g,iconName:O,extra:H,watchable:!0})),z=y.createElement("svg");e==="::before"?t.insertBefore(z,t.firstChild):t.appendChild(z),z.outerHTML=Rt.map(function(wn){return dt(wn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ba(t){return Promise.all([Re(t,"::before"),Re(t,"::after")])}function Va(t){return t.parentNode!==document.head&&!~jn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Wt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Le(t){if(F)return new Promise(function(e,n){var a=et(t.querySelectorAll("*")).filter(Va).map(Ba),r=me.begin("searchPseudoElements");vn(),Promise.all(a).then(function(){r(),Qt(),e()}).catch(function(){r(),Qt(),n()})})}var Ka={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Le,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?y:a;d.searchPseudoElements&&Le(r)}}},je=!1,qa={mixout:function(){return{dom:{unwatch:function(){vn(),je=!0}}}},hooks:function(){return{bootstrap:function(){Ce(Gt("mutationObserverCallbacks",{}))},noAuto:function(){_a()},watch:function(n){var a=n.observeMutationsRoot;je?Qt():Ce(Gt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Fe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Qa={mixout:function(){return{parse:{transform:function(n){return Fe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Fe(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(l," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),g.path)}]}]}}}},Dt={x:0,y:0,width:"100%",height:"100%"};function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ja(t){return t.tag==="g"?t.children:[t]}var Za={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?_t(r.split(" ").map(function(o){return o.trim()})):ce();return i.prefix||(i.prefix=U()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,m=o.width,p=o.icon,g=Qn({transform:f,containerWidth:m,iconWidth:l}),A={tag:"rect",attributes:u(u({},Dt),{},{fill:"white"})},P=c.children?{children:c.children.map(ze)}:{},k={tag:"g",attributes:u({},g.inner),children:[ze(u({tag:c.tag,attributes:u(u({},c.attributes),g.path)},P))]},I={tag:"g",attributes:u({},g.outer),children:[k]},w="mask-".concat(s||ct()),O="clip-".concat(s||ct()),C={tag:"mask",attributes:u(u({},Dt),{},{id:w,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[A,I]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:Ja(p)},C]};return a.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(w,")")},Dt)}),{children:a,attributes:r}}}},tr={provides:function(e){var n=!1;$.matchMedia&&(n=$.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},er={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},nr=[ta,$a,Ua,Wa,Ha,Ka,qa,Qa,Za,tr,er];pa(nr,{mixoutsTo:T});T.noAuto;T.config;T.library;T.dom;var Jt=T.parse;T.findIconDefinition;T.toHtml;var ar=T.icon;T.layer;T.text;T.counter;var bn={exports:{}},rr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ir=rr,or=ir;function gn(){}function hn(){}hn.resetWarningCache=gn;var sr=function(){function t(a,r,i,o,s,f){if(f!==or){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:hn,resetWarningCache:gn};return n.PropTypes=n,n};bn.exports=sr();var fr=bn.exports;const b=An(fr);function De(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?De(Object(n),!0).forEach(function(a){J(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):De(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function It(t){"@babel/helpers - typeof";return It=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},It(t)}function J(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function cr(t,e){if(t==null)return{};var n=lr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function Zt(t){return ur(t)||mr(t)||dr(t)||vr()}function ur(t){if(Array.isArray(t))return te(t)}function mr(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dr(t,e){if(t){if(typeof t=="string")return te(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return te(t,e)}}function te(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function vr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,i=t.bounce,o=t.shake,s=t.flash,f=t.spin,l=t.spinPulse,c=t.spinReverse,m=t.pulse,p=t.fixedWidth,g=t.inverse,A=t.border,P=t.listItem,k=t.flip,I=t.size,w=t.rotation,O=t.pull,C=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":o,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":m,"fa-fw":p,"fa-inverse":g,"fa-border":A,"fa-li":P,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},J(e,"fa-".concat(I),typeof I<"u"&&I!==null),J(e,"fa-rotate-".concat(w),typeof w<"u"&&w!==null&&w!==0),J(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),J(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function br(t){return t=t-0,t===t}function yn(t){return br(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var gr=["style"];function hr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function yr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=yn(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?e[hr(r)]=i:e[r]=i,e},{})}function xn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return xn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,l){var c=e.attributes[l];switch(l){case"class":f.attrs.className=c,delete e.attributes.class;break;case"style":f.attrs.style=yr(c);break;default:l.indexOf("aria-")===0||l.indexOf("data-")===0?f.attrs[l.toLowerCase()]=c:f.attrs[yn(l)]=c}return f},{attrs:{}}),i=n.style,o=i===void 0?{}:i,s=cr(n,gr);return r.attrs.style=Y(Y({},r.attrs.style),o),t.apply(void 0,[e.tag,Y(Y({},r.attrs),s)].concat(Zt(a)))}var kn=!1;try{kn=!0}catch{}function xr(){if(!kn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ye(t){if(t&&It(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Jt.icon)return Jt.icon(t);if(t===null)return null;if(t&&It(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Yt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?J({},t,e):{}}var vt=$e.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,i=t.className,o=t.title,s=t.titleId,f=t.maskId,l=Ye(n),c=Yt("classes",[].concat(Zt(pr(t)),Zt(i.split(" ")))),m=Yt("transform",typeof t.transform=="string"?Jt.transform(t.transform):t.transform),p=Yt("mask",Ye(a)),g=ar(l,Y(Y(Y(Y({},c),m),p),{},{symbol:r,title:o,titleId:s,maskId:f}));if(!g)return xr("Could not find icon",l),null;var A=g.abstract,P={ref:e};return Object.keys(t).forEach(function(k){vt.defaultProps.hasOwnProperty(k)||(P[k]=t[k])}),kr(A[0],P)});vt.displayName="FontAwesomeIcon";vt.propTypes={beat:b.bool,border:b.bool,beatFade:b.bool,bounce:b.bool,className:b.string,fade:b.bool,flash:b.bool,mask:b.oneOfType([b.object,b.array,b.string]),maskId:b.string,fixedWidth:b.bool,inverse:b.bool,flip:b.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.oneOfType([b.object,b.array,b.string]),listItem:b.bool,pull:b.oneOf(["right","left"]),pulse:b.bool,rotation:b.oneOf([0,90,180,270]),shake:b.bool,size:b.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.bool,spinPulse:b.bool,spinReverse:b.bool,symbol:b.oneOfType([b.bool,b.string]),title:b.string,titleId:b.string,transform:b.oneOfType([b.string,b.object]),swapOpacity:b.bool};vt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var kr=xn.bind(null,$e.createElement),wr={prefix:"fas",iconName:"mug-saucer",icon:[640,512,["coffee"],"f0f4","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Ar=wr;const Sr=({organizations:t,query:e})=>{const[n,a]=Lt.useState(""),[r,i]=Lt.useState("name");Lt.useEffect(()=>{const s=`${e.filter}`;s=="name"?(i(s),a(e.name)):s=="email"?(i(s),a(e.email)):s=="address"?(i(s),a(e.address)):s=="id"?(i(s),a(e.id)):i("all")},[]);const o=()=>{var s;(s=document.getElementById("CreateNewOrgModel"))==null||s.showModal()};return E("div",{className:" p-4",children:[E("div",{className:"flex-r-b",children:[E("div",{className:"join my-5 border-2 border-primary",children:[v("div",{children:E("div",{className:"input-group flex-r-c",children:[v("input",{value:n,onChange:s=>a(s.target.value),className:"input input-bordered join-item",placeholder:"Search..."}),v("button",{onClick:()=>a(""),className:"btn bg-base-200 btn-xs hover:bg-base-200",children:v(vt,{icon:Ar})})]})}),E("select",{className:"select select-bordered join-item",value:r,onChange:s=>i(s.target.value),children:[v("option",{disabled:!0,selected:!0,value:"all",children:"Search By"}),v("option",{value:"name",children:"Name"}),v("option",{value:"id",children:"ID"}),v("option",{value:"email",children:"Email"}),v("option",{value:"username",children:"Username"})]}),v("div",{className:"indicator",children:v(nt,{href:route("organization.index",{name:r=="name"?n:"",email:r=="email"?n:"",username:r=="username"?n:"",id:r=="id"?n:"",filter:r}),className:"btn join-item btn-primary",children:"Search"})})]}),v("div",{}),v(nt,{href:route("organization.create"),className:"btn btn-primary m-4 cursor-pointer",onClick:o,children:"Add New"})]}),v("div",{children:E("table",{className:"table table-sm bg-base-100 shadow-md",children:[v("thead",{children:E("tr",{className:"py-2 px-4 bg-primary text-sm font-extrabold m-1 text-base-200",children:[v("th",{children:"Name"}),v("th",{className:"",children:"Username"}),v("th",{children:"Email"}),v("th",{children:"Address"}),v("th",{children:"ID"}),v("th",{})]})}),E("tbody",{children:[t.data.map((s,f)=>E("tr",{className:"cursor-pointer hover",children:[v("td",{children:E("div",{className:"flex items-center space-x-3 ml-3 my-3",children:[v("div",{className:"avatar",children:v("div",{className:"mask mask-squircle w-10 h-10",children:v("img",{src:s.logo,alt:"Avatar"})})}),v("div",{children:v("div",{className:"font-bold",children:s.name})})]})}),v("td",{className:"py-2 px-4",children:s.users.username}),v("td",{className:"py-2 px-4",children:s.users.email}),v("td",{className:"py-2 px-4",children:s.users.address}),v("td",{className:"py-2 px-4",children:s.id}),v("td",{className:"py-2 px-4",children:v("div",{className:"w-full flex-c-c",children:v(nt,{href:route("organization.show",{id:s.id}),children:v(On,{className:"w-6 h-6 hover:opacity-60"})})})})]},f)),E("tr",{className:"",children:[E("td",{className:"py-4 text-lg font-extrabold bg-primary text-base-100",children:[E("b",{className:"",children:[t.from," to ",t.to]})," of ",t.total]}),v("td",{className:"bg-primary"}),v("td",{className:"bg-primary"}),v("td",{className:"bg-primary"}),v("td",{className:"bg-primary"}),v("td",{className:"py-4 text-lg font-extrabold bg-primary pr-6",children:E("div",{className:"join",children:[t.prev_page_url?v(nt,{href:route("organization.index",{page:t.current_page-1}),children:v("button",{className:"join-item btn btn-sm",children:"«"})}):v("button",{className:"join-item btn btn-sm",children:"«"}),E("button",{className:"join-item btn btn-sm",children:["Page ",t.current_page]}),t.next_page_url?v(nt,{href:route("organization.index",{page:t.current_page+1}),children:v("button",{className:"join-item btn btn-sm",children:"»"})}):v("button",{className:"join-item btn btn-sm",children:"»"})]})})]})]})]})})]})};export{Sr as default};
