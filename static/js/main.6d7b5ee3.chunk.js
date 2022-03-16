(this["webpackJsonpmy-weather-app"]=this["webpackJsonpmy-weather-app"]||[]).push([[0],{141:function(e,t,a){"use strict";a.r(t);var c=a(33),n=a(5),r=a(6),s=a(8),o=a(7),i=a(0),l=a.n(i),d=a(21),h=a.n(d),u=a(16),p=a(34),j=a(57),b=a(58),m=a(11),f=a(3),g=a.n(f),v=a(17),x=a(25),O=a.n(x),y=a(20);O.a.interceptors.response.use(null,(function(e){var t,a,c;return y.b.error(e.message),(null===(t=e.response)||void 0===t?void 0:t.data.Message)?y.b.error(null===(c=e.response)||void 0===c?void 0:c.data.Message):y.b.error(null===(a=e.response)||void 0===a?void 0:a.data),Promise.reject(e)}));var w={get:O.a.get,post:O.a.post,put:O.a.put,patch:O.a.patch,delete:O.a.delete},k="TYPE_IN_CITYNAME_FIELD",C="weatherData",N="SelectedOption";function D(e){return Object(v.a)(g.a.mark((function t(){var a,c,n,r,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=JSON.parse('["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]'),n=g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,c){t(w.get("https://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e,"?apikey=").concat(a[n],"&details=true")).catch((function(e){return c(e)})))})).catch((function(e){console.error(e),y.b.info("API KEY HAS BEEN CHANGED")}));case 2:if(!(c=t.sent)){t.next=5;break}return t.abrupt("return",{v:A.dispatch(S(c))});case 5:case"end":return t.stop()}}),t)})),r=0;case 3:if(!(r<a.length)){t.next=11;break}return t.delegateYield(n(r),"t0",5);case 5:if("object"!==typeof(s=t.t0)){t.next=8;break}return t.abrupt("return",s.v);case 8:r++,t.next=3;break;case 11:case"end":return t.stop()}}),t)})))}function S(e){return{type:C,weatherData:null===e||void 0===e?void 0:e.data.DailyForecasts}}function F(e){return{type:N,code:e.code,city:e.city}}var I={userInput:{err:!1},weatherData:[],code:"215854",city:"Tel Aviv",geo:!1,loading:!0};var A=Object(p.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(m.a)(Object(m.a)({},e),{},{userInput:Object(m.a)(Object(m.a)({},e.err),{},{err:t.err})});case C:return Object(m.a)(Object(m.a)({},e),{},{weatherData:t.weatherData,loading:!1});case N:return Object(m.a)(Object(m.a)({},e),{},{code:t.code,city:t.city,loading:!0,geo:t.geo||!1});default:return e}}),Object(b.composeWithDevTools)(Object(p.applyMiddleware)(j.a))),M=(a(94),a(59)),T=(a(95),a(12)),E=a.n(T),L=a(65),H=a(66),z=a(60),P=a.n(z),V=a(1),q=l.a.createContext({theme:"light",toggleTheme:function(){}}),J=function(e){var t=e.children,a=Object(i.useState)(""),c=Object(H.a)(a,2),n=c[0],r=c[1],s="light"===n?"dark":"light",o=function(e){localStorage.setItem("theme",JSON.stringify(e))};return Object(i.useEffect)((function(){localStorage.getItem("theme")?r(JSON.parse(localStorage.getItem("theme"))):function(){var e=P()().format("H");e>=6&&e<18?(r("light"),o("light")):(r("dark"),o("dark"))}()}),[]),Object(V.jsx)(q.Provider,{value:{theme:n,colorTheme:s,toggleTheme:function(){var e="light"===n?"dark":"light";r(e),o(e)}},children:t})},R=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).onInputChange=function(e){c.props.placenameHandler(e)},c.onChange=function(e){c.props.selectedOption({city:e.label,code:e.code}),c.props.getForcast(e.code)},c.state={},c.customStyles={noOptionsMessage:function(e){return Object(m.a)(Object(m.a)({},e),{},{background:"black",color:"red"})},option:function(e,t){return Object(m.a)(Object(m.a)({},e),{},{borderBottom:"1px dotted pink",color:t.isSelected?"blue":"dark"===c.context.colorTheme?"white":"black",padding:10,backgroundColor:"dark"===c.context.colorTheme?t.isFocused?"#2684FF":"#212529 !important":t.isFocused?"#2684FF":console.log(t,"lll")})},singleValue:function(e,t){var a=t.isDisabled?.5:1;return Object(m.a)(Object(m.a)({},e),{},{opacity:a,transition:"opacity 300ms"})}},c}return Object(r.a)(a,[{key:"render",value:function(){return Object(V.jsxs)("div",{className:"basic-single col-4 m-4 mx-auto search-bar",children:[this.props.err?Object(V.jsx)("span",{className:"text-danger",children:"Only english letters allowed"}):"",Object(V.jsx)(L.a,{styles:this.customStyles,classNamePrefix:"select",placeholder:"Search a city...",isSearchable:"true",name:"cities",options:this.props.locations,onChange:this.onChange,onInputChange:this.onInputChange,noOptionsMessage:function(e){var t=e.inputValue;return/[^A-Za-z]/gi.test(t)?"Searching should be done in English letters only":"No results found"}})]})}}]),a}(i.Component);R.contextType=q;var Y=Object(u.b)((function(e){return{err:e.userInput.err,DailyForecasts:e.DailyForecasts}}),(function(e){return{placenameHandler:function(e){return A.dispatch(function(e){var t=/^[a-zA-Z]+$/.test(e);return{type:k,err:!t&&""!==e}}(e))},getForcast:function(e){return A.dispatch(D(e))},selectedOption:function(e){return A.dispatch(F(e))}}}))(R),Z=function(){return Object(V.jsxs)("div",{className:"half-column relative top-line integrations-wrapper",children:[Object(V.jsxs)("div",{className:"integration-icon zoominfo",children:[Object(V.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png",alt:"ZoomInfo logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png",alt:"ZoomInfo logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon marketo",children:[Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/331/331383.png",alt:"Marketo logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/331/331383.png",alt:"Marketo logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon salesforce",children:[Object(V.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",alt:"Salesforce logo",className:"lazyloaded","data-ll-status":"loaded",width:"57"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png",alt:"Salesforce logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon chrome",children:[Object(V.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2020/11/chrome.svg",alt:"Chrome logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2020/11/chrome.svg",alt:"Chrome logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon salesloft",children:[Object(V.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",alt:"salesloft logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",alt:"salesloft logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon ringlead",children:[Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/919/919851.png?pad=10,10,10,10&ext=png&bg=FFFFFFFF",alt:"ringlead logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/919/919851.png?pad=10,10,10,10&ext=png&bg=FFFFFFFF",alt:"ringlead logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon outreach",children:[Object(V.jsx)("img",{src:"/weather--react/2725760.png",alt:"outreach logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"/weather--react/2725760.png",alt:"outreach logo"})})]}),Object(V.jsx)("div",{className:"integration-icon microsoft",children:Object(V.jsxs)("a",{href:"tel:+972527249942",children:[Object(V.jsx)("img",{src:"/weather--react/2936030.png",alt:"microsoft logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"/weather--react/2936030.png",alt:"microsoft logo"})})]})}),Object(V.jsxs)("div",{className:"integration-icon eloqua",children:[Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/2721/2721155.png",alt:"eloqua logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/128/2721/2721155.png",alt:"eloqua logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon hubspot",children:[Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2076/2076808.png",alt:"hubspot logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2076/2076808.png",alt:"hubspot logo"})})]}),Object(V.jsx)("div",{className:"integration-icon snowflake",children:Object(V.jsxs)("a",{href:"mailto:hthrkuh8@gmail.com",children:[Object(V.jsx)("img",{src:"/weather--react/3296464.png",alt:"snowflake logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"/weather--react/3296464.png",alt:"snowflake logo"})})]})}),Object(V.jsxs)("div",{className:"integration-icon stack",children:[Object(V.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2021/02/stack-logo-5.svg",alt:"stack logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://www.zoominfo.com/wp-content/uploads/2021/02/stack-logo-5.svg",alt:"stack logo"})})]}),Object(V.jsxs)("div",{className:"integration-icon bullhorn",children:[Object(V.jsx)("img",{src:"https://pic2.zhimg.com/v2-9fc9ae8f1d0e95aed316a92f71dc4ba1_xs.jpg?source=172ae18b",alt:"bullhorn logo",className:"lazyloaded","data-ll-status":"loaded"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("img",{src:"https://pic2.zhimg.com/v2-9fc9ae8f1d0e95aed316a92f71dc4ba1_xs.jpg?source=172ae18b",alt:"bullhorn logo"})})]})]})},U=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return Object(V.jsxs)("div",{className:"form-switch pt-5 p-0",children:[Object(V.jsx)("span",{className:"",children:"\u2103"}),Object(V.jsx)("input",{type:"checkbox",className:"form-check-input mx-3",id:"customSwitches",onChange:function(t){return e.props.handleOnChange(t)},checked:this.props.checked,defaultChecked:!0}),Object(V.jsx)("label",{className:"form-check-label",htmlFor:"customSwitches",children:"\u2109"})]})}}]),a}(i.Component),_=a(27),K=a.n(_),W=function(e){var t=e.selectedDay,a=e.dayIndex,c=e.dayDate,n=e.dayIcon,r=e.dayMinTemp,s=e.dayMaxTemp,o=e.selectedConvert,i=e.handleDaySelection;return Object(V.jsx)("div",{className:"border border-2 border-dark me-1 mb-2 single-day ".concat(t===a?"selected":""),onClick:i,children:Object(V.jsxs)("div",{className:"flex-row bd-highlight m-2 ",children:[Object(V.jsx)("h6",{children:Object(V.jsx)(K.a,{format:"ddd",children:c})}),Object(V.jsx)("img",{className:"small-image",src:"https://developer.accuweather.com/sites/default/files/".concat(n>=10?n:"0"+n,"-s.png"),alt:"weather-icon"}),Object(V.jsxs)("h6",{children:[s," ",o?"\xb0F":"\xb0C"]}),Object(V.jsxs)("h6",{children:[r," ",o?"\xb0F":"\xb0C"]})]})})},G=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.weatherData,a=e.selectedCity,c=e.selectedDay,n=e.handleDaySelection,r=e.selectedConvert,s=this.context,o=s.theme,i=s.colorTheme;return Object(V.jsxs)("div",{id:a,className:"border border-3 border-".concat(o," container col-11 mx-auto mt-2 gray  rounded text-").concat(i),children:[t[0]?Object(V.jsx)("div",{className:"d-flex p-2 bd-highlight justify-content-center top-weather",children:Object(V.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(V.jsx)("h4",{children:a}),Object(V.jsx)(K.a,{format:"dddd",children:t[c].Date}),Object(V.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(V.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[c].Day.Icon>=10?t[c].Day.Icon:"0"+t[c].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(V.jsx)("p",{children:t[c].Day.IconPhrase})]})]})}):null,Object(V.jsx)("div",{className:"bd-highlight bottom-weather d-flex flex-wrap justify-content-center p-2",children:t.map((function(e,t){return Object(V.jsx)(W,{selectedDay:c,dayIndex:t,dayDate:e.Date,dayIcon:e.Day.Icon,dayMaxTemp:r?e.Temperature.Maximum.Value:((parseFloat(e.Temperature.Maximum.Value)-32)/1.8).toFixed(2),dayMinTemp:r?e.Temperature.Minimum.Value:((parseFloat(e.Temperature.Minimum.Value)-32)/1.8).toFixed(2),selectedConvert:r,handleDaySelection:function(){return n(t)}},e.EpochDate)}))})]})}}]),a}(i.Component);G.contextType=q;var B=Object(u.b)((function(e){return{weatherData:e.weatherData}}),(function(e){return{}}))(G),Q=(a(110),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(V.jsx)("div",{id:"",className:"pb-3",children:Object(V.jsx)("div",{className:"fav-btn",children:Object(V.jsx)("span",{code:this.props.code,city:this.props.city,onClick:this.props.handleOnChange,className:"favme dashicons dashicons-heart ".concat(this.props.active?"active":""),children:this.props.active?"Remove from favorits":"Add to favorites"})})})}}]),a}(i.Component));function X(){T(document).click((function(e){T(".collapse").hasClass("show")&&!T("nav").is(e.target)&&0===T("nav").has(e.target).length&&T(".navbar-toggler").click()})),T(".favme").on("click touchstart",(function(){T(this).toggleClass("is_animating")})),T(".favme").on("animationend",(function(){T(this).toggleClass("is_animating")}))}var $=a(145),ee=a(144),te=function(e){return!Object($.a)(e)&&!Object(ee.a)(e)},ae=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).updateAddress=function(){var e=Object(v.a)(g.a.mark((function e(t){var a,n,r,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=JSON.parse('["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]'),e.prev=1,e.next=4,w.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(n[1],"&q=").concat(t));case 4:a=e.sent.data,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,w.get("https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=".concat(n[3],"&q=").concat(t));case 11:a=e.sent.data;case 12:return e.prev=12,te(a)&&(r=a.AdministrativeArea.EnglishName,s=a.Key,c.setState({city:r}),c.props.selectedOption({city:r,code:s,geo:!0}),c.props.getForcast(s)),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,7,12,15]])})));return function(t){return e.apply(this,arguments)}}(),c.formatCoords=function(e,t){return"".concat(e,",").concat(t)},c.getAddress=Object(v.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("geolocation"in navigator)){e.next=3;break}return e.next=3,navigator.geolocation.getCurrentPosition(function(){var e=Object(v.a)(g.a.mark((function e(t){var a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=c.formatCoords(t.coords.latitude,t.coords.longitude),c.updateAddress(a);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)}))),c.state={},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getAddress()}},{key:"render",value:function(){return Object(V.jsxs)("div",{children:[Object(V.jsx)("h4",{children:"Using geolocation JavaScript API in React"}),Object(V.jsxs)("span",{children:["your location :",this.state.city||Object(V.jsx)("span",{className:"text-danger",children:" please confirm access to your location "})]})]})}}]),a}(i.Component),ce=Object(u.b)((function(e){return{code:e.code,city:e.city}}),(function(e){return{selectedOption:function(e){return A.dispatch(F(e))},getForcast:function(e){return A.dispatch(D(e))}}}))(ae),ne=a(4),re=a(63),se=a.n(re),oe=function(){return Object(V.jsxs)("div",{className:"loading",children:[Object(V.jsx)("div",{}),Object(V.jsx)("div",{})]})},ie=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).getLocations=Object(v.a)(g.a.mark((function e(){var t,a,n,r,s,o,i,l,d,h,u,p;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=JSON.parse('["jdJtjY5LHZvdj0IS8iiRqturSfo6sjq3","Pcam0PjGtEMwkxAAI0LL8lIjSlpwkHFS","EVO76C8niYMxHwXnuF7yAiRLSKA3R8Ud","keIkcwQuwHMsCqZJawOVskNUec3ErVQq"]'),r=g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,a){e(w.get("https://dataservice.accuweather.com/locations/v1/topcities/150?apikey=".concat(n[t])).catch((function(e){return a(e)})))})).catch((function(e){console.error(e),y.b.info("API KEY HAS BEEN CHANGED")}));case 2:if(!(a=e.sent)){e.next=5;break}return e.abrupt("return","break");case 5:t===n.length-1&&y.b.info("ALL API KEYS HAS BEEN USED TRY AGAIN TOMORROW");case 6:case"end":return e.stop()}}),e)})),s=0;case 3:if(!(s<n.length)){e.next=11;break}return e.delegateYield(r(s),"t0",5);case 5:if("break"!==e.t0){e.next=8;break}return e.abrupt("break",11);case 8:s++,e.next=3;break;case 11:if(o=[],null===(t=a)||void 0===t?void 0:t.data){i=Object(M.a)(a.data);try{for(i.s();!(l=i.n()).done;)d=l.value,h=d.AdministrativeArea.EnglishName,u=d.Country.EnglishName,p=d.Key,o.push({label:h,value:u,code:p})}catch(j){i.e(j)}finally{i.f()}c.setState({locationsApi:o})}case 13:case"end":return e.stop()}}),e)}))),c.fav=function(e){E()(e.target).toggleClass("active"),c.setState({fav:c.props.fav(e)})},c.state={locationsApi:[],fav:[],selectedDay:0,selectedConvert:!0},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,a,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getLocations();case 2:return t=se.a.parse(this.props.location.search),a=t.code,c=t.selectedCity,a&&this.props.selectedOption({code:a,city:c}),e.next=6,this.props.getForcast(a||this.props.code);case 6:X(),this.setState({fav:this.props.initfav()});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){}},{key:"componentDidUpdate",value:function(){var e=Object(v.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.location.search===this.props.location.search||this.props.geo||(this.props.selectedOption({code:"215854",city:"Tel Aviv"}),this.props.getForcast("215854"));case 1:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,c=t.colorTheme;return Object(V.jsx)(l.a.Fragment,{children:Object(V.jsxs)("div",{className:"pb-5 bg-".concat(c," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(V.jsx)("h1",{className:"pt-4",children:"Weather Forcast"}),this.props.location.search?"":Object(V.jsx)(ce,{handleOnChange:this.handleOnChange}),Object(V.jsx)(U,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}),Object(V.jsx)(Z,{}),Object(V.jsx)(Y,{locations:this.state.locationsApi}),Object(V.jsx)("div",{className:"content",children:this.props.weatherData?[Object(V.jsx)(Q,{city:this.props.city,code:this.props.code,active:this.state.fav.flat().indexOf(this.props.code)>-1,handleOnChange:function(t){return e.fav(t)}},"fav"),this.props.loading?Object(V.jsx)(oe,{},"Loading"):0===Object.keys(this.props.weatherData).length?"":Object(V.jsx)(B,{handleDaySelection:function(t){e.props.handleDaySelection(t),e.setState({selectedDay:t})},selectedDay:this.state.selectedDay,selectedCity:this.props.city,selectedConvert:this.state.selectedConvert},"WeeklyWeatherContainer")]:""}),Object(V.jsx)("a",{href:"https://www.hitwebcounter.com",rel:"noreferrer",target:"_blank",children:Object(V.jsx)("img",{src:"https://hitwebcounter.com/counter/counter.php?page=7826724&style=0001&nbdigits=5&type=page&initCount=0",title:"Free Counter",alt:"web counter",border:"0"})}),Object(V.jsx)("div",{id:"sfcbg6g2l2n5jf3rhu8t5y6m5r3f5h9e82x"}),Object(V.jsx)("noscript",{children:Object(V.jsx)("a",{href:"https://www.freecounterstat.com",title:"hit counter for website",children:Object(V.jsx)("img",{src:"https://counter6.stat.ovh/private/freecounterstat.php?c=bg6g2l2n5jf3rhu8t5y6m5r3f5h9e82x",border:"0",title:"hit counter for website",alt:"hit counter for website"})})})]})})}}]),a}(i.Component);ie.contextType=q;var le=Object(u.b)((function(e){return{weatherData:e.weatherData,code:e.code,city:e.city,loading:e.loading,geo:e.geo}}),(function(e){return{getForcast:function(e){return A.dispatch(D(e))},selectedOption:function(e){return A.dispatch(F(e))}}}))(Object(ne.f)(ie)),de=a(22),he=a(64),ue=a.n(he),pe=a(42),je=function(e){var t=e.iconType;return Object(V.jsx)("div",{children:"light"===t?Object(V.jsx)("p",{className:"text-toggle",children:Object(V.jsx)(pe.b,{})}):Object(V.jsx)("p",{className:"text-toggle",children:Object(V.jsx)(pe.a,{})})})},be=function(){var e=Object(i.useContext)(q),t=e.theme,a=e.toggleTheme;return Object(V.jsx)("div",{className:"flex justify-between items-center px-5 py-5",children:Object(V.jsx)("div",{children:Object($.a)(t)?null:Object(V.jsx)(ue.a,{checked:"light"===t,icons:{checked:Object(V.jsx)(je,{iconType:"light"}),unchecked:Object(V.jsx)(je,{iconType:"dark"})},onChange:a})})})},me=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).state={},c}return Object(r.a)(a,[{key:"render",value:function(){var e=this.context.colorTheme;return Object(V.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e," bg-").concat(e),style:{border:"solid",zIndex:1,borderColor:"darksalmon"},children:Object(V.jsxs)("div",{className:"container-fluid",children:[Object(V.jsx)(de.c,{className:"navbar-brand",to:{pathname:"/weather--react",search:"",hash:"",state:{}},children:"Home"}),Object(V.jsx)("button",{className:"navbar-toggler ms-sm-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(V.jsx)("span",{className:"navbar-toggler-icon"})}),Object(V.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(V.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(V.jsx)("li",{className:"nav-item",children:Object(V.jsx)(de.c,{className:"nav-link",to:"/MyFav",children:"MyFav"})})}),Object(V.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(V.jsx)("li",{className:"nav-item",children:Object(V.jsx)(be,{})})})]}),Object(V.jsx)("div",{className:"navbar-brand text-wrap",children:"Weather App"})]})})}}]),a}(i.Component);me.contextType=q;var fe=me,ge=function(e){var t=e.weatherData,a=e.selectedCity,c=e.code,n=e.selectedDay,r=(e.handleDaySelection,e.selectedConvert),s=e.fav;return Object(V.jsx)("div",{className:"single-day col-11 flex-fill m-0 m-2 navbar-brand",children:Object(V.jsxs)("div",{id:a,code:c,className:"container h-100  mx-auto mt-2 gray  rounded text-white ",children:[t[0]?Object(V.jsx)(de.b,{className:" navbar-brand",to:{pathname:"/weather--react",search:"?selectedCity="+a+"&code="+c},children:Object(V.jsx)("div",{className:" d-flex p-2 bd-highlight justify-content-center text-light text-break ",children:Object(V.jsxs)("div",{className:"flex-row bd-highlight text-wrap",children:[Object(V.jsx)("h4",{children:a}),Object(V.jsx)(K.a,{format:"dddd",children:t[n].Date}),Object(V.jsxs)("div",{className:"flex-row bd-highlight",children:[Object(V.jsx)("span",{className:"",children:r?t[n].Temperature.Minimum.Value+" F\xb0":((parseFloat(t[n].Temperature.Minimum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),"                            ",Object(V.jsx)("img",{src:"https://developer.accuweather.com/sites/default/files/".concat(t[n].Day.Icon>=10?t[n].Day.Icon:"0"+t[n].Day.Icon,"-s.png"),alt:"weather-icon"}),Object(V.jsx)("span",{children:r?t[n].Temperature.Maximum.Value+" F\xb0":((parseFloat(t[n].Temperature.Maximum.Value)-32)/1.8).toFixed(2)+" C\xb0"}),Object(V.jsx)("p",{children:t[n].Day.IconPhrase})]})]})})}):null,Object(V.jsx)(Q,{city:a,code:c,active:!0,handleOnChange:function(e){return s(e)}},c)]})})},ve=function(){return Object(V.jsxs)("div",{className:"loading",children:[Object(V.jsx)("div",{}),Object(V.jsx)("div",{})]})},xe=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(n.a)(this,a),(c=t.call(this,e)).data=function(){c.state.fav.length?Promise.all(c.state.fav.map(function(){var e=Object(v.a)(g.a.mark((function e(t,a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.props.getForcast(t[1]);case 2:return e.abrupt("return",c.props.weatherData);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())).then((function(e){c.setState({weatherData:e})})):c.setState({fav:c.props.fav()})},c.fav=function(e){E()(e.target).toggleClass("active"),c.props.fav(e),c.data()},c.state={selectedDay:(new Date).getDay(),selectedConvert:!0,weatherData:[],fav:c.props.fav()},c}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.state.fav&&this.data(),X()}},{key:"componentWillMount",value:function(){this.setState({fav:this.props.initfav()})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.context,a=t.theme,n=t.colorTheme;return Object(V.jsxs)("div",{className:"pb-5 bg-".concat(n," text-").concat(a," text-center"),style:{minHeight:"inherit"},children:[Object(V.jsx)("h1",{className:"pt-4",children:"My favorites"}),this.state.weatherData.length?Object(V.jsx)(U,{handleOnChange:function(t){e.setState({selectedConvert:e.props.temperatureConverter(t)})},checked:this.selectedConvert}):"",Object(V.jsx)("div",{className:"d-flex flex-lg-nowrap flex-wrap",children:this.state.weatherData.length&&this.state.fav.length?this.state.fav.map((function(t,a){var n=Object(c.a)(e.state.weatherData[a]).findIndex((function(t){return e.state.selectedDay===new Date(t.Date).getDay()}));return Object(V.jsx)(ge,{handleDaySelection:function(t){e.setState({selectedDay:t})},selectedDay:n,selectedCity:t[0],code:t[1],weatherData:e.state.weatherData[a],selectedConvert:e.state.selectedConvert,fav:e.fav},a)})):this.state.fav.length?Object(V.jsx)(ve,{},"Loading"):Object(V.jsx)("h1",{children:"No favorites found"})})]})}}]),a}(i.Component);xe.contextType=q;var Oe=Object(u.b)((function(e){return{weatherData:e.weatherData,selectedOption:e.selectedOption,code:e.code,city:e.city}}),(function(e){return{getForcast:function(e){return A.dispatch(D(e))},selectedOption:function(e){return A.dispatch(F(e))}}}))(xe),ye=(a(138),a(139),function(){return Object(V.jsx)("footer",{children:Object(V.jsxs)("div",{className:"text-center",children:[Object(V.jsx)("span",{children:"made with love by yair \u2665"}),Object(V.jsx)("div",{style:{position:"fixed",bottom:0,border:0,left:0},children:Object(V.jsx)("a",{href:"https://github.com/hthrkuh/weather--react",className:"github-corner","aria-label":"View source on GitHub",target:"_blank",rel:"noreferrer noopener",children:Object(V.jsxs)("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#292929",color:"#fff",transform:"scale(-1, -1)"},"aria-hidden":"true",children:[Object(V.jsx)("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(V.jsx)("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),Object(V.jsx)("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})]})})})]})})}),we=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(n.a)(this,a),(e=t.call(this)).handleDaySelection=function(e){return e},e.temperatureConverter=function(e){return e.target.checked},e.fav=function(t){var a=e.state.myfav;if(t){var n=t.target;if(-1===Object(c.a)(n.classList).indexOf("active")){var r=a.findIndex((function(e){return e[1]===n.getAttribute("code")}));a.splice(r,1)}else a.push([n.getAttribute("city"),n.getAttribute("code")]);localStorage.setItem("fav",JSON.stringify(a))}return a},e.initfav=function(){return e.state.myfav},e.state={myfav:localStorage.getItem("fav")?JSON.parse(localStorage.getItem("fav")):[]},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.context,a=t.theme,c=t.colorTheme;return Object(V.jsx)(u.a,{store:A,children:Object(V.jsx)(J,{children:Object(V.jsxs)(de.a,{children:[Object(V.jsx)(y.a,{}),Object(V.jsx)("header",{className:" bg-".concat(c," text-").concat(a),children:Object(V.jsx)(fe,{})}),Object(V.jsx)("main",{className:"flex-column",style:{minHeight:"450px"},children:Object(V.jsxs)(ne.c,{children:[Object(V.jsx)(ne.a,{path:"/MyFav",component:function(){return Object(V.jsx)(Oe,{initfav:e.initfav,myfav:e.state.myfav,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav})}}),Object(V.jsx)(ne.a,{path:"/weather--react",exact:!0,component:function(){return Object(V.jsx)(le,{initfav:e.initfav,temperatureConverter:e.temperatureConverter,handleDaySelection:e.handleDaySelection,fav:e.fav})}})]})}),Object(V.jsx)(ye,{})]})})})}}]),a}(i.Component);we.contextType=q,h.a.render(Object(V.jsx)(we,{}),document.getElementById("root"))},94:function(e,t,a){},95:function(e,t,a){}},[[141,1,2]]]);
//# sourceMappingURL=main.6d7b5ee3.chunk.js.map