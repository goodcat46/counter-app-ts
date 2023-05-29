"use strict";(self.webpackChunkcounter_app_ts=self.webpackChunkcounter_app_ts||[]).push([[616],{12:function(n,t,e){e.r(t);var i,r,o,a,l,c,s,u=e(168),d=e(1413),p=e(9439),f=e(4109),h=e(3933),m=e(1087),x=e(2791),b=e(2360),g=e(1680),v=e(7348),Z=e(6733),w=e(8989),k=e(454),y=e(184),j=[{title:"\u041c\u043e\u0457",param:"own"},{title:"\u041f\u0440\u0430\u0446\u044e\u044e",param:"invited"},{title:"\u0417\u0430\u043f\u0440\u043e\u0448\u0435\u043d\u043d\u044f",param:"invites"},{title:"\u0423\u0441\u0456",param:"all"}],C=function(n){n.path;var t=(0,v.DF)().user,e=(0,w.Z)().permissions,i=(0,m.lr)({companyType:j[0].param}),r=(0,p.Z)(i,2),o=r[0],a=r[1];(0,x.useEffect)((function(){a({companyType:j[0].param})}),[]);var l=(0,x.useMemo)((function(){return{tableData:e,tableTitles:k.Tz,tableSearchParams:k.rB,isFilter:!1,isSearch:!0,checkBoxes:!1}}),[e]),c=(0,x.useCallback)((function(n){a({companyType:n})}),[a]),s=(0,x.useCallback)((function(n){return o.get("companyType")===n?"active":""}),[o]),u=(0,x.useMemo)((function(){return j.map((function(n){return(0,y.jsx)(F,{variant:"def",onClick:function(){return c(n.param)},className:s(n.param),children:n.title},n.param)}))}),[s,c]);return(0,y.jsxs)(P,{children:[(0,y.jsxs)(T,{children:[(0,y.jsx)(S,{children:(0,y.jsx)(Z.Z,(0,d.Z)({},t))}),(0,y.jsx)(_,{children:(0,y.jsx)(z,{children:u})})]}),(0,y.jsx)(B,{children:(0,y.jsx)(h.ZP,(0,d.Z)({},l))})]})},P=b.ZP.div(i||(i=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: min-content 1fr;\n\n  ","\n"])),g.VU),T=b.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  position: relative;\n\n  overflow: hidden;\n\n  //background-color: ",";\n\n  ","\n"])),(function(n){return n.theme.tableBackgroundColor}),g.SI),B=b.ZP.div(o||(o=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  overflow: hidden;\n\n  ",";\n\n  background-color: ",";\n"])),g.SI,(function(n){return n.theme.tableBackgroundColor})),S=b.ZP.div(a||(a=(0,u.Z)(["\n  position: sticky;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  padding: 16px 12px;\n  width: 100%;\n  max-width: 250px;\n"]))),_=b.ZP.div(l||(l=(0,u.Z)(["\n  max-width: 100%;\n  overflow: auto;\n\n  &::-webkit-scrollbar {\n    width: 0;\n    height: 0;\n  }\n"]))),z=b.ZP.div(c||(c=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, 150px);\n  grid-auto-rows: 32px;\n\n  max-width: 600px;\n"]))),F=(0,b.ZP)(f.Z)(s||(s=(0,u.Z)(["\n  position: relative;\n\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n  text-align: center;\n\n  border-radius: 0;\n  border-style: none;\n  border-width: 0;\n\n  &::before {\n    display: block;\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    background-color: ",";\n  }\n\n  &::after {\n    display: block;\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    //height: 1px;\n    //width: 100%;\n    height: 3px;\n    width: 0;\n    transition: all ",";\n    transform: translate(-50%);\n    background-color: ",";\n  }\n\n  &.active {\n    &::after {\n      width: 80%;\n    }\n  }\n\n  &:hover,\n  &:focus {\n    outline-style: none;\n\n    &::after {\n      width: 100%;\n    }\n  }\n"])),(function(n){return n.theme.trBorderClr}),(function(n){return n.theme.globals.timingFnMui}),(function(n){return n.theme.accentColor.base}));t.default=(0,x.memo)(C)},6616:function(n,t,e){e.r(t);var i=e(6687),r=e(12),o=e(2791),a=e(184),l=function(n){var t=n.path,e=void 0===t?"":t;return(0,a.jsx)(i.default,{path:e,children:(0,a.jsx)(r.default,{})})};t.default=(0,o.memo)(l)},1680:function(n,t,e){e.d(t,{SI:function(){return s},VU:function(){return c}});var i,r,o,a=e(168),l=e(2360),c=(0,l.iv)(i||(i=(0,a.Z)(["\n  grid-column: 1/13;\n  grid-row: 1/13;\n"]))),s=(0,l.iv)(r||(r=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n"])));(0,l.iv)(o||(o=(0,a.Z)(["\n  outline: 1px solid tomato;\n"])))}}]);
//# sourceMappingURL=616.70fdfa16.chunk.js.map