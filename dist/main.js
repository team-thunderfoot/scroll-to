(()=>{"use strict";new class{constructor(){this.init(),this.events()}init(){new class{constructor(t){this.DOM={triggers:document.querySelectorAll(`.${t.trigger}`)??[],checkUrl:t.checkUrl,anchorTo:t.anchorTo,offsetTop:t.offsetTop,offsetTopURL:t.offsetTopURL},this.init()}init(){this.DOM.checkUrl&&this.scrollFromURL(),this.DOM.triggers.length&&this.DOM.triggers.forEach((t=>{const o=t.getAttribute(this.DOM.anchorTo),e=document.getElementById(o);if(this.DOM.offsetTop)var s=t.getAttribute(this.DOM.offsetTop);t.addEventListener("click",(t=>{t.preventDefault(),this.scrollTo(e.offsetTop,s)}))}))}events(){}scrollTo(t,o){window.scrollTo({top:t-o,left:0,behavior:"smooth"})}scrollFromURL(){const t=window.location.href,o=t.indexOf("?");if(o>0){const e=t.slice(o+1),s=document.getElementById(e);this.scrollTo(s.offsetTop,this.DOM.offsetTopURL)}}}({trigger:"js--scroll-to",checkUrl:!0,anchorTo:"tf-data-target",offsetTop:"tf-data-distance",offsetTopURL:100})}events(){}}})();