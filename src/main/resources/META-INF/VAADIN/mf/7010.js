/*! For license information please see 7010.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[7010],{8799:(e,n,t)=>{"use strict";t.r(n),t(6691);var o=t(6811);!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu","vaadin-context-menu-flow")};window.Vaadin.Flow.contextMenuConnector={init:n=>e((function(n){n.$contextMenuConnector||(n.$contextMenuConnector={openOnHandler:e((function(e){e.preventDefault(),e.stopPropagation(),this.$contextMenuConnector.openEvent=e;let t={};n.getContextMenuBeforeOpenDetail&&(t=n.getContextMenuBeforeOpenDetail(e)),n.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:t}))})),updateOpenOn:e((function(t){this.removeListener(),this.openOnEventType=t,customElements.whenDefined("vaadin-context-menu").then(e(()=>{o.Jp[t]?o.NH(n,t,this.openOnHandler):n.addEventListener(t,this.openOnHandler)}))})),removeListener:e((function(){this.openOnEventType&&(o.Jp[this.openOnEventType]?o.ys(n,this.openOnEventType,this.openOnHandler):n.removeEventListener(this.openOnEventType,this.openOnHandler))})),openMenu:e((function(e){e.open(this.openEvent)})),removeConnector:e((function(){this.removeListener(),n.$contextMenuConnector=void 0}))})}))(n),generateItems:(n,t,o)=>e((function(e,n,t){e._containerNodeId=t;const o=function(e){const t=function(e){try{return window.Vaadin.Flow.clients[n].getByNodeId(e)}catch(t){console.error("Could not get node %s from app %s",e,n),console.error(t)}}(e._containerNodeId);return t&&Array.from(t.children).map(e=>{const n={component:e,checked:e._checked};return"VAADIN-CONTEXT-MENU-ITEM"==e.tagName&&e._containerNodeId&&(n.children=o(e)),e._item=n,n})},i=o(e);e.items=i}))(n,t,o),setChecked:(n,t)=>e((function(e,n){e._item&&(e._item.checked=n)}))(n,t)}}()},8042:(e,n,t)=>{"use strict";t.d(n,{Wc:()=>s,rs:()=>l,t$:()=>d,YA:()=>u}),t(1269);let o=0,i=0,c=[],r=0,a=document.createTextNode("");new window.MutationObserver((function(){const e=c.length;for(let n=0;n<e;n++){let e=c[n];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}c.splice(0,e),i+=e})).observe(a,{characterData:!0});const s={after:e=>({run:n=>window.setTimeout(n,e),cancel(e){window.clearTimeout(e)}}),run:(e,n)=>window.setTimeout(e,n),cancel(e){window.clearTimeout(e)}},l={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},d={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},u={run:e=>(a.textContent=r++,c.push(e),o++),cancel(e){const n=e-i;if(n>=0){if(!c[n])throw new Error("invalid async handle: "+e);c[n]=null}}}},1269:()=>{"use strict";window.JSCompiler_renameProperty=function(e,n){return e}},8995:(e,n,t)=>{"use strict";t.d(n,{dx:()=>o,Ex:()=>c,Jk:()=>r}),t(1269),t(5095),t(8042);class o{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,n){this._asyncModule=e,this._callback=n,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,n,t){return e instanceof o?e._cancelAsync():e=new o,e.setConfig(n,t),e}}let i=new Set;const c=function(e){i.add(e)},r=function(){const e=Boolean(i.size);return i.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},5095:(e,n,t)=>{"use strict";t.d(n,{o:()=>c}),t(1269);let o=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;const c=function(e){let n=e.__mixinApplications;n||(n=new WeakMap,e.__mixinApplications=n);let t=o++;return function(o){let i=o.__mixinSet;if(i&&i[t])return o;let c=n,r=c.get(o);r||(r=e(o),c.set(o,r));let a=Object.create(r.__mixinSet||i||null);return a[t]=!0,r.__mixinSet=a,r}}},564:(e,n,t)=>{"use strict";t.d(n,{Kk:()=>a,Rq:()=>s,iY:()=>l}),t(1269);let o,i,c=/(url\()([^)]*)(\))/g,r=/(^\/)|(^#)|(^[\w-\d]*:)/;function a(e,n){if(e&&r.test(e))return e;if(void 0===o){o=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",o="http://a/c%20d"===e.href}catch(e){}}return n||(n=document.baseURI||window.location.href),o?new URL(e,n).href:(i||(i=document.implementation.createHTMLDocument("temp"),i.base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=n,i.anchor.href=e,i.anchor.href||e)}function s(e,n){return e.replace(c,(function(e,t,o,i){return t+"'"+a(o.replace(/["']/g,""),n)+"'"+i}))}function l(e){return e.substring(0,e.lastIndexOf("/")+1)}},8258:(e,n,t)=>{"use strict";t.d(n,{my:()=>i,sM:()=>c,v1:()=>r,f6:()=>a,XN:()=>s,ZN:()=>l,nL:()=>d,Hr:()=>u}),t(1269);var o=t(564);const i=!window.ShadyDOM;Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback;let c=(0,o.iY)(document.baseURI||window.location.href),r=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,a=!1,s=!1,l=!1,d=!1,u=!1},8991:(e,n,t)=>{"use strict";t.d(n,{r:()=>o});const o=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e}}]);