(self.webpackChunkcomponents_demo=self.webpackChunkcomponents_demo||[]).push([[7123],{7123:()=>{!function(){const e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker","vaadin-time-picker-flow")};window.Vaadin.Flow.timepickerConnector={initLazy:t=>e((function(t){if(t.$connector)return;t.$connector={};const n=function(e,t){const n=t.toLocaleTimeString(e);let i=n.match(/[^\d\u0660-\u0669]+$/g);return i||(i=n.match(/^[^\d\u0660-\u0669]+/g)),i&&(i=i[0].trim()),i},i=new Date("August 19, 1975 23:15:30"),o=new Date("August 19, 1975 05:15:30"),u={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},r=function(e){return e.replace(/[\u0660-\u0669]/g,(function(e){const t="\\u0"+e.charCodeAt(0).toString(16);return u[t]}))},c=function(e){return parseInt(r(e))},s=/[[\.][\d\u0660-\u0669]{1,3}$/;t.$connector.setLocale=e((function(u){let a;t.value&&""!==t.value&&(a=t.i18n.parseTime(t.value));try{i.toLocaleTimeString(u)}catch(e){throw u="en-US",new Error("vaadin-time-picker: The locale "+u+" is not supported, falling back to default locale setting(en-US).")}const l=function(e){return n(e,i)}(u),d=function(e){return n(e,o)}(u);let p=i.toLocaleTimeString(u);l&&p.startsWith(l)&&(p=p.replace(l,""));const m=p.match(/[^\u0660-\u0669\s\d]/),f=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+m+")?","g"),h=function(){return t.step&&t.step<1};let g,w,v,T;t.i18n={formatTime:e((function(e){if(e){let n=new Date;n.setHours(e.hours),n.setMinutes(e.minutes),n.setSeconds(void 0!==e.seconds?e.seconds:0);let i=n.toLocaleTimeString(u,(w&&g===t.step||(w={hour:"numeric",minute:"numeric",second:t.step&&t.step<60?"numeric":void 0},g=t.step),w));return i=function(e,t){if(h()){let n=e;if(e.endsWith(d)?n=e.replace(" "+d,""):e.endsWith(l)&&(n=e.replace(" "+l,"")),t){let e=t<10?"0":"";e+=t<100?"0":"",e+=t,n+="."+e}else n+=".000";return e.endsWith(d)?n=n+" "+d:e.endsWith(l)&&(n=n+" "+l),n}return e}(i,e.milliseconds),i}})),parseTime:e((function(e){if(e&&e===v&&T)return T;if(e){const n=e.search(l),i=e.search(d);let o=e.replace(d,"").replace(l,"").trim();f.lastIndex=0;let u=f.exec(o);if(u){u=c(u[0].replace(m,"")),n!==i&&(12===u&&-1!==i?u=0:u+=-1!==n&&12!==u?12:0);const a=f.exec(o),l=a&&f.exec(o);let d=l&&h()&&s.exec(o);return d&&d.index<=l.index&&(d=void 0),T=void 0!==u&&{hours:u,minutes:a?c(a[0].replace(m,"")):0,seconds:l?c(l[0].replace(m,"")):0,milliseconds:a&&l&&d?(t=d[0].replace(".",""),1===(t=r(t)).length?t+="00":2===t.length&&(t+="0"),parseInt(t)):0},v=e,T}}var t}))},a&&function e(t,n,i=0){t()?n():setTimeout(()=>e(t,n,200),i)}(()=>t.shadowRoot,()=>{const e=t.i18n.formatTime(a);t.__inputElement.value!==e&&(t.__inputElement.value=e,t.__dropdownElement.value=e,t.__onInputChange())})}))}))(t)}}()}}]);