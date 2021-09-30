(this["webpackJsonpdchan-polygon-faucet-frontend"]=this["webpackJsonpdchan-polygon-faucet-frontend"]||[]).push([[0],{381:function(e){e.exports=JSON.parse('{"homepage":"https://faucet.dchan.network","name":"dchan-polygon-faucet-frontend","version":"0.1.0","private":true,"dependencies":{"@hcaptcha/react-hcaptcha":"^0.3.6","@testing-library/jest-dom":"^5.11.4","@testing-library/react":"^11.1.0","@testing-library/user-event":"^12.1.10","@walletconnect/web3-provider":"^1.4.1","axios":"^0.21.1","ethereumjs-wallet":"^1.0.1","gh-pages":"^3.1.0","react":"^17.0.2","react-accessible-accordion":"^3.3.4","react-dom":"^17.0.2","react-global-configuration":"^1.4.1","react-hcaptcha":"^0.1.1","react-markdown":"^6.0.1","react-scripts":"4.0.3","react-toastify":"^7.0.4","use-wallet":"^0.8.1","web-vitals":"^1.0.1","web3":"^1.3.5","web3modal":"^1.9.3"},"scripts":{"start":"PORT=3000 react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject","predeploy":"yarn run build","deploy":"gh-pages -d build"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},394:function(e){e.exports=JSON.parse('{"apiurl":"https://api.faucet.dchan.network","explorer":"https://polygonscan.com","maxAmount":1000000000000000,"hcaptchasitekey":"04981928-e2ad-4e11-94ff-bf7c71a4537e"}')},403:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},514:function(e,t,n){},527:function(e,t){},548:function(e,t){},550:function(e,t){},620:function(e,t){},622:function(e,t){},655:function(e,t){},660:function(e,t){},662:function(e,t){},669:function(e,t){},682:function(e,t){},705:function(e,t){},713:function(e,t){},715:function(e,t){},729:function(e,t){},796:function(e,t){},936:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(138),o=n.n(r),s=(n(403),n(39)),i=n.p+"static/media/polygon.d46e750b.svg",l=n.p+"static/media/faucet.992ecb17.svg",u=n.p+"static/media/dchan.35747f56.png",h=(n(404),n(381)),d=(n(405),n(12));var p=function(e){var t=e.text,n=e.loadingText,c=e.color,r=e.disabled,o=e.hidden,i=e.onClick,l=Object(a.useState)(!1),u=Object(s.a)(l,2),h=u[0],p=u[1],b=Object(a.useCallback)((function(){var e;p(!0),(null===(e=i())||void 0===e?void 0:e.then((function(){p(!1)})).catch((function(){p(!1)})))||p(!1)}),[i]);return Object(d.jsx)("button",{className:"BackupButton",disabled:h|r,onClick:h?null:b,style:{backgroundColor:c,display:!o||"none"},children:h?n||"Loading\u2026":t})},b=n(35),f=n(140),j=n.n(f);n(514);function g(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)(b.a,{allowZeroExpanded:!0,allowMultipleExpanded:!0,onChange:function(e){if(e.length>n.length){var t=e[e.length-1],a=document.getElementById("accordion__panel-".concat(t)).getBoundingClientRect().bottom;a>window.innerHeight&&window.scrollBy(0,a-window.innerHeight)}c(e)},children:[Object(d.jsxs)(b.b,{children:[Object(d.jsx)(b.d,{children:Object(d.jsx)(b.c,{children:"What is a Faucet ?"})}),Object(d.jsx)(b.e,{children:Object(d.jsx)(j.a,{className:"Explanations",children:"A `Faucet` is a tool that provides a small amount of funds to start using a dapp without having to buy cryptocurrency. \n    This faucet provides just enough MATIC to allow users to post on [dchan.network](https://dchan.network)."})})]}),Object(d.jsxs)(b.b,{children:[Object(d.jsx)(b.d,{children:Object(d.jsx)(b.c,{children:"How much can I get ?"})}),Object(d.jsx)(b.e,{children:Object(d.jsx)(j.a,{className:"Explanations",children:"Plenty enough!  \n    Transactions on Polygon network are dirt cheap. We're talking about fractions of a cent for most transactions.  \n    So this faucet will only send you `0.001 MATIC` - enough to send a couple posts on [dchan.network](https://dchan.network). \n    Feel free to send some spare change at `0xa3b832e52bc12df5a5eeb885370bc9b54d19bc1a` to replenish the faucet once you made it. \ud83d\ude00"})})]}),Object(d.jsxs)(b.b,{children:[Object(d.jsx)(b.d,{children:Object(d.jsx)(b.c,{children:"How to earn (much) more MATIC ?"})}),Object(d.jsx)(b.e,{children:Object(d.jsx)(j.a,{className:"Explanations",children:"* First bring your assets from Ethereum to Polygon through [the bridge](https://wallet.matic.network/bridge/)  \n    Then there's a variety of things you can do:  \n    * Swapping assets on [QuickSwap](https://quickswap.exchange/) or [ComethSwap](https://swap.cometh.io/#/swap), the equivalents of `Uniswap` on Polygon  \n    [Paraswap](https://paraswap.io/#/?network=polygon) is also available and will route your swaps through the cheapest path.  \n    * Depositing your assets on [Aave](https://app.aave.com/dashboard) or [Curve](https://polygon.curve.fi/) to farm some fresh MATIC  \n    * Now you'll get free MATIC to shitpost as much as you want, without having to buy them ever again! \n    "})})]})]})}var m=n(0),x=n.n(m),O=n(5),w=n(6),v=n(9),y=n(382),k=n.n(y),N=n(384),S=n.n(N),C=n(396),A=function(){function e(){Object(w.a)(this,e),this.connected=!1,this.busy=!1,this.web3Provider=null,this.web3=null,this.balance=0,this.network=0}return Object(v.a)(e,[{key:"connect",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.connected){e.next=23;break}return t={walletconnect:{package:C.a,options:{infuraId:"INFURA_ID"}}},n=new S.a({network:"mainnet",cacheProvider:!0,providerOptions:t}),e.next=5,n.connect();case 5:return this.web3Provider=e.sent,e.prev=6,e.next=9,this.web3Provider.request({method:"eth_requestAccounts",params:[]});case 9:this.account=e.sent,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.error("User denied account access: ".concat(e.t0));case 15:return this.web3=new k.a(this.web3Provider),e.next=18,this.web3.eth.net.getId();case 18:if(this.network=e.sent,137!=this.network){e.next=23;break}return this.connected=!0,console.log("connected: ".concat(this.account," ").concat(typeof this.account)),e.abrupt("return",this.account);case 23:case"end":return e.stop()}}),e,this,[[6,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getFormattedBalance",value:function(e,t){var n=this.web3.utils.toBN(e),a=this.web3.utils.toBN(Math.pow(10,t)),c=n.div(a).toString(),r=n.mod(a).toString();return c+"."+(r=r.padStart(t,"0"))+" MATIC"}},{key:"getBalance",value:function(){var e=Object(O.a)(x.a.mark((function e(){var t,n,a=arguments;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!(a.length>0&&void 0!==a[0])||a[0],n=18,e.next=4,this.web3.eth.getBalance(String(this.account));case 4:return this.balance=e.sent,this.formatted_balance=this.getFormattedBalance(this.balance,n),e.abrupt("return",t?this.formatted_balance:this.balance);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),P=A,T=n(393),I=n.n(T),B=n(62),F=n.n(B);function _(){return(_=Object(O.a)(x.a.mark((function e(t,n){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),a=F.a.get("apiurl")+"/rpc-mainnet/matic/"+t+"/"+n,console.log("Sending request..."),e.next=5,I.a.get(a).then((function(e){if(200===e.status)return F.a.get("explorer")+"/tx/"+e.data.hash}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e,t){return _.apply(this,arguments)},M=n(93),H=(n(934),n(394)),q=n(395),J=n.n(q);F.a.set(H);var L=new P;var R=function(){var e=Object(a.useState)("Not connected"),t=Object(s.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),o=Object(s.a)(r,2),b=o[0],f=o[1],j=Object(a.useState)(""),m=Object(s.a)(j,2),x=m[0],O=m[1],w=Object(a.useState)(""),v=Object(s.a)(w,2),y=v[0],k=v[1],N=Object(a.useState)(""),S=Object(s.a)(N,2),C=S[0],A=S[1],P=Object(a.useState)(!1),T=Object(s.a)(P,2),I=T[0],B=T[1],_=Object(a.useState)(!1),H=Object(s.a)(_,2),q=H[0],R=H[1],W=Object(a.useState)(0),D=Object(s.a)(W,2),U=D[0],z=D[1];Object(a.useEffect)((function(){B(q||Number(b)>=F.a.get("maxAmount")||""===C)}),[b,C,q]);var Q=Object(a.useCallback)((function(){L.getBalance().then((function(e){f(parseFloat(e.replace(/[^0-9]/g,""))),O(e)}))}));return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(M.a,{hideProgressBar:!0}),Object(d.jsxs)("div",{className:"App-banner",children:[Object(d.jsxs)("div",{className:"App-title",style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("img",{src:i,className:"App-polygon",alt:"polygon"})," Polygon Faucet"]}),Object(d.jsxs)("div",{className:"App-subtitle",style:{display:"flex",alignItems:"center",padding:"2rem"},children:["@",Object(d.jsx)("a",{href:"//dchan.network",target:"_blank",children:"dchan.network"}),Object(d.jsx)("img",{src:u,className:"App-dchan",alt:"dchan",style:{zIndex:-1,width:"4rem"}})]})]}),Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsxs)("div",{className:"Commands",style:{position:"relative"},children:[Object(d.jsx)("img",{src:l,className:"App-faucet",alt:"faucet",style:{position:"absolute",right:"0px",bottom:"0px",width:"8rem",transform:"translate(100%, 0%) scale(-1, 1)"}}),Object(d.jsx)(p,{text:"Connect",loadingText:"Loading...",color:"#8248e5",hidden:"Not connected"!==n,onClick:function(){return L.connect().then((function(e){e?(c(e),Q()):M.b.error("Wrong network: Please select Matic/Polygon network first")}))}}),Object(d.jsx)(p,{text:Number(b)>=F.a.get("maxAmount")?"Balance too high":"Receive",loadingText:"Sending...",color:"#8248e5",disabled:I,hidden:"Not connected"===n,onClick:function(){z(U+1),R(!0);try{E(n,C).then((function(e){M.b.success("Transaction sent!"),k(e),A(""),R(!1)})).catch((function(e){console.error({error:e}),M.b.error("\ud83d\ude15 ".concat(e.message||e.response.data.err.message)),R(!1)}))}catch(e){M.b.error("Error: ".concat(JSON.stringify(e))),R(!1)}}})]}),Object(d.jsx)("div",{children:U>10?Object(d.jsxs)("span",{style:{fontSize:"".concat(1+.001*U,"rem")},children:["Presses: ",U]}):""}),Object(d.jsx)("form",{id:"receive",action:"",method:"POST",children:Object(d.jsx)(J.a,{theme:"dark",sitekey:F.a.get("hcaptchasitekey"),onVerify:function(e,t){A(e)}})}),Object(d.jsx)("p",{hidden:"Not connected"===n,children:n}),Object(d.jsx)("p",{hidden:"Not connected"===n,children:"Your balance: "+String(x)}),Object(d.jsx)("a",{hidden:""===y,target:"_blank",rel:"noopener noreferrer",href:y,children:y}),Object(d.jsx)("br",{}),Object(d.jsx)(g,{}),Object(d.jsxs)("div",{className:"App-footer",children:[Object(d.jsxs)("p",{children:["Credits to ",Object(d.jsx)("a",{href:"https://github.com/TamtamHero/polygon-faucet/",target:"_blank",rel:"noopener noreferrer",children:"TamtamHero"})," for the Web App. v","".concat(h.version),"."," "]}),Object(d.jsxs)("p",{children:["Polygon donation: ",Object(d.jsx)("a",{h:!0,href:"https://polygonscan.com/address/0xa3b832e52bc12df5a5eeb885370bc9b54d19bc1a/transactions",target:"_blanc",rel:"noopener noreferrer",children:"0xa3b832e52bc12df5a5eeb885370bc9b54d19bc1a"})]})]})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,942)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root")),W()}},[[936,1,2]]]);
//# sourceMappingURL=main.11eff1aa.chunk.js.map