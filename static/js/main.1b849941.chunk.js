(this.webpackJsonpmovieology=this.webpackJsonpmovieology||[]).push([[0],{170:function(e,t,a){e.exports=a(279)},255:function(e,t,a){},256:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){},279:function(e,t,a){"use strict";a.r(t);a(171),a(197),a(199),a(200),a(202),a(203),a(204),a(205),a(206),a(207),a(208),a(209),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(222),a(223),a(224),a(225),a(226),a(227),a(228),a(229),a(230),a(231),a(232),a(233),a(234),a(235),a(236),a(237),a(238),a(239);var n=a(0),c=a.n(n),r=a(28),s=a.n(r),o=a(23),l=a.n(o),i=a(32),m=a(9),u=a.n(m),v=a(33),p=a(95),d=a.n(p),E=(a(255),function(e){var t=e.onFindMovie,a=e.moving,r=Object(n.useState)({processing:!1}),s=Object(i.a)(r,2),o=s[0],l=s[1];return c.a.createElement("div",{className:"movie-block"},c.a.createElement("div",{className:"movie-button"},c.a.createElement("button",{className:d()({button:!0,processing:o.processing,"element-move-top":a}),onClick:function(){l({processing:!0}),t()}},c.a.createElement("span",null,"\u0427\u0442\u043e \u0433\u043b\u044f\u043d\u0443\u0442\u044c?"),c.a.createElement("svg",{viewBox:"0 0 15 13"},c.a.createElement("polyline",{points:"2 6.5 6 10.5 13 2.5"})))))}),f=(a(256),function(e){var t=e.onFindMovie,a=e.movie;return c.a.createElement("div",{className:"welcome_panel"},c.a.createElement(E,{onFindMovie:t,movie:a}))}),b=a(96),h=a.n(b),w=a(97),g=a.n(w),N=a(98),y=a.n(N),j=a(99),x=a.n(j),O=(a(258),function(e){var t=e.movie,a=t.Title,n=t.Poster,r=t.Plot,s=t.Actors,o=t.Rated,l=t.Runtime,i=t.Genre,m=t.imdbRating;return c.a.createElement("div",{className:"wrap"},c.a.createElement("div",{className:"cellphone-container"},c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"movie-img",style:{backgroundImage:"url(".concat(n,")"),backgroundSize:"cover"}}),c.a.createElement("div",{className:"text-movie-cont"},c.a.createElement("div",{className:"mr-grid"},c.a.createElement("div",{className:"col1"},c.a.createElement("h2",null,a),c.a.createElement("ul",{className:"movie-gen"},c.a.createElement("li",null,o," /"),c.a.createElement("li",null,l," /"),c.a.createElement("li",null,i)))),c.a.createElement("div",{className:"mr-grid summary-row"},c.a.createElement("div",{className:"col2"},c.a.createElement("h5",null,"SUMMARY")),c.a.createElement("div",{className:"col2"},c.a.createElement("ul",{className:"movie-likes"},c.a.createElement("li",null,c.a.createElement(x.a,{width:20,height:20}),m)))),c.a.createElement("div",{className:"mr-grid"},c.a.createElement("div",{className:"col1"},c.a.createElement("p",{className:"movie-description"},r))),c.a.createElement("div",{className:"mr-grid actors-row"},c.a.createElement("div",{className:"col1"},c.a.createElement("p",{className:"movie-actors"},s))),c.a.createElement("div",{className:"mr-grid action-row"},c.a.createElement("div",{className:"col6 action-btn"},c.a.createElement(y.a,{width:30,height:30,style:{color:"#fe4141"}})),c.a.createElement("div",{className:"col6 action-btn"},c.a.createElement(g.a,{width:30,height:30,style:{color:"#fe4141"}})),c.a.createElement("div",{className:"col6 action-btn"},c.a.createElement(h.a,{width:30,height:30,style:{color:"#fe4141"}})))))))}),k=(a(259),a(260),a(44)),M=a(45),P=a(100),S=a.n(P),A={movies:"https://api.themoviedb.org",api:"https://movie.incodewetrust.dev",omdb:"https://www.omdbapi.com"},_=function(e,t,a){var n,c,r,s,o=arguments;return u.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return n=o.length>3&&void 0!==o[3]?o[3]:{},l.prev=1,c="omdb"===a?"".concat(t,"&apikey=").concat("f5f111a3"):t,l.next=5,u.a.awrap(S()({url:"".concat(A[a],"/").concat(c),method:e,data:n}));case 5:return r=l.sent,s=r.data,console.log("DATA",t,s),l.abrupt("return",s);case 11:return l.prev=11,l.t0=l.catch(1),l.abrupt("return",l.t0);case 14:case"end":return l.stop()}}),null,null,[[1,11]])},F=function(){function e(){Object(k.a)(this,e)}return Object(M.a)(e,[{key:"fetchMovies",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(_("get","?i=tt3896198","omdb",{}));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),null,null,[[0,7]])}}]),e}(),I=function(){function e(){Object(k.a)(this,e)}return Object(M.a)(e,[{key:"fetchPosts",value:function(){var e;return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.a.awrap(_("get","posts","api"));case 3:return e=t.sent,t.abrupt("return",e);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),null,null,[[0,7]])}}]),e}(),R=function(){var e,t,a,n,c;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return l.a.subscribe((function(){})),e=new F,t=new I,r.next=5,u.a.awrap(e.fetchMovies());case 5:return a=r.sent,r.next=8,u.a.awrap(t.fetchPosts());case 8:return n=r.sent,r.next=11,u.a.awrap(l.a.sendPromise("VKWebAppGetUserInfo"));case 11:return c=r.sent,r.abrupt("return",{movie:a,user:c,posts:n});case 13:case"end":return r.stop()}}))},T=function(){var e=Object(n.useState)("welcome"),t=Object(i.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(null),o=Object(i.a)(s,2),l=(o[0],o[1]),m=Object(n.useState)(null),p=Object(i.a)(m,2),d=p[0],E=p[1],b=Object(n.useState)(null),h=Object(i.a)(b,2),w=(h[0],h[1]);Object(n.useEffect)((function(){!function(){var e,t,a,n;u.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,u.a.awrap(R());case 2:e=c.sent,t=e.movie,a=e.user,n=e.posts,l(a),E(t),w(n);case 9:case"end":return c.stop()}}))}()}),[]);return c.a.createElement(v.b,{activeView:a},c.a.createElement(v.c,{header:!1,activePanel:"welcome_panel",id:"welcome"},c.a.createElement(v.a,{id:"welcome_panel"},c.a.createElement(f,{onFindMovie:function(){setTimeout((function(){r("movie")}),3e3)}}))),c.a.createElement(v.c,{header:!1,activePanel:"movie_panel",id:"movie"},c.a.createElement(v.a,{id:"movie_panel"},c.a.createElement(O,{movie:d}))))};l.a.send("VKWebAppInit",{}),s.a.render(c.a.createElement(T,null),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.1b849941.chunk.js.map