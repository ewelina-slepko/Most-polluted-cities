(window.webpackJsonp10_most_polluted=window.webpackJsonp10_most_polluted||[]).push([[0],{33:function(e,a,t){e.exports=t.p+"static/media/industrial.5ca31ff2.jpg"},38:function(e,a,t){e.exports=t(48)},43:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),o=(t(43),t(25)),c=t(16),u=t(31),s=t(32),m=t(35),d=t(7),p=t(78),b=t(33),v=t.n(b),g=t(3),f=Object(p.a)(function(e){return{background:{display:"flex",alignItems:"flex-start",justifyContent:"space-around",height:"100vh",backgroundImage:"url(".concat(v.a,")"),backgroundSize:"cover",opacity:"0.8"},backgroundMobile:{backgroundPosition:"-200px"},header:{flex:1,margin:"20px",textTransform:"uppercase",color:"#fff",letterSpacing:1,textAlign:"center",maxWidth:500,borderRadius:3,fontFamily:"Montserrat, sans-serif"},headerMargin:{margin:"80px"},headerText:{fontSize:"2.6rem",margin:0},text:{fontSize:".8rem"}}}),h=function(){var e=f();return r.a.createElement("div",{className:window.innerWidth<992?Object(g.a)(e.background,e.backgroundMobile):e.background},r.a.createElement("div",{className:window.innerWidth<992?e.header:Object(g.a)(e.header,e.headerMargin)},r.a.createElement("h1",{className:e.headerText},"Air Pollution"),r.a.createElement("h2",{className:e.text},"The most polutted cities in the country")))},x=Object(p.a)(function(e){return{container:{display:"flex",margin:20,justifyContent:"center"},wrapper:{display:"flex",flexWrap:"wrap",color:"#4d4d4d",paddingBottom:60},wrapperMargin:{margin:"20px 300px"},text:{flex:1,padding:"20px 10px",margin:"10px",backgroundColor:"#edf1fa",borderRadius:20,whiteSpace:"nowrap",maxWidth:270},city:{fontSize:"1.4rem",padding:"4px 6px"}}}),y=function(e){var a=e.cities,t=x();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.container},r.a.createElement("div",{className:window.innerWidth>992?Object(g.a)(t.wrapper,t.wrapperMargin):t.wrapper},a.map(function(e,a){return r.a.createElement("p",{key:e.city,className:t.text},r.a.createElement("span",{className:t.city},e.city,":")," ",e.value," ",e.parameter)}))))},w=t(80),E=t(81),S=Object(p.a)(function(e){return{container:{display:"flex",justifyContent:"center",margin:10},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},btnWrapper:{marginTop:20},dense:{marginTop:e.spacing(2)},menu:{width:200}}}),j=function(){var e,a=r.a.useState([]),t=Object(d.a)(a,2),n=t[0],l=t[1],i=r.a.useState(""),o=Object(d.a)(i,2),c=o[0],u=o[1],s=S();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:s.container},r.a.createElement("form",{className:s.container,onSubmit:(e=c,function(a){a.preventDefault(),fetch("https://api.openaq.org/v1/measurements?country=".concat(e,"&parameter=pm25&order_by=value&sort=desc&limit=10000")).then(function(e){return e.json()}).then(function(e){return l(e.results)})}),noValidate:!0},r.a.createElement(w.a,{id:"outlined-select-currency-native",select:!0,label:"Select",className:s.textField,value:c,onChange:function(e){u(e.target.value)},SelectProps:{native:!0,MenuProps:{className:s.menu}},helperText:"Please select country",margin:"normal",variant:"outlined"},[{value:"",label:""},{value:"BE",label:"Belgium"},{value:"BA",label:"Bosnia and Herzegovina"},{value:"HR",label:"Croatia"},{value:"CZ",label:"Czechia"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"DE",label:"Germany"},{value:"HU",label:"Hungary"},{value:"IE",label:"Ireland"},{value:"IT",label:"Italy"},{value:"XK",label:"Kosowo"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MK",label:"North Macedonia"},{value:"MT",label:"Malta"},{value:"NO",label:"Norway"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"RS",label:"Serbia"},{value:"SK",label:"Slovakia"},{value:"ES",label:"Spain"},{value:"CH",label:"Switzerland"},{value:"GB",label:"Great Britain"}].map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})),r.a.createElement("div",{className:s.btnWrapper},r.a.createElement(E.a,{style:{backgroundColor:"#0d4ea8"},variant:"contained",color:"primary",className:s.btnPosition,type:"submit",label:"Select"},"Sumbit")))),r.a.createElement(y,{cities:function(){var e=[];n.length>0&&(e=n.map(function(e,a){return{city:e.city,value:e.value,parameter:e.parameter}}));var a,t=["city"];return e.filter((a=new Set,function(e){return function(e){return!a.has(e)&&a.add(e)}(t.map(function(a){return e[a]}).join("|"))})).splice(0,10)}()}),console.log(c))},k=function(e){function a(){return Object(o.a)(this,a),Object(u.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.6ee178e8.chunk.js.map