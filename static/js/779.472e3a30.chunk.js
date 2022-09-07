"use strict";(self.webpackChunkMovies=self.webpackChunkMovies||[]).push([[779],{779:function(e,r,n){n.r(r),n.d(r,{default:function(){return v}});var t,a,s=n(885),c=n(871),u=n(791),o=n(390),i=n(168),l=n(444),p=l.ZP.li(t||(t=(0,i.Z)(["\n  margin: 30px 0;\n"]))),f=l.ZP.p(a||(a=(0,i.Z)(["\n  margin-top: 5px;\n"]))),h=n(852),g=n(184),v=function(){var e=(0,c.UO)().movieId,r=(0,u.useState)(null),n=(0,s.Z)(r,2),t=n[0],a=n[1],i=(0,u.useState)(null),l=(0,s.Z)(i,2),v=l[0],x=l[1];return(0,u.useEffect)((function(){(0,o.Jh)(e).then((function(e){console.log(e),0===e.length?(console.log("info.length === 0"),x("There aren't any reviews for this movie yet."),a(null)):(x(null),a(e))})).catch((function(e){a(null),x(e)}))}),[e]),(0,g.jsxs)(g.Fragment,{children:[t&&(0,g.jsx)("ul",{children:t.map((function(e){return(0,g.jsxs)(p,{children:[(0,g.jsxs)("h2",{children:["Author: ",e.author]}),(0,g.jsx)(f,{children:e.content})]},e.id)}))}),v&&(0,g.jsx)(h.X,{children:v})]})}},852:function(e,r,n){n.d(r,{X:function(){return s}});var t,a=n(168),s=n(444).ZP.p(t||(t=(0,a.Z)(["\n  padding: 20px 0;\n  font-size: 20px;\n"])))},390:function(e,r,n){n.d(r,{Df:function(){return o},Gc:function(){return p},Jh:function(){return f},Pg:function(){return l},V0:function(){return i}});var t=n(861),a=n(757),s=n.n(a),c="ed056b717633eb18d85d4433e906e4ce",u="https://api.themoviedb.org/3",o=function(){var e=(0,t.Z)(s().mark((function e(){var r,n,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/trending/all/day?api_key=").concat(c));case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:return n=e.sent,e.abrupt("return",n.results);case 11:return e.next=13,r.json();case 13:return t=e.sent,console.log("error in api",t.status_message),e.abrupt("return",Promise.reject(t.status_message));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("error in catch api",e.t0),e.abrupt("return",Promise.reject("Request was failed. Please, try again."));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/search/movie?api_key=").concat(c,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t.results);case 11:return e.next=13,n.json();case 13:return a=e.sent,console.log("error in api",a.status_message),e.abrupt("return",Promise.reject(a.status_message));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("error in catch api",e.t0),e.abrupt("return",Promise.reject("Request was failed. Please, try again."));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(r,"?api_key=").concat(c,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 11:return e.next=13,n.json();case 13:return a=e.sent,console.log("error in api",a.status_message),e.abrupt("return",Promise.reject(a.status_message));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("error in catch api",e.t0),e.abrupt("return",Promise.reject("Request was failed. Please, try again."));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(r,"/credits?api_key=").concat(c,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t);case 11:return e.next=13,n.json();case 13:return a=e.sent,console.log("error in api",a.status_message),e.abrupt("return",Promise.reject(a.status_message));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("error in catch api",e.t0),e.abrupt("return",Promise.reject("Request was failed. Please, try again."));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(s().mark((function e(r){var n,t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(u,"/movie/").concat(r,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:if(!(n=e.sent).ok){e.next=11;break}return e.next=7,n.json();case 7:return t=e.sent,e.abrupt("return",t.results);case 11:return e.next=13,n.json();case 13:return a=e.sent,console.log("error in api",a.status_message),e.abrupt("return",Promise.reject(a.status_message));case 16:e.next=22;break;case 18:return e.prev=18,e.t0=e.catch(0),console.log("error in catch api",e.t0),e.abrupt("return",Promise.reject("Request was failed. Please, try again."));case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=779.472e3a30.chunk.js.map