(this.webpackJsonpemilyhu=this.webpackJsonpemilyhu||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),c=a.n(i);a(14),a(15);var s=function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header"},"Hi, I'm Emily!"),r.a.createElement("div",null,"I'm a masters student at MIT, studying computer science."),r.a.createElement("div",null,"Blah blah i say a lot more here, not really sure what else to include tho."))},l=a(1),o=a(2),m=a(4),u=a(3),d=(a(7),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).select=function(){return e.props.onClick(e.props.id)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"select-"+this.props.id,onClick:this.select,className:"selector"+(this.props.isActive?" selected":"")},r.a.createElement("div",{className:"circle"},r.a.createElement("div",{className:"header2"},this.props.text)))}}]),a}(r.a.Component)),h=(a(5),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).select=function(){return e.props.onClick(e.props.id)},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"+(this.props.isActive?" active":""),onClick:this.select},r.a.createElement("div",{id:this.props.imgid,className:"card-bg"},r.a.createElement("div",{className:"header-overlay"},r.a.createElement("div",{className:"header2"},this.props.title),r.a.createElement("div",{className:"desc nested"},this.props.desc),r.a.createElement("div",{className:this.props.isActive?"expanded":"minimized"},this.props.links)),r.a.createElement("div",{className:"more nested"+(this.props.isActive?" expanded":" minimized")},this.props.expand)))}}]),a}(r.a.Component)),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).select=function(e){e===n.state.active?n.setState({active:-1}):n.setState({active:e})},n.state={active:-1},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content2"},r.a.createElement("div",null,r.a.createElement("div",null,"Currently I am..."),r.a.createElement("br",null),r.a.createElement("div",null,"working on my ",r.a.createElement("i",null,"Masters of Engineering thesis"))),r.a.createElement("div",{className:"cards"},r.a.createElement(h,{onClick:this.select,id:0,imgid:"xya-img",title:"Project XYA",isActive:0===this.state.active,desc:"VR escape room. You wake up in an unfamiliar place... yeah it's one of those.",links:r.a.createElement("div",null,"See a ",r.a.createElement("a",{href:"https://youtu.be/6alKuRT0NOE",target:"_blank",rel:"noopener noreferrer"},"demo")),expand:r.a.createElement("div",null,"I worked on this project for a semester with two teammates. I learned to use Unity and VR at the same time, which partially inspired my current masters project.")}),r.a.createElement(h,{onClick:this.select,id:1,imgid:"xya-img",title:"Project XYA",isActive:1===this.state.active,desc:"VR escape room. You wake up in an unfamiliar place... yeah it's one of those.",links:r.a.createElement("div",null,"See a ",r.a.createElement("a",{href:"https://youtu.be/6alKuRT0NOE",target:"_blank",rel:"noopener noreferrer"},"demo")),expand:r.a.createElement("div",null,"I worked on this project for a semester with two teammates. I learned to use Unity and VR at the same time, which partially inspired my current masters project.")})))}}]),a}(r.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).select=function(e){e===n.state.active?n.setState({active:-1}):n.setState({active:e})},n.state={active:-1},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content2"},r.a.createElement("div",null,r.a.createElement("div",null,"Currently I am..."),r.a.createElement("br",null),r.a.createElement("div",{className:"row-items"},r.a.createElement("div",{className:"row-item"},"playing ",r.a.createElement("a",{href:"http://www.okami-game.com/",target:"_blank",rel:"noopener noreferrer"},"Okami")),r.a.createElement("div",{className:"row-item"},"reading ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/The_Three-Body_Problem_(novel)",target:"_blank",rel:"noopener noreferrer"},"The Three Body Problem")),r.a.createElement("div",{className:"row-item"},"learning ",r.a.createElement("i",null,"French"))),r.a.createElement("div",{className:"cards"},r.a.createElement(h,{onClick:this.select,id:1,imgid:"xya-img",title:"Project XYA",isActive:1===this.state.active,desc:"VR escape room. You wake up in an unfamiliar place... yeah it's one of those.",links:r.a.createElement("div",null,"See a ",r.a.createElement("a",{href:"https://youtu.be/6alKuRT0NOE",target:"_blank",rel:"noopener noreferrer"},"demo")),expand:r.a.createElement("div",{className:"white-text"},"I worked on this project for a semester with two teammates. I learned to use Unity and VR at the same time, which partially inspired my current masters project.")}))))}}]),a}(r.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content2"},r.a.createElement("iframe",{className:"embed",title:"resume",src:"resume.pdf"}))}}]),a}(r.a.Component),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).select=function(e){n.setState({active:e})},n.state={active:0},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"row-items"},r.a.createElement(d,{text:"Projects",id:0,isActive:0===this.state.active,onClick:this.select}),r.a.createElement(d,{text:"Interests",id:1,isActive:1===this.state.active,onClick:this.select}),r.a.createElement(d,{text:"Resume",id:2,isActive:2===this.state.active,onClick:this.select})),r.a.createElement("div",{className:"content2"},0===this.state.active&&r.a.createElement(v,null),1===this.state.active&&r.a.createElement(p,null),2===this.state.active&&r.a.createElement(E,null)))}}]),a}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.094e45be.chunk.js.map