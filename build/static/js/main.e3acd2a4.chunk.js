(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"startAddingPost",function(){return y}),n.d(a,"startloadingPost",function(){return S}),n.d(a,"startRemovingPost",function(){return N}),n.d(a,"startAddingComment",function(){return D}),n.d(a,"startLoadingComments",function(){return _}),n.d(a,"LoadComments",function(){return k}),n.d(a,"removePost",function(){return w}),n.d(a,"addPost",function(){return A}),n.d(a,"addComment",function(){return P}),n.d(a,"loadPosts",function(){return C});var o=n(1),r=n.n(o),c=n(80),i=n.n(c),s=(n(90),n(11)),u=n(12),m=n(31),l=n(19),p=n(30),d=[];var f=Object(u.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE_POST":return console.log("remove"),[].concat(Object(m.a)(e.slice(0,t.index)),Object(m.a)(e.slice(t.index+1)));case"ADD_POST":return[].concat(Object(m.a)(e),[t.post]);case"LOAD_POSTS":return t.posts;default:return e}},comments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_COMMENT":return e[t.postId]?Object(p.a)(Object(p.a)({},e),{},Object(l.a)({},t.postId,[].concat(Object(m.a)(e[t.postId]),[t.comment]))):Object(p.a)(Object(p.a)({},e),{},Object(l.a)({},t.postId,[t.comment]));case"LOAD_COMMENTS":return t.comments;default:return e}}}),b=n(24),h=n(13),O=n(14),v=n(16),E=n(15),j=n(48);j.initializeApp({apiKey:"AIzaSyAgKX-VKmAxSsRn2EK7Rl70ofSv1JzSwPY",authDomain:"photowall-d3ef4.firebaseapp.com",databaseURL:"https://photowall-d3ef4-default-rtdb.firebaseio.com",projectId:"photowall-d3ef4",storageBucket:"photowall-d3ef4.appspot.com",messagingSenderId:"891162647409",appId:"1:891162647409:web:0a935f25e45b34481734d0",measurementId:"G-S2Q7E5GQ9N"});var g=j.database();function y(e){return function(t){return g.ref("posts").update(Object(l.a)({},e.id,e)).then(function(){t(A(e))}).catch(function(e){console.log(e)})}}function S(){return function(e){return g.ref("posts").once("value").then(function(t){var n=[];t.forEach(function(e){n.push(e.val())}),e(C(n))})}}function N(e,t){return console.log(t),function(n){return g.ref("posts/".concat(t)).remove().then(function(){n(w(e))})}}function D(e,t){return function(n){return g.ref("comments/"+t).push(e).then(function(){n(P(e,t))}).catch(function(e){console.log(e)})}}function _(){return function(e){return g.ref("comments").once("value").then(function(t){var n={};t.forEach(function(e){n[e.key]=Object.values(e.val())}),e(k(n))})}}function k(e){return{type:"LOAD_COMMENTS",comments:e}}function w(e){return{type:"REMOVE_POST",index:e}}function A(e){return{type:"ADD_POST",post:e}}function P(e,t){return{type:"ADD_COMMENT",comment:e,postId:t}}function C(e){return{type:"LOAD_POSTS",posts:e}}var I=function(e){var t=e.post;return r.a.createElement("figure",{className:"figure"},r.a.createElement(s.b,{to:"single/".concat(t.id)}," ",r.a.createElement("img",{className:"photo",src:t.imageLink,alt:t.description})),r.a.createElement("figcaption",null,r.a.createElement("p",null," ",t.description)),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){e.dispatch(N(e.index,t.id))}},"Remove"),r.a.createElement(s.b,{className:"button",to:"single/".concat(t.id)},r.a.createElement("div",{className:"comment-count"},r.a.createElement("div",{className:"speech-bubble"}),e.comments[t.id]?e.comments[t.id].length:0))))},T=n(7),x=n.n(T);function L(e){return r.a.createElement("div",null,r.a.createElement(s.b,{className:"addIcon",to:"/AddPhoto"}),r.a.createElement("div",{className:"photoGrid"},e.posts.posts.map(function(t,n){return r.a.createElement(I,Object.assign({key:n,post:t},e,{index:n}))})))}L.protoTypes={post:x.a.array.isRequired};var M=L,R=n(2),V=n(23),X=function(e){Object(v.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(V.a)(e)),e}return Object(O.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.link.value,n=e.target.elements.description.value,a={id:Number(new Date),description:n,imageLink:t};n&&t&&(this.props.dispatch(y(a)),this.props.onHistory.push("/"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Link",name:"link"}),r.a.createElement("input",{type:"text",placeholder:"Description",name:"description"}),r.a.createElement("button",null,"Post")))}}]),n}(o.Component),G=n(5),K=function(e){Object(v.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).handleSubmit=e.handleSubmit.bind(Object(V.a)(e)),e}return Object(O.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=e.target.elements.comment.value;this.props.dispatch(D(t,this.props.id)),e.target.elements.comment.value=""}},{key:"render",value:function(){var e=this.props.comments;return r.a.createElement("div",{className:"comment"},e.map(function(e,t){return r.a.createElement("p",{key:t}," ",e," ")}),r.a.createElement("form",{className:"comment-form",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"comment",name:"comment"}),r.a.createElement("input",{type:"submit"})))}}]),n}(o.Component),z=function(e){Object(v.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props.router.location.pathname.split("/")[2],t=this.props.posts.posts.find(function(t){return t.id==e}),n=this.props.comments[e]||[],a=this.props.posts.posts.findIndex(function(t){return t.id==e});return r.a.createElement("div",{className:"single-photo"},r.a.createElement(I,Object.assign({post:t},this.props,{index:a})),r.a.createElement(K,Object.assign({startAddingComment:this.props.startAddingComment},this.props,{comments:n,id:e})))}}]),n}(o.Component),B=function(e){Object(v.a)(n,e);var t=Object(E.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(S()),this.props.dispatch(_())}},{key:"render",value:function(){var e=Object(G.b)();return r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement(s.b,{to:"/"}," Photowall")),r.a.createElement(R.c,null,r.a.createElement(R.a,{path:"/",element:r.a.createElement(M,this.props)}),r.a.createElement(R.a,{path:"/AddPhoto",element:r.a.createElement(X,Object.assign({},this.props,{onHistory:e}))}),r.a.createElement(R.a,{path:"/single/:id",element:r.a.createElement(z,this.props)})),r.a.createElement(s.b,{className:"goBack",to:"/"}," Go back "))}}]),n}(o.Component);var J=Object(b.b)(function(e){return{posts:e}})(B);var U,H=(U=Object(b.b)(function(e){return{posts:e.posts,comments:e.comments}},function(e){return Object(u.b)({actions:a},e)})(J),function(e){var t=Object(R.e)(),n=Object(R.f)(),a=Object(R.g)();return r.a.createElement(U,Object.assign({},e,{router:{location:t,navigate:n,params:a}}))}),Q=n(84),q=n.n(Q),Y=Object(u.d)(f,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(u.a)(q.a));i.a.render(r.a.createElement(b.a,{store:Y},r.a.createElement(s.a,null,r.a.createElement(H,null))),document.getElementById("root"))},85:function(e,t,n){e.exports=n(153)},90:function(e,t,n){}},[[85,1,2]]]);
//# sourceMappingURL=main.e3acd2a4.chunk.js.map