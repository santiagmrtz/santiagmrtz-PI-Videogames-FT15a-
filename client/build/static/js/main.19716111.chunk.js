(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{14:function(e,a,t){e.exports={button:"NavBar_button__2AZRz",navContainer:"NavBar_navContainer__14Chz",mainContainer:"NavBar_mainContainer__169xI",logo:"NavBar_logo__xWPZj",linkContainer:"NavBar_linkContainer__1fvz-",hover:"NavBar_hover__2fetR",formContainer:"NavBar_formContainer__2YaLj",input:"NavBar_input__1qDro",search:"NavBar_search__1IZGj",searchBarContainer:"NavBar_searchBarContainer__3YDhy"}},16:function(e,a,t){e.exports={card:"Card_card__1pDWs",textCard:"Card_textCard__3R9ze",nameGenres:"Card_nameGenres__3888n",name:"Card_name__3KkQG",img:"Card_img__1BMqM",genres:"Card_genres__lpsyf",divRating:"Card_divRating__3NTNV"}},18:function(e,a,t){e.exports={landingpage:"landingPage_landingpage__fQ_aC",title:"landingPage_title__xkON_",text:"landingPage_text__2ow8e",button:"landingPage_button__3bjex",msgContainer:"landingPage_msgContainer__18p72",moverDerecha:"landingPage_moverDerecha__2Rl76"}},28:function(e,a,t){e.exports={pagination:"Pagination_pagination__1NLAP",item:"Pagination_item__1Dybn"}},38:function(e,a,t){e.exports={show:"Videogame_show__2SU7m"}},39:function(e,a,t){e.exports={filter:"Filter_filter__3Rv2B"}},40:function(e,a,t){e.exports={home:"Home_home__2ilkS"}},41:function(e,a,t){e.exports={search:"Search_search__1OCSN"}},48:function(e,a,t){},49:function(e,a,t){},6:function(e,a,t){e.exports={info:"GameDetail_info__cLkCD",full:"GameDetail_full__2OUmR",container:"GameDetail_container__t6OeZ",paw:"GameDetail_paw__1wuAo",cardcontainer:"GameDetail_cardcontainer__3nMT_",header:"GameDetail_header__JjbKV",description:"GameDetail_description__1lJOa",imagen:"GameDetail_imagen__1dulv",button:"GameDetail_button__2H74O"}},7:function(e,a,t){e.exports={container:"CreateVideogame_container__2IeI7",form:"CreateVideogame_form__1d_Zj",divTitles:"CreateVideogame_divTitles__wJ4PJ",label:"CreateVideogame_label__3PNQy",checkboxs:"CreateVideogame_checkboxs__2WqCz",gendivs:"CreateVideogame_gendivs__HgyQ2",checks:"CreateVideogame_checks__1Rg-a",imagediv:"CreateVideogame_imagediv__2NdCa",imagen:"CreateVideogame_imagen__JAKNz",button:"CreateVideogame_button__rdrHj"}},78:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(22),i=t.n(c),r=(t(48),t(49),t(4)),s=t(8),l=t(18),o=t.n(l),d=t(0);var j=function(){return Object(d.jsx)("div",{className:o.a.landingpage,children:Object(d.jsxs)("div",{className:o.a.msgContainer,children:[Object(d.jsx)("p",{className:o.a.title,children:"Welcome to Videogames"}),Object(d.jsx)("p",{className:o.a.text,children:"\xa1Discover a new world!"}),Object(d.jsx)(s.b,{to:"/home",children:Object(d.jsx)("button",{className:o.a.button,type:"submit",children:"Enter"})})]})})},m=t(15),b=t(5),u=t(19),g=t.n(u),h="GET_VIDEOGAMES",O="SEARCH_VIDEOGAMES",v="GET_VIDEOGAME_ID",f="GET_GENRES",x="CREATE_VIDEOGAME",p="RESET",_="FILTER_BY-GENRE",N="ORDER_ASC_NAME",y="ORDER_ASC_RATING",C="ORDER_DES_NAME",V="ORDER_DES_RATING",D="ORDER_BY_CREATOR";function E(){return function(e){g.a.get("http://localhost:3001/genres").then((function(a){e({type:f,payload:a.data})}))}}var R=function(e){return function(a,t){var n=[];n="All"===e?t().videogames:t().videogames.filter((function(a){return a.genres.includes(e)})),a({type:_,payload:{genres:e,videogameGenre:n}})}},A=t(16),B=t.n(A);var G=function(e){var a=e.data;return Object(d.jsxs)("div",{className:B.a.card,children:[Object(d.jsx)(s.b,{to:"/videogames/".concat(a.id),children:null!==a.image&&a.image?Object(d.jsx)("img",{className:B.a.img,src:a.image,alt:a.name}):Object(d.jsx)("i",{class:"fa fa-spinner fa-spin fa-3x fa-fw ","aria-hidden":"true"})}),Object(d.jsxs)("div",{className:B.a.textCard,children:[Object(d.jsxs)("div",{className:B.a.nameGenres,children:[Object(d.jsx)("div",{className:B.a.name,children:a.name}),Object(d.jsx)("div",{className:B.a.genres,children:a.genres})]}),Object(d.jsx)("div",{className:B.a.divRating,children:Object(d.jsx)("div",{className:B.a.rating,children:a.rating})})]})]})},S=t(38),w=t.n(S);function P(e){var a=e.videogames;return Object(d.jsx)("div",{className:w.a.show,children:a.length>0?a.map((function(e){return Object(d.jsx)(G,{data:e})})):Object(d.jsx)("img",{src:"https://www.seprelab.com/assets/img/loader.gif",alt:"Link caido"})})}var k=t(28),I=t.n(k),T=function(e){for(var a=e.videogamesPerPage,t=e.totalVideogames,n=e.paginate,c=[],i=Math.ceil(t/a),r=1;r<=i;r++)c.push(r);return Object(d.jsx)("nav",{className:I.a.pagination,children:c.map((function(e){return Object(d.jsx)("div",{className:I.a.item,children:Object(d.jsx)("button",{onClick:function(a){return n(a,e)},children:e})},e)}))})},H=t(39),L=t.n(H);var M=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.genres}));Object(n.useEffect)((function(){e(E())}),[]);var t=function(a){var t;"API"===a.target.value||"Created"===a.target.value?e((t=a.target.value,function(e,a){var n=a().videogames.filter((function(e){return e.source===t}));e({type:D,payload:{videogames:n,source:t}})})):e(R(a.target.value))},c=function(a){var t;"asc_name"===a.target.value||"asc_rating"===a.target.value?e((t=a.target.value,function(e,a){var n=a().filteredVideogames,c=[];"asc_name"===t?c=n.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})):"asc_rating"===t&&(c=n.sort((function(e,a){return e.rating-a.rating}))),e({type:y,payload:{videogamesOrder:c,name:t}})})):"desc_name"===a.target.value||"desc_rating"===a.target.value?e(function(e){return function(a,t){var n=t().filteredVideogames,c=[];"desc_name"===e?c=n.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0})):"desc_rating"===e&&(c=n.sort((function(e,a){return a.rating-e.rating}))),a({type:V,payload:{videogamesOrder:c,name:e}})}}(a.target.value)):e(R(a.target.value))};return Object(d.jsxs)("div",{className:L.a.filter,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Filter by Genre"}),Object(d.jsxs)("select",{onChange:function(a){return function(a){e(R(a.target.value))}(a)},children:[Object(d.jsx)("option",{default:!0,children:"All"}),a.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.name})}))]})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"Videogames Created"}),Object(d.jsxs)("select",{onChange:function(e){return t(e)},children:[Object(d.jsx)("option",{default:!0,children:"All"}),Object(d.jsx)("option",{value:"Created",children:"User videogames"})]})]}),Object(d.jsx)("div",{children:"Order"}),Object(d.jsxs)("select",{onChange:function(e){return c(e)},children:[Object(d.jsx)("option",{value:"All",default:!0,children:"All"}),Object(d.jsx)("option",{value:"asc_name",children:"Alphabetically (A-Z)"}),Object(d.jsx)("option",{value:"desc_name",children:"Alphabetically (Z-A)"}),Object(d.jsx)("option",{value:"asc_rating",children:"Rating (Lower-Higher)"}),Object(d.jsx)("option",{value:"desc_rating",children:"Rating (Higher-Lower)"})]})]})},F=t(40),J=t.n(F);var Z=function(){var e,a=Object(b.b)(),t=Object(b.c)((function(e){return e.filteredVideogames})),c=Object(b.c)((function(e){return e.filterBy})),i=Object(b.c)((function(e){return e.orderBy})),r=Object(b.c)((function(e){return e.videogames}));function s(e,a){e.preventDefault(),u(a)}Object(n.useEffect)((function(){a((function(e){e({type:p})})),a((function(e){g.a.get("http://localhost:3001/videogames").then((function(a){e({type:h,payload:a.data})}))}))}),[]),e="All"===c&&"Select"===i?r:t;var l=Object(n.useState)(1),o=Object(m.a)(l,2),j=o[0],u=o[1],O=Object(n.useState)(15),v=Object(m.a)(O,1)[0],f=j*v,x=f-v,_=e.slice(x,f);return Object(d.jsxs)("div",{children:[Object(d.jsx)(M,{paginate:s}),Object(d.jsx)("div",{className:J.a.home,children:Object(d.jsx)(P,{videogames:_})}),Object(d.jsx)("div",{children:Object(d.jsx)(T,{videogamesPerPage:v,totalVideogames:e.length,paginate:s})})]})},z=t(14),W=t.n(z);var Q=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],c=a[1];return Object(d.jsx)("div",{className:W.a.mainContainer,children:Object(d.jsxs)("nav",{className:W.a.navContainer,children:[Object(d.jsxs)("div",{className:W.a.linkContainer,children:[Object(d.jsx)(s.b,{to:"/",className:W.a.hover,children:"Videogames!"}),Object(d.jsx)(s.b,{to:"/home",className:W.a.hover,children:"Home"}),Object(d.jsx)(s.b,{to:"/create",className:W.a.hover,children:"Create VideoGame"})]}),Object(d.jsx)("div",{children:Object(d.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),c("")}(e)},className:W.a.formContainer,children:Object(d.jsxs)("div",{className:W.a.searchBarContainer,children:[Object(d.jsx)("input",{value:t,onChange:function(e){return c(e.target.value)},placeholder:"Search videogame...",type:"text",className:W.a.input}),Object(d.jsx)(s.c,{to:"/results/".concat(t),className:W.a.search,children:Object(d.jsx)("button",{className:W.a.button,type:"submit",children:" Go! "})})]})})})]})})},U=t(6),Y=t.n(U);var q=function(e){var a=e.id,t=Object(b.b)(),c=Object(b.c)((function(e){return e.searchVideogameById}));return Object(n.useEffect)((function(){t(function(e){return function(a){g.a.get("http://localhost:3001/videogame/".concat(e)).then((function(e){a({type:v,payload:e.data})}))}}(a))}),[]),Object(d.jsxs)("div",{className:Y.a.full,children:[Object(d.jsx)("div",{className:Y.a.container,children:Object(d.jsxs)("div",{className:Y.a.cardContainer,children:[Object(d.jsxs)("div",{className:Y.a.header,children:[Object(d.jsx)("h2",{className:Y.a.info,children:c.name}),null!==c.image&&c.image?Object(d.jsx)("img",{src:c.image,className:Y.a.imagen,alt:c.name}):Object(d.jsx)("i",{class:"fa fa-spinner fa-spin fa-3x fa-fw ","aria-hidden":"true"}),Object(d.jsxs)("p",{className:Y.a.info,children:["(",c.released,")"]}),Object(d.jsx)("div",{className:Y.a.paw,children:Object(d.jsx)("i",{class:"fa fa-eercast","aria-hidden":"true"})}),Object(d.jsxs)("p",{className:Y.a.info,children:["Genres: ",c.genres]}),Object(d.jsx)("div",{className:Y.a.paw,children:Object(d.jsx)("i",{class:"fa fa-bar-chart","aria-hidden":"true"})}),Object(d.jsxs)("p",{className:Y.a.info,children:["Rating: ",c.rating," points."]}),Object(d.jsx)("div",{className:Y.a.paw,children:Object(d.jsx)("i",{class:"fa fa-play","aria-hidden":"true"})}),Object(d.jsxs)("p",{className:Y.a.info,children:["Platforms: ",c.platforms,"."]})]}),Object(d.jsxs)("div",{className:Y.a.description,children:[Object(d.jsx)("p",{className:Y.a.full,children:Object(d.jsx)("strong",{children:"About this game:"})}),Object(d.jsx)("p",{children:c.description})]})]})}),Object(d.jsx)(s.b,{to:"/home",children:Object(d.jsx)("button",{className:Y.a.button,type:"submit",children:"Home"})})]})},K=t(41),X=t.n(K);function $(){var e=Object(b.b)(),a=Object(r.f)().name,t=Object(b.c)((function(e){return e.searchVideogameByName}));Object(n.useEffect)((function(){e(function(e){return function(a){g.a.get("http://localhost:3001/videogames?name=".concat(e)).then((function(e){a({type:O,payload:e.data})}))}}(a))}),[a]);var c=Object(n.useState)(1),i=Object(m.a)(c,2),s=i[0],l=i[1],o=Object(n.useState)(15),j=Object(m.a)(o,1)[0],u=s*j,h=u-j,v=t.slice(h,u);return Object(d.jsx)("div",{className:X.a.search,children:t.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("h1",{children:["Results with ",a,"!"]}),Object(d.jsx)(P,{videogames:v}),Object(d.jsx)(T,{videogamesPerPage:j,totalVideogames:t.length,paginate:function(e,a){e.preventDefault(),l(a)}})]}):Object(d.jsx)("h1",{})})}var ee=t(21),ae=t(3),te=t(7),ne=t.n(te);var ce=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.genres})),t=a.slice(0,10),c=a.slice(10,20),i=Object(n.useState)({name:"",description:"",image:"",release:"",rating:0,genres:[],platforms:[]}),r=Object(m.a)(i,2),s=r[0],l=r[1];Object(n.useEffect)((function(){e(E())}),[]);var o=function(a){a.preventDefault();var t={name:s.name,description:s.description,image:s.image,released:s.released,rating:s.rating,genres:s.genres,platforms:s.platforms};t.name?t.description?t.released?t.rating>5||t.rating<0?alert("Hey! The rating should be between 0 and 5."):(e(function(e){return function(a){return g.a.post("http://localhost:3001/videogame",e).then((function(e){a({type:x,payload:e.data})}))}}(t)),a.target.reset(),alert("Videogame created successfully!"),l({name:"",description:"",image:"",released:"",rating:0,genres:[],platforms:[]})):alert("Hey! Don't forget the date."):alert("Hey! Don't forget the description."):alert("Hey! Don't forget the name.")};return Object(d.jsxs)("div",{className:ne.a.container,children:[Object(d.jsx)("h1",{children:"Create your Videogame!"}),Object(d.jsxs)("form",{id:"survey-form",className:ne.a.form,onChange:function(e){return function(e){if("genres"===e.target.name||"platforms"===e.target.name){var a=s[e.target.name];l(Object(ae.a)(Object(ae.a)({},s),{},Object(ee.a)({},e.target.name,a.concat(e.target.value))))}else l(Object(ae.a)(Object(ae.a)({},s),{},Object(ee.a)({},e.target.name,e.target.value)))}(e)},onSubmit:function(e){return o(e)},children:[Object(d.jsxs)("div",{className:ne.a.imagediv,children:[Object(d.jsx)("label",{children:"Image URL"}),Object(d.jsx)("input",{className:ne.a.imagen,type:"text",name:"image",value:s.image})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:ne.a.divTitles,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Name"}),Object(d.jsx)("input",{className:ne.a.label,type:"text",name:"name",value:s.name})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Released"}),Object(d.jsx)("input",{className:ne.a.label,type:"date",name:"released",value:s.released})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Rating"}),Object(d.jsx)("input",{className:ne.a.label,type:"number",name:"rating",value:s.rating})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",{className:ne.a.label,type:"text",name:"description",value:s.description})]})]}),Object(d.jsxs)("div",{className:ne.a.checkboxs,children:[Object(d.jsxs)("div",{className:ne.a.checks,children:[Object(d.jsx)("label",{children:"Genres"}),Object(d.jsxs)("div",{className:ne.a.gendivs,children:[Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:"genres",value:e.name}),Object(d.jsx)("label",{name:e,children:e.name})]},e.name)}))}),Object(d.jsx)("div",{children:c.map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:"genres",value:e.name}),Object(d.jsx)("label",{name:e,children:e.name})]},e.name)}))})]})]}),Object(d.jsxs)("div",{className:ne.a.checks,children:[Object(d.jsx)("label",{children:"Platforms"}),Object(d.jsx)("div",{children:["PC","iOS","Android","macOS","PlayStation","Xbox","Nintendo","Linux","Apple","Atari","Genesis","SEGA"].map((function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",name:"platforms",value:e}),Object(d.jsx)("label",{name:e,children:e})]},e)}))})]})]}),Object(d.jsx)("button",{className:ne.a.button,type:"submit",children:"Create!"})]})]})]})};var ie=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{exact:!0,path:"/",component:j}),Object(d.jsxs)(r.a,{path:"/",children:[Object(d.jsx)(r.a,{path:"/home",component:Q}),Object(d.jsx)(r.a,{exact:!0,path:"/home",component:Z}),Object(d.jsx)(r.a,{path:"/results",component:Q}),Object(d.jsx)(r.a,{path:"/videogames",component:Q}),Object(d.jsx)(r.a,{path:"/create",component:Q}),Object(d.jsx)(r.a,{exact:!0,path:"/videogames/:id",render:function(e){var a=e.match;return Object(d.jsx)(q,{id:a.params.id})}}),Object(d.jsx)(r.a,{exact:!0,path:"/results/:name",component:$}),Object(d.jsx)(r.a,{path:"/create",exact:!0,component:ce})]})]})})},re=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),i(e),r(e)}))},se=t(23),le=t(42),oe=t(43),de={videogames:[],genres:[],searchVideogame:[],createVideogame:null,searchVideogameById:[],searchVideogameByName:[],filteredVideogames:[],orderBy:"Select",filterBy:"All"};var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case h:return Object(ae.a)(Object(ae.a)({},e),{},{videogames:a.payload});case O:return Object(ae.a)(Object(ae.a)({},e),{},{searchVideogameByName:a.payload});case v:return Object(ae.a)(Object(ae.a)({},e),{},{searchVideogameById:a.payload});case f:return Object(ae.a)(Object(ae.a)({},e),{},{genres:a.payload});case x:return Object(ae.a)(Object(ae.a)({},e),{},{createVideogame:a.payload});case p:return Object(ae.a)(Object(ae.a)({},e),{},{videogames:[],filteredVideogames:[],orderBy:"Select",filterBy:"All"});case _:return Object(ae.a)(Object(ae.a)({},e),{},{filteredVideogames:a.payload.videogameGenre,filterBy:a.payload.genre});case N:case y:case C:case V:return Object(ae.a)(Object(ae.a)({},e),{},{filteredVideogames:a.payload.videogamesOrder,orderBy:a.payload.name});case D:return Object(ae.a)(Object(ae.a)({},e),{},{filteredVideogames:a.payload.videogames,filterBy:a.payload.source});default:return e}},me=Object(se.createStore)(je,Object(le.composeWithDevTools)(Object(se.applyMiddleware)(oe.a)));i.a.render(Object(d.jsxs)(b.a,{store:me,children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(ie,{})}),","]}),document.getElementById("root")),re()}},[[78,1,2]]]);
//# sourceMappingURL=main.19716111.chunk.js.map