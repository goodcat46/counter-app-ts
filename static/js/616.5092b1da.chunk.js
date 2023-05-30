"use strict";(self.webpackChunkcounter_app_ts=self.webpackChunkcounter_app_ts||[]).push([[616],{2350:function(n,e,i){i.r(e),i.d(e,{default:function(){return D}});var o,t,l,r,a,c,s,d=i(168),u=i(1413),p=i(9439),m=i(4109),f=i(3933),h=i(1087),v=i(2791),w=i(2360),g=i(1680),y=i(7348),b=i(6733),x=i(8989),Z=i(454),k=i(4354),P=i(5114),C=i(7689),R=function(n,e){var i=(0,k.f9)(),o=(0,C.s0)();return(0,v.useCallback)((function(n){var t,l,r,a,c;return[{name:"selectPermission",title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438",icon:"openInNew",disabled:!(null!==(t=n.selectedRow)&&void 0!==t&&t._id),iconSize:"100%",type:"onlyIcon",onClick:function(){var i,t,l=n.selectedRow;console.log("selPermission",l),console.log("companyType",{companyType:e}),(null===(i=n.selectedRow)||void 0===i?void 0:i._id)&&o("/app/".concat(null===(t=n.selectedRow)||void 0===t?void 0:t._id))}},{name:"editPermission",title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",icon:"edit",disabled:null===(l=n.selectedRow)||void 0===l||!l._id||!e||!["own"].includes(e),iconSize:"100%",type:"onlyIcon",onClick:function(){var e=n.selectedRow;console.log("selPermission",e),i.handleOpenModal({ModalChildren:P.Z,modalChildrenProps:{fillHeight:!0,title:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u044e"}})}},{name:"deletePermission",title:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438",icon:"delete",iconSize:"100%",disabled:null===(r=n.selectedRow)||void 0===r||!r._id||!e||!["own"].includes(e),type:"onlyIcon",onClick:function(){var e=n.selectedRow;console.log("selPermission",e)}},{name:"leavePermission",title:"\u041f\u043e\u043a\u0438\u043d\u0443\u0442\u0438",icon:"logOut",iconSize:"100%",disabled:!n.selectedRow||!e||!["invited"].includes(e),type:"onlyIcon",onClick:function(){var e=n.selectedRow;console.log("selPermission",e)}},{separator:!0},{name:"rejectPermission",title:"\u0412\u0456\u0434\u0445\u0438\u043b\u0438\u0442\u0438",icon:"clear",iconSize:"100%",type:"onlyIconFilled",disabled:null===(a=n.selectedRow)||void 0===a||!a._id||!e||!["invites"].includes(e),onClick:function(){var e=n.selectedRow;console.log("selPermission",e)}},{name:"acceptPermission",title:"\u041f\u0440\u0438\u0439\u043d\u044f\u0442\u0438",icon:"done",iconSize:"100%",type:"onlyIconFilled",disabled:null===(c=n.selectedRow)||void 0===c||!c._id||!e||!["invites"].includes(e),onClick:function(){var e=n.selectedRow;console.log("selPermission",e)}},{name:"createPermission",title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438",icon:"plus",iconSize:"100%",type:"onlyIconFilled",onClick:function(){i.handleOpenModal({ModalChildren:P.Z,modalChildrenProps:{fillHeight:!0,title:"\u0421\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0443 \u043a\u043e\u043c\u043f\u0430\u043d\u0456\u044e"}})}}]}),[e,i,o])},j=i(184),S=[{title:"\u041c\u043e\u0457",param:"own"},{title:"\u041f\u0440\u0430\u0446\u044e\u044e",param:"invited"},{title:"\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044f",param:"invites"},{title:"\u0423\u0441\u0456",param:"all"}],I=function(n){n.path;var e=(0,y.DF)().user,i=(0,v.useState)(),o=(0,p.Z)(i,2),t=o[0],l=o[1],r=(0,h.lr)({companyType:S[0].param}),a=(0,p.Z)(r,2),c=a[0],s=a[1],d=(0,x.Z)(),m=R(d,null===t||void 0===t?void 0:t.param);(0,v.useEffect)((function(){s({companyType:S[0].param}),l(S[0])}),[]);var w=(0,v.useMemo)((function(){return{tableData:d.state.permissions,tableTitles:Z.Tz,tableSearchParams:Z.rB,isFilter:!1,isSearch:!0,checkBoxes:!1,actionsCreator:m}}),[m,d.state.permissions]),g=(0,v.useCallback)((function(n){s({companyType:n.param}),l(n)}),[s]),k=(0,v.useCallback)((function(n){return c.get("companyType")===n?"active":""}),[c]),P=(0,v.useMemo)((function(){return S.map((function(n){return(0,j.jsx)(O,{variant:"def",onClick:function(){return g(n)},className:k(n.param),children:n.title},n.param)}))}),[k,g]);return(0,j.jsxs)(_,{children:[(0,j.jsxs)(z,{children:[(0,j.jsx)(M,{children:(0,j.jsx)(b.Z,(0,u.Z)({},e))}),(0,j.jsx)(F,{children:(0,j.jsx)(B,{children:P})})]}),(0,j.jsx)(T,{children:(0,j.jsx)(f.ZP,(0,u.Z)({},w))})]})},_=w.ZP.div(o||(o=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: min-content 1fr;\n\n  ","\n"])),g.VU),z=w.ZP.div(t||(t=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  position: relative;\n\n  overflow: hidden;\n\n  //background-color: ",";\n\n  ","\n"])),(function(n){return n.theme.tableBackgroundColor}),g.SI),T=w.ZP.div(l||(l=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n\n  ",";\n\n  background-color: ",";\n"])),g.SI,(function(n){return n.theme.tableBackgroundColor})),M=w.ZP.div(r||(r=(0,d.Z)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  padding: 16px 12px;\n  width: 100%;\n  max-width: 250px;\n"]))),F=w.ZP.div(a||(a=(0,d.Z)(["\n  max-width: 100%;\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n"]))),B=w.ZP.div(c||(c=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 150px);\n  grid-auto-rows: 32px;\n\n  max-width: 600px;\n"]))),O=(0,w.ZP)(m.Z)(s||(s=(0,d.Z)(["\n  position: relative;\n\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-align: center;\n\n  border-radius: 0;\n  border-style: none;\n  border-width: 0;\n\n  &::before {\n    display: block;\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n  }\n\n  &::after {\n    display: block;\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    //height: 1px;\n    //width: 100%;\n    height: 3px;\n    width: 0;\n    transition: all ",";\n    transform: translate(-50%);\n    background-color: ",";\n  }\n\n  &.active {\n    &::after {\n      width: 80%;\n    }\n  }\n\n  &:hover,\n  &:focus {\n    outline-style: none;\n\n    &::after {\n      width: 100%;\n    }\n  }\n"])),(function(n){return n.theme.trBorderClr}),(function(n){return n.theme.globals.timingFnMui}),(function(n){return n.theme.accentColor.base})),D=(0,v.memo)(I)},6616:function(n,e,i){i.r(e);var o=i(3431),t=i(2350),l=i(2791),r=i(184),a=function(n){var e=n.path,i=void 0===e?"":e;return(0,r.jsx)(o.default,{path:i,children:(0,r.jsx)(t.default,{})})};e.default=(0,l.memo)(a)},1680:function(n,e,i){i.d(e,{SI:function(){return s},VU:function(){return c}});var o,t,l,r=i(168),a=i(2360),c=(0,a.iv)(o||(o=(0,r.Z)(["\n  grid-column: 1/13;\n  grid-row: 1/13;\n"]))),s=(0,a.iv)(t||(t=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n"])));(0,a.iv)(l||(l=(0,r.Z)(["\n  outline: 1px solid tomato;\n"])))}}]);
//# sourceMappingURL=616.5092b1da.chunk.js.map