(this["webpackJsonpfitlery-web"]=this["webpackJsonpfitlery-web"]||[]).push([[0],{127:function(e,t){},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o}));var a=n(10),r=n(79),c=-1,o={set:function(e,t){return Object(a.a)({},r.a,{},t)},setCurrentItem:function(e,t){return Object(a.a)({},e,{currentItemIndex:t})},prev:function(e){var t=function(e){return 0===e.currentItemIndex}(e)?0:e.currentItemIndex-1;return Object(a.a)({},e,{currentItemIndex:t})},next:function(e){if(function(e){return e.currentItemIndex>=e.items.length-1}(e))return e;var t=e.currentItemIndex+1;return Object(a.a)({},e,{currentItemIndex:t})}}},129:function(e,t){},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(10),r={play:function(e){return Object(a.a)({},e,{playState:"playing"})},pause:function(e){return Object(a.a)({},e,{playState:"paused"})},stop:function(e){return Object(a.a)({},e,{playState:"stopped"})},prev:function(e){return e},next:function(e){return e}}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(8),r=Object(a.atom)({key:"playerState",default:{playState:"stopped"}})},132:function(e,t){},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(23),r=n(10),c={add:function(e,t){return Object(r.a)({},e,{items:[t].concat(Object(a.a)(e.items))})},delete:function(e){return-1===e.currentItemIndex?e:Object(r.a)({},e,{items:[].concat(Object(a.a)(e.items.slice(0,e.currentItemIndex)),Object(a.a)(e.items.slice(e.currentItemIndex+1)))})},loadSuccess:function(e,t){return Object(r.a)({},e,{items:t})},select:function(e,t){return Object(r.a)({},e,{currentItemIndex:t})},update:function(e,t){return-1===e.currentItemIndex?e:Object(r.a)({},e,{items:[].concat(Object(a.a)(e.items.slice(0,e.currentItemIndex)),[t],Object(a.a)(e.items.slice(e.currentItemIndex+1)))})}}},163:function(e,t,n){e.exports=n(218)},20:function(e,t,n){"use strict";var a=n(127);n.o(a,"NOT_FOUND")&&n.d(t,"NOT_FOUND",(function(){return a.NOT_FOUND})),n.o(a,"playlistAtom")&&n.d(t,"playlistAtom",(function(){return a.playlistAtom})),n.o(a,"playlistReducer")&&n.d(t,"playlistReducer",(function(){return a.playlistReducer}));var r=n(128);n.d(t,"NOT_FOUND",(function(){return r.a})),n.d(t,"playlistReducer",(function(){return r.b}));var c=n(79);n.d(t,"playlistAtom",(function(){return c.b}))},218:function(e,t,n){"use strict";n.r(t);var a=n(261),r=n(249),c=n(0),o=n.n(c),i=n(16),l=n.n(i),u=n(37),s=n(8),m=n(264),d=n(14),p=n.n(d),f=n(19),b=n(10),g=n(23),h=n(12),v=n(246),E=n(57),O=n(262),y=n(253),j=n(58),x=n.n(j),k=n(154),C=n(15),w=n(250),S=n(251),I=n(56),R=n.n(I),A=n(138),T=n.n(A),N=Object(v.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[12],borderRadius:1,color:e.palette.primary.main,display:"grid",gridTemplateColumns:"auto min-content min-content",marginBottom:e.spacing(.3)},action:{}}})),M=function(e){var t=e.inputEl,n=e.onOk,a=e.onCancel,r=Object(C.a)(e,["inputEl","onOk","onCancel"]),i=p()(),l=N(i),u=t.props.defaultValue,s=Object(c.useState)(u),d=Object(h.a)(s,2),f=d[0],b=d[1],g=Object(c.useState)(!1),v=Object(h.a)(g,2),E=v[0],O=v[1],y=function(){return a&&a()},j=o.a.useRef(null);return Object(c.useEffect)((function(){j.current&&j.current.focus()})),o.a.createElement(w.a,{onClickAway:y},o.a.createElement(m.a,Object.assign({className:l.root},r),o.a.createElement(t.type,Object.assign({error:E,inputRef:j,defaultValue:u,onChange:function(e){b(e.target.value),O(!e.target.validity.valid)}},t.props),f),o.a.createElement(S.a,{className:l.action,size:"small",onClick:y},o.a.createElement(R.a,{color:"inherit"})),o.a.createElement(S.a,{className:l.action,disabled:E,size:"small",onClick:function(){return n&&n({error:E,value:f})}},o.a.createElement(T.a,{color:"inherit"}))))},B=function(e){var t=e.inputEl,n=e.displayEl,a=e.onOk,r=e.onCancel,i=Object(C.a)(e,["inputEl","displayEl","onOk","onCancel"]),l=Object(c.useState)(!1),u=Object(h.a)(l,2),s=u[0],d=u[1],p=o.a.createElement(M,{inputEl:t,onCancel:function(){r&&r(),d(!1)},onOk:function(e){a&&a(e),d(!1)}});return o.a.createElement(m.a,Object.assign({onClick:function(){return!s&&d(!0)}},i),s?p:n)},z=n(43),U=n(252),W=n(89),L=n.n(W),F=n(139),V=n.n(F),D=Object(v.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[2],borderRadius:1,color:e.palette.primary.main,display:"grid",gridTemplateColumns:"".concat(e.spacing(4),"px auto min-content"),height:e.variables.playlist.item.height,marginBottom:e.spacing(.3)},inner:{paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},drag:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,height:"100%",padding:e.spacing(1),width:"100%","&:hover":{cursor:"grab"}},action:{}}}));function P(e){var t=e.exercise,n=e.onDelete,a=p()(),r=D(a);return o.a.createElement(m.a,{className:r.root},o.a.createElement(V.a,{className:r.drag}),o.a.createElement(U.a,{variant:"h4",className:r.inner},t.name),o.a.createElement(S.a,{className:r.action,onClick:n},o.a.createElement(L.a,{color:"primary"})))}var q=Object(v.a)((function(e){return{textfield:{alignItems:"center",display:"grid",height:e.variables.playlist.item.height,paddingLeft:e.spacing(5),paddingRight:e.spacing(1)},fab:{float:"right",marginBottom:e.spacing(.5),marginTop:e.spacing(.5)}}})),_=function(e){var t=e.exercises,n=e.onAdd,a=e.onDelete,r=e.onEdit,i=e.onSort,l=Object(c.useState)(!1),u=Object(h.a)(l,2),s=u[0],d=u[1],p=Object(E.a)(),f=q(p),v=function(e,n){e.stopPropagation(),a&&a([].concat(Object(g.a)(t.slice(0,n)),Object(g.a)(t.slice(n+1))))};return o.a.createElement(m.a,null,o.a.createElement(k.a,{list:t.map((function(e){return{id:e.id,name:e.name}})),setList:function(e){return i&&i(e.map((function(e){return{id:e.id,name:e.name}})))}},t.map((function(e,n){return o.a.createElement("div",{key:e.id},o.a.createElement(B,{fontSize:p.typography.h4.fontSize,onOk:(a=n,function(e){return r&&r(Object(b.a)({},t[a],{name:e.value}),a)}),inputEl:o.a.createElement(O.a,{defaultValue:e.name,inputProps:{required:!0},className:f.textfield}),displayEl:o.a.createElement(P,{exercise:e,onDelete:function(e){return v(e,n)}})}));var a}))),s&&o.a.createElement(M,{fontSize:p.typography.h4.fontSize,onOk:function(e){var t=e.value;e.error;d(!1),n&&n({id:Object(z.a)(),name:t})},onCancel:function(){return d(!1)},inputEl:o.a.createElement(O.a,{defaultValue:"New Exercise",inputProps:{required:!0},className:f.textfield})}),o.a.createElement(y.a,{color:"secondary",disabled:s,onClick:function(){return d(!0)},className:f.fab},o.a.createElement(x.a,null)))},X=function(e){var t=e.el,n=Object(f.h)().pathname;return Object(c.useEffect)((function(){var e;(null===(e=t.current)||void 0===e?void 0:e.scrollTo)&&t.current.scrollTo(0,0)}),[n,t]),null},J=Object(v.a)((function(e){var t,n,a=(null===(t=e.overrides)||void 0===t||null===(n=t.MuiBottomNavigation)||void 0===n?void 0:n.root).height;return{root:{bottom:a,display:"grid",left:0,justifyItems:"center",justifyContent:"stretch",overflow:"auto",position:"fixed",right:0,top:a},inner:{maxWidth:e.breakpoints.values.lg,position:"relative",width:"100%"}}})),Y=function(e){var t=e.children,n=o.a.useRef(null),a=p()(),r=J(a),c=r.root,i=r.inner;return o.a.createElement("div",{ref:n,"data-testid":"main",className:c},o.a.createElement(X,{el:n}),o.a.createElement("div",{className:i},t))},H=n(254),G=n(255),$=n(142),Z=n.n($),K=n(140),Q=n.n(K),ee=n(141),te=n.n(ee),ne=[{label:"Workouts",value:"workouts",icon:o.a.createElement(Q.a,null)},{label:"Recents",value:"recents",icon:o.a.createElement(te.a,null)},{label:"Favorites",value:"favorites",icon:o.a.createElement(Z.a,null)}],ae=function(){var e=Object(f.g)(),t=Object(c.useState)(e.location.pathname),n=Object(h.a)(t,2),a=n[0],r=n[1];Object(c.useEffect)((function(){return r(e.location.pathname)}),[e.location.pathname]);return o.a.createElement(m.a,{position:"fixed",bottom:0,left:0,right:0},o.a.createElement(H.a,{value:a,onChange:function(t,n){e.push("/".concat(n))}},ne.map((function(e){return o.a.createElement(G.a,{key:e.value,label:e.label,value:e.value,icon:e.icon})}))))},re=n(256),ce=n(258),oe=n(257),ie=n(143),le=n.n(ie),ue=Object(v.a)((function(e){return{toolbar:{color:e.palette.secondary.light}}}));var se=function(){var e=Object(E.a)(),t=ue(e);return o.a.createElement(re.a,null,o.a.createElement(oe.a,{className:t.toolbar},o.a.createElement(ce.a,{color:"inherit",variant:"text",startIcon:o.a.createElement(le.a,null)},o.a.createElement(U.a,{variant:"subtitle1"},"fitlery"))))},me={msLeft:3e3,msTotal:3e3,isRunning:!1},de=Object(s.atom)({key:"countdownState",default:me}),pe=function(e){return Object(b.a)({},e,{msLeft:e.msTotal})},fe={start:function(e){return Object(b.a)({},e,{isRunning:!0})},stop:function(e){return Object(b.a)({},pe(e),{isRunning:!1})},pause:function(e){return Object(b.a)({},e,{isRunning:!1})},tick:function(e){var t=e.msLeft;return!e.isRunning||0===t?e:Object(b.a)({},e,{msLeft:Math.max(0,t-100)})},set:function(e,t){return Object(b.a)({},e,{msLeft:t,msTotal:t})},reset:pe},be=(Object(s.selector)({key:"isZeroCountdownState",get:function(e){return 0===(0,e.get)(de).msLeft}}),n(20)),ge=n(41),he=function(){var e=Object(s.useRecoilState)(be.playlistAtom),t=Object(h.a)(e,2),n=t[0],a=t[1],r=Object(s.useSetRecoilState)(ge.playerAtom),c=Object(s.useSetRecoilState)(de),o=n.currentItemIndex,i=n.items,l=i[Math.max(o,0)],u=i[o+1],m=i[o-1],d=function(){r(ge.playerReducer.stop),a((function(e){return be.playlistReducer.setCurrentItem(e,be.NOT_FOUND)})),c(fe.stop)},p=function(){if(u){var e=o+1;a((function(t){return be.playlistReducer.setCurrentItem(t,e)})),c((function(t){return fe.set(t,n.items[e].durationMs)}))}else d()};return{set:function(e){d(),a((function(t){return be.playlistReducer.set(t,e)}))},setCurrentItem:function(e){o===e?p():(a((function(t){return be.playlistReducer.setCurrentItem(t,e)})),c((function(t){return fe.set(t,n.items[e].durationMs)})))},play:function(){r(ge.playerReducer.play),n.currentItemIndex===be.NOT_FOUND&&(a((function(e){return be.playlistReducer.setCurrentItem(e,0)})),c((function(e){return fe.set(e,l.durationMs)}))),c(fe.start)},pause:function(){r(ge.playerReducer.pause),c(fe.pause)},stop:d,prev:function(){m?(a(be.playlistReducer.prev),c((function(e){return fe.set(e,m.durationMs)}))):c(fe.reset)},next:p}},ve=n(265);function Ee(e){return e&&!!e.tags&&e.tags.isBreak}var Oe=Object(v.a)((function(e){return{root:{alignItems:"center",color:e.palette.primary.main,backgroundColor:e.palette.background.paper,borderColor:e.palette.primary.main,borderLeft:e.spacing(3),display:"grid",gridTemplateColumns:"1fr min-content",height:e.variables.playlist.item.height,padding:e.spacing(1),pr:e.spacing(3),width:"100%"},inner:{fontSize:"1.5rem",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}}));function ye(e){var t,n,a=e.isCurrent,r=e.item,c=e.onClick,i=p()(),l=Oe(i),u=l.root,s=l.inner;return o.a.createElement(m.a,{className:u,onClick:c},o.a.createElement(m.a,{component:"span",className:s,fontWeight:a?"bold":"initial"},null===(t=r.name)||void 0===t?void 0:t.toUpperCase()),o.a.createElement(ve.a,{variant:a?"default":"outlined",color:"primary",label:null===(n=r.tags)||void 0===n?void 0:n.breakWork}))}var je=function(e){var t=Object(b.a)({},e.tags,{highlight:!0});return Object(b.a)({},e,{tags:t})},xe=function(e){var t=Object(s.useRecoilValue)(be.playlistAtom),n=he(),a=function(e){var t=e.currentItemIndex,n=e.items,a=Math.max(t,0);return[].concat(Object(g.a)(n.slice(0,a)),Object(g.a)(n.slice(a,a+2).map(je)),Object(g.a)(n.slice(a+2))).filter((function(e){return!Ee(e)}))}(t);return o.a.createElement(m.a,e,a.map((function(e,t){var a;return o.a.createElement(ye,{key:e.id,item:e,isCurrent:null===(a=e.tags)||void 0===a?void 0:a.highlight,onClick:function(){return n.setCurrentItem(2*t)}})})))},ke=function(e){var t=function(e){var t=p()(),n=t.palette.primary.light,a=t.palette.background.paper;return Object(b.a)({alignItems:"center",bgcolor:n,color:a,display:"grid",pl:1,pr:1,boxShadow:4,width:1},e)}(e),n=function(){var e=Object(s.useRecoilValue)(be.playlistAtom),t=e.currentItemIndex,n=e.items,a=t>-1?n[t]:n[0];return{style:{textAlign:"center",textTransform:"uppercase",fontSize:Ee(a)?"2rem":"3rem"},text:t===be.NOT_FOUND?"get ready":a.name}}(),a=n.style,r=n.text;return o.a.createElement(m.a,t,o.a.createElement(U.a,{style:a,variant:"h4"},r))},Ce=n(145),we=n.n(Ce),Se=n(144),Ie=n.n(Se),Re=n(147),Ae=n.n(Re),Te=n(146),Ne=n.n(Te),Me=function(e){return function(t){var n=t.onClick;return o.a.createElement(S.a,{color:"primary",onClick:n},e)}},Be=Me(o.a.createElement(Ie.a,{style:{fontSize:"4rem"}})),ze=Me(o.a.createElement(we.a,{style:{fontSize:"4rem"}})),Ue=Me(o.a.createElement(Ne.a,{style:{fontSize:"2.5rem"}})),We=Me(o.a.createElement(Ae.a,{style:{fontSize:"2.5rem"}})),Le=function(e){var t=e.playState,n=Object(C.a)(e,["playState"]),a=he(),r=function(e){a[e]()};return o.a.createElement(m.a,function(e){var t=p()();return Object(b.a)({alignItems:"center",display:"grid",justifyContent:"center",gridTemplateColumns:"1fr 2fr 1fr",minHeight:80,bgcolor:t.palette.background.paper},e)}(n),o.a.createElement(Ue,{onClick:function(){return r("prev")}}),"playing"!==t?o.a.createElement(Be,{onClick:function(){return r("play")}}):o.a.createElement(ze,{onClick:function(){return r("pause")}}),o.a.createElement(We,{onClick:function(){return r("next")}}))},Fe=function(){var e=he(),t=0===Object(s.useRecoilValue)(de).msLeft;return Object(c.useEffect)((function(){t&&e.next()}),[t]),o.a.createElement(o.a.Fragment,null)},Ve=function(e){return{h:Math.floor(e/1e3/60/60),m:Math.floor(e/1e3/60%60),s:Math.floor(e/1e3%60),ms:e%1e3}},De=function(e){var t=e.h.toString().padStart(2,"0"),n=e.m.toString().padStart(2,"0"),a=e.s.toString().padStart(2,"0"),r=Math.floor(e.ms/100).toString();return e.h>0?"".concat(t,":").concat(n,":").concat(a,".").concat(r):"".concat(n,":").concat(a,".").concat(r)},Pe={fromNumber:Ve,toTimeString:function(e){return De(Ve(e))},format:De},qe=function(e){var t=Object.assign({},e),n=p()(),a=Object(s.useRecoilValue)(de).msLeft;return o.a.createElement(m.a,Object.assign({alignItems:"center",bgcolor:n.palette.primary.dark,color:n.palette.secondary.contrastText,display:"grid",fontWeight:n.typography.fontWeightBold,fontSize:"3rem",justifyContent:"center"},t),Pe.toTimeString(a))},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3?arguments[3]:void 0;return[t+Math.sin(2*Math.PI*a)*e,n-Math.cos(2*Math.PI*a)*e]},Xe=function(e){var t=e.fStart,n=e.fEnd,a=e.r,r=void 0===a?1:a,i=e.cx,l=void 0===i?0:i,u=e.cy,s=void 0===u?0:u,m=e.fill,d=void 0===m?"currentColor":m,p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return Object(c.useMemo)((function(){var c=_e.bind(null,n,a,r),o=c(e),i=Object(h.a)(o,2),l=i[0],u=i[1],s=c(t),m=Object(h.a)(s,2);return{startX:l,startY:u,endX:m[0],endY:m[1],largeArcFlag:Math.round(t-e)}}),[e,t,n,a,r])}(t,n,r,l,s),f=p.startX,b=p.startY,g=p.endX,v=p.endY,E=p.largeArcFlag,O="M ".concat(f," ").concat(b," ")+"A ".concat(r," ").concat(r," 0 ").concat(E," 1 ").concat(g," ").concat(v," ")+"L ".concat(l," ").concat(s);return o.a.createElement("path",{fill:d,d:O})},Je=function(e){var t=p()(),n={bgcolor:t.palette.background.paper,color:t.palette.secondary.dark},a={bgcolor:t.palette.primary.light,color:t.palette.secondary.contrastText},r=e?[a,n]:[n,a],c=Object(h.a)(r,2);return[c[0],c[1]]};var Ye,He=(Ye=function(e){var t=e.text,n=e.bgcolor,a=e.color,r=e.clipIf,c=e.fractionStart,i=e.fractionEnd,l="clip".concat(Math.floor(1e6*Math.random()));return o.a.createElement("svg",{width:"100%",height:"100%",viewBox:"0 0 ".concat(100," ").concat(100)},o.a.createElement("g",{clipPath:r?"url(#".concat(l,")"):""},o.a.createElement("circle",{cx:"50%",cy:"50%",r:"50%",fill:n}),o.a.createElement("text",{x:"50%",y:"50%",dominantBaseline:"middle",fill:a,fontSize:2/3*100/2,fontWeight:"700",textAnchor:"middle",fontFamily:"Roboto"},t)),o.a.createElement("clipPath",{id:l},o.a.createElement(Xe,{cx:50,cy:50,r:50,fStart:c,fEnd:i})))},function(e){var t=Object(E.a)();return o.a.createElement(m.a,{position:"absolute",top:t.spacing(1),left:t.spacing(1),right:t.spacing(1),bottom:t.spacing(1)},o.a.createElement(Ye,e))}),Ge=function(e){var t=Object.assign({},e),n=p()(),a=Object(s.useRecoilValue)(de),r=1-a.msLeft/a.msTotal,c=Object(s.useRecoilValue)(be.playlistAtom),i=c.items,l=c.currentItemIndex,u=Ee(l>-1?i[l]:i[0]),d=u?"Ready":"Go!",f=Je(!u),b=Object(h.a)(f,2),g=b[0],v=b[1];return o.a.createElement(m.a,Object.assign({bgcolor:n.palette.primary.main,position:"relative",display:"grid",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},t),o.a.createElement(He,{bgcolor:g.bgcolor,color:g.color,clipIf:r>0,fractionStart:r,fractionEnd:1,text:d}),o.a.createElement(He,{bgcolor:v.bgcolor,color:v.color,clipIf:r<1,fractionStart:0,fractionEnd:r,text:d}))},$e=function(){var e=Object(s.useSetRecoilState)(de);return Object(c.useEffect)((function(){var t=setInterval((function(){e((function(e){return fe.tick(e)}))}),100);return function(){return clearInterval(t)}}),[]),o.a.createElement(o.a.Fragment,null)},Ze=function(e){var t=Object.assign({},e);return o.a.createElement(o.a.Fragment,null,o.a.createElement($e,null),o.a.createElement(Ge,{gridArea:"avatar"}),o.a.createElement(qe,Object.assign({},t,{gridArea:"text"})))},Ke=function(e){var t=e.onClose;return o.a.createElement(S.a,{color:"secondary",onClick:t,style:{position:"absolute",top:0,right:0}},o.a.createElement(R.a,null))},Qe=function(e){var t=e.text,n=function(e){var t=p()();return{root:Object(b.a)({bgcolor:t.palette.primary.main,display:"grid",p:1},e),inner:{bgcolor:t.palette.background.paper,color:t.palette.secondary.dark}}}(Object(C.a)(e,["text"])),a=n.root,r=n.inner;return o.a.createElement(m.a,Object.assign({"data-testid":"avatar"},a),o.a.createElement("svg",{viewBox:"0 0 ".concat(100," ").concat(100)},o.a.createElement("circle",{cx:"50%",cy:"50%",r:"50%",fill:r.bgcolor}),o.a.createElement("text",{x:"50%",y:"50%",dominantBaseline:"middle",fill:r.color,fontSize:40,fontWeight:"700",textAnchor:"middle",fontFamily:"Roboto"},t)))},et=function(e){var t=e.children,n=Object(C.a)(e,["children"]);return o.a.createElement(m.a,Object.assign({"data-testid":"card-description",gridArea:"desc",height:"2em",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},n),o.a.createElement(U.a,{variant:"caption",component:"p",style:{overflow:"inherit",textOverflow:"inherit"}},t))},tt=function(e){var t=e.action,n=e.description,a=e.title,r=Object(C.a)(e,["action","description","title"]);return o.a.createElement(m.a,Object.assign({"data-testid":"card-text",onClick:function(e){return e.stopPropagation()}},function(e){var t=p()();return Object(b.a)({alignContent:"center",bgcolor:t.palette.primary.dark,color:t.palette.secondary.contrastText,display:"grid",gridTemplateAreas:'\n      "title title title title ."\n      "desc desc desc desc desc"\n    ',gridTemplateColumns:"repeat(5, 1fr)",p:2,position:"relative"},e)}(r)),a,n,t)},nt=function(e){var t=e.children,n=Object(C.a)(e,["children"]);return o.a.createElement(m.a,Object.assign({"data-testid":"card-title",gridArea:"title",height:"2em",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},n),o.a.createElement(U.a,{variant:"subtitle1",style:{overflow:"inherit",textOverflow:"inherit"}},t))},at=function(e){var t=e.description,n=e.short,a=e.title;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Qe,{text:n,gridArea:"avatar"}),o.a.createElement(tt,{gridArea:"text",description:o.a.createElement(et,null,t),title:o.a.createElement(nt,null,a)}))},rt=function(e){var t=e.onClose,n=Object(s.useRecoilValue)(be.playlistAtom),a=Object(s.useRecoilValue)(ge.playerAtom).playState,r=n.short,c=n.name,i=n.description,l="stopped"===a?o.a.createElement(at,{description:i,short:r,title:c}):o.a.createElement(Ze,null);return o.a.createElement(o.a.Fragment,null,l,o.a.createElement(Ke,{onClose:t}))},ct=n(35),ot=n(259),it=function(e){var t=[e.breakpoints.up("xs"),e.breakpoints.up("sm"),e.breakpoints.up("md")];return[t[0],t[1],t[2]]};function lt(e,t){var n,a=it(e),r=Object(h.a)(a,3),c=r[0],o=r[1],i=r[2],l=function(e,t){var n,a=it(e),r=Object(h.a)(a,3),c=r[0],o=r[1],i=r[2],l=(n={},Object(ct.a)(n,c,[16,11,15]),Object(ct.a)(n,o,[17,11,15]),Object(ct.a)(n,i,[15,13,15]),n)[t].map((function(t){return e.spacing(t)})),u=Object(h.a)(l,3);return[u[0],u[1],u[2]]}(e,t),u=Object(h.a)(l,3),s=u[0],m=u[1],d=u[2],p=s+m+d,f="calc(100vh - ".concat(2*e.variables.navbar.height,"px - ").concat(p,"px)");return(n={},Object(ct.a)(n,c,{display:"grid",gridTemplateAreas:"\n        'avatar text text text text'\n        'controls controls controls controls controls'\n        'current current current current current'\n        'list list list list list'\n      ",gridTemplateColumns:"".concat(s,"px repeat(4, 1fr)"),gridTemplateRows:"".concat(s,"px ").concat(m,"px ").concat(d,"px ").concat(f)}),Object(ct.a)(n,o,{display:"grid",gridTemplateAreas:"\n        'avatar avatar text text text'\n        'avatar avatar controls controls controls'\n        'current current current current current'\n        'list list list list list'\n      ",gridTemplateColumns:"repeat(2, ".concat((s+m)/2,"px) repeat(3, 1fr)"),gridTemplateRows:"".concat(s,"px ").concat(m,"px ").concat(d,"px ").concat(f)}),Object(ct.a)(n,i,{display:"grid",gridTemplateAreas:"\n        'avatar avatar avatar text text'\n        'avatar avatar avatar controls controls'\n        'avatar avatar avatar current current'\n        'list list list list list'\n      ",gridTemplateColumns:"repeat(3, ".concat(p/3,"px) repeat(2, 1fr)"),gridTemplateRows:"".concat(s,"px ").concat(m,"px ").concat(d,"px ").concat(f)}),n)[t]}var ut=function(){var e=Object(E.a)();return{root:lt(e,function(e){var t=it(e),n=Object(h.a)(t,3),a=n[0],r=n[1],c=n[2];return[{mq:a,matches:Object(ot.a)(a)},{mq:r,matches:Object(ot.a)(r)},{mq:c,matches:Object(ot.a)(c)}].filter((function(e){return e.matches})).map((function(e){return e.mq})).slice(-1)[0]||a}(e))}},st=function(){var e=Object(f.g)(),t=ut(),n=Object(E.a)(),a=Object(c.useRef)(null),r=Object(s.useRecoilValue)(be.playlistAtom),i=Object(s.useRecoilValue)(ge.playerAtom),l=r.currentItemIndex,u=Object(c.useRef)(-999),d=i.playState,p=n.variables.playlist.item.height;if(Object(c.useEffect)((function(){var e;"playing"===d&&l>u.current&&l>0&&l%2===0&&(null===(e=a.current)||void 0===e||e.scrollBy({top:p,behavior:"smooth"}));u.current=l}),[l,d,p]),!r||!r.items.length)return e.push("workouts"),null;return o.a.createElement(m.a,{"data-testid":"player",style:t.root},o.a.createElement(Fe,null),o.a.createElement(rt,{onClose:function(){return e.goBack()}}),o.a.createElement(Le,{gridArea:"controls",playState:d}),o.a.createElement(ke,{gridArea:"current"}),o.a.createElement("div",{ref:a,style:{gridArea:"list",overflow:"auto"}},o.a.createElement(xe,null)))},mt=function(){var e=p()();return o.a.createElement(m.a,{textAlign:"center",fontSize:"2rem",color:e.palette.secondary.contrastText},"under construction")},dt=n(29),pt=n(148),ft=n.n(pt),bt=n(149),gt=n.n(bt),ht=Object(v.a)((function(e){return{root:{alignItems:"center",backgroundColor:"inherit",display:"flex",height:"100%"},button:{color:e.palette.secondary.light,fontSize:e.typography.h5.fontSize,fontWeight:e.typography.h5.fontWeight,marginLeft:"1px",textTransform:"none"},duration:{alignItems:"center",backgroundColor:"#fff",borderRadius:e.shape.borderRadius,display:"flex",flex:1,height:"100%",justifyContent:"center",minWidth:"60px"}}})),vt=function(e){var t=e.value,n=e.min,a=void 0===n?0:n,r=e.max,i=void 0===r?Number.MAX_VALUE:r,l=e.step,u=void 0===l?1:l,s=e.onChange,d=Object(E.a)(),p=ht(d),f=Object(c.useRef)(0);Object(c.useEffect)((function(){f.current=t}),[]);return o.a.createElement(m.a,{className:p.root},o.a.createElement(S.a,{className:p.button,onClick:function(){var e=Math.max(t-u,a);s&&s(e)}},o.a.createElement(ft.a,null)),o.a.createElement(U.a,{variant:"h4",className:p.duration},t),o.a.createElement(S.a,{className:p.button,onClick:function(){var e=Math.min(t+u,i);s&&s(e)}},o.a.createElement(x.a,null)),o.a.createElement(S.a,{className:p.button,onClick:function(){s&&s(f.current)}},o.a.createElement(gt.a,null)))},Et=Object(v.a)((function(e){return{root:{alignItems:"center",backgroundColor:e.palette.primary.main,display:"grid",gridTemplateColumns:"min(130px) minmax(150px, 300px)",height:e.variables.playlist.item.height,marginBottom:e.spacing(.3)},label:{backgroundColor:e.palette.primary.main,color:e.palette.secondary.contrastText,fontSize:e.typography.h5.fontSize,fontWeight:e.typography.h5.fontWeight,padding:e.spacing(1),textTransform:"uppercase",whiteSpace:"nowrap"}}})),Ot=function(e){var t=e.label,n=Object(C.a)(e,["label"]),a=Object(E.a)(),r=Et(a);return o.a.createElement(m.a,{className:r.root},o.a.createElement(m.a,{className:r.label},t),o.a.createElement(vt,n))},yt=Object(v.a)((function(e){return{root:{alignItems:"center",display:"grid",fontSize:e.typography.h4.fontSize,minHeight:e.variables.avatar.height,gridArea:"avatar"},textfield:{padding:e.spacing(1),textAlign:"center"}}})),jt=function(e){var t=e.text,n=e.onUpdate,a=Object(C.a)(e,["text","onUpdate"]),r=Object(E.a)(),c=yt(r);return o.a.createElement(B,Object.assign({className:c.root,onOk:function(e){n&&n(e)}},a,{inputEl:o.a.createElement(O.a,{inputProps:{minLength:2,maxLength:2,required:!0},defaultValue:t,className:c.textfield}),displayEl:o.a.createElement(Qe,{text:t})}))},xt=Object(v.a)((function(e){return{textfield:{padding:e.spacing(1)}}})),kt=function(e){var t=e.description,n=e.onUpdate,a=Object(C.a)(e,["description","onUpdate"]),r=Object(E.a)(),c=xt(r);return o.a.createElement(B,Object.assign({onOk:n},a,{inputEl:o.a.createElement(O.a,{defaultValue:t,inputProps:{required:!0},multiline:!0,rows:3,className:c.textfield}),displayEl:o.a.createElement(et,null,t)}))},Ct=Object(v.a)((function(e){return{textfield:{padding:e.spacing(1)}}})),wt=function(e){var t=e.title,n=e.onUpdate,a=Object(C.a)(e,["title","onUpdate"]),r=Object(E.a)(),c=Ct(r);return o.a.createElement(B,Object.assign({onOk:n},a,{inputEl:o.a.createElement(O.a,{defaultValue:t,inputProps:{required:!0},className:c.textfield}),displayEl:o.a.createElement(nt,null,t)}))},St=function(e){var t=e.onClose;return o.a.createElement(S.a,{color:"secondary",onClick:t,style:{position:"absolute",top:0,right:0}},o.a.createElement(R.a,null))},It=function(e){var t=e.workout,n=e.onClose,a=e.onUpdate,r=Object(C.a)(e,["workout","onClose","onUpdate"]),c=t.description,i=t.short,l=t.title,u=function(e){return function(t){if(a){var n=t.value,r=t.error,c={value:Object(ct.a)({},e,n),error:r};a(c)}}},s=Object(E.a)();return o.a.createElement(m.a,Object.assign({display:"grid",gridTemplateAreas:'"avatar text"',gridTemplateColumns:"".concat(s.variables.avatar.height,"px auto"),mb:.3},r),o.a.createElement(jt,{text:i,onUpdate:u("short")}),o.a.createElement(tt,{action:o.a.createElement(St,{onClose:function(){return n&&n()}}),title:o.a.createElement(wt,{gridArea:"title",title:l,onUpdate:u("title")}),description:o.a.createElement(kt,{gridArea:"desc",description:c,onUpdate:u("description")}),gridArea:"text"}))},Rt=function(e){var t=Object(s.useRecoilState)(dt.workoutAtom),n=Object(h.a)(t,2),a=n[0],r=n[1],o=a.items,i=a.currentItemIndex,l=Object(f.i)().id,u=o[i];return Object(c.useEffect)((function(){if(!u){var t=o.findIndex((function(e){return e.id===l}));t>-1?r((function(e){return dt.workoutReducer.select(e,t)})):e()}}),[]),u},At=function(){var e=Object(s.useSetRecoilState)(dt.workoutAtom),t=Object(f.g)(),n=Rt((function(){return t.goBack()}));if(!n)return null;var a=function(t){return e((function(e){return dt.workoutReducer.update(e,Object(b.a)({},n,{exercises:t}))}))},r=a,c=n.exercises,i=n.breakMs,l=n.workMs;return o.a.createElement(m.a,null,o.a.createElement(It,{workout:n,onClose:function(){return t.goBack()},onUpdate:function(t){var a=t.value;e((function(e){return dt.workoutReducer.update(e,Object(b.a)({},n,{},a))}))}}),o.a.createElement(Ot,{label:"Break [sec]",value:i/1e3,min:0,max:6e3,step:15,onChange:function(t){return e((function(e){return dt.workoutReducer.update(e,Object(b.a)({},n,{breakMs:1e3*t}))}))}}),o.a.createElement(Ot,{label:"Work [sec]",value:l/1e3,min:0,max:6e3,step:15,onChange:function(t){return e((function(e){return dt.workoutReducer.update(e,Object(b.a)({},n,{workMs:1e3*t}))}))}}),o.a.createElement(_,{exercises:c,onAdd:function(t){return e((function(e){return dt.workoutReducer.update(e,Object(b.a)({},n,{exercises:[].concat(Object(g.a)(n.exercises),[t])}))}))},onDelete:a,onEdit:function(t,a){var r=[].concat(Object(g.a)(n.exercises.slice(0,a)),[t],Object(g.a)(n.exercises.slice(a+1)));e((function(e){return dt.workoutReducer.update(e,Object(b.a)({},n,{exercises:r}))}))},onSort:r}))},Tt=n(55);function Nt(e,t,n){var a=n.id,r=n.name;return[{id:a,name:"next up: ".concat(r),durationMs:t,tags:{isBreak:!0}},{id:Object(z.a)(),name:r,durationMs:e,tags:{breakWork:"".concat(t/1e3,"/").concat(e/1e3)}}]}var Mt=function(e,t){var n=Object(h.a)(t,2),a=n[0],r=n[1];return[].concat(Object(g.a)(e),[a,r])};function Bt(e){var t=e.short,n=e.title,a=e.description,r=e.exercises,c=e.workMs,o=e.breakMs,i=Nt.bind(null,c,o);return{short:t,name:n,description:a,items:r.map(i).reduce(Mt,[])}}var zt=function(e){var t=e.children,n=e.onClick,a=Object(C.a)(e,["children","onClick"]);return o.a.createElement(m.a,Object.assign({"data-testid":"card",borderRadius:1,display:"grid",gridColumn:["span 6","span 4","span 3"],gridTemplateRows:"5fr 2fr",boxShadow:8},a,{onClick:n}),t)},Ut=n(80),Wt=Object(v.a)((function(e){return{iconContainer:{borderRadius:e.shape.borderRadius,borderStyle:"solid",borderWidth:2,color:e.palette.secondary.light,cursor:"pointer",padding:"25%"},icon:{height:"100%",width:"100%"}}})),Lt=function(e){var t=e.onClick,n=Object(E.a)(),a=Wt(n);return o.a.createElement(zt,{onClick:function(){var e=function(){var e=Object(Ut.a)();return{id:Object(z.a)(),short:e,title:"Workout ".concat(e),description:(new Date).toLocaleDateString(),breakMs:3e4,workMs:6e4,exercises:[{name:"New Exercise",id:"46c7-4d11-yca1-eg87"}]}}();t(e)}},o.a.createElement("div",{className:a.iconContainer},o.a.createElement(x.a,{className:a.icon})),o.a.createElement(tt,{title:o.a.createElement(nt,null,"Add new workout"),description:o.a.createElement(o.a.Fragment,null)}))};var Ft=function(e){var t=e.children,n=Object(C.a)(e,["children"]);return o.a.createElement(m.a,Object.assign({"data-testid":"card-action",position:"absolute",right:0,top:0},n),t)},Vt=n(153),Dt=n(266),Pt=n(260),qt=n(151),_t=n.n(qt),Xt=n(150),Jt=n.n(Xt),Yt=n(267),Ht=function(e){var t=e.onClick,n=o.a.useState(!1),a=Object(h.a)(n,2),r=a[0],c=a[1];return o.a.createElement(m.a,{alignItems:"center",component:"li",display:"grid",gridTemplateColumns:"auto min-content"},o.a.createElement(Dt.a,{component:"span",disabled:!r,onClick:function(){return t&&t()}},o.a.createElement(Pt.a,null,o.a.createElement(L.a,null)),"Delete"),o.a.createElement(Yt.a,{onChange:function(){return c(!r)}}))},Gt=function(e){var t=e.onClick,n=o.a.useState(null),a=Object(h.a)(n,2),r=a[0],c=a[1],i=Object(E.a)(),l=function(){return c(null)},u=function(e){l(),t&&t(e)};return o.a.createElement(m.a,{position:"relative",right:-1*i.spacing(1)},o.a.createElement(S.a,{color:"secondary",onClick:function(e){return c(e.currentTarget)}},o.a.createElement(Jt.a,null)),o.a.createElement(Vt.a,{anchorEl:r,open:Boolean(r),onClose:l},o.a.createElement(Dt.a,{onClick:u.bind(globalThis,"edit")},o.a.createElement(Pt.a,null,o.a.createElement(_t.a,null)),"Edit"),o.a.createElement(Ht,{onClick:u.bind(globalThis,"delete")})))},$t=function(e){var t=e.workout,n=e.onCardClick,a=e.onContextMenuClick,r=t.description,c=t.short,i=t.title;return o.a.createElement(zt,{onClick:n},o.a.createElement(Qe,{text:c}),o.a.createElement(tt,{description:o.a.createElement(et,null,r),title:o.a.createElement(nt,null,i),action:o.a.createElement(Ft,null,o.a.createElement(Gt,{onClick:a}))}))};function Zt(){var e=p()(),t=Object(f.g)(),n=he(),a=Object(s.useRecoilState)(Tt.a),r=Object(h.a)(a,2),c=r[0],i=r[1],l=c.items,u=function(e,n,a){var r=e.id;switch(i((function(e){return dt.workoutReducer.select(e,n)})),a){case"delete":i(dt.workoutReducer.delete);break;case"edit":t.push("workouts/".concat(r));break;default:throw Error("unknown menu option ".concat(a))}};return o.a.createElement(m.a,{display:"grid",gridTemplateColumns:"repeat(12, 1fr)",gridGap:e.spacing(1),m:1},o.a.createElement(Lt,{onClick:function(e){var n=e.id;i((function(t){return dt.workoutReducer.add(t,e)})),t.push("workouts/".concat(n))}}),l.map((function(e,a){return o.a.createElement($t,{key:e.id,workout:e,onCardClick:function(){return function(e,a){i((function(e){return dt.workoutReducer.select(e,a)}));var r=Bt(e);n.set(r),t.push("player")}(e,a)},onContextMenuClick:u.bind(globalThis,e,a)})})))}var Kt=function(){var e=p()();return o.a.createElement(m.a,{height:"100vh",bgcolor:e.variables.root.backgroundColor,style:{touchAction:"manipulation"}},o.a.createElement(se,null),o.a.createElement(Y,null,o.a.createElement(f.d,null,o.a.createElement(f.b,{path:"/workouts/:id",component:At}),o.a.createElement(f.b,{exact:!0,path:"/workouts",component:Zt}),o.a.createElement(f.b,{exact:!0,path:"/player",component:st}),o.a.createElement(f.b,{path:"/exercises",component:_}),o.a.createElement(f.b,{path:"/recents",component:mt}),o.a.createElement(f.b,{path:"/favorites",component:mt}),o.a.createElement(f.b,{path:"*"},o.a.createElement(f.a,{to:"/workouts"})))),o.a.createElement(ae,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Qt=n(152),en=n(263),tn={main:"#78909c",light:"#a7c0cd",dark:"#4b636e",contrastText:"#ffffff"},nn={main:"#37474f",light:"#62727b",dark:"#102027",contrastText:"#ffffff"},an={primary:nn,secondary:tn},rn=an.primary,cn=an.secondary,on={avatar:{height:136},countdown:{height:128},navbar:{height:48},player:{height:216},playlist:{currentItem:{height:120},item:{height:60}},root:{backgroundColor:"#102027e6"}},ln={MuiCssBaseline:{"@global":{":focus":{outline:"unset"}}},MuiBottomNavigation:{root:{backgroundColor:rn.main,height:48}},MuiBottomNavigationAction:{wrapper:{color:cn.light}},MuiListItemIcon:{root:{color:cn.light,minWidth:"32px"}},MuiMenu:{paper:{backgroundColor:rn.dark,color:cn.light}},MuiFab:{root:{"&$disabled":{backgroundColor:rn.main,color:rn.dark}}},MuiInputBase:{root:{color:"inherit",fontSize:"inherit"}}},un=Object(Qt.a)({palette:an,props:{MuiTypography:{variantMapping:{h1:"h3",h2:"h3",h3:"h3"}},MuiToolbar:{variant:"dense"}},overrides:ln,typography:{caption:{lineHeight:1.2}},variables:on}),sn=un=Object(en.a)(un),mn=n(93);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(r.a,{theme:sn},o.a.createElement(a.a,null),o.a.createElement(u.a,{basename:"".concat("/fitlery-web-dist")},o.a.createElement(s.RecoilRoot,null,o.a.createElement(mn.b,null),o.a.createElement(Kt,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,n){"use strict";var a=n(132);n.o(a,"workoutAtom")&&n.d(t,"workoutAtom",(function(){return a.workoutAtom})),n.o(a,"workoutReducer")&&n.d(t,"workoutReducer",(function(){return a.workoutReducer}));var r=n(133);n.d(t,"workoutReducer",(function(){return r.a}));var c=n(55);n.d(t,"workoutAtom",(function(){return c.a}))},41:function(e,t,n){"use strict";var a=n(129);n.o(a,"playerAtom")&&n.d(t,"playerAtom",(function(){return a.playerAtom})),n.o(a,"playerReducer")&&n.d(t,"playerReducer",(function(){return a.playerReducer}));var r=n(130);n.d(t,"playerReducer",(function(){return r.a}));var c=n(131);n.d(t,"playerAtom",(function(){return c.a}))},43:function(e,t,n){"use strict";var a=function(){return Math.random().toString(16).slice(-4)};t.a=function(){return"".concat(a(),"-").concat(a(),"-").concat(a(),"-").concat(a())}},55:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(8),r=n(94),c=n(93),o={items:[],currentItemIndex:-1},i=Object(a.atom)({key:"workoutState",default:Object(r.a)(c.a)||o})},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var a=n(8),r={short:"",name:"",description:"",items:[],currentItemIndex:-1},c=Object(a.atom)({key:"playlistState",default:r})},80:function(e,t,n){"use strict";var a=0;t.a=function(){return(a=a>98?0:a+1)<10?"0".concat(a):"".concat(a)}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n(8),c=n(94),o=n(55),i="workout";t.b=function(){var e=Object(r.useRecoilValue)(o.a);return Object(a.useEffect)((function(){Object(c.b)(i,e)}),[e]),null}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));n(80);var a=function(e){try{var t=localStorage.getItem(e);if(t)return JSON.parse(t)}catch(n){console.warn("Unable to hypdrate state from storage",n)}},r=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(n){console.warn("Unable to persist state to storage",n)}};n(43)}},[[163,1,2]]]);
//# sourceMappingURL=main.acfcbdb2.chunk.js.map