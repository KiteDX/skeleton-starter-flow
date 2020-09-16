/*! For license information please see 4161.js.LICENSE.txt */
(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[4161],{2957:(e,t,s)=>{"use strict";s.r(t);var i=s(3732),l=s(4451);{class e extends i.e{static get template(){return l.d`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox id="selectAllCheckbox" aria-label="Select All" hidden\$="[[selectAllHidden]]" on-click="_onSelectAllClick" checked="[[selectAll]]">
      </vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="[[selected]]" on-click="_onSelectClick">
      </vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}_prepareHeaderTemplate(){return this._prepareTemplatizer(this.$.defaultHeaderTemplate)}_prepareBodyTemplate(){return this._prepareTemplatizer(this.$.defaultBodyTemplate)}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){if(super.disconnectedCallback(),this._grid&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement)){const e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}}_onSelectClick(e){e.target.checked?this._grid.$connector.doDeselection([e.model.item],!0):this._grid.$connector.doSelection([e.model.item],!0),e.target.checked=!e.target.checked}_onSelectAllClick(e){e.preventDefault(),this._grid.hasAttribute("disabled")?e.target.checked=!e.target.checked:this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(e.is,e),Vaadin.GridFlowSelectionColumnElement=e}},1761:(e,t,s)=>{"use strict";function i(e,t,s){return{index:e,removed:t,addedCount:s}}function l(e,t){return function(e,t,s,l,n,c){let d,o=0,h=0,a=Math.min(s-t,c-n);if(0==t&&0==n&&(o=function(e,t,s){for(let i=0;i<s;i++)if(!r(e[i],t[i]))return i;return s}(e,l,a)),s==e.length&&c==l.length&&(h=function(e,t,s){let i=e.length,l=t.length,n=0;for(;n<s&&r(e[--i],t[--l]);)n++;return n}(e,l,a-o)),n+=o,c-=h,(s-=h)-(t+=o)==0&&c-n==0)return[];if(t==s){for(d=i(t,[],0);n<c;)d.removed.push(l[n++]);return[d]}if(n==c)return[i(t,[],s-t)];let u=function(e){let t=e.length-1,s=e[0].length-1,i=e[t][s],l=[];for(;t>0||s>0;){if(0==t){l.push(2),s--;continue}if(0==s){l.push(3),t--;continue}let r,n=e[t-1][s-1],c=e[t-1][s],d=e[t][s-1];r=c<d?c<n?c:n:d<n?d:n,r==n?(n==i?l.push(0):(l.push(1),i=n),t--,s--):r==c?(l.push(3),t--,i=c):(l.push(2),s--,i=d)}return l.reverse(),l}(function(e,t,s,i,l,n){let c=n-l+1,d=s-t+1,o=new Array(c);for(let e=0;e<c;e++)o[e]=new Array(d),o[e][0]=e;for(let e=0;e<d;e++)o[0][e]=e;for(let s=1;s<c;s++)for(let n=1;n<d;n++)if(r(e[t+n-1],i[l+s-1]))o[s][n]=o[s-1][n-1];else{let e=o[s-1][n]+1,t=o[s][n-1]+1;o[s][n]=e<t?e:t}return o}(e,t,s,l,n,c));d=void 0;let _=[],f=t,v=n;for(let e=0;e<u.length;e++)switch(u[e]){case 0:d&&(_.push(d),d=void 0),f++,v++;break;case 1:d||(d=i(f,[],0)),d.addedCount++,f++,d.removed.push(l[v]),v++;break;case 2:d||(d=i(f,[],0)),d.addedCount++,f++;break;case 3:d||(d=i(f,[],0)),d.removed.push(l[v]),v++}return d&&_.push(d),_}(e,0,e.length,t,0,t.length)}function r(e,t){return e===t}s.d(t,{c:()=>l}),s(1269)},8995:(e,t,s)=>{"use strict";s.d(t,{dx:()=>i,Ex:()=>r,Jk:()=>n}),s(1269),s(5095),s(8042);class i{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,l.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),l.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,s){return e instanceof i?e._cancelAsync():e=new i,e.setConfig(t,s),e}}let l=new Set;const r=function(e){l.add(e)},n=function(){const e=Boolean(l.size);return l.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},60:(e,t,s)=>{"use strict";s.d(t,{o:()=>c}),s(1269);var i=s(1761),l=s(8042),r=s(8991);function n(e){return"slot"===e.localName}let c=class{static getFlattenedNodes(e){const t=(0,r.r)(e);return n(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>n(e)?(e=e,(0,r.r)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){n(this._target)?this._listenSlots([this._target]):(0,r.r)(this._target).children&&(this._listenSlots((0,r.r)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){n(this._target)?this._unlistenSlots([this._target]):(0,r.r)(this._target).children&&(this._unlistenSlots((0,r.r)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,l.YA.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let s=e[t];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),s=(0,i.c)(t,this._effectiveNodes);for(let t,i=0;i<s.length&&(t=s[i]);i++)for(let s,i=0;i<t.removed.length&&(s=t.removed[i]);i++)e.removedNodes.push(s);for(let i,l=0;l<s.length&&(i=s[l]);l++)for(let s=i.index;s<i.index+i.addedCount;s++)e.addedNodes.push(t[s]);this._effectiveNodes=t;let l=!1;return(e.addedNodes.length||e.removedNodes.length)&&(l=!0,this.callback.call(this._target,e)),l}_listenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];n(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];n(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}}},5328:(e,t,s)=>{"use strict";s.d(t,{z:()=>i});class i{static detectScrollType(){const e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);let t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=1,0===e.scrollLeft&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,s){const{scrollLeft:i}=s;if("rtl"!==t||!e)return i;switch(e){case"negative":return s.scrollWidth-s.clientWidth+i;case"reverse":return s.scrollWidth-s.clientWidth-i}return i}static setNormalizedScrollLeft(e,t,s,i){if("rtl"===t&&e)switch(e){case"negative":s.scrollLeft=s.clientWidth-s.scrollWidth+i;break;case"reverse":s.scrollLeft=s.scrollWidth-s.clientWidth-i;break;default:s.scrollLeft=i}else s.scrollLeft=i}}},6426:(e,t,s)=>{"use strict";s.d(t,{U:()=>d});var i=s(5328);const l=[];let r;new MutationObserver((function(){const e=c();l.forEach(t=>{n(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const n=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},c=function(){return document.documentElement.getAttribute("dir")},d=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),r||(r=i.z.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),n(this,c()))}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),"dir"!==e)return;const i=s===c()&&-1===l.indexOf(this),r=!s&&t&&-1===l.indexOf(this),d=s!==c()&&t===c();i||r?(this.__subscribe(),n(this,c())):d&&this.__subscribe(!1)}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===l.indexOf(this)&&l.push(this):l.indexOf(this)>-1&&l.splice(l.indexOf(this),1)}__getNormalizedScrollLeft(e){return i.z.getNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return i.z.setNormalizedScrollLeft(r,this.getAttribute("dir")||"ltr",e,t)}}}}]);