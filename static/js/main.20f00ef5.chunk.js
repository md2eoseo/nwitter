(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{27:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),u=a.n(c),l=a(2),o=a(14),i=a(1),s=a(12);a(32),a(34),a(44);s.initializeApp({apiKey:"AIzaSyBQbMXaA6WRvSC1U9TgVrxFvOIPXhryePk",authDomain:"nwitter-4645b.firebaseapp.com",databaseURL:"https://nwitter-4645b.firebaseio.com",projectId:"nwitter-4645b",storageBucket:"nwitter-4645b.appspot.com",messagingSenderId:"424703123399",appId:"1:424703123399:web:d78269832be0a0862943e2"});var m=s,p=s.auth(),d=s.firestore(),f=s.storage(),b=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{exact:!0,to:"/profile"},t.displayName,"'s profile")),r.a.createElement("button",{onClick:function(){p.signOut()}},"Logout")))},h=a(4),E=a.n(h),v=a(9),g=function(e){e.error;var t=e.setError,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],o=c[1],i=Object(n.useState)(""),s=Object(l.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)(!1),b=Object(l.a)(f,2),h=b[0],g=b[1],w=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?o(n):"password"===a&&d(n)},O=function(){var e=Object(v.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),!h){e.next=6;break}return e.next=4,p.createUserWithEmailAndPassword(u,m).catch((function(e){t(e.message)}));case 4:e.next=8;break;case 6:return e.next=8,p.signInWithEmailAndPassword(u,m).catch((function(e){t(e.message)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:O},r.a.createElement("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:u,onChange:w}),r.a.createElement("input",{name:"password",type:"password",placeholder:"Pasword",required:!0,value:m,onChange:w}),r.a.createElement("input",{type:"submit",value:h?"Sign up":"Login"}),r.a.createElement("button",{onClick:function(){g(!h),t("")}},h?"I have a account":"I don't have a account"))},w=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],u=function(e){var t,a=e.target.name;"google"===a?t=new m.auth.GoogleAuthProvider:"github"===a&&(t=new m.auth.GithubAuthProvider),p.signInWithPopup(t).catch((function(e){"auth/account-exists-with-different-credential"===e.code&&c("The account already exists with same email. Try another login method.")}))};return r.a.createElement("div",null,r.a.createElement(g,{error:a,setError:c}),a,r.a.createElement("div",null,r.a.createElement("button",{onClick:u,name:"google"},"Continue with Google"),r.a.createElement("button",{onClick:u,name:"github"},"Continue with Github")))},O=a(46),j=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(l.a)(a,2),u=c[0],o=c[1],i=Object(n.useState)(null),s=Object(l.a)(i,2),m=s[0],p=s[1],b=function(){var e=Object(v.a)(E.a.mark((function e(a){var n,r,c;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,""===u){e.next=16;break}if(n={text:u,creatorId:t.uid,createdAt:Date.now(),attachmentUrl:null},null===m){e.next=12;break}return r=f.ref().child("".concat(t.uid,"/").concat(Object(O.a)())),e.next=8,r.putString(m,"data_url");case 8:return c=e.sent,e.next=11,c.ref.getDownloadURL();case 11:n.attachmentUrl=e.sent;case 12:return e.next=14,d.collection("nweets").add(n).then((function(){o(""),p(null)}));case 14:e.next=17;break;case 16:console.log("Nweet is empty!");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0.code);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b},r.a.createElement("input",{value:u,onChange:function(e){var t=e.target.value;o(t)},placeholder:"Nweet your thoughts...",maxLength:120}),r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.readAsDataURL(t),a.onloadend=function(e){p(e.target.result)}}}),m&&r.a.createElement("div",null,r.a.createElement("img",{src:m,alt:"attachment",height:"100px"}),r.a.createElement("button",{onClick:function(){p(null)}},"Clear Photo")),r.a.createElement("input",{type:"submit",value:"Nweet"}))},x=a(17),y=function(e){var t=e.nweet,a=e.isOwner,c=Object(n.useState)(!1),u=Object(l.a)(c,2),o=u[0],i=u[1],s=Object(n.useState)(t.text),m=Object(l.a)(s,2),p=m[0],b=m[1],h=function(){i(!o),b(t.text)},g=function(){var e=Object(v.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),e.prev=1,""===p){e.next=7;break}return e.next=5,d.doc("nweets/".concat(t.id)).update({text:p,updatedAt:Date.now()}).then((function(){h()}));case 5:e.next=8;break;case 7:console.log("can't make Nweet empty!");case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0.code);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(v.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure to delete Nweet?")){e.next=7;break}if(null===t.attachmentUrl){e.next=5;break}return e.next=5,f.refFromURL(t.attachmentUrl).delete();case 5:return e.next=7,d.doc("nweets/".concat(t.id)).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,o?r.a.createElement("form",{onSubmit:g},r.a.createElement("input",{placeholder:"Edit your nweet...",value:p,onChange:function(e){var t=e.target.value;b(t)},maxLength:120,required:!0}),r.a.createElement("input",{type:"submit",value:"edit"}),r.a.createElement("button",{onClick:h},"cancel")):r.a.createElement("div",null,t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl,alt:"nweet.attachmentUrl",height:"100px"}),r.a.createElement("span",null,t.text),t.updatedAt&&r.a.createElement("span",null,"-edited")),a&&!o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:w},"delete"),r.a.createElement("button",{onClick:h},"edit")))},k=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(l.a)(a,2),u=c[0],o=c[1];return Object(n.useEffect)((function(){d.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(x.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",null,u.map((function(e){return r.a.createElement(y,{key:e.id,nweet:e,isOwner:t.uid===e.creatorId})})))},S=function(e){var t=e.userObj;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{userObj:t}),r.a.createElement(k,{userObj:t}))},C=function(e){var t=e.userObj,a=e.refreshUser,c=Object(n.useState)([]),u=Object(l.a)(c,2),o=u[0],i=u[1],s=Object(n.useState)(t.displayName),m=Object(l.a)(s,2),p=m[0],f=m[1],b=function(){var e=Object(v.a)(E.a.mark((function e(){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:a=e.sent,i(a.docs.map((function(e){return Object(x.a)({id:e.id},e.data())})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}));var h=function(){var e=Object(v.a)(E.a.mark((function e(n){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===p){e.next=5;break}return e.next=4,t.updateProfile({displayName:p});case 4:a();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:h},r.a.createElement("input",{onChange:function(e){var t=e.target.value;f(t)},type:"text",placeholder:"Display name",value:p}),r.a.createElement("input",{type:"submit",value:"Update Profile"})),r.a.createElement("div",null,o.length>0?o.map((function(e){return r.a.createElement(y,{key:e.id,nweet:e,isOwner:t.uid===e.creatorId})})):"There's no Nweet..."))},U=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return r.a.createElement(o.a,null,t&&r.a.createElement(b,{userObj:a}),r.a.createElement(i.d,null,t?r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(S,{userObj:a})),r.a.createElement(i.b,{exact:!0,path:"/profile"},r.a.createElement(C,{userObj:a,refreshUser:n})),r.a.createElement(i.a,{from:"*",to:"/"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(w,null)),r.a.createElement(i.a,{from:"*",to:"/"}))))};var I=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],u=Object(n.useState)(!1),o=Object(l.a)(u,2),i=o[0],s=o[1],m=Object(n.useState)(null),d=Object(l.a)(m,2),f=d[0],b=d[1];return Object(n.useEffect)((function(){p.onAuthStateChanged((function(e){e?(s(!0),b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(s(!1),b(null)),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(U,{isLoggedIn:i,userObj:f,refreshUser:function(){var e=p.currentUser;b({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})}}):"\ud83e\uddc0",r.a.createElement("footer",null,"\xa9 ",(new Date).getFullYear()," Nwitter"))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.20f00ef5.chunk.js.map