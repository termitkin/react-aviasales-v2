(window["webpackJsonpreact-aviasales-v2"]=window["webpackJsonpreact-aviasales-v2"]||[]).push([[0],{25:function(e,t,r){e.exports=r.p+"static/media/logo.eb515c41.svg"},27:function(e,t,r){e.exports=r.p+"static/media/check.b8070e66.svg"},29:function(e,t,r){e.exports=r(58)},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(9),o=r.n(c),i=r(1),s=r(25),l=r.n(s),u=Object(i.a)("a",{target:"e4b1bg50"})({name:"9p2zdk",styles:"display:block;width:82px;height:90px;margin:0 auto;text-decoration:none;"}),d=function(){return a.a.createElement(u,{href:"https://termitkin.github.io/react-aviasales-v2/",title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"},a.a.createElement("img",{src:l.a,alt:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"}))},p=r(3),f=function(e){var t=Object(i.a)("button",{target:"eufgfnx0"})("width:33.3%;height:40px;background-color:",e.currency===e.currentCurrency?"#2196f3":"#fff",";border:",e.currency===e.currentCurrency?"1px solid #64b5f5":"1px solid #d2d5d6",";cursor:pointer;color:",e.currency===e.currentCurrency?"#fff":"#2196f3",";font-family:Open Sans,sans-serif;font-weight:600;font-size:12px;line-height:22px;letter-spacing:0.5px;text-transform:uppercase;transition:color,background-color,border 0.15s;border-radius:",e.borderRadius||"0 0 0 0",";&:nth-of-type(2),&:nth-of-type(3){margin-left:-1px;}&:hover{background-color:",e.currency===e.currentCurrency?"#2196f3":"#e5f9ff",";border:1px solid #64b5f5;z-index:1;}&:focus{background-color:",e.currency===e.currentCurrency?"#2196f3":"#fff",";border:",e.currency===e.currentCurrency?"1px solid #64b5f5":"3px solid #64b5f5",";z-index:1;}");return a.a.createElement(t,{onClick:function(){return e.changeCurrency(e.currency)},"aria-label":e.ariaLabel},e.currency)},b="(min-width: 960px)",g="ACTION_TICKETS_HAS_ERRORED",x="ACTION_TICKETS_IS_LOADING",h="ACTION_TICKETS_FETCH_DATA_SUCCESS",m=Object(i.a)("div",{target:"eyf3zm00"})({name:"130ygm1",styles:"display:flex;margin:0 14px 0 14px;"}),y=Object(i.a)(f,{target:"eyf3zm01"})("width:100%;height:65px;display:flex;padding:10px 15px 15px;box-sizing:border-box;position:relative;@media ",b,"{height:40px;margin:10px auto 16px auto;}"),E={changeCurrency:function(e){return{type:"ACTION_CHANGE_CURRENCY",payload:e}}},v=Object(p.b)(function(e){return{currentCurrency:e.currency.currentCurrency}},E)(function(e){return a.a.createElement(m,{"aria-label":"\u0412 \u043a\u0430\u043a\u043e\u0439 \u0432\u0430\u043b\u044e\u0442\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0446\u0435\u043d\u044b"},a.a.createElement(y,{ariaLabel:"\u0440\u0443\u0431\u043b\u0438",currency:"rub",borderRadius:"5px 0px 0px 5px",currentCurrency:e.currentCurrency,changeCurrency:e.changeCurrency}),a.a.createElement(y,{ariaLabel:"\u0434\u043e\u043b\u043b\u0430\u0440\u044b",currency:"usd",currentCurrency:e.currentCurrency,changeCurrency:e.changeCurrency}),a.a.createElement(y,{ariaLabel:"\u0435\u0432\u0440\u043e",currency:"eur",borderRadius:"0px 5px 5px 0px",currentCurrency:e.currentCurrency,changeCurrency:e.changeCurrency}))}),O=r(27),k=r.n(O),C=Object(i.a)("label",{target:"e1pdw9l30"})({name:"1pt2k7u",styles:'width:100%;display:flex;align-items:center;cursor:pointer;font-family:Open Sans,sans-serif;font-weight:normal;font-size:13px;line-height:35px;color:#4a4a4a;&::before{content:"";display:inline-block;width:19px;height:19px;border:1px solid #d2d5d6;border-radius:3px;box-sizing:border-box;margin-right:10px;}'}),w=Object(i.a)("input",{target:"e1pdw9l31"})("position:absolute;width:1px;height:1px;margin:-1px;border:0;padding:0;clip:rect(0 0 0 0);overflow:hidden;&:checked + ",C,"::before{border:1px solid #2196f3;background-image:url(",k.a,");background-position:center center;background-repeat:no-repeat;}&:focus + ",C,"::before{border:3px solid #2196f3;}"),j=Object(i.a)("button",{target:"e1pdw9l32"})({name:"vkqmmt",styles:"width:49px;background-color:transparent;border:none;margin-left:auto;font-family:Open Sans,sans-serif;font-weight:600;font-size:11px;line-height:35px;letter-spacing:0.5px;color:#2196f3;text-transform:uppercase;display:none;cursor:pointer;padding:0;&:hover,&:focus{color:#ff9d1b;}"}),R=Object(i.a)("div",{target:"e1pdw9l33"})("width:290px;height:36px;padding:0 15px;display:flex;align-items:center;box-sizing:border-box;outline:none;@media ",b,"{width:232px;}&:hover{background-color:#f1fcff;}&:hover ",j,"{display:table-cell;background-color:#f1fcff;}"),S=function(e){var t="all"===e.stops?"":a.a.createElement(j,{onClick:function(){return e.changeStops({currentClickedCheckbox:"checkbox"+e.id,only:!0})}},"\u0442\u043e\u043b\u044c\u043a\u043e");return a.a.createElement(R,{tabIndex:"-1"},a.a.createElement(w,{checked:e.isEnabled,id:"checkbox"+e.id,type:"checkbox",onChange:function(){return e.changeStops({currentClickedCheckbox:"checkbox"+e.id,only:!1})}}),a.a.createElement(C,{htmlFor:"checkbox"+e.id},e.labelText),t)},T={changeStops:function(e){return{type:"ACTION_CHANGE_STOPS",payload:e}}},_=Object(p.b)(function(e){return{stops:e.stops}},T)(function(e){var t=[];for(var r in e.stops)t.push(e.stops[r]);var n=t.map(function(t){return a.a.createElement(S,{key:t.id,id:t.id,labelText:t.labelText,stops:t.stops,isEnabled:t.isEnabled,changeStops:e.changeStops})});return a.a.createElement("div",null,n)}),A=Object(i.a)("div",{target:"ehn0gjf0"})("display:flex;flex-direction:column;width:290px;background-color:#fff;box-shadow:0px 1px 4px rgba(91,137,164,0.25);border-radius:5px;margin-bottom:30px;border:1px solid #fff;@media ",b,"{width:232px;margin-bottom:0;}"),I=Object(i.a)("fieldset",{target:"ehn0gjf1"})({name:"v7jne7",styles:"width:100%;max-width:100%;display:block;border:none;padding:0;margin:15px 0 0 0;&:last-child{margin:15px 0 15px 0;}"}),B=Object(i.a)("legend",{target:"ehn0gjf2"})({name:"19kq7p1",styles:"font-family:Open Sans,sans-serif;font-weight:600;font-size:12px;line-height:19px;letter-spacing:0.5px;color:#4a4a4a;text-transform:uppercase;margin-left:14px;margin-bottom:15px;padding:0;"}),N=function(){return a.a.createElement(A,null,a.a.createElement(I,null,a.a.createElement(B,null,"\u0412\u0430\u043b\u044e\u0442\u0430"),a.a.createElement(v,null)),a.a.createElement(I,null,a.a.createElement(B,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),a.a.createElement(_,null)))},z=function(e){var t=Object(i.a)("button",{target:"e1ovnbcm0"})("display:flex;align-items:center;justify-content:center;width:50%;height:50px;background-color:",e.sortBy===e.currentSortBy?"#2196F3":"#fff",";color:",e.sortBy===e.currentSortBy?"#fff":"#4A4A4A",";border:",e.sortBy===e.currentSortBy?"1px solid #2196F3":"1px solid #dfe5ec",";cursor:pointer;font-family:Open Sans;font-style:normal;font-weight:600;font-size:12px;letter-spacing:0.5px;text-transform:uppercase;border-radius:",e.borderRadius||"0 0 0 0",";padding:0;&:hover{background-color:",e.sortBy===e.currentSortBy?"#2196f3":"#fff",";border:1px solid #64b5f5;}&:focus{background-color:",e.sortBy===e.currentSortBy?"#2196f3":"#fff",";border:",e.sortBy===e.currentSortBy?"1px solid #64b5f5":"3px solid #64b5f5",";}");return a.a.createElement(t,{onClick:function(){return e.changeFasterOrCheaper(e.sortBy)}},e.text)},H=Object(i.a)("div",{target:"e17u989k0"})({name:"105scsi",styles:"width:100%;max-width:500px;height:50px;display:flex;"}),D={changeFasterOrCheaper:function(e){return{type:"ACTION_FASTER_OR_CHEAPER",payload:e}}},L=Object(p.b)(function(e){return{sortBy:e.fastesOrCheaper.sortBy}},D)(function(e){return a.a.createElement(H,null,a.a.createElement(z,{text:"\u0421\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439",borderRadius:"5px 0px 0px 5px",sortBy:"cheaper",currentSortBy:e.sortBy,changeFasterOrCheaper:e.changeFasterOrCheaper}),a.a.createElement(z,{text:"\u0421\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439",borderRadius:"0px 5px 5px 0px",sortBy:"fastes",currentSortBy:e.sortBy,changeFasterOrCheaper:e.changeFasterOrCheaper}))}),P=r(8),U=r(5),F=r.n(U);function M(e){return{type:g,ticketsHasErrored:e}}function Y(e){return{type:x,ticketsIsLoading:e}}function G(e){return function(t){t(Y(!0));(function(e){return F.a.get(e).then(function(e){return e.data.searchId}).catch(function(){return t(M(!0))})})(e).then(function(e){(function e(r,n){return F.a.get("https://front-test.beta.aviasales.ru/tickets",{params:{searchId:r}}).then(function(t){return!1===t.data.stop?(n.push.apply(n,Object(P.a)(t.data.tickets)),e(r,n)):!0===t.data.stop?(n.push.apply(n,Object(P.a)(t.data.tickets)),n):void 0}).catch(function(a){if(500===a.response.status)return e(r,n);t(M(!0))})})(e,[]).then(function(e){t({type:h,tickets:{tickets:e}}),t(Y(!1))})})}}var J=function(e){return{type:"ACTION_CURRENCY_RATES_HAS_ERRORED",currencyRatesHasErrored:e}},q=function(e){return{type:"ACTION_CURRENCY_RATES_IS_LOADING",currencyRatesIsLoading:e}},K=function(e){var t=e/60,r=Math.floor(t),n=60*(t-(r=r>9?r:"0".concat(r))),a=Math.round(n);return a=a>9?a:"0".concat(a),"".concat(r,"\u0447 ").concat(a,"\u043c")},$=function(e,t){var r=new Date(e),n=r.getTime()+6e4*t,a=r.getHours()>9?r.getHours():"0".concat(r.getHours()),c=r.getMinutes()>9?r.getMinutes():"0".concat(r.getMinutes()),o="".concat(a,":").concat(c),i=new Date(n).getHours()>9?new Date(n).getHours():"0".concat(new Date(n).getHours()),s=new Date(n).getMinutes()>9?new Date(n).getMinutes():"0".concat(new Date(n).getMinutes()),l="".concat(i,":").concat(s);return"".concat(o," \u2013 ").concat(l)},Q=function(e){return 0===e.length?"0 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a":1===e.length?"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430":"".concat(e.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438")},V=(r(56),Object(i.a)("div",{target:"e4v6t3d0"})("width:100%;box-shadow:0px 2px 8px rgba(0,0,0,0.1);border-radius:5px;padding:5px;margin-top:20px;box-sizing:border-box;background-color:#fff;border-bottom:3px solid transparent;transition:border-bottom 0.25s;&:hover,&:focus{cursor:pointer;border-bottom:3px solid #2196f3;}@media ",b,"{width:100%;box-shadow:0px 2px 8px rgba(0,0,0,0.1);border-radius:5px;padding:20px;margin-top:20px;box-sizing:border-box;background-color:#fff;}")),W=Object(i.a)("div",{target:"e4v6t3d1"})("position:relative;z-index:0;box-shadow:0px 1px 4px rgba(91,137,164,0.25);border-radius:5px;transition:box-shadow 0.25s;&:hover,&:focus{outline:none;box-shadow:0px 5px 25px rgba(91,137,164,0.1);}&:hover ",V,",&:focus ",V,'{border-bottom:3px solid #2196f3;}&:after{content:"";width:100%;height:46px;position:absolute;box-shadow:0px 10px 50px rgba(91,137,164,0.25);bottom:0;left:50%;transform:translate(-50%,0);z-index:-1;opacity:0;transition:opacity 0.25s;border-radius:5px;}&:hover:after,&:focus:after{content:"";width:100%;height:46px;position:absolute;box-shadow:0px 10px 50px rgba(91,137,164,0.25);bottom:0;left:50%;transform:translate(-50%,0);z-index:-1;opacity:1;}'),X=Object(i.a)("div",{target:"e4v6t3d2"})({name:"15z00yd",styles:"width:100%;height:36px;display:flex;justify-content:space-between;align-items:center;"}),Z=Object(i.a)("picture",{target:"e4v6t3d3"})({name:"ndcr7b",styles:"width:140px;height:36px;display:flex;justify-content:flex-end;"}),ee=Object(i.a)("img",{target:"e4v6t3d4"})("width:99px;height:36px;margin-right:5px;@media ",b,"{margin-right:0px;}"),te=Object(i.a)("div",{target:"e4v6t3d5"})("margin-left:5px;font-family:Open Sans;font-style:normal;font-weight:600;font-size:24px;line-height:24px;color:#2196f3;@media ",b,"{margin-left:0;}"),re=Object(i.a)("div",{target:"e4v6t3d6"})("width:33.3%;display:flex;align-items:center;justify-content:center;font-family:Open Sans;font-style:normal;font-weight:600;@media ",b,"{width:140px;justify-content:flex-start;}"),ne=Object(i.a)(re,{target:"e4v6t3d7"})({name:"1sbn848",styles:"font-size:12px;height:18px;color:#a0b0b9;"}),ae=Object(i.a)(re,{target:"e4v6t3d8"})("font-size:13px;height:21px;color:#4a4a4a;@media ",b,"{font-size:14px;height:21px;color:#4a4a4a;}"),ce=Object(i.a)("div",{target:"e4v6t3d9"})({name:"1ao0q19",styles:"width:100%;height:39px;display:flex;flex-wrap:wrap;flex-direction:column;align-content:space-between;margin-top:20px;&:last-child{margin-top:10px;}"}),oe=function(e){return e.ticket.map(function(t){return a.a.createElement(W,{key:t.carrier+t.price+t.segments[0].origin+t.segments[0].duration+t.segments[1].duration,tabIndex:"0"},a.a.createElement(V,null,a.a.createElement(X,null,a.a.createElement(te,null,(r=t.price,n=e.currentCurrency,c=e.currencyRates,"usd"===n?(r/=c.usd,r=(r=Number(r).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" $"):"eur"===n?(r/=c.eur,r=(r=Number(r).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" \u20ac"):r=r.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" \u20bd",r)),a.a.createElement(Z,null,a.a.createElement("source",{srcSet:"https://pics.avs.io/99/36/".concat(t.carrier,"@2x.png"),type:"image/png",media:"screen and (-webkit-min-device-pixel-ratio: 1.25), screen and ( min--moz-device-pixel-ratio: 1.25), screen and (-o-min-device-pixel-ratio: 1.25/1), screen and (min-device-pixel-ratio: 1.25), screen and ( min-resolution:\r 200dpi), screen and ( min-resolution: 1.25dppx)"}),a.a.createElement(ee,{src:"https://pics.avs.io/99/36/".concat(t.carrier,".png"),alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u0430\u0432\u0438\u0430\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"}))),a.a.createElement(ce,null,a.a.createElement(ne,null,"".concat(t.segments[0].origin," \u2013 ").concat(t.segments[0].destination)),a.a.createElement(ae,null,$(t.segments[0].date,t.segments[0].duration)),a.a.createElement(ne,null,"\u0412 \u043f\u0443\u0442\u0438"),a.a.createElement(ae,null,K(t.segments[0].duration)),a.a.createElement(ne,null,Q(t.segments[0].stops)),a.a.createElement(ae,null,Object(P.a)(t.segments[0].stops).join(", "))),a.a.createElement(ce,null,a.a.createElement(ne,null,"".concat(t.segments[1].origin," \u2013 ").concat(t.segments[1].destination)),a.a.createElement(ae,null,$(t.segments[1].date,t.segments[1].duration)),a.a.createElement(ne,null,"\u0412 \u043f\u0443\u0442\u0438"),a.a.createElement(ae,null,K(t.segments[1].duration)),a.a.createElement(ne,null,Q(t.segments[1].stops)),a.a.createElement(ae,null,Object(P.a)(t.segments[1].stops).join(", ")))));var r,n,c})},ie=Object(i.a)("div",{target:"e2re6b70"})({name:"1z0wz2g",styles:"display:block;margin-top:12px;text-align:center;color:#333;"}),se=function(e){var t=e.text;return a.a.createElement(ie,null,t)},le=Object(i.a)("div",{target:"e18eycj0"})({name:"ta218l",styles:"width:100%;max-width:500px;height:184px;background-color:#eee;margin-top:20px;display:flex;justify-content:center;align-items:center;"}),ue=Object(i.a)("span",{target:"e18eycj1"})({name:"1o3xr9e",styles:"font-size;16px;color:#333;font-family:sans-serif;font-weight:bold;"}),de=function(){return a.a.createElement("div",null,a.a.createElement(le,null,a.a.createElement(ue,null,"\u0411\u0438\u043b\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f")),a.a.createElement(le,null,a.a.createElement(ue,null,"\u0411\u0438\u043b\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f")),a.a.createElement(le,null,a.a.createElement(ue,null,"\u0411\u0438\u043b\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f")),a.a.createElement(le,null,a.a.createElement(ue,null,"\u0411\u0438\u043b\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f")),a.a.createElement(le,null,a.a.createElement(ue,null,"\u0411\u0438\u043b\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u0442\u0441\u044f")))},pe=Object(p.b)(function(e){return{checkboxes:e.stops,sortBy:e.fastesOrCheaper.sortBy,currentCurrency:e.currency.currentCurrency,tickets:e.tickets,ticketsIsLoading:e.ticketsIsLoading,ticketsHasErrored:e.ticketsHasErrored,currencyRates:e.currencyRates,currencyRatesHasErrored:e.currencyRatesHasErrored,currencyRatesIsLoading:e.currencyRatesIsLoading}},function(e){return{fetchCurrentRates:function(){return e(function(e){e(q(!0));var t=F.a.get("https://api.ratesapi.io/api/latest?base=USD&symbols=RUB").then(function(e){return e.data.rates.RUB}).catch(function(){return e(J(!0))}),r=F.a.get("https://api.ratesapi.io/api/latest?base=EUR&symbols=RUB").then(function(e){return e.data.rates.RUB}).catch(function(){return e(J(!0))});F.a.all([t,r]).then(F.a.spread(function(t,r){e({type:"ACTION_CURRENCY_RATES_FETCH_DATA_SUCCESS",currencyRates:{currencyRates:{usd:t,eur:r}}}),e(q(!1))}))})},fetchTickets:function(t){return e(G(t))}}})(function(e){0===e.tickets.tickets.length&&!1===e.ticketsIsLoading&&e.fetchTickets("https://front-test.beta.aviasales.ru/search"),""===e.currencyRates.currencyRates.usd&&""===e.currencyRates.currencyRates.eur&&!1===e.currencyRatesIsLoading&&e.fetchCurrentRates();var t=e.tickets.tickets.slice(),r=[];if(!0===e.checkboxes.checkbox0.isEnabled)r="all";else for(var n in e.checkboxes)!0===e.checkboxes[n].isEnabled&&r.push(e.checkboxes[n].stops);return"all"!==r&&(t=t.filter(function(e){return r.some(function(t){return t===e.segments[0].stops.length&&t===e.segments[1].stops.length})})),"cheaper"===e.sortBy?t.sort(function(e,t){return e.price-t.price}):t.sort(function(e,t){return e.segments[0].duration+e.segments[1].duration-(t.segments[0].duration+t.segments[1].duration)}),t=t.slice(0,5),!0===e.ticketsHasErrored||e.currencyRatesHasErrored?a.a.createElement(se,{text:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 =( \u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!"}):!0===e.ticketsIsLoading?a.a.createElement(de,null):0===t.length?a.a.createElement(se,{text:"\u041c\u044b \u043d\u0430\u0448\u043b\u0438 ".concat(e.tickets.tickets.length," \u0431\u0438\u043b\u0435\u0442\u043e\u0432, \u043d\u043e \u043d\u0438 \u043e\u0434\u0438\u043d \u043d\u0435 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u043c \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u043c.")}):a.a.createElement(oe,{ticket:t,currentCurrency:e.currentCurrency,currencyRates:e.currencyRates.currencyRates})}),fe=Object(i.a)("div",{target:"edxujjv0"})({name:"z6z39o",styles:"padding:1px;min-height:100%;background-color:#f3f7fa;box-sizing:border-box;"}),be=Object(i.a)("div",{target:"edxujjv1"})("width:292px;display:flex;flex-direction:column;margin:50px auto;justify-content:flex-start;@media ",b,"{width:752px;flex-direction:row;justify-content:space-between;align-items:flex-start;}"),ge=Object(i.a)("div",{target:"edxujjv2"})({name:"1at057e",styles:"width:100%;max-width:500px;dispay:flex;flex-direction:column;"}),xe=function(){return a.a.createElement(fe,null,a.a.createElement(d,null),a.a.createElement(be,null,a.a.createElement(N,null),a.a.createElement(ge,null,a.a.createElement(L,null),a.a.createElement(pe,null))))},he=(r(57),r(6)),me=r(28),ye=r(10);function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(r,!0).forEach(function(t){Object(ye.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Oe={currentCurrency:"rub"};function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function Ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(r,!0).forEach(function(t){Object(ye.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var we={sortBy:"cheaper"},je={checkbox0:{id:0,stops:"all",isEnabled:!0,labelText:"\u0412\u0441\u0435"},checkbox1:{id:1,stops:0,isEnabled:!0,labelText:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"},checkbox2:{id:2,stops:1,isEnabled:!0,labelText:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"},checkbox3:{id:3,stops:2,isEnabled:!0,labelText:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"},checkbox4:{id:4,stops:3,isEnabled:!0,labelText:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}},Re={tickets:[]},Se={currencyRates:{usd:"",eur:""}},Te=Object(he.c)({stops:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_CHANGE_STOPS":var r=JSON.parse(JSON.stringify(e)),n=t.payload.currentClickedCheckbox;if(!0===t.payload.only){for(var a in r)r[a].isEnabled=!1;r[n].isEnabled=!0}else if("checkbox0"===n&&!1===e.checkbox0.isEnabled)for(var c in r)r[c].isEnabled=!0;else if("checkbox0"===n&&!0===e.checkbox0.isEnabled)for(var o in r)r[o].isEnabled=!1;else if("checkbox0"!==n&&!0===e.checkbox0.isEnabled)r.checkbox0={id:e.checkbox0.id,isEnabled:!1,labelText:e.checkbox0.labelText,stops:e.checkbox0.stops},r[n].isEnabled=!e[n].isEnabled;else if("checkbox0"!==n&&!1===e.checkbox0.isEnabled){r[n].isEnabled=!e[n].isEnabled;var i=0,s=0;for(var l in r)!0===r[l].isEnabled&&(s+=1),i+=1;s===i-1&&(r.checkbox0.isEnabled=!0)}else r[n].isEnabled=!e[n].isEnabled;return r;default:return e}},currency:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_CHANGE_CURRENCY":return ve({},e,{currentCurrency:t.payload});default:return e}},fastesOrCheaper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_FASTER_OR_CHEAPER":return Ce({},e,{sortBy:t.payload});default:return e}},currencyRates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_CURRENCY_RATES_FETCH_DATA_SUCCESS":return t.currencyRates;default:return e}},currencyRatesHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_CURRENCY_RATES_HAS_ERRORED":return t.currencyRatesHasErrored;default:return e}},currencyRatesIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ACTION_CURRENCY_RATES_IS_LOADING":return t.currencyRatesIsLoading;default:return e}},tickets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.tickets;default:return e}},ticketsHasErrored:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.ticketsHasErrored;default:return e}},ticketsIsLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.ticketsIsLoading;default:return e}}}),_e=function(e){return Object(he.d)(Te,e,Object(he.a)(me.a))}();o.a.render(a.a.createElement(p.a,{store:_e},a.a.createElement(xe,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.620bd949.chunk.js.map