(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{4034:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/feed/[slug]",function(){return i(6098)}])},9044:function(n,e,i){"use strict";i.d(e,{o:function(){return o}});var t=i(5893),c=i(1163),r=i(3018),s=i.n(r),o=function(){var n=(0,c.useRouter)();return(0,t.jsxs)("div",{className:s().main,children:[(0,t.jsx)("div",{onClick:function(){return n.push("/")},children:"Home"}),(0,t.jsx)("div",{onClick:function(){return n.push("/feed/1")},children:"Feed"}),(0,t.jsx)("div",{onClick:function(){return n.push("/eom")},children:"EOM"}),(0,t.jsx)("div",{onClick:function(){return window.location.href="https://twitter.com/SadiqBily"},children:"Twitter"})]})}},6098:function(n,e,i){"use strict";i.r(e),i.d(e,{Feed:function(){return a},__N_SSP:function(){return u}});var t=i(5893),c=i(1163),r=i(9044),s=i(5075),o=i.n(s),u=!0,a=function(n){var e=n.articles,i=n.pageNumber,s=(0,c.useRouter)();return(0,t.jsxs)("div",{className:"page-container",children:[(0,t.jsx)(r.o,{}),(0,t.jsx)("div",{className:o().main,children:e.map(function(n,e){return(0,t.jsxs)("div",{className:o().post,children:[(0,t.jsx)("h1",{onClick:function(){return window.location.href=n.url},children:n.title}),(0,t.jsx)("p",{children:n.description}),!!n.urlToImage&&(0,t.jsx)("img",{src:n.urlToImage})]},e)})}),(0,t.jsxs)("div",{className:o().paginator,children:[(0,t.jsx)("div",{onClick:function(){i>1&&s.push("/feed/".concat(i-1))},className:1===i?o().disabled:o().active,children:"Previous page"}),(0,t.jsxs)("p",{children:["#",i]}),(0,t.jsx)("div",{onClick:function(){i>1&&s.push("/feed/".concat(i+1))},className:o().active,children:"Next page"})]})]})};e.default=a},5075:function(n){n.exports={main:"Feed_main__UDWv2",post:"Feed_post__cCI21",paginator:"Feed_paginator__U_YA8",active:"Feed_active__5y7Cl",disabled:"Feed_disabled__eDMBv"}},3018:function(n){n.exports={main:"Toolbar_main__Thf1O"}},1163:function(n,e,i){n.exports=i(387)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=4034)}),_N_E=n.O()}]);