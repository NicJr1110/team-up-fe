(this["webpackJsonpteam-up"]=this["webpackJsonpteam-up"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),s=(a(29),a(2)),u=function(e){var t=e.handleClick,a=e.children,n=e.disabled,r=e.className,c=e.type;return l.a.createElement("button",{onClick:t,disabled:!!n||null,className:r,type:c},a)},i=function(e){var t=e.handleClick,a=e.stage;return(l.a.createElement(l.a.Fragment,null,0!==a?null:l.a.createElement("div",{className:"landing-container"},l.a.createElement("div",{className:"bg-circle"}),l.a.createElement("div",{className:"flex-col-centre title"},l.a.createElement("h1",null," TEAM UP"),l.a.createElement("p",null,"Random Team Generator")),l.a.createElement(u,{className:"btn btn-main",handleClick:t},"Let's Go!"))))},m=Object(s.b)((function(e){return{stage:e.stage}}),(function(e){return{handleClick:function(){return e({type:"progressStage"})}}}))(i),o=a(11),d=a(12),h=a(14),b=a(13),p=a(5),v=a(15),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={value:2},a.handleAdd=a.handleAdd.bind(Object(p.a)(a)),a.handleMinus=a.handleMinus.bind(Object(p.a)(a)),a.handleSave=a.handleSave.bind(Object(p.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleAdd",value:function(){var e=this.props.max,t=this.state.value+1;this.setState({value:t>=e?e:t})}},{key:"handleMinus",value:function(){var e=this.props.min,t=this.state.value-1;this.setState({value:t<=e?e:t})}},{key:"handleSave",value:function(e){var t=this.state.value;e.preventDefault(),this.props.handleSubmit(t),this.props.handleProgress()}},{key:"render",value:function(){var e=this.state.value,t=this.props,a=t.children,n=t.stage;return l.a.createElement(l.a.Fragment,null,1!==n?null:l.a.createElement("div",{className:"page-container"},l.a.createElement("h1",{className:"stage-title"},a),l.a.createElement("div",{className:"counter"},l.a.createElement(u,{className:"btn btn-small",handleClick:this.handleMinus},"-"),l.a.createElement("p",{className:"counter-value"},e),l.a.createElement(u,{className:"btn btn-small",handleClick:this.handleAdd},"+")),l.a.createElement(u,{className:"btn btn-main",handleClick:this.handleSave},"Next")))}}]),t}(n.Component),f=Object(s.b)((function(e){return{stage:e.stage}}),(function(e){return{handleSubmit:function(t){return e(function(e){return{type:"saveTeamCount",value:+e}}(t))},handleProgress:function(){return e({type:"progressStage"})}}}))(E),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(b.a)(t).call(this,e))).state={name:""},a.handleChangeName=a.handleChangeName.bind(Object(p.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"handleChangeName",value:function(e){this.setState({name:e.currentTarget.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),(0,this.props.handleAddPlayer)(this.state.name),this.setState({name:""})}},{key:"render",value:function(){var e=this.state.name;return l.a.createElement("div",{className:"input-players"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{onChange:this.handleChangeName,type:"text",placeholder:"Enter Player Name",value:e,required:!0}),l.a.createElement(u,{disabled:""===e,handleClick:this.handleSubmit,className:"btn btn-add",type:"submit"},"Add"))}}]),t}(n.Component),y=Object(s.b)(null,(function(e){return{handleAddPlayer:function(t){return e(function(e){return{type:"addPlayer",name:e}}(t))}}}))(g),N=function(e){var t=e.players,a=e.handleClick;return l.a.createElement("div",{className:"player-table"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Players"))),l.a.createElement("tbody",null,t.map((function(e,t){var n=t;return l.a.createElement("tr",{className:"table-layout",key:t},l.a.createElement("td",null,e),l.a.createElement("td",{className:"delete-data"},l.a.createElement("button",{className:"btn-del",onClick:function(){a(n)}},"x")))})))))},O=Object(s.b)((function(e){return{players:e.players}}),(function(e){return{handleClick:function(t){return e({type:"deletePlayer",index:t})}}}))(N),k=function(e){var t=e.totalTeams,a=e.players,n=e.stage,r=e.handleClick;return l.a.createElement(l.a.Fragment,null,2!==n?null:l.a.createElement("div",{className:"page-container"},l.a.createElement("div",{className:"page-content"},l.a.createElement("h1",null,"Add Players"),l.a.createElement(y,null),l.a.createElement(O,null)),l.a.createElement(u,{disabled:a.length<t,handleClick:r,className:"btn btn-main"},"Next")))},j=Object(s.b)((function(e){return{stage:e.stage,players:e.players,totalTeams:e.totalTeams}}),(function(e){return{handleClick:function(){return e({type:"progressStage"})}}}))(k),C=function(e){var t=e.handleSubmit,a=e.stage;return l.a.createElement(l.a.Fragment,null,3!==a?null:l.a.createElement("div",{className:"page-container"},l.a.createElement("h1",null," Ready? "),l.a.createElement(u,{className:"btn-main",handleClick:t},"Split")))},S=Object(s.b)((function(e){return{stage:e.stage}}),(function(e){return{handleSubmit:function(){return e({type:"splitTeams"})}}}))(C),T=a(19),P=function(e){var t=e.teams,a=e.stage,n=e.handleClick;return l.a.createElement(l.a.Fragment,null,4!==a?null:l.a.createElement("div",{className:"page-container"},l.a.createElement(T.a,{className:"scrolling-wrapper",touch:!0,interval:0},t.map((function(e,t){return l.a.createElement(T.a.Item,{className:"card",key:t},l.a.createElement("h4",null,"Team ",t+1),l.a.createElement("ul",null,e.map((function(e,t){return l.a.createElement("li",{key:t}," ",e," ")}))))}))),l.a.createElement(u,{className:"btn btn-main",handleClick:n},"Restart")))},w=Object(s.b)((function(e){return{stage:e.stage,teams:e.teams}}),(function(e){return{handleClick:function(){return e({type:"resetApp"})}}}))(P),_=function(e){var t=e.stage;return(l.a.createElement(l.a.Fragment,null," ",0===t?null:l.a.createElement("div",{className:"background-1 flex-col-centre"},l.a.createElement("div",{className:"bg-circle-2 outer"}),l.a.createElement("div",{className:"bg-circle-3 inner"}),l.a.createElement(f,{max:9,min:2},"Number of Teams"),l.a.createElement(j,null),l.a.createElement(S,null),l.a.createElement(w,null),l.a.createElement("div",{className:"bg-circle-4 outer"}),l.a.createElement("div",{className:"bg-circle-5 inner "}))))},x=Object(s.b)((function(e){return{stage:e.stage}}))(_);var A=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,null),l.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(10),F=a(23),D=a(6),R={totalTeams:0,stage:0,players:[],teams:[]};function I(e,t){for(var a=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}return e}(e),n=[];a.length;){var l=Math.ceil(a.length/t--),r=a.slice(0,l);n.push(r),a=a.slice(l)}return n}var X=function(e,t){return e.filter((function(e,a){return a!==t}))},L=function(e,t){switch(t.type){case"saveTeamCount":return function(e,t){var a=t.value;return Object(D.a)({},e,{totalTeams:a})}(e,t);case"savePlayerCount":return function(e,t){var a=t.value;return Object(D.a)({},e,{totalPlayers:a})}(e,t);case"addPlayer":return function(e,t){var a=t.name;return Object(D.a)({},e,{players:[].concat(Object(F.a)(e.players),[a])})}(e,t);case"splitTeams":return function(e){return Object(D.a)({},e,{teams:I(e.players,e.totalTeams),stage:e.stage+1})}(e);case"progressStage":return function(e){return Object(D.a)({},e,{stage:e.stage+1})}(e);case"resetApp":return function(e){return Object(D.a)({},e,{totalTeams:R.totalTeams,totalPlayers:R.totalPlayers,stage:R.stage,players:R.players,teams:R.teams})}(e);case"deletePlayer":return function(e,t){var a=t.index;return Object(D.a)({},e,{players:X(e.players,a)})}(e,t);default:return e}},U=Object(M.b)(L,R,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(l.a.createElement(s.a,{store:U},l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.6a375b23.chunk.js.map