(this["webpackJsonpbetter-feedback"]=this["webpackJsonpbetter-feedback"]||[]).push([[0],{14:function(e,t,a){e.exports=a(24)},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),s=a.n(r),o=(a(19),a(1)),i=a(2),c=a(4),u=a(3),m=a(7),d=a.n(m);a(21);d.a.initializeApp({apiKey:"AIzaSyCpMVERGQ9vc_YjTen_5P4dEq8h7WDS85E",authDomain:"better-feedback-b409e.firebaseapp.com",databaseURL:"https://better-feedback-b409e.firebaseio.com",projectId:"better-feedback-b409e",storageBucket:"better-feedback-b409e.appspot.com",messagingSenderId:"911978695691",appId:"1:911978695691:web:3bd7a8e23111df296f4b0e"});var h=d.a,f=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={classNames:["feelings-small","feelings-medium","feelings-big"]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=[];return l.a.createElement("section",{className:"feelings"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h2",null,"HELLO FEELINGS"),this.props.feelings.map((function(a){var n=t[a.feeling];if(!n)return t[a.feeling]=[a],l.a.createElement("li",{key:a.feeling},l.a.createElement("button",{className:"feeling-button",onClick:function(t){e.props.handleModal(t),e.props.handleMoreInfo(t,a.feeling)}},a.feeling));n.push(a)}))))}}]),a}(n.Component),p=a(13),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleInputChange=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){if(t.preventDefault(),e.state.userTeam)if(e.state.userFeeling)if(e.state.userInfo)if(e.state.userPositive){e.props.handleModal(t);var a="true"===e.state.userPositive;e.setState({userPositive:a}),h.database().ref().push(e.state),e.setState({userTeam:"",userFeeling:"",userInfo:"",userPositive:"",error:"\ud83d\ude43"})}else e.setState({error:"Please indicate if your feeling is positive or negative"});else e.setState({error:"Please complete info field"});else e.setState({error:"Please complete feeling field"});else e.setState({error:"Please complete team field"})},e.state={userTeam:"",userFeeling:"",userInfo:"",userPositive:"",error:"\ud83d\ude43"},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.userTeam,a=e.userFeeling,r=e.userInfo,s=e.userPositive;return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"How are you feeling today?"),l.a.createElement("hr",null),l.a.createElement("form",null,l.a.createElement("fieldset",{onChange:this.handleInputChange,value:s},l.a.createElement("legend",{htmlFor:"userPositive"},"Is this feeling positive or negative?"),l.a.createElement("input",{className:"sr-only",type:"radio",name:"userPositive",id:"positive-true",value:"true"}),l.a.createElement("label",{className:"emoji",htmlFor:"positive-true"},"\ud83d\udc4d"),l.a.createElement("input",{className:"sr-only",type:"radio",name:"userPositive",id:"positive-false",value:"false"}),l.a.createElement("label",{className:"emoji",htmlFor:"positive-false"},"\ud83d\udc4e")),l.a.createElement("label",{htmlFor:"userTeam"},"Team:"),l.a.createElement("input",{type:"text",name:"userTeam",placeholder:"Team",value:t,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"userFeeling"},"Your feeling in one word:"),l.a.createElement("input",{type:"text",name:"userFeeling",placeholder:"Feeling",value:a,onChange:this.handleInputChange}),l.a.createElement("label",{htmlFor:"userInfo"},"What is causing this feeling?"),l.a.createElement("input",{type:"text",name:"userInfo",placeholder:"Why",value:r,onChange:this.handleInputChange}),l.a.createElement("button",{onClick:this.handleSubmit},"SUBMIT")),l.a.createElement("p",null,l.a.createElement("span",null,this.state.error)))}}]),a}(n.Component),b=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"HELLO I AM MORE INFO"),l.a.createElement("hr",null),l.a.createElement("p",null,"Info content here"))}}]),a}(n.Component),g=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"modal"},l.a.createElement("div",{className:"modal__foreground"},l.a.createElement("button",{className:"modal__close",onClick:this.props.handleModal},"CLOSE"),this.props.displayForm?l.a.createElement(v,{handleModal:this.props.handleModal}):l.a.createElement(b,null))))}}]),a}(n.Component),E=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleModal=function(t){t.preventDefault(),e.setState({displayModal:!e.state.displayModal})},e.handleForm=function(t){t.preventDefault(),e.setState({displayForm:!0})},e.handleMoreInfo=function(t,a){t.preventDefault(),e.setState({displayForm:!1}),console.log(a)},e.state={feelings:[],displayModal:!1,displayForm:!1},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.database().ref().on("value",(function(t){var a=[],n=t.val();for(var l in n){var r=n[l];a.push({feeling:r.userFeeling,team:r.userTeam,id:l,info:r.userInfo})}e.setState({feelings:a})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(n.Fragment,null,l.a.createElement("header",null,l.a.createElement("div",{className:"wrapper head"},l.a.createElement("h1",null,"Better Feedback"),l.a.createElement("button",{className:"head__button",onClick:function(t){e.handleModal(t),e.handleForm(t)}},"Add Feedback"))),l.a.createElement("main",null,this.state.displayModal?l.a.createElement(g,{handleModal:this.handleModal,displayForm:this.state.displayForm}):null,l.a.createElement(f,{feelings:this.state.feelings,handleModal:this.handleModal,handleMoreInfo:this.handleMoreInfo})),l.a.createElement("footer",null,l.a.createElement("div",{className:"wrapper foot"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://katm.dev"},"Kat DeVrieze")," 2020"))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.6427b656.chunk.js.map