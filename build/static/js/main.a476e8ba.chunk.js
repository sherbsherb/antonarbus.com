(this["webpackJsonpantonarbus.com"]=this["webpackJsonpantonarbus.com"]||[]).push([[0],{27:function(e,n,t){},28:function(e,n,t){},29:function(e,n,t){},43:function(e,n,t){"use strict";t.r(n);var a=t(5),c=t(1),o=t.n(c),i=t(15),r=t.n(i),s=(t(27),t(21)),u=t(7),l=(t(28),t(22)),m=t(8),d=(t(29),t(4)),v=t(16),b=t(2),g=o.a.createElement(v.a,{});function j(e){var n=e.navContent,t=e.openedMenuState,a=e.setOpenedMenuState;function o(e){var n=e.menu;if(n||(a(null),console.log("no sub-menu")),n){var t=e.menu;a(Object(m.a)(Object(m.a)({},t),{},{underNavItemId:e.id,prevMenu:[]})),console.log("showed menu")}}function i(e){if(e.menu){var n=e.menu;a(Object(m.a)(Object(m.a)({},n),{},{underNavItemId:t.underNavItemId,prevMenu:[].concat(Object(l.a)(t.prevMenu),[t])})),console.log("one level down in menu")}else console.log("no sub-menu")}function r(e){console.log("menu closed"),null===e||void 0===e||e.stopPropagation(),t&&a(null)}function s(e){null===e||void 0===e||e.stopPropagation(),a(t.prevMenu.pop()),console.log("clicked Back")}function u(e){var n,a=e.key,c=e.keyCode;if(console.log(c),t){var o=(null===t||void 0===t||null===(n=t.prevMenu)||void 0===n?void 0:n.length)>0;o&&"Backspace"===a&&s(),!o&&"Backspace"===a&&r(),"Escape"===a&&r()}}return Object(c.useEffect)((function(){return window.addEventListener("keydown",u),function(){return window.removeEventListener("keydown",u)}}),[t]),Object(c.useEffect)((function(){return window.addEventListener("click",r),function(){return window.removeEventListener("click",r)}}),[t]),Object(b.jsx)("nav",{className:"navbar",children:Object(b.jsx)("ul",{className:"navbar-nav",children:n.map((function(e){return e.visible&&Object(b.jsx)(x,{navItem:e,openedMenuState:t,prevMenu:s,closeMenu:r,showMenu:o,changeMenu:i})}))})})}function x(e){var n=e.navItem,t=e.openedMenuState,a=e.prevMenu,c=e.closeMenu,o=e.showMenu,i=e.changeMenu;return Object(b.jsxs)("li",{className:"nav-item",onClick:function(e){e.stopPropagation(),o(n)},children:[Object(b.jsxs)("a",{href:"#",className:"icon-button",children:[n.icon,n.text]}),t&&t.underNavItemId===n.id&&Object(b.jsx)(f,{openedMenuState:t,prevMenu:a,closeMenu:c,changeMenu:i})]})}function f(e){var n,t=e.openedMenuState,a=e.prevMenu,c=e.closeMenu,o=e.changeMenu,i=(null===t||void 0===t||null===(n=t.prevMenu)||void 0===n?void 0:n.length)>0;return Object(b.jsxs)("div",{className:"dropdown",children:[i&&Object(b.jsx)(h,{prevMenu:a}),!i&&Object(b.jsx)(O,{closeMenu:c}),t.menuItems.map((function(e){return Object(b.jsx)(p,{menuItem:e,changeMenu:o})}))]})}function p(e){var n=e.menuItem,t=e.changeMenu;return Object(b.jsxs)("a",{href:"#1",className:"menu-item",onClick:function(e){null===e||void 0===e||e.stopPropagation(),t(n)},children:[Object(b.jsx)("span",{className:"icon-button",children:n.iconLeft}),n.text,n.menu&&Object(b.jsx)("span",{className:"icon-button icon-right",children:Object(b.jsx)(d.c,{})})]})}function h(e){var n=e.prevMenu;return Object(b.jsxs)("a",{href:"#1",className:"menu-item",onClick:n,children:[Object(b.jsx)("span",{className:"icon-button",children:Object(b.jsx)(d.b,{})}),"Back"]})}function O(e){var n=e.closeMenu;return Object(b.jsxs)("a",{href:"#1",className:"menu-item",onClick:n,children:[Object(b.jsx)("span",{className:"icon-button",children:g}),"Close"]})}var M,I,k=t(3),w=t.n(k),N=t(17),L=o.a.createElement(d.a,{}),y=o.a.createElement(d.d,{}),S=o.a.createElement(d.e,{}),E=o.a.createElement(N.a,{}),C=[{navItem:!0,visible:!0,icon:L,text:"",menu:!1,id:w.a.generate()},{navItem:!0,visible:!0,icon:y,text:"",menu:!1,id:w.a.generate()},{navItem:!0,visible:!0,icon:S,text:"",menu:{visible:!1,menuItems:[{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude07",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude07",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude07",menu:!1,id:w.a.generate()}]},id:w.a.generate()},{navItem:!0,visible:!0,icon:E,text:"",menu:{visible:!0,menuItems:[{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude07",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude07",menu:{visible:!1,menuItems:[{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude0e",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude0e",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude0e",menu:{visible:!1,menuItems:[{text:"text: "+w.a.generate(),iconLeft:"\ud83e\udd78",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83e\udd78",menu:!1,id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83e\udd78",menu:!1,id:w.a.generate()}]},id:w.a.generate()}]},id:w.a.generate()},{text:"text: "+w.a.generate(),iconLeft:"\ud83d\ude07",menu:!1,id:w.a.generate()}]},id:w.a.generate()}],B=u.b.main(M||(M=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 50vh;\n"]))),P=u.b.div(I||(I=Object(a.a)(["\n  text-align: center;\n  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);\n  min-height: 100vh;\n  font-size: calc(10px + 2vmin);\n  color: whitesmoke;\n  ","\n"])),"");var z,F=function(){var e=Object(c.useState)(null),n=Object(s.a)(e,2),t=n[0],a=n[1];return Object(b.jsxs)(P,{children:[Object(b.jsx)(j,{navContent:C,openedMenuState:t,setOpenedMenuState:a}),Object(b.jsx)(B,{children:Object(b.jsx)("p",{children:"First React website for Anton"})})]})},J=Object(u.a)(z||(z=Object(a.a)(["\n  * {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n  }\n\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"])));r.a.render(Object(b.jsxs)(o.a.StrictMode,{children:[Object(b.jsx)(J,{}),Object(b.jsx)(F,{})]}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.a476e8ba.chunk.js.map