webpackJsonp([4],{152:function(t,o,e){var n=e(11)(e(193),e(226),function(t){e(214)},"data-v-4d5d503d",null);t.exports=n.exports},162:function(t,o,e){"use strict";o.__esModule=!0;var n,r=e(70),i=(n=r)&&n.__esModule?n:{default:n};o.default=function(t){return function(){var o=t.apply(this,arguments);return new i.default(function(t,e){return function n(r,s){try{var l=o[r](s),a=l.value}catch(t){return void e(t)}if(!l.done)return i.default.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}("next")})}}},163:function(t,o,e){t.exports=e(164)},164:function(t,o,e){var n=function(){return this}()||Function("return this")(),r=n.regeneratorRuntime&&Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime")>=0,i=r&&n.regeneratorRuntime;if(n.regeneratorRuntime=void 0,t.exports=e(165),r)n.regeneratorRuntime=i;else try{delete n.regeneratorRuntime}catch(t){n.regeneratorRuntime=void 0}},165:function(t,o){!function(o){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag",c="object"==typeof t,p=o.regeneratorRuntime;if(p)c&&(t.exports=p);else{(p=o.regeneratorRuntime=c?t.exports:{}).wrap=b;var u="suspendedStart",d="suspendedYield",h="executing",m="completed",f={},w={};w[s]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(_([])));g&&g!==n&&r.call(g,s)&&(w=g);var y=x.prototype=T.prototype=Object.create(w);S.prototype=y.constructor=x,x.constructor=S,x[a]=S.displayName="GeneratorFunction",p.isGeneratorFunction=function(t){var o="function"==typeof t&&t.constructor;return!!o&&(o===S||"GeneratorFunction"===(o.displayName||o.name))},p.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},p.awrap=function(t){return{__await:t}},L(U.prototype),U.prototype[l]=function(){return this},p.AsyncIterator=U,p.async=function(t,o,e,n){var r=new U(b(t,o,e,n));return p.isGeneratorFunction(o)?r:r.next().then(function(t){return t.done?t.value:r.next()})},L(y),y[a]="Generator",y[s]=function(){return this},y.toString=function(){return"[object Generator]"},p.keys=function(t){var o=[];for(var e in t)o.push(e);return o.reverse(),function e(){for(;o.length;){var n=o.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},p.values=_,B.prototype={constructor:B,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var o in this)"t"===o.charAt(0)&&r.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var o=this;function n(n,r){return l.type="throw",l.arg=t,o.next=n,r&&(o.method="next",o.arg=e),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var s=this.tryEntries[i],l=s.completion;if("root"===s.tryLoc)return n("end");if(s.tryLoc<=this.prev){var a=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(a&&c){if(this.prev<s.catchLoc)return n(s.catchLoc,!0);if(this.prev<s.finallyLoc)return n(s.finallyLoc)}else if(a){if(this.prev<s.catchLoc)return n(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return n(s.finallyLoc)}}}},abrupt:function(t,o){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=o&&o<=i.finallyLoc&&(i=null);var s=i?i.completion:{};return s.type=t,s.arg=o,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(s)},complete:function(t,o){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&o&&(this.next=o),f},finish:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),C(e),f}},catch:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var r=n.arg;C(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,o,n){return this.delegate={iterator:_(t),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=e),f}}}function b(t,o,e,n){var r=o&&o.prototype instanceof T?o:T,i=Object.create(r.prototype),s=new B(n||[]);return i._invoke=function(t,o,e){var n=u;return function(r,i){if(n===h)throw new Error("Generator is already running");if(n===m){if("throw"===r)throw i;return P()}for(e.method=r,e.arg=i;;){var s=e.delegate;if(s){var l=E(s,e);if(l){if(l===f)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===u)throw n=m,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=h;var a=D(t,o,e);if("normal"===a.type){if(n=e.done?m:d,a.arg===f)continue;return{value:a.arg,done:e.done}}"throw"===a.type&&(n=m,e.method="throw",e.arg=a.arg)}}}(t,e,s),i}function D(t,o,e){try{return{type:"normal",arg:t.call(o,e)}}catch(t){return{type:"throw",arg:t}}}function T(){}function S(){}function x(){}function L(t){["next","throw","return"].forEach(function(o){t[o]=function(t){return this._invoke(o,t)}})}function U(t){var o;this._invoke=function(e,n){function i(){return new Promise(function(o,i){!function o(e,n,i,s){var l=D(t[e],t,n);if("throw"!==l.type){var a=l.arg,c=a.value;return c&&"object"==typeof c&&r.call(c,"__await")?Promise.resolve(c.__await).then(function(t){o("next",t,i,s)},function(t){o("throw",t,i,s)}):Promise.resolve(c).then(function(t){a.value=t,i(a)},s)}s(l.arg)}(e,n,o,i)})}return o=o?o.then(i,i):i()}}function E(t,o){var n=t.iterator[o.method];if(n===e){if(o.delegate=null,"throw"===o.method){if(t.iterator.return&&(o.method="return",o.arg=e,E(t,o),"throw"===o.method))return f;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=D(n,t.iterator,o.arg);if("throw"===r.type)return o.method="throw",o.arg=r.arg,o.delegate=null,f;var i=r.arg;return i?i.done?(o[t.resultName]=i.value,o.next=t.nextLoc,"return"!==o.method&&(o.method="next",o.arg=e),o.delegate=null,f):i:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,f)}function k(t){var o={tryLoc:t[0]};1 in t&&(o.catchLoc=t[1]),2 in t&&(o.finallyLoc=t[2],o.afterLoc=t[3]),this.tryEntries.push(o)}function C(t){var o=t.completion||{};o.type="normal",delete o.arg,t.completion=o}function B(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function _(t){if(t){var o=t[s];if(o)return o.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function o(){for(;++n<t.length;)if(r.call(t,n))return o.value=t[n],o.done=!1,o;return o.value=e,o.done=!0,o};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}}(function(){return this}()||Function("return this")())},166:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(174),r=e.n(n),i=e(171);e.n(i);o.default={name:"MeScrollVue",data:function(){return{mescroll:null,lastScrollTop:0,lastBounce:null}},props:{up:Object,down:Object},mounted:function(){this.mescroll=new r.a(this.$refs.mescroll,{up:this.up,down:this.down}),this.$emit("init",this.mescroll)},methods:{beforeRouteEnter:function(){var t=this;this.mescroll&&(this.lastScrollTop&&(this.mescroll.setScrollTop(this.lastScrollTop),setTimeout(function(){t.mescroll.setTopBtnFadeDuration(0)},16)),null!=this.lastBounce&&this.mescroll.setBounce(this.lastBounce))},beforeRouteLeave:function(){this.mescroll&&(this.lastScrollTop=this.mescroll.getScrollTop(),this.mescroll.hideTopBtn(0),this.lastBounce=this.mescroll.optUp.isBounce,this.mescroll.setBounce(!0))}}}},168:function(t,o,e){(t.exports=e(145)(!1)).push([t.i,"/*!\n * version 1.4.1 MIT\n * 2019-2-1 wenju\n * http://www.mescroll.com\n */body,html{height:100%}body{-webkit-overflow-scrolling:touch}.mescroll{width:100%;height:100%;overflow-y:auto}.mescroll-hardware{-webkit-transform:translateZ(0);-webkit-transform-style:preserve-3d;-webkit-backface-visibility:hidden;-webkit-perspective:1000}.mescroll-downwarp{position:relative;width:100%;height:0;overflow:hidden;text-align:center}.mescroll-downwarp-reset{-webkit-transition:height .3s;transition:height .3s}.mescroll-downwarp .downwarp-content{position:absolute;left:0;bottom:0;width:100%;min-height:30px;padding:10px 0}.mescroll-upwarp{min-height:30px;padding:15px 0;text-align:center;visibility:hidden}.mescroll-downwarp .downwarp-tip,.mescroll-upwarp .upwarp-nodata,.mescroll-upwarp .upwarp-tip{display:inline-block;font-size:12px;color:gray;vertical-align:middle}.mescroll-downwarp .downwarp-tip,.mescroll-upwarp .upwarp-tip{margin-left:8px}.mescroll-downwarp .downwarp-progress,.mescroll-upwarp .upwarp-progress{display:inline-block;width:16px;height:16px;border-radius:50%;border:1px solid gray;border-bottom-color:transparent;vertical-align:middle}.mescroll-rotate{-webkit-animation:mescrollRotate .6s linear infinite;animation:mescrollRotate .6s linear infinite}@-webkit-keyframes mescrollRotate{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes mescrollRotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.mescroll-empty{width:100%;padding-top:20px;text-align:center}.mescroll-empty .empty-icon{width:45%}.mescroll-empty .empty-tip{margin-top:6px;font-size:14px;color:gray}.mescroll-empty .empty-btn{max-width:50%;margin:20px auto;padding:10px;border:1px solid #65aadd;border-radius:6px;background-color:#fff;color:#65aadd}.mescroll-empty .empty-btn:active{opacity:.75}.mescroll-totop{z-index:9990;position:fixed;right:10px;bottom:30px;width:36px;height:36px;border-radius:50%;opacity:0}.mescroll-fade-in,.mescroll-lazy-in{-webkit-animation:mescrollFadeIn .5s linear forwards;animation:mescrollFadeIn .5s linear forwards}@-webkit-keyframes mescrollFadeIn{0%{opacity:0}to{opacity:1}}@keyframes mescrollFadeIn{0%{opacity:0}to{opacity:1}}.mescroll-fade-out{pointer-events:none;-webkit-animation:mescrollFadeOut .5s linear forwards;animation:mescrollFadeOut .5s linear forwards}@-webkit-keyframes mescrollFadeOut{0%{opacity:1}to{opacity:0}}@keyframes mescrollFadeOut{0%{opacity:1}to{opacity:0}}.mescroll-bar::-webkit-scrollbar-track{background-color:transparent}.mescroll-bar::-webkit-scrollbar{width:6px}.mescroll-bar::-webkit-scrollbar-thumb{border-radius:6px;background-color:#ccc}.mescroll-bar::-webkit-scrollbar-thumb:hover{background-color:#aaa}",""])},170:function(t,o,e){(t.exports=e(145)(!1)).push([t.i,"",""])},171:function(t,o,e){var n=e(168);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(146)("d942d7b6",n,!0,{})},173:function(t,o,e){var n=e(170);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(146)("363265d2",n,!0,{})},174:function(t,o,e){var n,r;
/*!
 * version 1.4.1 MIT
 * 2019-2-1 wenju
 * http://www.mescroll.com
 */void 0===(r="function"==typeof(n=function(){var t=function(t,o){var e=this;if(e.version="1.4.0",e.isScrollBody=!t||"body"===t,e.scrollDom=e.isScrollBody?document.body:e.getDomById(t),e.scrollDom){e.options=o||{};var n=navigator.userAgent,r=!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=void 0===window.orientation,s=n.indexOf("Android")>-1||n.indexOf("Adr")>-1;e.os={ios:r,pc:i,android:s},e.isDownScrolling=!1,e.isUpScrolling=!1;var l=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout(function(){e.optDown.use&&e.optDown.auto&&l&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()},30)}};return t.prototype.extendDownScroll=function(o){t.extend(o,{use:!0,auto:!0,autoShowLoading:!1,isLock:!1,isBoth:!1,offset:80,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,hardwareClass:"mescroll-hardware",mustToTop:!1,warpId:null,warpClass:"mescroll-downwarp",resetClass:"mescroll-downwarp-reset",textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",htmlContent:'<p class="downwarp-progress"></p><p class="downwarp-tip"></p>',inited:function(t,o){t.downTipDom=o.getElementsByClassName("downwarp-tip")[0],t.downProgressDom=o.getElementsByClassName("downwarp-progress")[0]},inOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textInOffset),t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},outOffset:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textOutOffset)},onMoving:function(t,o,e){if(t.downProgressDom){var n=360*o;t.downProgressDom.style.webkitTransform="rotate("+n+"deg)",t.downProgressDom.style.transform="rotate("+n+"deg)"}},beforeLoading:function(t,o){return!1},showLoading:function(t){t.downTipDom&&(t.downTipDom.innerHTML=t.optDown.textLoading),t.downProgressDom&&t.downProgressDom.classList.add("mescroll-rotate")},afterLoading:function(t){return 0},callback:function(t){t.resetUpScroll()}})},t.prototype.extendUpScroll=function(o){var e=this.os.pc;t.extend(o,{use:!0,auto:!0,isLock:!1,isBoth:!1,isBounce:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:100,toTop:{warpId:null,src:null,html:null,offset:1e3,warpClass:"mescroll-totop",showClass:"mescroll-fade-in",hideClass:"mescroll-fade-out",fadeDuration:.5,duration:300,supportTap:!1,btnClick:null},loadFull:{use:!1,delay:500},empty:{warpId:null,icon:null,tip:"暂无相关数据~",btntext:"",btnClick:null,supportTap:!1},clearId:null,clearEmptyId:null,hardwareClass:"mescroll-hardware",warpId:null,warpClass:"mescroll-upwarp",htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',htmlNodata:'<p class="upwarp-nodata">-- END --</p>',inited:function(t,o){},showLoading:function(t,o){o.innerHTML=t.optUp.htmlLoading},showNoMore:function(t,o){o.innerHTML=t.optUp.htmlNodata},onScroll:null,scrollbar:{use:e,barClass:"mescroll-bar"},lazyLoad:{use:!1,attr:"imgurl",showClass:"mescroll-lazy-in",delay:500,offset:200}})},t.extend=function(o,e){if(!o)return e;for(var n in e)null==o[n]?o[n]=e[n]:"object"==typeof o[n]&&t.extend(o[n],e[n]);return o},t.prototype.initDownScroll=function(){var t=this;if(t.optDown=t.options.down||{},t.extendDownScroll(t.optDown),t.touchstartEvent=function(o){t.isScrollTo&&t.preventDefault(o),t.startPoint=t.getPoint(o),t.lastPoint=t.startPoint,t.maxTouchmoveY=t.getBodyHeight()-t.optDown.bottomOffset,t.inTouchend=!1;var e=t.getScrollTop();t.isKeepTop=0===e,t.os.pc&&e<=0&&(t.scrollDom.addEventListener("mousemove",t.touchmoveEvent,{passive:!1}),document.ondragstart=function(){return!1})},t.scrollDom.addEventListener("mousedown",t.touchstartEvent),t.scrollDom.addEventListener("touchstart",t.touchstartEvent),t.touchmoveEvent=function(o){if(t.startPoint){var e=t.getScrollTop();e>0&&(t.isKeepTop=!1);var n=t.getPoint(o),r=n.y-t.startPoint.y;if(r>0){if(e<=0&&(t.preventDefault(o),t.optDown.use&&!t.inTouchend&&!t.isDownScrolling&&!t.optDown.isLock&&(!t.isUpScrolling||t.isUpScrolling&&t.optUp.isBoth))){if(t.optDown.mustToTop&&!t.isKeepTop)return;var i=Math.abs(t.lastPoint.x-n.x),s=Math.abs(t.lastPoint.y-n.y),l=Math.sqrt(i*i+s*s);if(0!==l)if(Math.asin(s/l)/Math.PI*180<t.optDown.minAngle)return;if(t.maxTouchmoveY>0&&n.y>=t.maxTouchmoveY)return t.inTouchend=!0,void t.touchendEvent();var a=n.y-t.lastPoint.y;t.downHight||(t.downHight=0),t.downHight<t.optDown.offset?(1!==t.movetype&&(t.movetype=1,t.optDown.inOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=a*t.optDown.inOffsetRate):(2!==t.movetype&&(t.movetype=2,t.optDown.outOffset(t),t.downwarp.classList.remove(t.optDown.resetClass),t.isMoveDown=!0,t.os.ios&&!t.isKeepTop&&(t.scrollDom.classList.add(t.optDown.hardwareClass),t.scrollDom.style.webkitOverflowScrolling="auto",t.isSetScrollAuto=!0)),t.downHight+=a>0?a*t.optDown.outOffsetRate:a),t.downwarp.style.height=t.downHight+"px";var c=t.downHight/t.optDown.offset;t.optDown.onMoving(t,c,t.downHight)}}else if(r<0){var p=t.getScrollHeight(),u=t.getClientHeight(),d=p-u-e;!t.optUp.isBounce&&d<=0&&t.preventDefault(o),t.optUp.use&&!t.optUp.isLock&&t.optUp.hasNext&&!t.isUpScrolling&&(!t.isDownScrolling||t.isDownScrolling&&t.optDown.isBoth)&&(u+t.optUp.offset>=p||d<=0)&&t.triggerUpScroll()}t.lastPoint=n}},t.scrollDom.addEventListener("touchmove",t.touchmoveEvent,{passive:!1}),t.touchendEvent=function(){t.optDown.use&&t.isMoveDown&&(t.downHight>=t.optDown.offset?t.triggerDownScroll():(t.downwarp.classList.add(t.optDown.resetClass),t.downHight=0,t.downwarp.style.height=0),t.isSetScrollAuto&&(t.scrollDom.style.webkitOverflowScrolling="touch",t.scrollDom.classList.remove(t.optDown.hardwareClass),t.isSetScrollAuto=!1),t.movetype=0,t.isMoveDown=!1),t.os.pc&&(t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),document.ondragstart=function(){return!0})},t.scrollDom.addEventListener("mouseup",t.touchendEvent),t.scrollDom.addEventListener("mouseleave",t.touchendEvent),t.scrollDom.addEventListener("touchend",t.touchendEvent),t.scrollDom.addEventListener("touchcancel",t.touchendEvent),t.optDown.use){t.downwarp=document.createElement("div"),t.downwarp.className=t.optDown.warpClass,t.downwarp.innerHTML='<div class="downwarp-content">'+t.optDown.htmlContent+"</div>";var o=t.optDown.warpId?t.getDomById(t.optDown.warpId):t.scrollDom;t.optDown.warpId&&o?o.appendChild(t.downwarp):(o||(o=t.scrollDom),o.insertBefore(t.downwarp,t.scrollDom.firstChild)),setTimeout(function(){t.optDown.inited(t,t.downwarp)},0)}},t.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()},t.prototype.getPoint=function(t){return{x:t.touches?t.touches[0].pageX:t.clientX,y:t.touches?t.touches[0].pageY:t.clientY}},t.prototype.triggerDownScroll=function(){this.optDown.beforeLoading(this,this.downwarp)||(this.showDownScroll(),this.optDown.callback&&this.optDown.callback(this))},t.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.showLoading(this),this.downHight=this.optDown.offset,this.downwarp.classList.add(this.optDown.resetClass),this.downwarp.style.height=this.optDown.offset+"px"},t.prototype.endDownScroll=function(){var t=this,o=function(){t.downHight=0,t.downwarp.style.height=0,t.isDownScrolling=!1,t.downProgressDom&&t.downProgressDom.classList.remove("mescroll-rotate")},e=t.optDown.afterLoading(t);"number"==typeof e&&e>0?setTimeout(o,e):o()},t.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},t.prototype.initUpScroll=function(){var t,o=this;(o.optUp=o.options.up||{use:!1},o.extendUpScroll(o.optUp),o.optUp.scrollbar.use&&o.scrollDom.classList.add(o.optUp.scrollbar.barClass),o.optUp.isBounce||o.setBounce(!1),!1!==o.optUp.use)&&(o.optUp.hasNext=!0,o.upwarp=document.createElement("div"),o.upwarp.className=o.optUp.warpClass,o.optUp.warpId&&(t=o.getDomById(o.optUp.warpId)),t||(t=o.scrollDom),t.appendChild(o.upwarp),o.preScrollY=0,o.lazyStartTime=(new Date).getTime(),o.lazyTag="mescroll-lazying",o.scrollEvent=function(){var t=o.getScrollTop(),e=t-o.preScrollY>0;(o.preScrollY=t,!o.isUpScrolling&&(!o.isDownScrolling||o.isDownScrolling&&o.optDown.isBoth))&&(!o.optUp.isLock&&o.optUp.hasNext&&o.getScrollHeight()-o.getClientHeight()-t<=o.optUp.offset&&e&&o.triggerUpScroll());var n=o.optUp.toTop;if((n.src||n.html)&&(t>=n.offset?o.showTopBtn():o.hideTopBtn()),o.optUp.lazyLoad.use){var r=(new Date).getTime();o.lazyTimer&&clearTimeout(o.lazyTimer),r-o.lazyStartTime>=o.optUp.lazyLoad.delay?(o.lazyStartTime=r,o.lazyLoad(0)):o.lazyTimer=o.lazyLoad()}o.optUp.onScroll&&o.optUp.onScroll(o,t,e)},o.isScrollBody?window.addEventListener("scroll",o.scrollEvent):o.scrollDom.addEventListener("scroll",o.scrollEvent),setTimeout(function(){o.optUp.inited(o,o.upwarp)},0))},t.prototype.setBounce=function(t){!this.isScrollBody&&this.os.ios&&(!1===t?(this.optUp.isBounce=!1,window.addEventListener("touchmove",this.bounceTouchmove,{passive:!1})):(this.optUp.isBounce=!0,window.removeEventListener("touchmove",this.bounceTouchmove)))},t.prototype.bounceTouchmove=function(t){for(var o=this,e=t.target,n=!0;e!==document.body&&e!==document;){var r=e.classList;if(r){if(r.contains("mescroll")||r.contains("mescroll-touch")){n=!1;break}if(r.contains("mescroll-touch-x")||r.contains("mescroll-touch-y")){var i=t.touches?t.touches[0].pageX:t.clientX,s=t.touches?t.touches[0].pageY:t.clientY;o.preWinX||(o.preWinX=i),o.preWinY||(o.preWinY=s);var l=Math.abs(o.preWinX-i),a=Math.abs(o.preWinY-s),c=Math.sqrt(l*l+a*a);if(o.preWinX=i,o.preWinY=s,0!==c){var p=Math.asin(a/c)/Math.PI*180;if(p<=45&&r.contains("mescroll-touch-x")||p>45&&r.contains("mescroll-touch-y")){n=!1;break}}}}e=e.parentNode}n&&t.cancelable&&!t.defaultPrevented&&"function"==typeof t.preventDefault&&t.preventDefault()},t.prototype.triggerUpScroll=function(){this.optUp.callback&&!this.isUpScrolling&&(this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.optUp.callback(this.optUp.page,this))},t.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.upwarp.classList.add(this.optUp.hardwareClass),this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.showLoading(this,this.upwarp)},t.prototype.showNoMore=function(){this.upwarp.style.visibility="visible",this.upwarp.style.display="block",this.optUp.hasNext=!1,this.optUp.showNoMore(this,this.upwarp)},t.prototype.hideUpScroll=function(t){t?this.upwarp.style.display="none":this.upwarp.style.visibility="hidden",this.upwarp.classList.remove(this.optUp.hardwareClass);var o=this.upwarp.getElementsByClassName("upwarp-progress")[0];o&&o.classList.remove("mescroll-rotate")},t.prototype.endUpScroll=function(t,o){null!=t&&(t?this.showNoMore():this.hideUpScroll(o)),this.isUpScrolling=!1},t.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=1,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.clearDataList(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.optUp.callback&&this.optUp.callback(o,this)}},t.prototype.setPageNum=function(t){this.optUp.page.num=t-1},t.prototype.setPageSize=function(t){this.optUp.page.size=t},t.prototype.clearDataList=function(){var t=this.optUp.clearId||this.optUp.clearEmptyId;if(t){var o=this.getDomById(t);o&&(o.innerHTML="")}},t.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},t.prototype.endBySize=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=(this.optUp.page.num-1)*this.optUp.page.size+t<o);this.endSuccess(t,n,e)},t.prototype.endSuccess=function(t,o,e){var n=this;if(n.isDownScrolling&&n.endDownScroll(),n.optUp.use){var r;if(null!=t){var i=n.optUp.page.num,s=n.optUp.page.size;if(1===i&&(n.clearDataList(),e&&(n.optUp.page.time=e)),t<s||!1===o)if(n.optUp.hasNext=!1,0===t&&1===i)r=!1,n.showEmpty();else r=!((i-1)*s+t<n.optUp.noMoreSize),n.removeEmpty();else r=!1,n.optUp.hasNext=!0,n.removeEmpty()}var l=!n.optUp.hasNext;n.endUpScroll(r,l),n.loadFull(),n.optUp.lazyLoad.use&&n.lazyLoad(16)}},t.prototype.endErr=function(){if(this.isDownScrolling){var t=this.optUp.page;t&&this.prePageNum&&(t.num=this.prePageNum,t.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1))},t.prototype.loadFull=function(){var t=this;t.optUp.loadFull.use&&!t.optUp.isLock&&t.optUp.hasNext&&t.optUp.callback&&t.getScrollHeight()<=t.getClientHeight()&&setTimeout(function(){t.getScrollHeight()<=t.getClientHeight()&&t.triggerUpScroll()},t.optUp.loadFull.delay)},t.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},t.prototype.showEmpty=function(){var t=this,o=t.optUp.empty,e=o.warpId||t.optUp.clearEmptyId;if(null!=e){var n=t.getDomById(e);if(n){t.removeEmpty();var r="";if(o.icon&&(r+='<img class="empty-icon" src="'+o.icon+'"/>'),o.tip&&(r+='<p class="empty-tip">'+o.tip+"</p>"),o.btntext&&(r+='<p class="empty-btn">'+o.btntext+"</p>"),t.emptyDom=document.createElement("div"),t.emptyDom.className="mescroll-empty",t.emptyDom.innerHTML=r,n.appendChild(t.emptyDom),o.btnClick){var i=t.emptyDom.getElementsByClassName("empty-btn")[0];o.supportTap?i.addEventListener("tap",function(e){e.stopPropagation(),t.preventDefault(e),o.btnClick()}):i.onclick=function(){o.btnClick()}}}}},t.prototype.removeEmpty=function(){this.removeChild(this.emptyDom)},t.prototype.showTopBtn=function(t){if(!this.topBtnShow){this.topBtnShow=!0;var o,e=this,n=e.optUp.toTop;if(null==e.toTopBtn)n.html?(e.toTopBtn=document.createElement("div"),e.toTopBtn.innerHTML=n.html):(e.toTopBtn=document.createElement("img"),e.toTopBtn.src=n.src),e.toTopBtn.className=n.warpClass,n.supportTap?e.toTopBtn.addEventListener("tap",function(t){t.stopPropagation(),e.preventDefault(t),!0!==(n.btnClick&&n.btnClick())&&e.scrollTo(0,e.optUp.toTop.duration)}):e.toTopBtn.onclick=function(){!0!==(n.btnClick&&n.btnClick())&&e.scrollTo(0,e.optUp.toTop.duration)},n.warpId&&(o=e.getDomById(n.warpId)),o||(o=document.body),o.appendChild(e.toTopBtn);e.toTopBtn.classList.remove(n.hideClass),e.toTopBtn.classList.add(n.showClass),e.setTopBtnFadeDuration(t)}},t.prototype.hideTopBtn=function(t){this.topBtnShow&&this.toTopBtn&&(this.topBtnShow=!1,this.toTopBtn.classList.remove(this.optUp.toTop.showClass),this.toTopBtn.classList.add(this.optUp.toTop.hideClass),this.setTopBtnFadeDuration(t))},t.prototype.setTopBtnFadeDuration=function(t){if(this.toTopBtn){var o=(null!=t?t:this.optUp.toTop.fadeDuration)+"s";this.toTopBtn.style.animationDuration=o,this.toTopBtn.style.webkitAnimationDuration=o}},t.prototype.scrollTo=function(t,o){var e=this,n=e.getScrollTop(),r=t;if(r>0){var i=e.getScrollHeight()-e.getClientHeight();r>i&&(r=i)}else r=0;e.isScrollTo=!0,e.scrollDom.style.webkitOverflowScrolling="auto",e.getStep(n,r,function(t){e.setScrollTop(t),t===r&&(e.scrollDom.style.webkitOverflowScrolling="touch",e.isScrollTo=!1)},o)},t.prototype.getStep=function(t,o,e,n,r){var i=o-t;if(0!==n&&0!==i)var s=(n=n||300)/(r=r||30),l=i/s,a=0,c=window.setInterval(function(){a<s-1?(t+=l,e&&e(t,c),a++):(e&&e(o,c),window.clearInterval(c))},r);else e&&e(o)},t.prototype.lazyLoad=function(t){var o=this,e=null!=t?t:o.optUp.lazyLoad.delay;return setTimeout(function(){for(var t=o.scrollDom.querySelectorAll("["+o.optUp.lazyLoad.attr+"]"),e=t.length,n=0;n<e;n++){var r=t[n];if("true"!==r.getAttribute(o.lazyTag)&&o.isInSee(r,o.optUp.lazyLoad.offset)){var i=r.getAttribute(o.optUp.lazyLoad.attr),s=new Image;s.onload=function(){var t=this.src,e=this.dom,n=o.optUp.lazyLoad.showClass;n&&e.classList.add(n),"IMG"===e.tagName?e.src=t:e.style.backgroundImage="url("+t+")",e.removeAttribute(o.optUp.lazyLoad.attr),e.removeAttribute(o.lazyTag)},s.onerror=function(){this.dom.removeAttribute(o.lazyTag)},s.onabort=function(){this.dom.removeAttribute(o.lazyTag)},s.src=i,r.setAttribute(o.lazyTag,"true"),s.dom=r}}},e)},t.prototype.isInSee=function(t,o){o=o||0;var e=this.getOffsetTop(t),n=this.getScrollTop()-o,r=e+t.offsetHeight,i=n+o+this.getClientHeight()+o;return e<i&&e>=n||r<=i&&r>n},t.prototype.getOffsetTop=function(t){for(var o=t.offsetTop,e=t.offsetParent;null!=e&&e!==this.scrollDom;)o+=e.offsetTop+e.clientTop,e=e.offsetParent;return o},t.prototype.getScrollHeight=function(){return this.scrollDom.scrollHeight},t.prototype.getClientHeight=function(){return this.isScrollBody&&"CSS1Compat"===document.compatMode?document.documentElement.clientHeight:this.scrollDom.clientHeight},t.prototype.getBodyHeight=function(){return document.body.clientHeight||document.documentElement.clientHeight},t.prototype.getScrollTop=function(){return this.isScrollBody?document.documentElement.scrollTop||document.body.scrollTop:this.scrollDom.scrollTop},t.prototype.getToBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},t.prototype.setScrollTop=function(t){"number"==typeof t&&(this.isScrollBody?(document.documentElement.scrollTop=t,document.body.scrollTop=t):this.scrollDom.scrollTop=t)},t.prototype.getDomById=function(t){var o;return t&&("string"==typeof t?o=document.getElementById(t):t.nodeType&&(o=t)),o||console.error('the element with id as "'+t+'" can not be found: document.getElementById("'+t+'")==null'),o},t.prototype.removeChild=function(t){if(t){var o=t.parentNode;o&&o.removeChild(t),t=null}},t.prototype.destroy=function(){var t=this;t.scrollDom.removeEventListener("touchstart",t.touchstartEvent),t.scrollDom.removeEventListener("touchmove",t.touchmoveEvent),t.scrollDom.removeEventListener("touchend",t.touchendEvent),t.scrollDom.removeEventListener("touchcancel",t.touchendEvent),t.scrollDom.removeEventListener("mousedown",t.touchstartEvent),t.scrollDom.removeEventListener("mousemove",t.touchmoveEvent),t.scrollDom.removeEventListener("mouseup",t.touchendEvent),t.scrollDom.removeEventListener("mouseleave",t.touchendEvent),t.removeChild(t.downwarp),t.isScrollBody?window.removeEventListener("scroll",t.scrollEvent):t.scrollDom.removeEventListener("scroll",t.scrollEvent),t.removeChild(t.upwarp),t.removeChild(t.toTopBtn),t.setBounce(!0)},t})?n.call(o,e,o,t):n)||(t.exports=r)},180:function(t,o){t.exports={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{ref:"mescroll",staticClass:"mescroll"},[o("div",[this._t("default")],2)])},staticRenderFns:[]}},181:function(t,o,e){var n=e(11)(e(166),e(180),function(t){e(173)},null,null);t.exports=n.exports},193:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e(71),r=e.n(n),i=e(163),s=e.n(i),l=e(162),a=e.n(l),c=e(181),p=e.n(c);o.default={name:"CategoryResultPage",components:{MescrollVue:p.a},data:function(){return{list:[],page:1,mescroll:null,mescrollDown:{isLock:!1},mescrollUp:{callback:this.upCallback,page:{num:0,size:1},htmlNodata:'<p class="upwarp-nodata">亲,没有更多数据了~</p>',htmlLoading:'<p class="upwarp-progress mescroll-rotate"></p><p class="upwarp-tip">加载中..</p>',noMoreSize:1,empty:{warpId:"empty12",icon:"/static/img/img_connection_failure1@3x.b57ea40.png",tip:"暂无相关数据~"}}}},computed:{title:function(){return this.$route.query.title||""},type:function(){return this.$route.query.type},category_id:function(){return this.$route.query.category_id}},beforeRouteEnter:function(t,o,e){e(function(t){t.$refs.mescroll&&t.$refs.mescroll.beforeRouteEnter()})},beforeRouteLeave:function(t,o,e){this.$refs.mescroll&&this.$refs.mescroll.beforeRouteLeave(),e()},created:function(){},mounted:function(){},methods:{download:function(t,o){var e=this;return a()(s.a.mark(function n(){var r,i;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return o.stopPropagation(),e.$vux.loading.show({text:"获取下载地址"}),r=e.$api.app.download,n.next=5,e.$ajax.ajaxAction(r,null,{uuid:t.uuid});case 5:if(i=n.sent,e.$vux.loading.hide(),i.code){n.next=9;break}return n.abrupt("return");case 9:e.$com.setDownloadTimes(-1),e.$com.isSafari()?window.location.href=i.data.plistURL:e.$vux.toast.text("请用safari打开安装");case 11:case"end":return n.stop()}},n,e)}))()},mescrollInit:function(t){this.mescroll=t},upCallback:function(t,o){this.page=t.num,this.initTypeHandler(o)},initTypeHandler:function(t){var o=this;return a()(s.a.mark(function e(){var n,r,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.$api.app.getTypeApp,e.next=3,o.$ajax.ajaxAction(n,null,{category_id:o.category_id,page:o.page});case 3:if((r=e.sent).code){e.next=7;break}return t.endErr(),e.abrupt("return");case 7:(i=r.data||[]).forEach(function(t){t.icon_image?t.bg="url("+t.icon_image+") no-repeat center":t.bg=""}),1===o.page&&(o.list=[]),o.$nextTick(function(){o.list=o.list.concat(i),t.endSuccess(i.length,!0)});case 11:case"end":return e.stop()}},e,o)}))()},linkDetail:function(t){sessionStorage.setItem("detail_info",r()(t)),this.$router.push("/app/"+t.id)}}}},206:function(t,o,e){(t.exports=e(145)(!1)).push([t.i,"",""])},214:function(t,o,e){var n=e(206);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(146)("6c6b1b50",n,!0,{})},226:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page_index"},[e("mescroll-vue",{ref:"mescroll",attrs:{down:t.mescrollDown,up:t.mescrollUp},on:{init:t.mescrollInit}},[e("div",{staticClass:"index_list"},[e("div",{staticClass:"empty",attrs:{id:"empty12"}}),t._v(" "),t._l(t.list,function(o,n){return e("div",{key:n,staticClass:"list_item clearfix",on:{click:function(e){return t.linkDetail(o)}}},[e("div",{staticClass:"fl item_image",style:{background:o.bg}}),t._v(" "),e("div",{staticClass:"item_right fl"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"fl item_title"},[e("div",{staticClass:"title_big text-overflow"},[t._v(t._s(o.appName))]),t._v(" "),e("div",{staticClass:"title_small text-overflow"},[t._v("\n                                "+t._s(o.content)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"fl item_btn",on:{click:function(e){return t.download(o,e)}}},[t._v("秒装")])])])])})],2)])],1)},staticRenderFns:[]}}});