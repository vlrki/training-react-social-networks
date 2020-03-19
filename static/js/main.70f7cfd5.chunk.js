(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[1],{10:function(e,t,n){"use strict";var r=n(99),a=n.n(r);n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var u=a.a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"c35b5940-b9e7-46eb-ae99-42dcc3385481"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return u.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e}))},follow:function(e){return u.post("follow/".concat(e)).then((function(e){return e}))},unfollow:function(e){return u.delete("follow/".concat(e)).then((function(e){return e}))},getProfile:function(e){return i.getProfile(e)}},i={getProfile:function(e){return u.get("profile/"+e)},getStatus:function(e){return u.get("profile/status/"+e)},putStatus:function(e){return u.put("profile/status",{status:e})}},o={me:function(){return u.get("auth/me/",{withCredentials:!0})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return u.post("auth/login/",{email:e,password:t,rememberMe:n})},logout:function(){return u.delete("auth/login/")}}},107:function(e,t,n){e.exports=n.p+"static/media/preloader.447449d2.svg"},157:function(e,t,n){e.exports=n(254)},162:function(e,t,n){},242:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(33),c=n.n(u);n(162),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(163);var i=n(20),o=n(79),s=n(88),l=n(98),f=n(32),d=n(100),p=n(97),m=n(8),g={initialized:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(m.a)({},e,{initialized:!0});default:return e}},b=Object(i.c)({profilePage:o.b,dialogsPage:s.b,usersPage:l.a,auth:f.a,form:p.a,app:h}),E=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.d,O=Object(i.e)(b,E(Object(i.a)(d.a)));window.__store__=O;var v=O,w=n(41),S=n(42),y=n(44),j=n(43),_=n(45),T=(n(242),n(35)),I=n(27),k=n(17),P=n(40),C=n(34),L=n(22),U=function(e){return a.a.createElement(C.a,{bg:"dark",variant:"dark",expand:"md"},a.a.createElement(P.a,null,a.a.createElement(C.a.Brand,{href:"#home"},"Social Network"),a.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(L.a,{className:"mr-auto"},a.a.createElement(L.a.Item,null,a.a.createElement(L.a.Link,{as:k.b,to:"/"},"Home")),a.a.createElement(L.a.Link,{as:k.b,to:"/profile"},"Profile"),a.a.createElement(L.a.Link,{as:k.b,to:"/dialogs"},"Dialogs"),a.a.createElement(L.a.Link,{as:k.b,to:"/news"},"News"),a.a.createElement(L.a.Link,{as:k.b,to:"/music"},"Music"),a.a.createElement(L.a.Link,{as:k.b,to:"/users"},"Users")),a.a.createElement(C.a.Collapse,{className:"justify-content-end"},a.a.createElement(C.a.Text,null,e.isAuth?a.a.createElement(a.a.Fragment,null,e.login," | ",a.a.createElement(k.b,{to:"/logout"},"Logout")):a.a.createElement(k.b,{to:"/login"},"Login")))))},x=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){return a.a.createElement(U,this.props)}}]),t}(a.a.Component),A=Object(T.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuthUserData:f.b})(x),N=n(64),R=a.a.lazy((function(){return n.e(9).then(n.bind(null,326))})),D=a.a.lazy((function(){return n.e(10).then(n.bind(null,327))})),F=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,330))})),z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,332))})),G=a.a.lazy((function(){return n.e(6).then(n.bind(null,331))})),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,328))})),W=a.a.lazy((function(){return n.e(8).then(n.bind(null,329))})),H=function(e){function t(){return Object(w.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(e){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement(a.a.Fragment,null,a.a.createElement(A,null),a.a.createElement(r.Suspense,{fallback:a.a.createElement(N.a,null)},a.a.createElement(I.b,{path:"/dialogs",render:function(){return a.a.createElement(z,null)}})," ",a.a.createElement(I.b,{path:"/profile/:userId?",render:function(){return a.a.createElement(F,null)}}),a.a.createElement(I.b,{path:"/music",render:function(){return a.a.createElement(R,null)}}),a.a.createElement(I.b,{path:"/news",render:function(){return a.a.createElement(D,null)}}),a.a.createElement(I.b,{path:"/users",render:function(){return a.a.createElement(G,null)}}),a.a.createElement(I.b,{path:"/login",render:function(){return a.a.createElement(M,null)}}),a.a.createElement(I.b,{path:"/logout",render:function(){return a.a.createElement(W,null)}}))):a.a.createElement(N.a,null)}}]),t}(r.Component),B=Object(i.d)(I.f,Object(T.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(f.b)());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(H),K=function(e){return a.a.createElement(k.a,null,a.a.createElement(T.a,{store:v},a.a.createElement(B,null)))},V=function(){c.a.render(a.a.createElement(K,null),document.getElementById("root"))};V(v.getState()),v.subscribe((function(){v.getState();V()})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m}));var r=n(6),a=n.n(r),u=n(13),c=n(8),i=n(10),o=n(57),s="test-network/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},f=function(e,t,n,r){return{type:s,payload:{userId:e,email:t,login:n,isAuth:r}}},d=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){var n,r,u,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,u=r.userId,c=r.login,o=r.email,t(f(u,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(u.a)(a.a.mark((function r(u){var c,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(c=r.sent).data.resultCode?u(d()):(s=c.data.messages.length>0?c.data.messages[0]:"Some error",u(Object(o.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},m=function(){return function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(c.a)({},e,{},t.payload);default:return e}}},64:function(e,t,n){"use strict";var r=n(0),a=n.n(r),u=n(40),c=n(69),i=n(68),o=n(107),s=n.n(o);t.a=function(e){return a.a.createElement(u.a,null,a.a.createElement(c.a,null,a.a.createElement(i.a,null,a.a.createElement("img",{src:s.a,alt:""}))))}},79:function(e,t,n){"use strict";n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return m}));var r=n(6),a=n.n(r),u=n(13),c=n(26),i=n(8),o=n(10),s={posts:[{id:0,message:"Excelent!",likesCount:4},{id:1,message:"Wow",likesCount:5},{id:2,message:"Hi!",likesCount:2}],friends:[{id:0,name:"Vasya"},{id:1,name:"Katya"},{id:2,name:"Masha"},{id:3,name:"Dima"},{id:4,name:"Petya"},{id:5,name:"Rita"}],profile:null,status:""},l=function(e){return{type:"SET_STATUS",status:e}},f=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(l(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},p=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.putStatus(e);case 2:1===t.sent.data.resultCode&&n(l(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(t){t(function(e){return{type:"ADD-POST",newPostText:e}}(e))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=Object(i.a)({},e,{posts:[].concat(Object(c.a)(e.posts),[{id:3,message:t.newPostText,likeCount:0}])});return n;case"DELETE_POST":var r=Object(i.a)({},e,{posts:Object(c.a)(e.posts.filter((function(e){return e.id!=t.postId})))});return r;case"SET_USER_PROFILE":var a=Object(i.a)({},e,{profile:t.profile});return a;case"SET_STATUS":var u=Object(i.a)({},e,{status:t.status});return u;default:return e}}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(26),a=n(8),u={dialogs:[{id:0,name:"Vasya"},{id:1,name:"Katya"},{id:2,name:"Masha"},{id:3,name:"Dima"}],messages:[{id:0,message:"Hi!"},{id:1,message:"Hello!"},{id:2,message:"How are you?"},{id:3,message:"Fine thanks."}]},c=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:t.newMessageBody}])});return n;default:return e}}},98:function(e,t,n){"use strict";var r=n(6),a=n.n(r),u=n(13),c=n(26),i=n(8),o=n(10),s=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)({},e,{},r):e}))};n.d(t,"h",(function(){return m})),n.d(t,"d",(function(){return g})),n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return b})),n.d(t,"e",(function(){return E})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return v})),n.d(t,"i",(function(){return w}));var l={users:[],pageSize:10,totalUsersCount:10,currentPage:1,isFetching:!0,followingInProgress:[]},f=function(){var e=Object(u.a)(a.a.mark((function e(t,n,r,u){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(n,!0)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(u(n)),t(E(n,!1));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(e){return{type:"FOLLOW",userId:e}},p=function(e){return{type:"UNFOLLOW",userId:e}},m=function(e){return{type:"SET_USERS",users:e}},g=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},h=function(e){return{type:"SET_TOTAL_USERS_COUNT",totalUsersCount:e}},b=function(e){return{type:"SET_IS_FETCHING",isFetching:e}},E=function(e,t){return{type:"SET_FOLLOWING_IN_PROGRESS",isFetching:t,userId:e}},O=function(e,t){return function(){var n=Object(u.a)(a.a.mark((function n(r){var u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),n.next=3,o.c.getUsers(e,t);case 3:u=n.sent,r(m(u.data.items)),r(h(u.data.totalCount)),r(g(e)),r(b(!1));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f(n,e,o.c.follow.bind(o.c),d);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(u.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f(n,e,o.c.unfollow.bind(o.c),p);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(i.a)({},e,{users:s(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(i.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(i.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(i.a)({},e,{totalUsersCount:t.totalUsersCount});case"SET_IS_FETCHING":return Object(i.a)({},e,{isFetching:t.isFetching});case"SET_FOLLOWING_IN_PROGRESS":return Object(i.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):Object(c.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}}}},[[157,2,3]]]);
//# sourceMappingURL=main.70f7cfd5.chunk.js.map