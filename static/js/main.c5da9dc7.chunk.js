(this.webpackJsonpemilyhu=this.webpackJsonpemilyhu||[]).push([[0],[,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r);a(14),a(15);var l=function(){return i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"header"},"Hi, I'm Emily!"),i.a.createElement("div",null,"I'm an MIT graduate with an enthusiasm for software, music, and learning new things."))},c=a(1),o=a(2),m=a(4),d=a(3),u=(a(7),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).select=function(){return e.props.onClick(e.props.id)},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{id:"select-"+this.props.id,onClick:this.select,className:"selector"+(this.props.isActive?" selected":"")},i.a.createElement("div",{className:"circle"},i.a.createElement("div",{className:"header2"},this.props.text)))}}]),a}(i.a.Component)),h=(a(5),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).select=function(){return e.props.onClick(e.props.id)},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"card"+(this.props.isActive?" active":""),onClick:this.select},i.a.createElement("div",{id:this.props.imgid,className:"card-bg"},i.a.createElement("div",{className:"header-overlay"},i.a.createElement("div",{className:"header2"},this.props.title),i.a.createElement("div",{className:"desc nested"},this.props.desc),i.a.createElement("div",{className:this.props.isActive?"expanded":"minimized"},this.props.links)),i.a.createElement("div",{className:"more nested"+(this.props.isActive?" expanded":" minimized")},this.props.expand)))}}]),a}(i.a.Component)),v=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).select=function(e){e===n.state.active?n.setState({active:-1}):n.setState({active:e})},n.state={active:-1},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"content2"},i.a.createElement("div",null,i.a.createElement("div",null,"Currently I am..."),i.a.createElement("br",null),i.a.createElement("div",null,"working on my ",i.a.createElement("i",null,"Masters of Engineering thesis"))),i.a.createElement("div",{className:"cards"},i.a.createElement(h,{onClick:this.select,id:0,imgid:"dance2music-img",title:"Dance2Music",isActive:0===this.state.active,desc:"A VR dance experience where the music changes based on how the dancer moves.",links:i.a.createElement("div",null,i.a.createElement("i",null,"Demo to come")),expand:i.a.createElement("div",null,"I designed and implemented Dance2Music from ideation to evaluation for my Masters of Engineering Thesis. I developed the system in Unity using C#, with Oculus and Wwise integrations. I created graphical assets (Blender, Photoshop) and audio assets (Musescore, Cakewalk). Through several rounds of user testing, I continually assessed and revised the system.")}),i.a.createElement(h,{onClick:this.select,id:1,imgid:"visualive-img",title:"Visualive",isActive:1===this.state.active,desc:"Collaborative environment for exploring interactive data visualization.",links:i.a.createElement("div",null,"See a ",i.a.createElement("a",{href:"https://youtu.be/gDmbAUAWrSM",target:"_blank",rel:"noopener noreferrer"},"demo")),expand:i.a.createElement("div",null,"My teammate and I created this website using React and D3. In particular, we explored ways to represent other online users and their interactions with the same data in real time. For example, users might see each other selecting points in a scatter plot to focus on.")}),i.a.createElement(h,{onClick:this.select,id:2,imgid:"xya-img",title:"ProjectXYA",isActive:2===this.state.active,desc:"VR escape room. You wake up in an unfamiliar place...",links:i.a.createElement("div",null,"See a ",i.a.createElement("a",{href:"https://youtu.be/6alKuRT0NOE",target:"_blank",rel:"noopener noreferrer"},"demo")),expand:i.a.createElement("div",null,"I designed and built the game with two teammates, and I learned to use Unity and Oculus VR for the first time. As fans of escape rooms, we determined that VR would be a great medium for creating one without needing to travel to a physical location. Discovering VR's immersiveness inspired me to continue exploring VR through my masters project.")}),i.a.createElement(h,{onClick:this.select,id:3,imgid:"squarew-img",title:"Square Wave",isActive:3===this.state.active,desc:"2D musical puzzle platformer. Jump to the beat, fight enemies, collect keys.",links:i.a.createElement("div",null,"See a ",i.a.createElement("a",{href:"https://vimeo.com/316577315",target:"_blank",rel:"noopener noreferrer"},"demo")," ",i.a.createElement("i",null,"(starts at 3:43)")),expand:i.a.createElement("div",null,"I designed and built this game with a teammate, using Python with the Kivy framework. Game logic, level design, and audio puzzles were among the components of the project where I learned the most and had the most fun.")})))}}]),a}(i.a.Component),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).select=function(e){e===n.state.active?n.setState({active:-1}):n.setState({active:e})},n.state={active:-1},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"content2"},i.a.createElement("div",null,i.a.createElement("div",null,"Currently I am..."),i.a.createElement("br",null),i.a.createElement("div",{className:"row-items"},i.a.createElement("div",{className:"row-item"},"reading ",i.a.createElement("a",{href:"https://en.wikipedia.org/wiki/The_Dark_Forest",target:"_blank",rel:"noopener noreferrer"},"The Dark Forest")),i.a.createElement("div",{className:"row-item"},"practicing ",i.a.createElement("a",{href:"https://www.youtube.com/watch?v=h-0G_FI61a8&t=4s",target:"_blank",rel:"noopener noreferrer"},"To Zanarkand")," ",i.a.createElement("i",null,"(guitar)")),i.a.createElement("div",{className:"row-item"},"learning ",i.a.createElement("i",null,"French, Japanese"))),i.a.createElement("div",{className:"cards"},i.a.createElement(h,{onClick:this.select,id:0,imgid:"synco-img",title:"A Cappella & Beatbox",isActive:0===this.state.active,desc:"",links:i.a.createElement("div",null,"See some videos: ",i.a.createElement("a",{href:"https://youtu.be/mua4z4E9Er4",target:"_blank",rel:"noopener noreferrer"},"Boy With Luv"),", ",i.a.createElement("a",{href:"https://youtu.be/D96LNK-pBaQ",target:"_blank",rel:"noopener noreferrer"},"Luv Shot")),expand:i.a.createElement("div",{className:"white-text"},"During MIT, I was part of MIT Syncopasian, an a cappella group that sings songs in a mix of English and East Asian languages. I especially enjoyed recording group members in studio, and I also came to love setting up and mixing live sound for other a cappella groups' concerts. I still love to sing and beatbox.")}),i.a.createElement(h,{onClick:this.select,id:1,imgid:"rambax-img",title:"Senegalese Drumming",isActive:1===this.state.active,desc:"",expand:i.a.createElement("div",{className:"white-text"},"I joined MIT Rambax, a Senegalese drumming ensemble, as a junior. I love learning the rhythms and playing together as a group.")}),i.a.createElement(h,{onClick:this.select,id:2,imgid:"draw-img",title:"Miscellaneous",isActive:2===this.state.active,desc:"",links:i.a.createElement("div",null,"Examples on my ",i.a.createElement("a",{href:"https://www.instagram.com/mle.hu/",target:"_blank",rel:"noopener noreferrer"},"Instagram")),expand:i.a.createElement("div",{className:"white-text"},"In my free time I like drawing people and playing guitar (learning some songs in fingerstyle).")}))))}}]),a}(i.a.Component),g=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"content2"},i.a.createElement("iframe",{className:"embed",title:"resume",src:"resume.pdf"}))}}]),a}(i.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).select=function(e){n.setState({active:e})},n.state={active:0},n}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"row-items"},i.a.createElement(u,{text:"Projects",id:0,isActive:0===this.state.active,onClick:this.select}),i.a.createElement(u,{text:"Interests",id:1,isActive:1===this.state.active,onClick:this.select}),i.a.createElement(u,{text:"Resume",id:2,isActive:2===this.state.active,onClick:this.select})),i.a.createElement("div",{className:"content2"},0===this.state.active&&i.a.createElement(v,null),1===this.state.active&&i.a.createElement(p,null),2===this.state.active&&i.a.createElement(g,null)))}}]),a}(i.a.Component);var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(l,null),i.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.c5da9dc7.chunk.js.map