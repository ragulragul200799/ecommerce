(this["webpackJsonpexample-website"]=this["webpackJsonpexample-website"]||[]).push([[0],{43:function(e,t,a){e.exports=a(81)},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),i=a.n(c),l=a(9),s=a.n(l),o=a(5),m=a(14),u=a(19),p=a(20),d=a(22),b=a(21),h=a(23),g=(a(49),a(15)),f=a(7);a(50);var E=Object(f.g)((function(e){var t=e.title,a=e.imageUrl,n=e.linkUrl,c=e.size,i=e.history,l=e.match;return r.a.createElement("div",{className:"".concat(c," menu-list"),onClick:function(){return i.push("".concat(l.url).concat(n))}},r.a.createElement("div",{className:"background-image",style:{backgroundImage:"url(".concat(a,")")}}),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"title"},t),r.a.createElement("span",{className:"sibtitle"},"shop now")))})),v=(a(55),a(4)),y=a(3),O=Object(y.a)([function(e){return e.directory}],(function(e){return e.sections})),k=Object(y.b)({sections:O}),w=Object(v.b)(k)((function(e){var t=e.sections;return r.a.createElement("div",{className:"directory-menu"},t.map((function(e){var t=e.id,a=Object(g.a)(e,["id"]);return r.a.createElement(E,Object.assign({key:t},a))})))})),j=function(){return r.a.createElement("div",{className:"homepage"},r.a.createElement(w,null))},N=(a(57),a(58),a(59),function(e){var t=e.children,a=e.isGoogleSignIn,n=Object(g.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("button",Object.assign({className:"".concat(1===a?"google-sign-in":"custom-button")},n),t)}),C={TOGGLE_CARD_HIDDEN:"TOGGLE_CARD_HIDDEN",ADD_ITEM:"ADD_ITEM",CLEAR_ITEM_FROM_CART:"CLEAR_ITEM_FROM_CART",REMOVE_ITEM:"REMOVE_ITEM"},U=function(){return{type:C.TOGGLE_CARD_HIDDEN}},I=function(e){return{type:C.ADD_ITEM,payload:e}},x=Object(v.b)(null,(function(e){return{addItem:function(t){return e(I(t))}}}))((function(e){var t=e.item,a=e.addItem,n=t.price,c=t.name,i=t.imageUrl;return r.a.createElement("div",{className:"collectionitem"},r.a.createElement("div",{className:"image",style:{backgroundImage:"url(".concat(i,")")}}),r.a.createElement("div",{className:"collectionfooter"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},n)),r.a.createElement(N,{className:"custom-button",onClick:function(){a(t)}},"Add to cart"))})),S=function(e){var t=e.title,a=e.items;return r.a.createElement("div",{className:"collectionpreview"},r.a.createElement("h1",{className:"title"},t.toUpperCase()),r.a.createElement("div",{className:"preview"},a.filter((function(e,t){return t<4})).map((function(e){return r.a.createElement(x,{key:e.id,item:e})}))))},T=Object(y.a)([function(e){return e.shop}],(function(e){return e.collections})),R=Object(y.a)([T],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),M=Object(y.b)({collections:R}),A=Object(v.b)(M)((function(e){var t=e.collections;return r.a.createElement("div",{className:"collection-overview"},t.map((function(e){var t=e.id,a=Object(g.a)(e,["id"]);return r.a.createElement(S,Object.assign({key:t},a))})))})),B=(a(60),Object(v.b)((function(e,t){return{collections:(a=t.match.params.collectionId,Object(y.a)([T],(function(e){return e[a]})))(e)};var a}))((function(e){var t=e.collections,a=t.title,n=t.items;return r.a.createElement("div",{className:"collection-page"},r.a.createElement("h1",{className:"title"},a),r.a.createElement("div",{className:"items"},n.map((function(e){return r.a.createElement(x,{key:e.id,item:e})}))))}))),D=function(e){var t=e.match;return r.a.createElement("div",{className:"shoppage"},r.a.createElement(f.b,{exact:!0,path:"".concat(t.path),component:A}),r.a.createElement(f.b,{exact:!0,path:"".concat(t.path,"/:collectionId"),component:B}))},_=(a(61),a(12));function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var q=r.a.createElement("title",null,"Group"),W=r.a.createElement("desc",null,"Created with Sketch."),H=r.a.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},r.a.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},r.a.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},r.a.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),r.a.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),r.a.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2})))),L=function(e){var t=e.svgRef,a=e.title,n=P(e,["svgRef","title"]);return r.a.createElement("svg",G({width:"50px",height:"39px",viewBox:"0 0 50 39",ref:t},n),void 0===a?q:a?r.a.createElement("title",null,a):null,W,H)},V=r.a.forwardRef((function(e,t){return r.a.createElement(L,G({svgRef:t},e))})),J=(a.p,a(62),a(24)),z=a.n(J),F=(a(63),a(67),function(){var e=Object(m.a)(s.a.mark((function e(t,a){var n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=Q.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(o.a)({displayName:r,email:c,createdAt:i},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating users",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());z.a.initializeApp({apiKey:"AIzaSyCzZSh5XHrhaFUO7nOKMnZ0XYqw-oUW9uA",authDomain:"crown-db-5f55d.firebaseapp.com",databaseURL:"https://crown-db-5f55d.firebaseio.com",projectId:"crown-db-5f55d",storageBucket:"crown-db-5f55d.appspot.com",messagingSenderId:"938478877247",appId:"1:938478877247:web:bdd2f1fa40bb8e15ad968a",measurementId:"G-GV21LVZCN7"});var K=z.a.auth(),Q=z.a.firestore(),X=new z.a.auth.GoogleAuthProvider;X.setCustomParameters({prompt:"select_account"});var Y=function(){return K.signInWithPopup(X)};z.a;function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function $(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var ee=r.a.createElement("g",null),te=r.a.createElement("g",null),ae=r.a.createElement("g",null),ne=r.a.createElement("g",null),re=r.a.createElement("g",null),ce=r.a.createElement("g",null),ie=r.a.createElement("g",null),le=r.a.createElement("g",null),se=r.a.createElement("g",null),oe=r.a.createElement("g",null),me=r.a.createElement("g",null),ue=r.a.createElement("g",null),pe=r.a.createElement("g",null),de=r.a.createElement("g",null),be=r.a.createElement("g",null),he=function(e){var t=e.svgRef,a=e.title,n=$(e,["svgRef","title"]);return r.a.createElement("svg",Z({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t},n),a?r.a.createElement("title",null,a):null,r.a.createElement("g",null,r.a.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),r.a.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),ee,te,ae,ne,re,ce,ie,le,se,oe,me,ue,pe,de,be)},ge=r.a.forwardRef((function(e,t){return r.a.createElement(he,Z({svgRef:t},e))})),fe=(a.p,a(69),function(e){return e.cart}),Ee=Object(y.a)([fe],(function(e){return e.cartItem})),ve=Object(y.a)([fe],(function(e){return e.hidden})),ye=Object(y.a)([Ee],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),Oe=Object(y.a)([Ee],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),ke=Object(y.b)({itemCount:ye}),we=Object(v.b)(ke,(function(e){return{toggleCartHidden:function(){return e(U())}}}))((function(e){var t=e.toggleCartHidden,a=e.itemCount;return r.a.createElement("div",{className:"cart-icon",onClick:t},r.a.createElement(ge,{className:"shopping-icon"}),r.a.createElement("span",{className:"item-count"},a))})),je=(a(70),a(71),function(e){var t=e.item,a=t.imageUrl,n=t.price,c=t.name,i=t.quantity;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:a,className:"img",alt:"item"}),r.a.createElement("div",{className:"item-details"},r.a.createElement("span",{className:"name"},c),r.a.createElement("span",{className:"price"},i," x $",n)))}),Ne=Object(y.b)({cartItem:Ee}),Ce=Object(f.g)(Object(v.b)(Ne)((function(e){var t=e.cartItem,a=e.history,n=e.dispatch;return r.a.createElement("div",{className:"cart-dropdown"},r.a.createElement("div",{className:"cart-items"},t.length?t.map((function(e){return r.a.createElement(je,{key:e.id,item:e})})):r.a.createElement("span",{className:"empty-message"},"your cart is empty")),r.a.createElement(N,{className:"button",onClick:function(){a.push("/checkoutpage"),n(U())}},"Go to checkout"))}))),Ue=Object(y.a)([function(e){return e.user}],(function(e){return e.currentUser})),Ie=Object(y.b)({currentUser:Ue,hidden:ve}),xe=Object(v.b)(Ie)((function(e){var t=e.currentUser,a=e.hidden;return r.a.createElement("div",{className:"header"},r.a.createElement(_.b,{to:"/ecommerce/",className:"logo-container"},r.a.createElement(V,{className:"logo"})),r.a.createElement("div",{className:"options"},r.a.createElement(_.b,{to:"/shop",className:"option"},"SHOP"),r.a.createElement(_.b,{to:"/contact",className:"option"},"CONTACT"),t?r.a.createElement("div",{className:"option",onClick:function(){return K.signOut()}},"SIGN OUT"):r.a.createElement(_.b,{className:"option",to:"/signin"},"SIGN IN"),r.a.createElement(we,null)),a?null:r.a.createElement(Ce,null))})),Se=(a(72),a(18)),Te=(a(73),a(74),function(e){var t=e.handleChange,a=e.label,n=Object(g.a)(e,["handleChange","label"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},n)),a?r.a.createElement("label",{className:"".concat(n.value.length?"shrink":""," form-input-label")},a):null)}),Re=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).handleSubmit=function(){var e=Object(m.a)(s.a.mark((function e(t){var n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,K.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(Se.a)({},n,r))},a.state={email:"",password:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"sign-in"},r.a.createElement("h1",{className:"title"},"Sign in"),r.a.createElement("span",null,"signin with your email and password."),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(Te,{type:"email",value:t,handleChange:this.handleChange,label:"email",name:"email",required:!0}),r.a.createElement(Te,{type:"password",value:a,label:"password",name:"password",handleChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"buttons"},r.a.createElement(N,{type:"submit"},"Sign in"),r.a.createElement(N,{isGoogleSignIn:1,onClick:Y},"Sign in with google"))))}}]),t}(r.a.Component),Me=(a(75),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).handleSubmit=function(){var t=Object(m.a)(s.a.mark((function t(a){var n,r,c,i,l,o,m;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),n=e.state,r=n.displayname,c=n.email,i=n.password,l=n.confirmpassword,i===l){t.next=5;break}return alert("password dosnt match"),t.abrupt("return");case 5:return t.prev=5,t.next=8,K.createUserWithEmailAndPassword(c,i);case 8:return o=t.sent,m=o.user,t.next=12,F(m,{displayname:r});case 12:e.setState({displayname:"",email:"",password:"",confirmpassword:""}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(5),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[5,15]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(Se.a)({},n,r))},e.state={displayname:"",email:"",password:"",confirmpassword:""},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayname,a=e.email,n=e.password,c=e.confirmpassword;return r.a.createElement("div",{className:"signup"},r.a.createElement("h2",{className:"title"},"I do not  have an account"),r.a.createElement("span",null,"SIGN UP with your email and password"),r.a.createElement("form",{className:"sign-up-form",onSubmit:this.handleSubmit},r.a.createElement(Te,{type:"text",value:t,handleChange:this.handleChange,label:"name",name:"displayname",required:!0}),r.a.createElement(Te,{type:"email",value:a,name:"email",label:"email",onChange:this.handleChange,required:!0}),r.a.createElement(Te,{type:"password",value:n,name:"password",label:"password",onChange:this.handleChange,required:!0}),r.a.createElement(Te,{type:"password",value:c,name:"confirmpassword",label:"confirm password",onChange:this.handleChange,required:!0}),r.a.createElement(N,{type:"submit"},"SIGN UP")))}}]),t}(r.a.Component)),Ae=function(){return r.a.createElement("div",{className:"signinup"},r.a.createElement(Re,null),r.a.createElement(Me,null))},Be="SET_CURRENT_USER",De=(a(76),a(77),Object(v.b)(null,(function(e){return{clearItem:function(t){return e(function(e){return{type:C.CLEAR_ITEM_FROM_CART,payload:e}}(t))},addItem:function(t){return e(I(t))},removeItem:function(t){return e(function(e){return{type:C.REMOVE_ITEM,payload:e}}(t))}}}))((function(e){var t=e.cartItem,a=e.clearItem,n=e.addItem,c=e.removeItem,i=t.imageUrl,l=t.name,s=t.quantity,o=t.price;return r.a.createElement("div",{className:"checkout-item"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:i,alt:"item"})),r.a.createElement("span",{className:"name"},l),r.a.createElement("span",{className:"quantity"},r.a.createElement("div",{className:"arrow",onClick:function(){c(t)}},"\u276e"),r.a.createElement("span",null,s),r.a.createElement("div",{className:"arrow",onClick:function(){n(t)}},"\u276f")),r.a.createElement("span",{className:"price"},"$",o),r.a.createElement("span",{className:"remove",onClick:function(){return a(t)}},"\u2715"))}))),_e=Object(y.b)({cartItems:Ee,total:Oe}),Ge=Object(v.b)(_e)((function(e){var t=e.cartItems,a=e.total;return r.a.createElement("div",{className:"checkout-page"},r.a.createElement("div",{className:"checkout-header"},r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"product")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Name")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Quantity")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Price")),r.a.createElement("div",{className:"checkout-block"},r.a.createElement("span",null,"Remove"))),t.map((function(e){return r.a.createElement(De,{key:e.id,cartItem:e})})),r.a.createElement("div",{className:"total"},r.a.createElement("span",null,"Total $",a)))})),Pe=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).unsubdcribedFromAuth=null,a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setCurrentUser;this.unsubdcribedFromAuth=K.onAuthStateChanged(function(){var t=Object(m.a)(s.a.mark((function t(a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,F(a);case 3:t.sent.onSnapshot((function(t){e(Object(o.a)({id:t.id},t.data()))}));case 5:e(a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubdcribedFromAuth()}},{key:"render",value:function(){var e=this.props.currentUser;return r.a.createElement("div",null,r.a.createElement(xe,null),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/ecommerce/",component:j}),r.a.createElement(f.b,{path:"/shop",component:D}),r.a.createElement(f.b,{exact:!0,path:"/checkoutpage",component:Ge}),r.a.createElement(f.b,{extact:!0,path:"/signin",render:function(){return e?r.a.createElement(f.a,{to:"/"}):r.a.createElement(Ae,null)}})))}}]),t}(r.a.Component),qe=Object(y.b)({currentUser:Ue}),We=Object(v.b)(qe,(function(e){return{setCurrentUser:function(t){return e(function(e){return{type:Be,playload:e}}(t))}}}))(Pe),He=a(11),Le=a(40),Ve=a.n(Le),Je={currentUser:null},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Be:return Object(o.a)({},e,{currentUser:t.playload});default:return e}},Fe=a(42),Ke=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(o.a)({},e,{quantity:e.quantity+1}):e})):[].concat(Object(Fe.a)(e),[Object(o.a)({},t,{quantity:1})])},Qe=function(e,t){var a=e.find((function(e){return e.id===t.id}));return 1===a.quantity?e.filter((function(e){return e.id!==a.id})):e.map((function(e){return e.id===t.id?Object(o.a)({},e,{quantity:e.quantity-1}):e}))},Xe={hidden:!0,cartItem:[]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.TOGGLE_CARD_HIDDEN:return Object(o.a)({},e,{hidden:!e.hidden});case C.ADD_ITEM:return Object(o.a)({},e,{cartItem:Ke(e.cartItem,t.payload)});case C.CLEAR_ITEM_FROM_CART:return Object(o.a)({},e,{cartItem:e.cartItem.filter((function(e){return e.id!==t.payload.id}))});case C.REMOVE_ITEM:return Object(o.a)({},e,{cartItem:Qe(e.cartItem,t.payload)});default:return e}},Ze=a(29),$e=a(41),et={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;return t.type,e},at={collections:{hats:{id:1,title:"Hats",routeName:"hats",items:[{id:1,name:"Brown Brim",imageUrl:"https://i.ibb.co/ZYW3VTp/brown-brim.png",price:25},{id:2,name:"Blue Beanie",imageUrl:"https://i.ibb.co/ypkgK0X/blue-beanie.png",price:18},{id:3,name:"Brown Cowboy",imageUrl:"https://i.ibb.co/QdJwgmp/brown-cowboy.png",price:35},{id:4,name:"Grey Brim",imageUrl:"https://i.ibb.co/RjBLWxB/grey-brim.png",price:25},{id:5,name:"Green Beanie",imageUrl:"https://i.ibb.co/YTjW3vF/green-beanie.png",price:18},{id:6,name:"Palm Tree Cap",imageUrl:"https://i.ibb.co/rKBDvJX/palm-tree-cap.png",price:14},{id:7,name:"Red Beanie",imageUrl:"https://i.ibb.co/bLB646Z/red-beanie.png",price:18},{id:8,name:"Wolf Cap",imageUrl:"https://i.ibb.co/1f2nWMM/wolf-cap.png",price:14},{id:9,name:"Blue Snapback",imageUrl:"https://i.ibb.co/X2VJP2W/blue-snapback.png",price:16}]},sneakers:{id:2,title:"Sneakers",routeName:"sneakers",items:[{id:10,name:"Adidas NMD",imageUrl:"https://i.ibb.co/0s3pdnc/adidas-nmd.png",price:220},{id:11,name:"Adidas Yeezy",imageUrl:"https://i.ibb.co/dJbG1cT/yeezy.png",price:280},{id:12,name:"Black Converse",imageUrl:"https://i.ibb.co/bPmVXyP/black-converse.png",price:110},{id:13,name:"Nike White AirForce",imageUrl:"https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",price:160},{id:14,name:"Nike Red High Tops",imageUrl:"https://i.ibb.co/QcvzydB/nikes-red.png",price:160},{id:15,name:"Nike Brown High Tops",imageUrl:"https://i.ibb.co/fMTV342/nike-brown.png",price:160},{id:16,name:"Air Jordan Limited",imageUrl:"https://i.ibb.co/w4k6Ws9/nike-funky.png",price:190},{id:17,name:"Timberlands",imageUrl:"https://i.ibb.co/Mhh6wBg/timberlands.png",price:200}]},jackets:{id:3,title:"Jackets",routeName:"jackets",items:[{id:18,name:"Black Jean Shearling",imageUrl:"https://i.ibb.co/XzcwL5s/black-shearling.png",price:125},{id:19,name:"Blue Jean Jacket",imageUrl:"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",price:90},{id:20,name:"Grey Jean Jacket",imageUrl:"https://i.ibb.co/N71k1ML/grey-jean-jacket.png",price:90},{id:21,name:"Brown Shearling",imageUrl:"https://i.ibb.co/s96FpdP/brown-shearling.png",price:165},{id:22,name:"Tan Trench",imageUrl:"https://i.ibb.co/M6hHc3F/brown-trench.png",price:185}]},womens:{id:4,title:"Womens",routeName:"womens",items:[{id:23,name:"Blue Tanktop",imageUrl:"https://i.ibb.co/7CQVJNm/blue-tank.png",price:25},{id:24,name:"Floral Blouse",imageUrl:"https://i.ibb.co/4W2DGKm/floral-blouse.png",price:20},{id:25,name:"Floral Dress",imageUrl:"https://i.ibb.co/KV18Ysr/floral-skirt.png",price:80},{id:26,name:"Red Dots Dress",imageUrl:"https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",price:80},{id:27,name:"Striped Sweater",imageUrl:"https://i.ibb.co/KmSkMbH/striped-sweater.png",price:45},{id:28,name:"Yellow Track Suit",imageUrl:"https://i.ibb.co/v1cvwNf/yellow-track-suit.png",price:135},{id:29,name:"White Blouse",imageUrl:"https://i.ibb.co/qBcrsJg/white-vest.png",price:20}]},mens:{id:5,title:"Mens",routeName:"mens",items:[{id:30,name:"Camo Down Vest",imageUrl:"https://i.ibb.co/xJS0T3Y/camo-vest.png",price:325},{id:31,name:"Floral T-shirt",imageUrl:"https://i.ibb.co/qMQ75QZ/floral-shirt.png",price:20},{id:32,name:"Black & White Longsleeve",imageUrl:"https://i.ibb.co/55z32tw/long-sleeve.png",price:25},{id:33,name:"Pink T-shirt",imageUrl:"https://i.ibb.co/RvwnBL8/pink-shirt.png",price:25},{id:34,name:"Jean Long Sleeve",imageUrl:"https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",price:40},{id:35,name:"Burgundy T-shirt",imageUrl:"https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",price:25}]}}},nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;return t.type,e},rt={key:"root",storage:a.n($e).a,whitelist:["cart"]},ct=Object(He.c)({user:ze,cart:Ye,directory:tt,shop:nt}),it=Object(Ze.a)(rt,ct),lt=[Ve.a],st=Object(He.d)(it,He.a.apply(void 0,lt)),ot=Object(Ze.b)(st);a(80);i.a.render(r.a.createElement(v.a,{store:st},r.a.createElement(_.a,null,r.a.createElement("persistGate",{persistor:ot},r.a.createElement(We,null)))),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.92af6bba.chunk.js.map