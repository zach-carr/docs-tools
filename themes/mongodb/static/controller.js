!function(){"use strict";function t(t){!function(t){return Boolean(t.getElementsByClassName("linenos").length)}(t)?function(t){return Boolean(t.getElementsByClassName("caption-text").length)}(t)&&function(t){var e=t.getElementsByClassName("button-row")[0],n=t.getElementsByClassName("code-block-caption")[0];console.log("MOVING BELOW CAPTION"),n.parentNode.insertBefore(e,n.nextSibling)}(t):function(t){var e=t.getElementsByClassName("button-row")[0],n=t.getElementsByClassName("highlighttable")[0].childNodes[0],i=document.createElement("tr"),r=document.createElement("td"),o=document.createElement("td");r.className="linenos-button-row-spacer",n.insertBefore(i,n.firstChild),i.appendChild(r),i.appendChild(o),o.appendChild(e)}(t)}var e=Object.freeze({setup:function(){for(var e=0,n=document.getElementsByClassName("button-code-block");e<n.length;e+=1){var i=n[e];Boolean(i.getElementsByClassName("button-row")[0])&&t(i)}}});var n=Object.freeze({setup:function(){if(document.getElementsByClassName("codepen").length){var t=document.createElement("script");t.src="https://production-assets.codepen.io/assets/embed/ei.js",t.async=!0,document.body.appendChild(t)}}});function i(t){return!t.siblings("ul:not(.simple)").length}function r(t){for(var e=[],n=0;n<t.length;n+=1)e.push(t[n]);return e}function o(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}var s=function(){this.listeners=[]};s.prototype.listen=function(t){this.listeners.push(t)},s.prototype.dispatch=function(t){for(var e=0;e<this.listeners.length;e+=1)this.listeners[e](t)};var a="code-button__tooltip--active",c="code-button__tooltip--inactive";function l(t){return Boolean(t.getElementsByClassName("copyable-code-block")[0])}var u=Object.freeze({setup:function(){for(var t=r(document.getElementsByClassName("button-code-block")).filter(l),e=function(){var t=i[n],e=t.getElementsByClassName("highlight")[0];if(!e)return{};var r=t.getElementsByClassName("button-row")[0].getElementsByClassName("code-button--copy")[0];if(!r)return{};var o=document.createElement("div");o.innerText="copied",o.classList.add("code-button__tooltip"),o.classList.add(c);var s=-1;r.appendChild(o),r.addEventListener("click",function(){var t,n,i,r=document.createElement("textarea");r.style.position="fixed",document.body.appendChild(r),r.value=e.innerText.trim(),r.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy");o.classList.replace(c,a),t=function(){o.classList.replace(a,c)},i=1500,(n=s)>=0&&window.clearTimeout(n),s=window.setTimeout(t,i)}catch(t){console.error(t)}document.body.removeChild(r)})},n=0,i=t;n<i.length;n+=1){var o=e();if(o)return o.v}}});var d=Object.freeze({setup:function(t){if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var e=document.querySelector(".sphinxsidebarwrapper"),n=document.querySelector(".body"),r={};function s(){void 0!==r.timeoutID&&window.clearTimeout(r.timeoutID),void 0!==r.xhr&&r.xhr.abort(),r={}}function a(i,o){void 0===i&&console.error("Going to undefined path"),s(),n.classList.add("loading"),r.timeoutID=window.setTimeout(function(){n.classList.remove("loading"),r.timeoutID=-1},1e4);var a=new Date;r.xhr=function(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}(i,{complete:function(){s()},error:function(t){console.error("Failed to load "+i),window.location=i},success:function(i,r){var s=new Date-a;n.classList.remove("loading"),o&&window.history.pushState({href:r},"",r);var c=document.createElement("html");c.innerHTML=i;var l=c.querySelector("title").textContent,u=c.querySelector(".body"),d=c.querySelector(".sphinxsidebarwrapper");s>62.5&&u.classList.add("loading"),n.parentElement.replaceChild(u,n),n=u,e.parentElement.replaceChild(d,e),e=d,document.title=l,t.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){n.classList.remove("loading"),o&&window.scroll(0,0)},1)}})}window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");function l(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),a(t.currentTarget.href,!0))}for(var u=0;u<c.length;u+=1){var d=c[u];(i($(d))||o($(d)))&&d.addEventListener("click",l)}return window.onpopstate=function(t){null!==t.state&&a(t.state.href,!1)},!0}});function p(){}function h(t){for(var e,n,i=arguments,r=1,o=arguments.length;r<o;r++)for(e in n=i[r])t[e]=n[e];return t}function f(t,e){e.appendChild(t)}function m(t,e,n){e.insertBefore(t,n)}function g(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function w(t,e,n){t.addEventListener(e,n,!1)}function b(t,e,n){t.removeEventListener(e,n,!1)}function _(){return Object.create(null)}function E(t){this.destroy=p,this.fire("destroy"),this.set=this.get=p,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function C(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function N(t,e,n,i,r){for(var o in e)if(n[o]){var s=i[o],a=r[o],c=e[o];if(c)for(var l=0;l<c.length;l+=1){var u=c[l];u.__calling||(u.__calling=!0,u.call(t,s,a),u.__calling=!1)}}}function I(t,e){t._observers={pre:_(),post:_()},t._handlers=_(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function x(t){for(;t&&t.length;)t.shift()()}var S={destroy:E,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1)n[i].call(this,e)},observe:function(t,e,n){var i=n&&n.defer?this._observers.post:this._observers.pre;return(i[t]||(i[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=i[t].indexOf(e);~n&&i[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(h({},t)),this.root._lock||(this.root._lock=!0,x(this.root._beforecreate),x(this.root._oncreate),x(this.root._aftercreate),this.root._lock=!1)},teardown:E,_recompute:p,_set:function(t){var e=this._state,n={},i=!1;for(var r in t)C(t[r],e[r])&&(n[r]=i=!0);i&&(this._state=h({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(N(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),N(this,this._observers.post,n,this._state,e)))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}};function k(t){I(this,t),this._state=h({name:"",caption:"",answer:null},t.data),this._recompute({answer:1},this._state),this._fragment=function(t,e){var n,i,r,o,s,a,c,l;function u(t){e.change(!0)}function d(t){e.change(!1)}return{c:function(){n=v("div"),i=y("\n"),r=v("div"),o=v("span"),a=y("\n    "),c=v("span"),this.h()},h:function(){o.className=s="switch fa fa-thumbs-up good "+t.upvoteSelected,w(o,"click",u),c.className=l="switch fa fa-thumbs-down bad "+t.downvoteSelected,w(c,"click",d)},m:function(e,s){m(n,e,s),n.innerHTML=t.caption,m(i,e,s),m(r,e,s),f(o,r),f(a,r),f(c,r)},p:function(t,e){t.caption&&(n.innerHTML=e.caption),t.upvoteSelected&&s!==(s="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(o.className=s),t.downvoteSelected&&l!==(l="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(c.className=l)},u:function(){n.innerHTML="",g(n),g(i),g(r)},d:function(){b(o,"click",u),b(c,"click",d)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}h(k.prototype,{change:function(t){this.set({answer:t}),this.fire("change",t)}},S),k.prototype._recompute=function(t,e){t.answer&&(C(e.upvoteSelected,e.upvoteSelected=!0===e.answer?"selected":"")&&(t.upvoteSelected=!0),C(e.downvoteSelected,e.downvoteSelected=function(t){return!1===t?"selected":""}(e.answer))&&(t.downvoteSelected=!0))};function B(t){I(this,t),this._state=h({name:"",caption:"",answer:""},t.data),this._fragment=function(t,e){var n,i=!1;function r(){i=!0,e.set({answer:n.value}),i=!1}function o(t){var n=e.get();e.fire("change",n.answer)}return{c:function(){n=v("textarea"),this.h()},h:function(){w(n,"input",r),n.placeholder=t.caption,w(n,"input",o)},m:function(e,i){m(n,e,i),n.value=t.answer},p:function(t,e){i||(n.value=e.answer),t.caption&&(n.placeholder=e.caption)},u:function(){g(n)},d:function(){b(n,"input",r),b(n,"input",o)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function L(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}h(B.prototype,{change:function(){this.fire("change",this.get("answer"))}},S);var T={open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),i=0,r=Object.keys(n);i<r.length;i+=1){var o=r[i],s=n[o];null!=s&&e.set(o,s)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var t=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)L(this.get("jiraurl"));else{var e=document.createElement("script");e.type="application/javascript",e.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",e.setAttribute("crossorigin","anonymous"),e.src="https://code.jquery.com/jquery-2.2.4.min.js",e.onload=function(){L(t.get("jiraurl"))},document.body.appendChild(e)}}};function q(t,e){var n;return{c:function(){n=v("span"),this.h()},h:function(){n.className="fa fa-comments deluge-comment-icon"},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:p}}function j(t,e){var n;return{c:function(){n=v("span"),this.h()},h:function(){n.className="fa fa-angle-down deluge-close-icon"},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:p}}function R(t,e){var n;return{c:function(){(n=v("p")).textContent="Thank you for your feedback!"},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:p}}function O(t,e){var n;return{c:function(){(n=v("li")).textContent="We're sorry! Please help us improve this page."},m:function(t,e){m(n,t,e)},u:function(){g(n)},d:p}}function A(t,e,n,i,r){var o,s=F(t,e,n,i),a=s&&s(t,e,n,i,r);return{c:function(){o=v("li"),a&&a.c()},m:function(t,e){m(o,t,e),a&&a.m(o,null)},p:function(t,e,n,i,c){s===(s=F(e,n,i,c))&&a?a.p(t,e,n,i,c):(a&&(a.u(),a.d()),(a=s&&s(e,n,i,c,r))&&a.c(),a&&a.m(o,null))},u:function(){g(o),a&&a.u()},d:function(){a&&a.d()}}}function U(t,e,n,i,r){var o=new k({root:r.root,data:{name:n.name,caption:n.caption}});o.on("change",function(t){var e=s.questions[s.question_index];r.update(e.name,t)});var s={questions:e,question_index:i};return{c:function(){o._fragment.c()},m:function(t,e){o._mount(t,e)},p:function(t,e,n,i,r){var a={};t.questions&&(a.name=i.name),t.questions&&(a.caption=i.caption),o._set(a),s.questions=n,s.question_index=r},u:function(){o._unmount()},d:function(){o.destroy(!1)}}}function H(t,e,n,i,r){var o=new B({root:r.root,data:{name:n.name,caption:n.caption}});o.on("change",function(t){var e=s.questions[s.question_index];r.update(e.name,t)});var s={questions:e,question_index:i};return{c:function(){o._fragment.c()},m:function(t,e){o._mount(t,e)},p:function(t,e,n,i,r){var a={};t.questions&&(a.name=i.name),t.questions&&(a.caption=i.caption),o._set(a),s.questions=n,s.question_index=r},u:function(){o._unmount()},d:function(){o.destroy(!1)}}}function P(t,e){var n,i,r,o;function s(t){e.showCollectorDialog()}return{c:function(){n=v("p"),i=y("If this page contains an error, you may "),(r=v("a")).textContent="report the problem on Jira.",this.h()},h:function(){r.className="deluge-fix-button jira-link jirafeedback",r.target="_blank",r.title=o="Report a problem with "+t.pagename+" on Jira",w(r,"click",s)},m:function(t,e){m(n,t,e),f(i,n),f(r,n)},p:function(t,e){t.pagename&&o!==(o="Report a problem with "+e.pagename+" on Jira")&&(r.title=o)},u:function(){g(n)},d:function(){b(r,"click",s)}}}function D(t,e){var n;return{c:function(){(n=v("p")).textContent="Submitting feedback..."},m:function(t,e){m(n,t,e)},p:p,u:function(){g(n)},d:p}}function M(t,e){var n,i,r;function o(t){e.rate(!0)}function s(t){e.rate(!1)}return{c:function(){(n=v("a")).textContent="Yes",i=y("\n        "),(r=v("a")).textContent="No",this.h()},h:function(){n.className="deluge-vote-button",w(n,"click",o),r.className="deluge-vote-button",w(r,"click",s)},m:function(t,e){m(n,t,e),m(i,t,e),m(r,t,e)},p:p,u:function(){g(n),g(i),g(r)},d:function(){b(n,"click",o),b(r,"click",s)}}}function V(t,e){for(var n,i,r,o,s,a,c,l,u=!1===t.state&&O(),d=t.questions,p=[],h=0;h<d.length;h+=1)p[h]=A(t,d,d[h],h,e);function _(t){e.toggle()}function E(t){e.submit()}return{c:function(){n=v("div"),i=v("ul"),u&&u.c(),r=document.createComment("");for(var t=0;t<p.length;t+=1)p[t].c();o=y("\n\n            "),s=v("div"),(a=v("button")).textContent="Cancel",c=y("\n                "),(l=v("button")).textContent="Submit",this.h()},h:function(){var t,e;t="ref",e=!0,i.setAttribute(t,e),w(a,"click",_),l.className="primary",w(l,"click",E),s.className="deluge-button-group",n.className="deluge-questions"},m:function(t,e){m(n,t,e),f(i,n),u&&u.m(i,null),f(r,i);for(var d=0;d<p.length;d+=1)p[d].m(i,null);f(o,n),f(s,n),f(a,s),f(c,s),f(l,s)},p:function(t,n){!1===n.state?u||((u=O()).c(),u.m(i,r)):u&&(u.u(),u.d(),u=null);var o=n.questions;if(t.questions){for(var s=0;s<o.length;s+=1)p[s]?p[s].p(t,n,o,o[s],s):(p[s]=A(n,o,o[s],s,e),p[s].c(),p[s].m(i,null));for(;s<p.length;s+=1)p[s].u(),p[s].d();p.length=o.length}},u:function(){g(n),u&&u.u();for(var t=0;t<p.length;t+=1)p[t].u()},d:function(){u&&u.d(),function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}(p),b(a,"click",_),b(l,"click",E)}}}function F(t,e,n,i){return"binary"===n.type?U:"freeform"===n.type?H:null}function z(t){return"Voted-Down"===t.state?P:"Pending "==t.state?D:"NotVoted"===t.state?M:"boolean"==typeof t.state?V:null}function Q(t){I(this,t),this._state=h({project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}},t.data),this._recompute({state:1},this._state),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,i,r,o,s,a,c,l,u="Initial"===t.state&&q(),d="Initial"!==t.state&&j();function p(t){e.toggle()}var h=("Voted-Up"===t.state||"Voted-Down"===t.state)&&R(),_=z(t),E=_&&_(t,e);return{c:function(){n=v("div"),i=v("div"),u&&u.c(),r=y("\n\n        "),(o=v("span")).textContent="Was this page helpful?",s=y("\n\n    "),d&&d.c(),a=y("\n\n    "),c=v("div"),h&&h.c(),l=y("\n\n    "),E&&E.c(),this.h()},h:function(){o.className="deluge-helpful",i.className=t.delugeHeaderClass,w(i,"click",p),c.className=t.delugeBodyClass,n.className=t.delugeClass},m:function(t,e){m(n,t,e),f(i,n),u&&u.m(i,null),f(r,i),f(o,i),f(s,i),d&&d.m(i,null),f(a,n),f(c,n),h&&h.m(c,null),f(l,c),E&&E.m(c,null)},p:function(t,o){"Initial"===o.state?u||((u=q()).c(),u.m(i,r)):u&&(u.u(),u.d(),u=null),"Initial"!==o.state?d||((d=j()).c(),d.m(i,null)):d&&(d.u(),d.d(),d=null),t.delugeHeaderClass&&(i.className=o.delugeHeaderClass),"Voted-Up"===o.state||"Voted-Down"===o.state?h||((h=R()).c(),h.m(c,l)):h&&(h.u(),h.d(),h=null),_===(_=z(o))&&E?E.p(t,o):(E&&(E.u(),E.d()),(E=_&&_(o,e))&&E.c(),E&&E.m(c,null)),t.delugeBodyClass&&(c.className=o.delugeBodyClass),t.delugeClass&&(n.className=o.delugeClass)},u:function(){g(n),u&&u.u(),d&&d.u(),h&&h.u(),E&&E.u()},d:function(){u&&u.d(),d&&d.d(),b(i,"click",p),h&&h.d(),E&&E.d()}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,x(this._beforecreate),x(this._oncreate),x(this._aftercreate),this._lock=!1)}h(Q.prototype,T,S),Q.prototype._recompute=function(t,e){t.state&&(C(e.delugeClass,e.delugeClass=function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"}(e.state))&&(t.delugeClass=!0),C(e.delugeHeaderClass,e.delugeHeaderClass=function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"}(e.state))&&(t.delugeHeaderClass=!0),C(e.delugeBodyClass,e.delugeBodyClass=function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}(e.state))&&(t.delugeBodyClass=!0))};var K=function(t,e,n){var i=this;this.project=t,this.path=e,this.app=new Q({target:n,data:{state:"Initial",project:t,pagename:e}}),this.app.on("submit",function(t){i.sendRating(t.vote,t.fields).then(function(){t.vote?i.app.set({state:"Voted-Up"}):i.app.set({state:"Voted-Down"})}).catch(function(t){console.error("Error submitting feedback")})})};K.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},K.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},K.prototype.sendRating=function(t,e){var n=this;return new Promise(function(i,r){e.set("v",t),e.set("p",n.project+"/"+n.path);var o=function(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}("http://deluge.us-east-1.elasticbeanstalk.com/",e),s=new Image;s.onload=function(){return i()},s.onerror=function(){return r()},s.src=o})},K.prototype.open=function(){this.app.open()};var G=null,W={"meta/404":!0,search:!0};var J=Object.freeze({init:function(){G=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&function(){var t=document.getElementsByClassName("body");if(t.length){var e=t[0].getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(W,e)){var n=document.getElementById("rating-panel");n&&(n.innerText="",n&&new K(G,e,n).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}}()}}),Y=new s;function X(){return JSON.parse(window.localStorage.getItem("tabPref"))||{}}function Z(t,e){var n=X();e?(n.pages||(n.pages={}),n.pages[window.location.pathname]=t.tabId):n[t.type]=t.tabId,window.localStorage.setItem("tabPref",JSON.stringify(n))}var tt={},et=function(t,e,n,i){this.type=t,this.tabStrips=n,this.tabContents=i,this.anonymous=e,this.tabIds={}};et.prototype.getFirstTabId=function(){var t=this.tabStrips[0].querySelector(".tab-strip__element[aria-selected=true]");return t?t.getAttribute("data-tabid"):null},et.prototype.setup=function(){var t=this;if(0!==this.tabStrips.length){!function(){if(document.querySelector(".tabs-top")){var t=$(".tab-strip--singleton"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()}}();for(var e=0,n=t.tabStrips;e<n.length;e+=1)for(var i=function(){var e=s[o];t.tabIds[e.getAttribute("data-tabid")]=!0,e.onclick=function(n){var i=e.getBoundingClientRect(),r=window.scrollY-i.y,o=n.target.getAttribute("data-tabid"),s={};if(s.tabId=o,s.type=t.type,o){t.update(o,!0);var a=e.getBoundingClientRect();window.scrollTo(a.x,a.y+r),n.preventDefault()}}},r=n[e],o=0,s=r.querySelectorAll("[data-tabid]");o<s.length;o+=1)i();this.update(null,!1)}},et.prototype.update=function(t,e){if(0!==this.tabStrips.length){if(!t){var n=X();this.anonymous&&n.pages&&n.pages[window.location.pathname]?t=n.pages[window.location.pathname]:n[this.type]&&(t=n[this.type])}(t&&this.tabIds[t]||(t=this.getFirstTabId()))&&Y.dispatch({isUserAction:e,tabId:t,type:this.type})}},et.prototype.showHideSelectedTab=function(t){for(var e=0,n=this.tabStrips;e<n.length;e+=1){var i=n[e],r=$(i.querySelector('[data-tabid="'+t+'"]'));if(r.length){var o=r.parent("ul"),s=$(i.querySelector(".dropdown-toggle")),a=$(i.querySelector(".dropdown"));o.hasClass("dropdown-menu")?(s.text(""+r.first().text()).append('<span class="caret"></span>'),a.attr("aria-selected",!0).siblings().attr("aria-selected",!1)):(r.attr("aria-selected",!0).siblings().attr("aria-selected",!1),s.text("Other ").append('<span class="caret"></span>'))}}for(var c="tabpanel-"+t,l=0,u=this.tabContents;l<u.length;l+=1)for(var d=0,p=u[l].children;d<p.length;d+=1){var h=p[d];h.classList.contains(c)?h.style.display="block":h.style.display="none"}},et.register=function(t){var e=r(t.getElementsByClassName("tab-strip--singleton")),n=t.querySelector(".tabs__content"),i=t.getAttribute("data-tab-preference"),o=!1;if(!i){var s=t.querySelector("[data-tabid]");if(!s)return;i="anonymous-"+s.getAttribute("data-tabid"),o=!0}if(tt[i]){var a=tt[i];return a.tabStrips=a.tabStrips.concat(e),void a.tabContents.push(n)}var c=new et(i,o,e,[n],!1);tt[i]=c},Y.listen(function(t){var e=tt[t.type];e&&(t.isUserAction&&Z(t,e.anonymous),e.showHideSelectedTab(t.tabId))});var nt=Object.freeze({tabsEventDispatcher:Y,setTabPref:Z,setup:function(){tt={};for(var t=document.getElementsByClassName("tabs"),e=0;e<t.length;e+=1)et.register(t[e]);for(var n=0,i=Object.keys(tt);n<i.length;n+=1){var r=i[n];tt[r].setup()}}}),it="guide--expanded",rt=[];function ot(t){var e=t.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);return!(e.bottom<0||e.top-n>=0)}function st(){for(var t=!1,e=0,n=rt;e<n.length;e+=1){var i=n[e],r=i[0],o=i[1];o.classList.remove("active"),!t&&ot(r)&&(t=!0,o.classList.add("active"))}}function at(t){var e=t.target.getAttribute("data-tab-preference");e&&Z({tabId:e,type:"languages"},!1)}function ct(){this.classList.toggle(it)}document.addEventListener("scroll",function(t,e){var n=null,i=null,r=null,o=0;function s(){o=Date.now(),r=null,i=t.apply.apply(t,n),r||(n=null)}return function(){for(var a=[],c=arguments.length;c--;)a[c]=arguments[c];var l=Date.now(),u=e-(l-o);return n=a,u<=0||u>e?(r&&(window.clearTimeout(r),r=null),o=l,i=t.apply(void 0,n),r||(n=null)):r||(r=window.setTimeout(s,u)),i}}(st,150));var lt=document.getElementsByClassName("show-current-language");Y.listen(function(t){if("languages"===t.type)for(var e=0;e<lt.length;e+=1)lt[e].innerText=t.tabId});var ut=Object.freeze({setup:function(){!function(){var t=document.querySelector(".left-toc");if(t){rt.length=0;for(var e=0,n=t.querySelectorAll("a");e<n.length;e+=1){var i=n[e],r=i.getAttribute("href").slice(1);if(r){var o=document.getElementById(r);o&&rt.push([o,i.parentElement])}}window.isVisible=ot,st()}}(),function(){var t=document.getElementsByClassName("guide-category-list")[0];if(t){for(var e=t.getElementsByClassName("guide__pill"),n=0;n<e.length;n+=1)e[n].onclick=at;for(var i=document.getElementsByClassName("guide--jumbo"),r=0;r<i.length;r+=1)i[r].onclick=ct}}()}}),dt="lightbox__content--activated",pt="lightbox__content--scalable",ht=document.createElement("div");ht.className="lightbox__modal",ht.title="click to close";var ft=document.createElement("img");function mt(t){"keydown"===t.type&&"Escape"!==t.key||(ft.classList.remove(dt),ht.parentNode&&ht.parentNode.removeChild(ht))}function gt(t){var e=document.createElement("div"),n=document.createElement("div");e.className="lightbox__imageWrapper",n.className="lightbox__caption",n.innerText="click to enlarge",t.parentNode.replaceChild(e,t),e.appendChild(t),e.appendChild(n),e.addEventListener("click",function(){document.body.appendChild(ht),ft.src=t.src,ft.alt=t.alt+" — Enlarged",/\.svg$/.test(ft.src)?ft.classList.add(pt):ft.classList.remove(pt),ht.addEventListener("click",mt),setTimeout(function(){ft.classList.add(dt)},0)})}function vt(t,e){var n=e.naturalWidth*e.naturalHeight;e.clientWidth*e.clientHeight<.9*n&&(gt(e),t.classList.add("lightbox"))}ft.className="lightbox__content",ht.appendChild(ft);var yt=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("lightbox");t<e.length;t+=1){var n=e[t];0!==n.children.length&&"IMG"===n.children[0].tagName&&gt(n.children[0])}for(var i=0,r=document.getElementsByClassName("figure");i<r.length;i+=1){var o=r[i];if(0!==o.children.length&&"IMG"===o.children[0].tagName&&!o.classList.contains("lightbox")){var s=o.children[0];s.complete?vt(o,s):s.addEventListener("load",vt.bind(null,o,s))}}document.addEventListener("keydown",mt)}}),wt="apiref-resource--collapsed";function bt(t,e){var n=null;t.addEventListener("mousedown",function(t){0===t.button&&(n=t)}),t.addEventListener("mouseup",function(t){if(0===t.button){var i=n;n=null,(!i||Math.abs(t.clientX-i.clientX)<50&&Math.abs(t.clientY-i.clientY)<50)&&e()}})}function _t(t,e){if(e.id){var n="#"+e.id;window.history.pushState({href:n},"",n)}e.classList[t](wt)}function Et(){var t=document.getElementById(document.location.hash.slice(1));t&&t.classList.contains("apiref-resource")&&_t("remove",t)}window.addEventListener("hashchange",Et,!1);var Ct=Object.freeze({setup:function(){for(var t=document.getElementsByClassName("apiref-resource__header"),e=0;e<t.length;e+=1){var n=t[e];bt(n,_t.bind(null,"toggle",n.parentElement))}Et()}});function Nt(t,e){Y.dispatch({isUserAction:!0,tabId:e.target.getAttribute("data-tabid"),type:t})}var It={};Y.listen(function(t){for(var e=0,n=It[t.type]||[];e<n.length;e+=1)for(var i=n[e].getElementsByClassName("guide__pill"),r=0;r<i.length;r+=1){i[r].getAttribute("data-tabid")===t.tabId?i[r].classList.add("guide__pill--active"):i[r].classList.remove("guide__pill--active")}});var xt=Object.freeze({setup:function(){It={};for(var t=0,e=document.querySelectorAll(".pillstrip-declaration");t<e.length;t+=1){var n=e[t],i=n.getAttribute("data-tab-preference");i&&(void 0===It[i]&&(It[i]=[]),It[i].push(n))}for(var o=0,s=Object.keys(It);o<s.length;o+=1){for(var a=s[o],c=It[a],l={},u=[],d=0,p=document.querySelectorAll('.tabs[data-tab-preference="'+a+'"] > .tab-strip');d<p.length;d+=1){var h=p[d];h.style.display="none";for(var f=-1,m=r(h.querySelectorAll(".tab-strip__element[data-tabid]")),g=0,v=m=m.concat(r(h.querySelectorAll(".tab-strip__dropdown > li")));g<v.length;g+=1){var y=v[g];f+=1;var w=y.getAttribute("data-tabid");void 0===l[w]&&(l[w]=!0,u.splice(f,0,[w,y.innerText]))}}for(var b=Nt.bind(void 0,a),_=0,E=c;_<E.length;_+=1)for(var C=E[_],N=0,I=u;N<I.length;N+=1){var x=I[N],S=x[0],k=x[1],B=document.createElement("li");B.className="guide__pill",B.setAttribute("data-tabid",S),B.innerText=k,B.onclick=b,C.appendChild(B)}}}});function St(t){return t.hasClass("current")}var kt=Object.freeze({setup:function(){var t=$(".sidebar a.current");(i(t)||o(t)||St(t))&&t.parent("li").addClass("selected-item"),t.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(e){var n=$(e.currentTarget);i(n)||!n.parent().hasClass("selected-item")&&o(n)||(e.preventDefault(),n.parent().hasClass("current")?(n.parent().removeClass("current selected-item"),n.siblings("ul").slideUp()):(t.parent().removeClass("selected-item"),t.parents().add(t.siblings("ul")).each(function(t,n){var i=$(n);i.has(e.currentTarget).length||(i.is("ul")?i.removeClass("current").slideUp():i.removeClass("current"))}),n.parent().addClass("current"),n.siblings("ul").slideDown(function(){(i(n)||o(n)||St(t))&&n.parent("li").addClass("selected-item")}),t=n))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(t){var e=$('<span class="expand-icon"></span>');return i($(this))||e.addClass("docs-expand-arrow"),e})}});function Bt(){var t,e,n,i,r,o,s,a;window._fs_debug=!1,window._fs_host="fullstory.com",window._fs_org="54YFM",window._fs_namespace="FS",t=window,e=document,n=window._fs_namespace,i="script",r="user",n in t&&t.console&&t.console.log?t.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].'):((s=t[n]=function(t,e){s.q?s.q.push([t,e]):s._api(t,e)}).q=[],(o=e.createElement(i)).async=1,o.src="https://"+_fs_host+"/s/fs.js",(a=e.getElementsByTagName(i)[0]).parentNode.insertBefore(o,a),s.identify=function(t,e){s(r,{uid:t}),e&&s(r,e)},s.setUserVars=function(t){s(r,t)},s.identifyAccount=function(t,e){o="account",(e=e||{}).acctId=t,s(o,e)},s.clearUserCookie=function(t,n,i){if(!t||document.cookie.match("fs_uid=[`;`]*`[`;`]*`[`;`]*`"))for(n=e.domain;e.cookie="fs_uid=;domain="+n+";path=/;expires="+new Date(0).toUTCString(),!((i=n.indexOf("."))<0);)n=n.slice(i+1)}),function(t,e,n,i,r){if(!t[r]){for(var o=t[r]=[],s=0;s<n.length;s++){var a=n[s];o[a]=o[a]||function(t){return function(){var e=Array.prototype.slice.call(arguments);o.push([t,e])}}(a)}o.SNIPPET_VERSION="1.0.1";var c=e.createElement("script");c.type="text/javascript",c.async=!0,c.src="https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/Dk30CC86ba0nATlK/"+r+".js";var l=e.getElementsByTagName("script")[0];l.parentNode.insertBefore(c,l)}}(window,document,["survey","reset","config","init","set","get","event","identify","track","page","screen","group","alias"],0,"delighted")}var Lt=Object.freeze({initialize:Bt,setup:function(){window.delighted.survey()}});var Tt=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=function(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}(e)})}}),$t=function(t){this.uristowrite=[],this.key=t,this.urireplacestring="",this.urireplaceStringPasswordRedacted="",this.templates=[],this.options={},this.templates["self-managed MongoDB"]={options:[{name:"authSource",type:"text"}],template:"mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]",templatePasswordRedacted:"mongodb://$[hostlist]/$[database]?$[options]"},this.templates["replica set"]={options:[{name:"replicaSet",type:"text"},{name:"authSource",type:"text"},{name:"ssl",type:"pass-through",value:"true"}],template:"mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]",templatePasswordRedacted:"mongodb://$[hostlist]/$[database]?$[options]"},this.templates["Atlas (Cloud) with shell v. 3.6"]={options:[{name:"authSource",type:"text"}],template:"mongodb+srv://$[username]:$[password]@$[hostlist]/$[database]?$[options]",templatePasswordRedacted:"mongodb://$[hostlist]/$[database]?$[options]"},this.templates["Atlas (Cloud) with shell v. 3.4"]={options:[{name:"authSource",type:"[text]"},{name:"ssl",type:"pass-through",value:"true"}],template:"mongodb://$[username]:$[password]@$[hostlist]/$[database]?$[options]",templatePasswordRedacted:"mongodb://$[hostlist]/$[database]?$[options]"},this.setupURIListeners(),this.renderURI()},qt={uriwriter:{configurable:!0}};qt.uriwriter.get=function(){return JSON.parse(window.localStorage.getItem(this.key))||{}},qt.uriwriter.set=function(t){var e=t;console.log("Setting uriwriter"),console.log(t),window.localStorage.setItem(this.key,JSON.stringify(e))},$t.prototype.addValue=function(t,e){var n=this.uriwriter;n[t]=e,this.uriwriter=n},$t.prototype.selectTemplate=function(){return this.templates[this.uriwriter.env]},$t.prototype.renderURI=function(){if(console.log(this.uriwriter),console.log("******"),void 0===this.uriwriter.env){console.log("uriwriter env is undefined");var t={env:"self-managed MongoDB"};this.uriwriter=t}var e=this.selectTemplate();this.uristring=e.template,this.uristringPasswordRedacted=e.templatePasswordRedacted,this.options=e.options,this.urireplacestring=this.replaceString(this.uristring),this.urireplacestringPasswordRedacted=this.replaceString(this.uristringPasswordRedacted),this.uristring=this.urireplacestring,this.uristringPasswordRedacted=this.urireplaceStringPasswordRedacted,this.writeToPlaceholders()},$t.prototype.writeToPlaceholders=function(){for(var t=0;t<this.uristowrite.length;t+=1)this.uristowrite[t].innerHTML=this.uristowrite[t].innerHTML.replace(this.replaceKey,this.urireplacestring),this.uristowrite[t].innerHTML=this.uristowrite[t].innerHTML.replace(this.replaceKeyNoUser,this.urireplacestringPasswordRedacted);this.replaceKey=this.urireplacestring,this.replaceKeyNoUser=this.urireplacestringPasswordRedacted},$t.prototype.setupURIListeners=function(){for(var t=document.getElementsByTagName("pre"),e=0;e<t.length;e+=1)t[e].innerHTML.indexOf("&lt;URISTRING&gt;")>-1&&(this.uristowrite.push(t[e]),this.replaceKey="&lt;URISTRING&gt;"),t[e].innerHTML.indexOf("&lt;URISTRING_NOUSER&gt;")>-1&&(this.uristowrite.push(t[e]),this.replaceKeyNoUser="&lt;URISTRING_NOUSER&gt;")},$t.prototype.setupEnvironmentListeners=function(){for(var t=this,e=document.getElementsByClassName("uriwriter_sel"),n=0;n<e.length;n+=1)e[n].addEventListener("click",function(e){var n=e.srcElement.innerHTML;t.addValue("env",n),t.renderURI(),t.renderOptions()})},$t.prototype.replaceString=function(t){var e=t;this.uriwriter.username&&(e=e.replace("$[username]",this.uriwriter.username)),this.uriwriter.database&&(e=e.replace("$[database]",this.uriwriter.database));var n="";if(this.options.length>0){console.log("found options");var i=this.options[0].name;n=i+"="+this.getValue(this.uriwriter[i],this.options[0])}for(var r=1;r<this.options.length;r+=1){var o=this.options[r].name;n=n+","+this.options[r].name+"="+this.getValue(this.uriwriter[o],this.options[r])}n.length>0&&(e=e.replace("$[options]",n));var s="";if(this.uriwriter.hostlist&&this.uriwriter.hostlist.length>0){s=""+this.uriwriter.hostlist[0];for(var a=1;a<this.uriwriter.hostlist.length;a+=1)s+=","+this.uriwriter.hostlist[a];e=e.replace("$[hostlist]",s)}return e},$t.prototype.getValue=function(t,e){return"pass-through"===e.type?e.value:t},$t.prototype.renderOptions=function(){if(this.options&&this.options.length>0){for(var t=document.getElementById("options");t.firstChild;)t.removeChild(t.firstChild);for(var e=0;e<this.options.length;e+=1)"pass-through"!==this.options[e].type&&this.renderOption(this.options[e])}},$t.prototype.renderOption=function(t){var e=this,n=document.createElement("fieldset"),i=document.createElement("input");i.setAttribute("id",t.name),i.setAttribute("type",t.type),i.className="input-uriwriter",void 0!==this.uriwriter[t.name]&&(i.value=this.uriwriter[t.name]),i.addEventListener("keyup",function(n){e.addValue(t.name,document.getElementById(t.name).value),e.renderURI()});var r=document.createElement("label");n.appendChild(i),r.setAttribute("for",t.name),r.className="label-uriwriter",r.innerHTML=t.name,n.appendChild(r),document.getElementById("options").appendChild(n)},$t.prototype.setup=function(){var t=this;null!==document.getElementById("uriwriter")&&(document.getElementById("uriwriter_act").addEventListener("click",function(e){t.addHostEntryToList(),t.renderURI(),e.preventDefault()}),document.getElementById("uriwriter_username").addEventListener("keyup",function(e){t.addValue("username",document.getElementById("uriwriter_username").value),t.renderURI()}),document.getElementById("uriwriter_db").addEventListener("keyup",function(e){t.addValue("database",document.getElementById("uriwriter_db").value),t.renderURI()}),this.setupEnvironmentListeners(),this.populateForm())},$t.prototype.populateForm=function(){this.renderOptions(),this.renderIps(),this.renderForm()},$t.prototype.renderForm=function(){null!==this.uriwriter.username&&(document.getElementById("uriwriter_username").value=this.uriwriter.username),null!==this.uriwriter.database&&(document.getElementById("uriwriter_db").value=this.uriwriter.database)},$t.prototype.renderIps=function(){var t=this.uriwriter.hostlist;if(void 0!==t)for(var e=0;e<t.length;e+=1)this.renderList(t[e])},$t.prototype.resetForm=function(){document.getElementById("hostname").value="",document.getElementById("port").value=""},$t.prototype.addHostEntryToList=function(){var t=document.getElementById("hostname").value,e=document.getElementById("port").value;""===t||""===e&&"Atlas (Cloud) with shell v. 3.6"!==this.uriwriter.env||(this.resetForm(),this.persistList(t,e))},$t.prototype.persistList=function(t,e){console.log("*********HOST PORT*******");var n=t+":"+e;console.log(n),""===e&&(n=""+t);var i=this.uriwriter;if(i.hostlist){var r=i.hostlist;if(!(r.indexOf(n)<0))return;r.push(n),i.hostlist=r}else{var o=[];o.push(n),i.hostlist=o}this.uriwriter=i,this.renderList(n)},$t.prototype.renderList=function(t){var e=this,n=document.createElement("li");n.setAttribute("id",t),n.setAttribute("class","hostpair"),n.innerHTML=t;var i=document.createElement("button");i.innerHTML="X",i.setAttribute("class","littlebutton"),i.setAttribute("id",t),i.addEventListener("click",function(t){var i=e.uriwriter,r=i.hostlist,o=r.indexOf(t.srcElement.id);o>-1&&(r.splice(o,1),i.hostlist=r,e.uriwriter=i,n.outerHTML="",e.renderURI())}),n.appendChild(i),document.getElementById("hostlist").appendChild(n)},Object.defineProperties($t.prototype,qt);var jt=Object.freeze({setup:function(){new $t("uriwriter").setup()}}),Rt=function(){this.components=[]};Rt.prototype.register=function(t){this.components.push(t),t.init&&t.init()},Rt.prototype.update=function(){for(var t=0,e=this.components;t<e.length;t+=1){e[t].setup(this)}};var Ot=new Rt;$(function(){Bt(),Ot.register(e),Ot.register(n),Ot.register(u),Ot.register(d),Ot.register(J),Ot.register(yt),Ot.register(kt),Ot.register(xt),Ot.register(nt),Ot.register(Tt),Ot.register(Lt),Ot.register(ut),Ot.register(Ct),Ot.register(jt),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var t=$(window),i=$(".sidebar"),r=t.width()<=1093;function o(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}t.resize(function(e){r&&t.width()>1093?(r=!1,i.removeClass("reveal")):!r&&t.width()<=1093&&(r=!0)}),window.addEventListener("hashchange",o),location.hash&&window.setTimeout(o,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(o,10)});var s=document.getElementById("showNav");s&&(s.onclick=function(){document.getElementById("sphinxsidebar").style.display="block",document.getElementById("left-column").style.display="flex",document.getElementById("showNav").style.display="none"});var a=document.getElementById("closeNav");if(a&&(a.onclick=function(){document.getElementById("showNav").style.display="flex",document.getElementById("left-column").style.display="none"}),Ot.update(),document.querySelector){var c=document.querySelector("a.current");c&&c.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map
