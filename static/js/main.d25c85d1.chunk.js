(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(16),a(9)),o=a(8),l=a(1),h=a(2),m=a(4),u=a(3),p=a(5),d=(a(18),function(){return r.a.createElement("div",{className:"main_header"},r.a.createElement("p",null,"Upcoming weather in your area! 3 Hour Increments"))}),f=(a(20),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchWrap"},r.a.createElement("form",{onSubmit:this.props.handleFormSubmit,className:"search"},r.a.createElement("input",{onChange:this.props.handleInputChange,name:"searchTerm",value:this.props.searchTerm,type:"text",className:"searchTerm",placeholder:"Search by City"}),r.a.createElement("button",{type:"submit",className:"searchButton"},r.a.createElement("i",{className:"fa fa-search"}))))}}]),t}(n.Component)),w=(a(22),function(e){return r.a.createElement("div",{className:"recentSearches"},r.a.createElement("p",null,"Recent Searches"),e.recentSearches.length?r.a.createElement("div",{className:"searchButtons"},e.recentSearches.map(function(t,a){return r.a.createElement("div",{key:a,className:"buttonRow"},r.a.createElement("button",{className:"rsb",onClick:function(){return e.handleButtonClick(t)}},t))})):r.a.createElement("p",null,"Type in a city to get started!"))}),b=(a(24),function(e){return r.a.createElement("div",{className:"weatherCard"},r.a.createElement("p",{className:"weatherFor"},"Weather for: ",e.weatherTD.slice(10,16)),r.a.createElement("p",{className:"mainTemp"},Math.round(e.temp),"\xb0F"),r.a.createElement("p",{className:"humidity"},"Humidity: ",e.humidity),r.a.createElement("p",{className:"conditions"},"Conditions: ",e.weather))}),E=(a(26),function(e){return r.a.createElement("div",{className:"searchResults"},e.weatherData.map(function(e,t){return r.a.createElement(b,{key:t,temp:e.main.temp,humidity:e.main.humidity,weather:e.weather.map(function(e){return e.main}),weatherTD:e.dt_txt})}))}),y=(a(28),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchTerm:"",recentSearches:[],weatherData:[]},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(o.a)({},n,r))},a.getWeather=function(e){fetch("http://api.openweathermap.org/data/2.5/forecast?q=".concat(e,",us&type=like&cnt=8&units=imperial&mode=json&appid=c58ce45c0689fc1e28068d46e4bddfb8")).then(function(e){return e.json()}).then(function(e){if("404"===e.cod)return"City not found, please try again.";a.setState({weatherData:e.list})})},a.handleButtonClick=function(e){console.log("You clicked ".concat(e,"!")),a.getWeather(e)},a.handleFormSubmit=function(e){e.preventDefault(),a.state.searchTerm&&(a.getWeather(a.state.searchTerm),a.setState({recentSearches:Object(i.a)(a.state.recentSearches).concat([a.state.searchTerm]),searchTerm:""}))},a}return Object(p.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(f,{searchTerm:this.state.searchTerm,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),r.a.createElement(w,{recentSearches:this.state.recentSearches,handleButtonClick:this.handleButtonClick}),r.a.createElement(E,{weatherData:this.state.weatherData}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,2,1]]]);
//# sourceMappingURL=main.d25c85d1.chunk.js.map